import {
  Controller,
  NotFoundException,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from '../services/upload.service';

@Controller('cars/:carId/upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file, @Param('carId') id: string) {
    const car = await this.uploadService.uploadFile(file, Number(id));

    if (!car) {
      throw new NotFoundException('Not found');
    }

    return car;
  }
}
