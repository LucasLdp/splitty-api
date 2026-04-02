import { User } from '../entity/user.entity';

export abstract class UserRepository {
  abstract findAll(page: number, limit: number): Promise<User[]>;
  abstract findById(id: string): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract save(user: User): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
