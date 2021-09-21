import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from './cnab/files.module';

@Module({
  imports: [FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}