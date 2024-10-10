import { Body, Controller, Post } from '@nestjs/common';
import { createAuthDto } from './dto/createAuth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  logIn(@Body() data: createAuthDto) {
    return this.authService.logInUser(data);
  }
}
