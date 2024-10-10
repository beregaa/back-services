import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}
  create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.create(createOrderDto);
  }

  findAll() {
    return this.orderRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id , updateOrderDto);
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
