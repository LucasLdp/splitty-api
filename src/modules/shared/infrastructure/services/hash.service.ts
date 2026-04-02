import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcryptjs';

@Injectable()
export class HashService {
  async hash(data: string): Promise<string> {
    return await hash(data, 10);
  }

  async compare(data: string, hash: string): Promise<boolean> {
    return await compare(data, hash);
  }
}
