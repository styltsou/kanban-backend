import { IBoardRepository } from '@/interfaces/boardRepository';

export class BoardRepository implements IBoardRepository {
  create(name: string) {
    console.log('Should create board', name);
  }
}
