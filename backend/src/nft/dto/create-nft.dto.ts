import { IsString, IsNotEmpty, IsNumber, IsUrl } from 'class-validator';

export class CreateNftDto {
  @IsNumber()
  nftId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUrl()
  logoUrl: string;

  @IsString()
  @IsNotEmpty()
  walletAddress: string;
}
