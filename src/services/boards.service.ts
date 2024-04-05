import { Service } from 'typedi';
import { generateSlug } from '@/utils/generateSlug';
import { db } from '@database/pool';
import { Boards } from '@/database/schema/boards.schema';

@Service()
export class BoardService {
  public async getBoards(): Promise<{ id: string; name: string; slug: string }[]> {
    const boards = await db.select().from(Boards);

    return [
      {
        id: 'eriogmkjetiohgm',
        name: 'Kanban App',
        slug: generateSlug('Kanban App'),
      },
      {
        id: 'dffpsdfkprfg',
        name: 'Headless Commerce',
        slug: generateSlug('Headless Commerce'),
      },
      {
        id: 'dltkgjedoprigh',
        name: 'Syvota Website',
        slug: generateSlug('Syvota Website'),
      },
      ...boards,
    ];
  }
}
