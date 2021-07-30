/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable no-unused-vars */

import { Role } from '../@types';

class User {
  constructor(
    public userId: string,
    public role: Role,
  ) {}
}

export default User;
