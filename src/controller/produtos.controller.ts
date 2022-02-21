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
import { ProdutosService } from 'src/service/produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  getAll(): Produto[] {
    return this.produtosService.getAll();
  }

  @Get(':id')
  getId(@Param() params): Produto {
    return this.produtosService.getId(params.id);
  }

  @Post()
  create(@Body() product: Produto) {
    this.produtosService.create(product);
  }

  @Put()
  update(@Body() product: Produto): Produto {
    return this.produtosService.update(product);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.produtosService.delete(params.id);
  }
}
