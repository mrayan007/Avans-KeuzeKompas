// Decorators
import { Module } from '@nestjs/common';

// Modules
import { ConfigModule } from '@nestjs/config';
import { RecommendationModule } from './recommendation/recommendation.module';

// Controllers
import { AppController } from './app.controller';

// Providers
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RecommendationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
