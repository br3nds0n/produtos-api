import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from '../schema/livro.model';

@Injectable()
export class LivrosService {
  constructor(@InjectModel(Livro) private livroModel: typeof Livro) {}

  async getAll(): Promise<Livro[]> {
    return this.livroModel.findAll();
  }

  async getId(id: number): Promise<Livro> {
    return this.livroModel.findByPk(id);
  }

  async create(livro: Livro) {
    this.livroModel.create(livro);
  }

  async update(livro: Livro): Promise<[number, Livro[]]> {
    return this.livroModel.update(livro, {
      where: {
        id: livro.id,
      },
    });
  }

  async delete(id: number) {
    const livro: Livro = await this.getId(id);
    livro.destroy();
  }
}
