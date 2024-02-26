import { Module } from '@nestjs/common';
import { CarController } from './controller/car.controller';
import { CarService } from './services/car.service';
import { CarRepository, PrismaService } from './repositories';
import { MulterModule } from '@nestjs/platform-express';
import { UploadController } from './controller/upload.controller';
import { UploadService } from './services/upload.service';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    MulterModule.register({
      dest: './public',
    }),
    ServeStaticModule.forRoot({
      rootPath: './public',
    }),
  ],
  controllers: [CarController, UploadController],
  providers: [CarService, CarRepository, PrismaService, UploadService],
})
export class CarModule {}
