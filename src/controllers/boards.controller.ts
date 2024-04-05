import { Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { BoardService } from '@/services/boards.service';

export class BoardController {
  public boardService = Container.get(BoardService);

  public getBoards = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const boards = await Container.get(BoardService).getBoards();

      res.status(200).json({
        data: boards,
        message: 'success',
      });
    } catch (error) {
      next(error);
    }
  };
}
