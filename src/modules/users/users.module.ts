import { Module } from '@nestjs/common';
import { UsersController } from '@modules/users/presentation/controller/users.controller';
import { PrismaService } from '@modules/shared/infrastructure/services/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [PrismaService],
})
export class UsersModule {}
