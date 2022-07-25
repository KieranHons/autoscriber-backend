import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSymptoms(): string[] {
    return ['back', 'sed', 'leo'];
  }
}
