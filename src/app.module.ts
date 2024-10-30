import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
