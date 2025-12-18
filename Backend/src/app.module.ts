// Decorators
import { Module } from '@nestjs/common';

// Modules
import { ConfigModule } from '@nestjs/config';
import { RecommendModule } from './recommend/recommend.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RecommendModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
