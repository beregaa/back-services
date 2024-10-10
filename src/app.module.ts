import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderModule } from './order/order.module';

import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { CoachesModule } from './coaches/coaches.module';
import { MatchesModule } from './matches/matches.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { GenresModule } from './genres/genres.module';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    OrderModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'highrisk',
      autoLoadEntities: true,
      synchronize: true,
    }),

    PlayersModule,

    TeamsModule,

    CoachesModule,

    MatchesModule,

    BooksModule,

    AuthorsModule,

    GenresModule,

    CustomersModule,

    UsersModule,

    AuthModule,



   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
