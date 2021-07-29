/* eslint-disable no-unused-vars */
export default class User {
  constructor(
    public userID: string,
    public role: 'Trainer' | 'QC_Analyst' | 'Admin',
  ) {}
}
