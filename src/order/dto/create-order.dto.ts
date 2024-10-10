import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString, IsEnum, IsDate } from 'class-validator';
import { OrderStatusEnum } from 'src/enums/orderStatus.enums';

export class CreateOrderDto {
  @IsString()
  orderNumber: string;

  @IsString()
  customerName: string;

  @IsNumber()
  totalAmount: number;

  @IsNumber()
  itemCount: number;

  @IsBoolean()
  isPaid: boolean;

  @IsDate()
  @Type(() => Date)
  orderDate: Date;

  @IsEnum(OrderStatusEnum)
  status: OrderStatusEnum;
}
