import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse
} from '@nestjs/websockets'
import { Observable, from } from 'rxjs'
import { map } from 'rxjs/operators'
import { Server, Socket } from 'socket.io'

// @WebSocketGateway(8080, {
//   cors: {
//     origin: '*'
//   }
// })
@WebSocketGateway({ cors: { origin: '*' } })
export class EventsGateway {
  @WebSocketServer()
  server: Server

  @SubscribeMessage('events') // websocket访问事件
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    console.log('我执行了两次')
    console.log('接收消息events的数据', data)
    return from([1, 2, 3]).pipe(map((item) => ({ event: 'events', data: item })))
  }
  @SubscribeMessage('newMessage')
  handleMessage(@MessageBody() body: any, @ConnectedSocket() client: Socket) {
    client.emit('onMessage')
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    console.log('接收identity的数据', data)
    // await new Promise((reslove,reject)=>{
    //   setTimeout(reslove,2000)
    // })
    return 1
  }
  PublicMessage(message: string): void {
    setInterval(() => {
      this.server.emit('exception', `我是服务端发来的消息${message}`)
    }, 1000)
  }
}
