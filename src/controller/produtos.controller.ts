import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  getAll(): string {
    return 'Lista todos os produtos';
  }

  @Get(':id')
  getId(@Param() params): string {
    return `retorna os dados do produto ${params.id}`;
  }

  @Post()
  create(@Body() product): string {
    return 'produto criado';
  }

  @Put()
  update(@Body() product): string {
    return 'produto atualizado';
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `apaga um produto ${params.id}`;
  }
}
