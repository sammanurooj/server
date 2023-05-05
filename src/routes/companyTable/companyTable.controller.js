import express from 'express';

import models from '../../models';

import { STATUS_CODES } from '../../utils/constants';
import { BadRequestError, SuccessResponse } from '../../utils/helper';

const { companyanalysistable } = models;

class UserController {
  static router;

  static getRouter() {
    this.router = express.Router();
    this.router.get('/company', this.list);
    this.router.get('/:id', this.getCardById);

    return this.router;
  }

  static async list(req, res, next) {
    try {
      const users = await companyanalysistable.findAndCountAll({});
      return SuccessResponse(res, {
        users,
      });
    } catch (e) {
      next(e);
    }
  }

  static async getCardById(req, res, next) {
    const id = parseInt(req.params.id, 10);
    try {
      if (!id) {
        return BadRequestError(res, new Error(`User id is required`), STATUS_CODES.INVALID_INPUT);
      }

      const user = await companyanalysistable.findOne({ where: { id } });

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
}

export default UserController;
