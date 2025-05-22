import { Body, Controller, Inject, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth-service')
export class AuthController {
  constructor(@Inject() private readonly authService: AuthService) {}

  @Post('login')
  async uploadImage(@Body() params: any) {
    const result = this.authService.login(params);
    return result;
  }
}
