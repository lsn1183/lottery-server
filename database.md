# 查询数据库
* 当我们获得了实体类的仓库存储器后，就可以通过它来调用对应的API来操作数据库了，接下来就记录几种常用的操作方式。
# find 查找返回一个数组
find方法文档介绍的非常详细，可以去官网看一下，find方法直接接受一个conditionns参数，这个参数里面包含若干查询条件，比如常用的如下。

# findOne 查找数据库中的一条记录，默认传数字，根据id查询，可传options查询参数对象。
通过在findOne的声明文件中，我们可以找到这样一个方法：
# findOne(id?: string | number | Date | ObjectID, options?: FindOneOptions<Entity>): Promise<Entity | undefined>;

可以发现有两个可选参数，第一个是id，第二个是一个FindOneOptions的泛型接口，先不管这个。
通过以上定义我们就可以知道：
这个方法是应该是通过id来查询对应表的一条数据的，其返回是一个Promise对象或者是一个undefined。

# findByIds([id1, id2])  根据[id1, id2]ID数组查找多个实体

# findOneOrFail() 查找匹配某些ID或查找选项的第一个实体。如果没有匹配，则Rejects一个promise。

# where
表示查询条件，例如：
article.find({ where: { title: 'Hello Nest' } })

如上，我们就可以找出title为Hello Nest的数据，如果没有则返回undefined。
另外，where还可以搭配内置运算符使用，例如：
article.find({ where: { title: Like('%Hello%') } })

上面将查出所有title包含Hello的数据。
# select
表示需要查询的那些字段，没有的字段将会是默认值，例如：
article.find({ select: ['title', 'desc'] });
这样的查询结果，返回的实体类中只有title和desc属性中有值。

# relations
# 这个表示关联查询，当我们的表有关联时（一对多，多对一，多对多，该知识点可以看你官网），就可以通过使用该属性非常方便的获取关联对象，例如：
ts复制代码article.find({ relations: ['category'] });

当查询到对应的文章时，会把该文章对应的分类一并查出，并赋值到文章实体类对应的属性中去（这里就是category: Category）。
skit和take 这两个主要用于分页，take表示取多少条，而skip表示跳过多少条，例如这里我要完成一个每页取10条的分页查询就可以这样实现：
ts复制代码articleRepository.find({
    skip: (page - 1) * size,
    take: size
})

# findAndCount 查找指定条件的实体，并计算与给定条件匹配的所有实体数量，但忽略分页设置（from和take选项），返回[data, count]。
# 这个方法一般也是作为分页时用，它除了具有find方法的功能外，还能查出对应条件的总记录数量（不受take和skip分页的影响），并且返回一个数组：第一个参数为find查询的记录数，第二个为总记录数量，例如：
# const [articles, total] = articleRepository.findAndCount({ firstName: "Timber" });
// articles: Article[]
// total: number

# save 添加/修改数据库
# 添加和修改数据库的记录，这里我推荐一个API，就是：save。
# 这个API既可以添加数据，也可以修改数据，其使用区别就是：
# 当传入实体类有对应的id时，则为保存数据；没有id时则为添加数据，例如：
const article = new Article();
article.title = '新增文章';
articleRepository.save(article); // 添加了一条数据，假设生成了id=1的记录
article.id = 1;
article.title = '修改标题';
articleRepository.save(article); // id=1的记录标题被改为了“修改标题”

并且，save方法是很强大的，当有对应关系的对象存在时，也会给关联的实体对象对应的表添加数据。例如：
article和tag是多对多关系，因此除了article表还有一张tag表和一张记录tag和article的关联表
const article = new Article();
article.title = '新增文章';
const tag = new Tag();
tag.title = '标签';
article.tags = [tag];
articleRepository.save(article); // 添加了一条数据，并且tag表和关联表也添加了对应数据

# delete 删除数据
# 删除数据非常简单，通过delete方法即可实现，使用方式有以下三种：

直接传入一个number：表示删除对应id的数据；
传入一个number[]：表示删除对应数组内的所有id的数据；
传入一个对象：按条件删除，例如：

ts复制代码articleRepository.delete({
    title: '标题'
});

