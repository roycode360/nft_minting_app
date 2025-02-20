import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('nfts')
export class Nft {
  @PrimaryColumn()
  nftId: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  logoUrl: string;

  @Column()
  walletAddress: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
