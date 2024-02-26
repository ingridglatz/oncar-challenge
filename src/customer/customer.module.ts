import { Module } from '@nestjs/common';
import { ScoreController } from './controller';
import { ScoreService } from './services';

@Module({
  imports: [],
  controllers: [ScoreController],
  providers: [ScoreService],
})
export class CustomerModule {}
