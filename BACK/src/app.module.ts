import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { CardsModule } from './cards/cards.module';
import { UsersModule } from './users/users.module';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';
import { PostgresModule } from 'nest-postgres';
import { CardsRepository } from './infra/databse/cards.repository';

@Module({
  imports: [
    LoginModule,
    CardsModule,
    UsersModule,
    PostgresModule.forRoot({
      connectionString:
        'postgresql://root:password123@localhost:5432/desafio_db',
    }),
  ],
  controllers: [ LoginController],
  providers: [LoginService, CardsRepository],
})
export class AppModule {}
