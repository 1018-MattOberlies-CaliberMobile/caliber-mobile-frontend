<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable no-unused-vars */

import { Role } from '../@types/index.d';

class User {
  constructor(
    userId: string,
    role: Role,
  ) {

  }
}

export default User;
=======
/* eslint-disable no-unused-vars */
export default class User {
  constructor(
    public userID: string,
    public role: 'Trainer' | 'QC_Analyst' | 'Admin',
  ) {}
}
>>>>>>> 497d9b7 (added data models)
