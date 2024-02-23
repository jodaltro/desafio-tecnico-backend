import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = {
    userId: number,
    login: string,
    senha: string,
  };

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      login: 'letscode',
      senha: 'lets@123'
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.login === username);
  }
}