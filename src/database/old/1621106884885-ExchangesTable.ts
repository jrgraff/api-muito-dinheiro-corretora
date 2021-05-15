import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ExchangesTable1621106884885 implements MigrationInterface {

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
                        name: 'from_currency_id',
                        type: 'varchar',
                    },
                    {
                        name: 'to_currency_id',
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
                ],
                foreignKeys: [
                    {
                      name: 'FK_from_currency_id',
                      referencedTableName: 'currencies',
                      referencedColumnNames: ['id'],
                      columnNames: ['from_currency_id'],
                      onUpdate: 'CASCADE',
                      onDelete: 'CASCADE'
                    },
                    {
                        name: 'FK_to_currency_id',
                        referencedTableName: 'currencies',
                        referencedColumnNames: ['id'],
                        columnNames: ['to_currency_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                      },
                  ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('exchanges');
    }

}
