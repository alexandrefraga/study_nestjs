import { Module } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { CityDatabase } from './city-database.provider';
import { City } from './city.model';

@Module({
  providers: [
    {
      provide: 'SEQUELIZE',
      useFactory: async () => {
        const sequelize = new Sequelize({
          dialect: 'sqlite',
          storage: './data/database.sqlite',
        });
        sequelize.addModels([City]);
        await sequelize.sync();
        return sequelize;
      },
    },
    {
      provide: 'CityModel',
      useValue: City,
    },
    CityDatabase,
  ],
  exports: [CityDatabase],
})
export class DatabaseModule {}
