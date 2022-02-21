import { Injectable } from '@nestjs/common';
import { Produto } from 'src/schema/produto.model';

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('liv01', 'tdd na prática', 25),
    new Produto('liv02', 'tclean code', 25),
    new Produto('liv03', 'jest ', 25),
  ];

  getAll(): Produto[] {
    return this.produtos;
  }

  getId(id: number): Produto {
    return this.produtos[0];
  }

  create(product: Produto) {
    this.produtos.push(product);
  }

  update(product: Produto): Produto {
    return product;
  }

  delete(id: number) {
    this.produtos.pop();
  }
}
