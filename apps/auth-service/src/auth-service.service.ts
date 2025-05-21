import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthServiceService {
  login() {
    return { response: 'login!' };
  }
}
