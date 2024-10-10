import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderRepository } from './order.repository';

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderRepository],
  imports: [TypeOrmModule.forFeature([Order])],
})
export class OrderModule {}
