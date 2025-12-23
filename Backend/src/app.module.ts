// Decorators
import { Module } from '@nestjs/common';

// Modules
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VkmModule } from './vkm/vkm.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RecommendationModule } from './recommendation/recommendation.module';

// Controllers
import { AppController } from './app.controller';

// Providers
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: true
      }),
      inject: [ConfigService]
    }),
    VkmModule,
    UsersModule,
    AuthModule,
    RecommendationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
