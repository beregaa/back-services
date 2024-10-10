import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const newOrder = new Order();

    newOrder.totalAmount = createOrderDto.totalAmount;
    newOrder.customerName = createOrderDto.customerName;
    newOrder.isPaid = createOrderDto.isPaid;
    newOrder.itemCount = createOrderDto.itemCount;
    newOrder.orderNumber = createOrderDto.orderNumber;
    newOrder.status = createOrderDto.status;

    await this.orderRepository.save(newOrder);
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.find({ where: { id: id } });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id, updateOrderDto);
  }

  remove(id: number) {
    return this.orderRepository.delete(id);
  }
}
