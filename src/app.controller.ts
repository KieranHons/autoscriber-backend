import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {SymptomModel} from "./model/symptom.model";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSymptoms(): Promise<SymptomModel[]> {
    return this.appService.getSymptoms();
  }
}
