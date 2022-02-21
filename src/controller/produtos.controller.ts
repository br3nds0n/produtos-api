import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from 'src/schema/produto.model';

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('liv01', 'tdd na prática', 25),
    new Produto('liv02', 'tclean code', 25),
    new Produto('liv03', 'jest ', 25),
  ];
  @Get()
  getAll(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  getId(@Param() params): Produto {
    return this.produtos[0];
  }

  @Post()
  create(@Body() product: Produto) {
    product.id = 1;
    this.produtos.push(product);
  }

  @Put()
  update(@Body() product: Produto): Produto {
    return product;
  }

  @Delete(':id')
  delete(@Param() params) {
    this.produtos.pop();
  }
}
