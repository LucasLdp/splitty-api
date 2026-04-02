import { PrismaService } from '@modules/shared/infrastructure/services/prisma.service';
import { User } from '@modules/users/domain/entity/user.entity';
import { UserRepository } from '@modules/users/domain/repository/user.repository';

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(page: number, limit: number): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    return users.map((user) => new User(user));
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    return user ? new User(user) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user ? new User(user) : null;
  }

  async save(user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        password: user.password,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
