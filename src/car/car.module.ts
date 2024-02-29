import { Module } from '@nestjs/common';
import { CarController } from './controller/car.controller';
import { CarService } from './services/car.service';
import { CarRepository } from './repositories';
import { MulterModule } from '@nestjs/platform-express';
import { UploadController } from './controller/upload.controller';
import { UploadService } from './services/upload.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './public',
    }),
    ServeStaticModule.forRoot({
      rootPath: './public',
    }),
    SharedModule,
  ],
  controllers: [CarController, UploadController],
  providers: [CarService, CarRepository, UploadService],
})
export class CarModule {}
