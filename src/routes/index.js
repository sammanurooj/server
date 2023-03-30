import express from 'express';
import acl from 'express-acl';
import auth from '../middlewares/auth';
import UserController from './user/user.controller';
import ProjectTableController from './peojectTable/projectTable.controller';

const router = express.Router();

// list of routes to be excluded from authentication and authorization
const aclExcludedRoutes = [
  '/api/users/googleLogin',
  '/api/users/login',
  '/api/projects/projecttable',
  '/api/projects/:id',

  /^\/api-docs\/.*/,
];

acl.config({
  baseUrl: 'api',
  filename: 'acl.json',
  path: 'src/config',
  decodedObjectName: 'user',
});
router.use(auth.required.unless({ path: aclExcludedRoutes }));
router.use(acl.authorize.unless({ path: aclExcludedRoutes }));

router.use('/users', UserController.getRouter());
router.use('/projects', ProjectTableController.getRouter());

export default router;
