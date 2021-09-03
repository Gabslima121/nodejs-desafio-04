import { User } from "../model/User";

interface ICreateUserDTO {
  id?: string;
  admin?: boolean;
  name: string;
  email: string;
}

interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): User;
  findById(id: string): User | undefined;
  findByEmail(email: string): User | undefined;
  turnAdmin(user: User): User;
  list(): User[];
}

export { IUsersRepository, ICreateUserDTO };
