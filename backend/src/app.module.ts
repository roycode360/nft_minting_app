import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/data-source';
import { ConfigModule } from '@nestjs/config';
import { NftModule } from './nft/nft.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({ ...dataSourceOptions, autoLoadEntities: true }),
    NftModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
