import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class ExchangesTable1620940209158 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'exchanges',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'username',
                        type: 'varchar',
                    },
                    {
                        name: 'from_currency',
                        type: 'varchar',
                    },
                    {
                        name: 'to_currency',
                        type: 'varchar',
                    },
                    {
                        name: 'original_amount',
                        type: 'decimal',
                        precision: 5,
                        scale: 2,
                    },
                    {
                        name: 'converted_amount',
                        type: 'decimal',
                        precision: 5,
                        scale: 2,
                    },
                    {
                        name: 'charged_fee',
                        type: 'decimal',
                        precision: 5,
                        scale: 2,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('exchanges');
    }

}
