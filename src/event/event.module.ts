import { Module } from '@nestjs/common'
import { EventsGateway } from './event.gateway'

@Module({
  // imports: [TypeOrmModule.forFeature([UserEntity]), jwtModule],
  // controllers: [AuthController],
  providers: [EventsGateway],
  exports: [EventsGateway]
})
export class EventsModule {}
