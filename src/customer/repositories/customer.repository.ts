import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/car/repositories';
import { Customer } from '../domain/entities';

@Injectable()
export class CustomerRepository {
  constructor(private prisma: PrismaService) {}

  async create(customer: Customer): Promise<Customer> {
    const createdCustomer = await this.prisma.customer.create({
      data: customer,
    });

    return new Customer(createdCustomer);
  }
}
