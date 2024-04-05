import { Router } from 'express';
import { Routes } from '@/interfaces/routes.interface';
import { BoardController } from '@/controllers/boards.controller';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

export class BoardRoute implements Routes {
  public path = '/boards';
  public router: Router = Router();
  public boardController = new BoardController();

  constructor() {
    // this.initaliazeMiddleware();
    this.initializeRoutes();
  }

  private initaliazeMiddleware() {
    this.router.use(ClerkExpressRequireAuth());
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.boardController.getBoards);
  }
}
