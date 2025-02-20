import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { NftService } from './nft.service';
import { CreateNftDto } from './dto/create-nft.dto';

@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  // Endpoint to store NFT data.
  // POST /nft
  @Post()
  async create(@Body() createNftDto: CreateNftDto) {
    const nft = await this.nftService.create(createNftDto);
    return { success: true, data: nft };
  }

  // Endpoint to get all NFTs for a given wallet address.
  // GET /nft/gallery?walletAddress=<walletAddress>
  @Get('gallery')
  async getGallery(@Query('walletAddress') walletAddress: string) {
    const nfts = await this.nftService.findGallery(walletAddress);
    return { success: true, data: nfts };
  }

  // Endpoint to get NFT data by NFT ID.
  // GET /nft/:id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const nftId = Number(id);
    const nft = await this.nftService.findOne(nftId);
    return { success: true, data: nft };
  }
}
