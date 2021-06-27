import { Injectable } from '@angular/core';
import { TempSensor } from '../models/TempSensor';

@Injectable({
  providedIn: 'root'
})
export class TempSensorService {

  private readonly NUMBER_OF_TEMPSENSORS = 2;
  private tempSensor: TempSensor[] = [];

  constructor() { 
    this.initializeTempSensors();
    setInterval( () => this.changeRandom(), 500);
  }

  private initializeTempSensors() {
    for (let i = 0; i < this.NUMBER_OF_TEMPSENSORS; i++) {
      this.tempSensor.push(new TempSensor(i));
    }
  }

  private changeRandom() {
    for (let i = 0; i < this.NUMBER_OF_TEMPSENSORS; i++) {
      this.tempSensor[i].changeRandom();
    }
  }

  public getTempSensors() { return this.tempSensor; }
}
