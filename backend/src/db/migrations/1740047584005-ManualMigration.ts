import { MigrationInterface, QueryRunner } from 'typeorm';

export class ManualMigration1740047584005 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE nfts (
        nftId SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        logoUrl VARCHAR(500),
        walletAddress VARCHAR(255) NOT NULL,
        createdAt TIMESTAMP DEFAULT now()
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE nfts;`);
  }
}
