// TODO: Decide which type of data apply for id and phoneNumber.
export interface UserRegType {
  id: number | string,
  name: string,
  email: string,
  password: string,
  phoneNumber: number | string,
  avatar?: string,
}