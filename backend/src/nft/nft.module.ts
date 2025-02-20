import { Module } from '@nestjs/common';
import { NftService } from './nft.service';
import { NftController } from './nft.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nft } from './nft.schema';

@Module({
  imports: [TypeOrmModule.forFeature([Nft])],
  controllers: [NftController],
  providers: [NftService],
})
export class NftModule {}
