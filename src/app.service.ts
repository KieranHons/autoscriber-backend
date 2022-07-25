import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import axios from 'axios';

@Injectable()
export class AppService {
  async getSymptoms(): Promise<string[]> {
    const symptomList = [];
    const url = 'https://www.nhsinform.scot/symptoms-and-self-help/a-to-z';
    await (async () => {
      try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const elementList = $('[class=nhs-uk__az-link]');
        elementList.each((_, symptom) => {
          symptomList.push(cheerio.load(symptom).text().trim());
        });
      } catch (error) {
        console.log('Error:', error);
      }
    })();
    return symptomList;
  }
}
