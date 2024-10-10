import { OrderStatusEnum } from 'src/enums/orderStatus.enums';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  orderNumber: string;

  @Column('text', { nullable: true })
  customerName: string;

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount: number;

  @Column('int')
  itemCount: number;

  @Column('boolean', { default: false })
  isPaid: boolean;

  @Column('date', { nullable: true })
  orderDate: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @Column({
    type: 'enum',
    enum: OrderStatusEnum,
    default: OrderStatusEnum.PENDING,
  })
  status: OrderStatusEnum;
}
