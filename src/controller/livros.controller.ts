import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from '../schema/livro.model';
import { LivrosService } from '../service/livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  getAll(): Livro[] {
    return this.livrosService.getAll();
  }

  @Get(':id')
  getId(@Param() params): Livro {
    return this.livrosService.getId(params.id);
  }

  @Post()
  create(@Body() livro: Livro) {
    this.livrosService.create(livro);
  }

  @Put()
  update(@Body() livro: Livro): Livro {
    return this.livrosService.update(livro);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.livrosService.delete(params.id);
  }
}
