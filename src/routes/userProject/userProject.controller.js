import express from 'express';

import models from '../../models';

import { STATUS_CODES } from '../../utils/constants';
import { BadRequestError, SuccessResponse } from '../../utils/helper';

const { UserProject } = models;

class UserController {
  static router;

  static getRouter() {
    this.router = express.Router();
    this.router.delete('/delete/:id', this.deleteUserById);
    this.router.put('/update/:id', this.updateUserById);
    this.router.post('/createprojectdata', this.createProject);
    this.router.get('/project', this.list);
    this.router.get('/:id', this.getUserById);

    return this.router;
  }

  static async list(req, res, next) {
    try {
      const users = await UserProject.findAndCountAll({});
      return SuccessResponse(res, {
        users,
      });
    } catch (e) {
      next(e);
    }
  }

  static async getUserById(req, res, next) {
    const id = parseInt(req.params.id, 10);
    try {
      if (!id) {
        return BadRequestError(res, new Error(`User id is required`), STATUS_CODES.INVALID_INPUT);
      }

      const user = await UserProject.findOne({ where: { id } });

      if (!user) {
        return BadRequestError(
          res,
          new Error(`User with id ${id} not found`),
          STATUS_CODES.NOT_FOUND
        );
      }

      return SuccessResponse(res, user);
    } catch (e) {
      next(e);
    }
  }

  static async createProject(req, res, next) {
    const { description, pic, title } = req.body;
    try {
      if (!pic || !title || !description) {
        BadRequestError(new Error(`please enter data`), STATUS_CODES.INVALID_INPUT);
      }

      const project = await UserProject.create({ pic, title, description });

      return SuccessResponse(res, { project });
    } catch (e) {
      next(e);
    }
  }

  static async deleteUserById(req, res, next) {
    const {
      params: { id },
    } = req;

    try {
      if (!id) {
        BadRequestError(new Error(`User id is required`), STATUS_CODES.INVALID_INPUT);
      }

      await UserProject.destroy({ where: { id } });

      return SuccessResponse(res, { message: `User with id ${id} deleted successfully.` });
    } catch (e) {
      next(e);
    }
  }

  static async updateUserById(req, res, next) {
    const {
      params: { id },
      body: { description, pic, title },
    } = req;

    try {
      if (!id) {
        BadRequestError(new Error(`User id is required`), STATUS_CODES.INVALID_INPUT);
      }

      const user = await UserProject.findOne({ where: { id } });

      if (!user) {
        BadRequestError(new Error(`User with id ${id} not found`), STATUS_CODES.NOT_FOUND);
      }

      await user.update({ description, pic, title });

      return SuccessResponse(res, { message: `User with id ${id} updated successfully.` });
    } catch (e) {
      next(e);
    }
  }
}

export default UserController;
