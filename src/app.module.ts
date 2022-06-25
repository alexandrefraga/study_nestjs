import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModuleUseMongoose } from './users-mongoose/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProdutosModule } from './produtos/produtos.module';
import { DatabaseModule } from './databases/databases.module';
import { Produto } from './produtos/models/produto.model';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_ATLAS_URL),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './data/database.sqlite',
      models: [Produto],
      synchronize: true,
    }),
    UsersModuleUseMongoose,
    ProdutosModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
