import { Injectable } from '@nestjs/common';
import { Livro } from '../schema/livro.model';

@Injectable()
export class LivrosService {
  livros: Livro[] = [
    // new Livro("LIV01", "Livro TDD e BDD na prática", 29.90),
    // new Livro("LIV02", "Livro Iniciando com Flutter", 39.90),
    // new Livro("LIV03", "Inteligência artificial como serviço", 29.90),
  ];

  getAll(): Livro[] {
    return this.livros;
  }

  getId(id: number): Livro {
    return this.livros[0];
  }

  create(livro: Livro) {
    this.livros.push(livro);
  }

  update(livro: Livro): Livro {
    return livro;
  }

  delete(id: number) {
    this.livros.pop();
  }
}
