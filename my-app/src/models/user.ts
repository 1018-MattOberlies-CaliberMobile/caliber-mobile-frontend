/* eslint-disable no-unused-vars */
export default class User {
  constructor(
    public userName: string,
    public role: 'Trainer' | 'QC_Analyst' | 'Admin',
  ) {}
}
