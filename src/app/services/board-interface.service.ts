import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardInterfaceService {

  private readonly MAX_GROWTH = 2;

  private voltageValues = [ 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7];
  private currentValues = [9.5, 9.6, 9.7, 9.8, 9.9, 10.0, 10.1, 10.2, 10.3, 10.4, 10.5];
  private tempValues = [27.5, 27.6, 27.7, 27.8, 28.1, 28.2];

  constructor() { }

  public getCellVoltage() : number {
    return this.voltageValues[this.random(this.voltageValues.length)];
  }

  public getCellCurrent() : number {
    return this.currentValues[this.random(this.currentValues.length)];
  }

  public getCellTemperature() : number {
    return this.tempValues[this.random(this.tempValues.length)];
  }

  private random(n : number) : number {
    return Math.floor( Math.random() * n );
  }
}
