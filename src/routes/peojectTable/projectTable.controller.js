import express from 'express';
import models from '../../models';

import { STATUS_CODES } from '../../utils/constants';
import { BadRequestError, SuccessResponse } from '../../utils/helper';

const { ProjectTable } = models;
class UserController {
  static router;

  static getRouter() {
    this.router = express.Router();
    this.router.get('/projecttable', this.list);
    this.router.get('/:id', this.getUserById);
    return this.router;
  }

  static async list(req, res, next) {
    try {
      const users = await ProjectTable.findAll();
      return SuccessResponse(res, users);
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
        BadRequestError(`User id is required`, STATUS_CODES.INVALID_INPUT);
      }

      const user = await ProjectTable.findOne({ where: { id } });
      UserController.generatePreSignedUrl([user]);
      return SuccessResponse(res, user);
    } catch (e) {
      next(e);
    }
  }
}

export default UserController;
