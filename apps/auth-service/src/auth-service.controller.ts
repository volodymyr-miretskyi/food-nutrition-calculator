import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AuthServiceService } from './auth-service.service';
import { AUTH_SERVICE_EVENTS } from '@/constants';

@Controller()
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) {}

  @MessagePattern({ cmd: AUTH_SERVICE_EVENTS.LOGIN })
  login() {
    const result = this.authServiceService.login();
    return result;
  }
}
