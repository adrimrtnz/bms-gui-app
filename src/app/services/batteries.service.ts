import { Injectable } from '@angular/core';
import { Battery } from '../models/Battery';

@Injectable({
  providedIn: 'root'
})
export class BatteriesService {

  private readonly NUMBER_OF_BATTERIES = 6;
  private batteries: Battery[] = [];
  

  constructor() { 
    this.initializeBatteries();
    setInterval( () => this.changeRandom(), 500);
    setInterval( () => this.getTotalCharge(), 500);
  }

  ngOnInit() {
    
  }

  private initializeBatteries() {
    for (let i = 0; i < this.NUMBER_OF_BATTERIES; i++) {
      this.batteries.push(new Battery(i));
    }
  }

  private changeRandom() {
    for (let i = 0; i < this.NUMBER_OF_BATTERIES; i++) {
      this.batteries[i].changeRandom();
    }
  }

  public getBatteries() { return this.batteries; }

  public getTotalCharge(): number {
    let sum = 0;
    
    for (let i = 0; i < this.NUMBER_OF_BATTERIES; i++) {
      sum += this.batteries[i].getPercentage();
    }

    //console.log("Total mean charge: " + Math.floor(sum / this.batteries.length) + "%");
    return Math.floor(sum / this.batteries.length);
  }

  public isStarted(): boolean { 
    for (let i = 0; i < this.NUMBER_OF_BATTERIES; i++) {
      if (this.batteries[i].getIsStarted())
      { 
        return true;
      }
    }
    return false; 
  }

  public hasFails(): boolean { 
    for (let i = 0; i < this.NUMBER_OF_BATTERIES; i++) {
      if (this.batteries[i].getIfFail())
      { 
        return true;
      }
    }
    return false; 
  }

  public isRunning(): boolean { 
    for (let i = 0; i < this.NUMBER_OF_BATTERIES; i++) {
      if (this.batteries[i].getIfRunning())
      { 
        return true;
      }
    }
    return false; 
  }

  public startApp() {
    for (let i = 0; i < this.NUMBER_OF_BATTERIES; i++) {
      this.batteries[i].startApp();
    }
  }

  public discharge() {
    for (let i = 0; i < this.NUMBER_OF_BATTERIES; i++) {
      this.batteries[i].discharge();
    }
  }
}
