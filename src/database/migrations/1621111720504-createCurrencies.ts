import {MigrationInterface, QueryRunner} from "typeorm";

export class createCurrencies1621111720504 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.query(
            "DELETE FROM currencies",
        );
    }

}
