import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNftDto } from './dto/create-nft.dto';
import { Nft } from './nft.schema';

@Injectable()
export class NftService {
  private readonly logger = new Logger(NftService.name);

  constructor(
    @InjectRepository(Nft)
    private nftRepository: Repository<Nft>,
  ) {}

  async create(createNftDto: CreateNftDto): Promise<Nft> {
    try {
      this.logger.debug(
        `Creating NFT with payload: ${JSON.stringify(createNftDto)}`,
      );
      const { nftId } = createNftDto;
      // Ensure that this NFT ID is not already stored.
      const existing = await this.nftRepository.findOne({ where: { nftId } });
      if (existing) {
        this.logger.warn(`NFT with ID ${nftId} already exists`);
        throw new ConflictException('NFT with this ID already exists');
      }
      const nft = this.nftRepository.create(createNftDto);
      const savedNft = await this.nftRepository.save(nft);
      this.logger.debug(`NFT created: ${JSON.stringify(savedNft)}`);
      return savedNft;
    } catch (error: any) {
      this.logger.error('Error creating NFT', error.stack);
      // If the error is already an HTTP exception, rethrow it
      if (error.status) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to create NFT');
    }
  }

  async findOne(nftId: number): Promise<Nft> {
    try {
      this.logger.debug(`Fetching NFT with id: ${nftId}`);
      const nft = await this.nftRepository.findOne({ where: { nftId } });
      if (!nft) {
        this.logger.warn(`NFT with id ${nftId} not found`);
        throw new NotFoundException('NFT not found');
      }
      this.logger.debug(`NFT fetched: ${JSON.stringify(nft)}`);
      return nft;
    } catch (error: any) {
      this.logger.error(`Error fetching NFT with id ${nftId}`, error.stack);
      if (error.status) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to retrieve NFT');
    }
  }

  async findGallery(walletAddress: string): Promise<Nft[]> {
    try {
      this.logger.debug(`Fetching NFT gallery for wallet: ${walletAddress}`);
      const nfts = await this.nftRepository.find({
        where: { walletAddress },
        order: { createdAt: 'DESC' },
      });
      this.logger.debug(`Gallery fetched: ${JSON.stringify(nfts)}`);
      return nfts;
    } catch (error: any) {
      this.logger.error(
        `Error fetching gallery for wallet ${walletAddress}`,
        error.stack,
      );
      throw new InternalServerErrorException('Failed to retrieve NFT gallery');
    }
  }
}
