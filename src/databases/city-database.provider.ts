import { Inject, Injectable } from '@nestjs/common';
import { City } from './city.model';

@Injectable()
export class CityDatabase {
  constructor(@Inject('CityModel') private cityModel: typeof City) {}

  create(cityDto: any) {
    return this.cityModel.create({ ...cityDto });
  }
}
