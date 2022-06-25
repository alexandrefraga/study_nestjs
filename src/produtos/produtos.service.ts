import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './models/produto.model';

@Injectable()
export class ProdutosService {
  constructor(@InjectModel(Produto) private produtoModel: typeof Produto) {}

  create(createProdutoDto: CreateProdutoDto) {
    console.log(createProdutoDto);
    return this.produtoModel.create({ ...createProdutoDto });
  }

  findAll() {
    return `This action returns all produtos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
