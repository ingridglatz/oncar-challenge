import { Module } from '@nestjs/common';
import { ScoreController } from './controller';
import { ScoreService } from './services';
import { SharedModule } from 'src/shared/shared.module';
import { CustomerRepository } from './repositories';

@Module({
  imports: [SharedModule],
  controllers: [ScoreController],
  providers: [ScoreService, CustomerRepository],
})
export class CustomerModule {}
