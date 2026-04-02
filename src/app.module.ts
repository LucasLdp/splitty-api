import { ZodValidationPipe, ZodSerializerInterceptor } from 'nestjs-zod';
import { APP_PIPE, APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { Module, Provider } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '@modules/users/users.module';
import { HttpExceptionFilter } from '@modules/shared/infrastructure/filters/http-exception.filter';
import { UserService } from './modules/users/infrastructure/service/user.service';

const provider: Provider[] = [
  {
    provide: APP_PIPE,
    useClass: ZodValidationPipe,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ZodSerializerInterceptor,
  },
  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
];

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, ...provider, UserService],
})
export class AppModule {}
