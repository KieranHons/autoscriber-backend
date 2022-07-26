import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import axios from 'axios';
import { SymptomModel } from "./model/symptom.model";

@Injectable()
export class AppService {
  async getSymptoms(): Promise<SymptomModel[]> {
    const symptomList: SymptomModel[] = [];
    const baseUrl = 'https://www.nhsinform.scot';
    const url = '/symptoms-and-self-help/a-to-z';
    await (async () => {
      try {
        const response = await axios.get(baseUrl+url);
        const $ = cheerio.load(response.data);
        const elementList = $('[class=nhs-uk__az-link]');
        elementList.each((_, symptom) => {
          const $$ = cheerio.load(symptom);
          symptomList.push({
            title: $$.text().trim(),
            link: baseUrl + symptom.attributes.find(x => x.name === 'href')["value"]
          });
        });
      } catch (error) {
        console.log('Error:', error);
      }
    })();
    return symptomList;
  }
}
