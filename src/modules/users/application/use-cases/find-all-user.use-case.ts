import { UserRepository } from '@modules/users/domain/repository/user.repository';

export class FindAllUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(page: number, limit: number) {
    return await this.userRepository.findAll(page, limit);
  }
}
