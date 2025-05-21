import { Body, Controller, Inject, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth-service')
export class AuthController {
  constructor(@Inject() private readonly client: AuthService) {}

  @Post('login')
  async uploadImage(@Body() params: any) {
    const result = this.client.login(params);
    return result;
  }
}
