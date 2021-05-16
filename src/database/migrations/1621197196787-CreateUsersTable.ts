import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1621197196787 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "users",
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: "username",
          type: "varchar"
        },
        {
          name: "email",
          type: "varchar",
          isUnique: true
        },
        {
          name: "password",
          type: "varchar"
        },
        {
          name: "address",
          type: "varchar"
        },
        {
          name: "neighborhood",
          type: "varchar"
        },
        {
          name: "city",
          type: "varchar"
        },
        {
          name: "uf",
          type: "varchar"
        },
        {
          name: "phone_number",
          type: "varchar"
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 9,
          precision: 11
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 9,
          precision: 11
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }

}
