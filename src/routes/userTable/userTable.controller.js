import express from 'express';
import models from '../../models';

import { STATUS_CODES } from '../../utils/constants';
import { BadRequestError, SuccessResponse } from '../../utils/helper';

const { ApplicationUserTable } = models;

class UserController {
  static router;

  static getRouter() {
    this.router = express.Router();
    this.router.get('/:id', this.getUserById);
    this.router.get('/usertabledata', this.list);
    return this.router;
  }

  static async list(req, res, next) {
    try {
      const users = await ApplicationUserTable.findAll({});
      return SuccessResponse(res, {
        users,
      });
    } catch (e) {
      next(e);
    }
  }

  static async getUserById(req, res, next) {
    const {
      params: { id },
    } = req;

    try {
      if (!id) {
        throw new BadRequestError(`User id is required`, STATUS_CODES.INVALID_INPUT);
      }

      const user = await ApplicationUserTable.findOne({ where: { id } });
      if (!user) {
        throw new BadRequestError(`User with id ${id} not found`, STATUS_CODES.NOT_FOUND);
      }

      return SuccessResponse(res, user);
    } catch (e) {
      next(e);
    }
  }
}

export default UserController;
