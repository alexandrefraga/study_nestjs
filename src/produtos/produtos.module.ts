import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { Produto } from './models/produto.model';

@Module({
  imports: [SequelizeModule.forFeature([Produto])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
