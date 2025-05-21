import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';

import { AUTH_SERVICE_EVENTS, SERVICES } from '@/constants';

@Injectable()
export class AuthService {
  constructor(
    @Inject(SERVICES.AUTH_SERVICE) private readonly client: ClientProxy,
  ) {}

  async login(params: any) {
    const result = this.client.send({ cmd: AUTH_SERVICE_EVENTS.LOGIN }, params);
    return result;
  }
}
