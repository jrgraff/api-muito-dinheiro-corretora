import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CurrenciesTable1621104440998 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'currencies',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'rate',
                        type: 'decimal',
                        precision: 10,
                        scale: 3,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]
            })
        )

        await queryRunner.query(
            "INSERT INTO currencies VALUES ('BRL', 'Real brasileiro', 1)",
        );
        await queryRunner.query(
            "INSERT INTO currencies VALUES ('ARS', 'Peso argentino', 0.056)",
        );
        await queryRunner.query(
            "INSERT INTO currencies VALUES ('USD', 'Dolar Americano', 5.27)",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('currencies');
    }

}
