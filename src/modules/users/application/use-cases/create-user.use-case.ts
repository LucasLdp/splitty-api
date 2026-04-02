import { UserRepository } from '@modules/users/domain/repository/user.repository';
import { ICreateUserInput } from '../dtos/create-user.dto';
import { User } from '@modules/users/domain/entity/user.entity';
import { ConflictException } from '@nestjs/common';

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: ICreateUserInput): Promise<void> {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      throw new ConflictException('Usuário já existe');
    }

    const user = new User(data);

    await this.userRepository.save(user);
  }
}
