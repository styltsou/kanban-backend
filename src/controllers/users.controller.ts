import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
// import { User } from '@interfaces/users.interface';
import { UserService } from '@services/users.service';

export class UserController {
  private userService = Container.get(UserService);

  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log(req.body);
      // await this.userService.createUser(req.body);

      res.status(201).json({ success: true, message: 'Webhook received' });
    } catch (error) {
      next(error);
    }
  };

  // public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const findAllUsersData: User[] = await this.user.findAllUser();

  //     res.status(200).json({ data: findAllUsersData, message: 'findAll' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const userId = Number(req.params.id);
  //     const findOneUserData: User = await this.user.findUserById(userId);

  //     res.status(200).json({ data: findOneUserData, message: 'findOne' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const userId = Number(req.params.id);
  //     const userData: User = req.body;
  //     const updateUserData: User[] = await this.user.updateUser(userId, userData);

  //     res.status(200).json({ data: updateUserData, message: 'updated' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const userId = Number(req.params.id);
  //     const deleteUserData: User[] = await this.user.deleteUser(userId);

  //     res.status(200).json({ data: deleteUserData, message: 'deleted' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}
