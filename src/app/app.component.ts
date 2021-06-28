import { Component } from '@angular/core';
import { BatteriesService } from './services/batteries.service';
import { Battery } from './models/Battery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'BMS-LV';

  public batteries : Battery[];


  constructor( private batteriesService: BatteriesService) { 
    this.batteries = batteriesService.getBatteries();
    console.log(this.batteries);
  }

  public getTotalCharge(): number {
    return this.batteriesService.getTotalCharge();
  }

  public getState(): string {
    if (this.batteriesService.isFailling()) {
      return 'UNABLE TO RUN'
    }

    if (!this.batteriesService.isStarted()) {
      return 'READY TO CHARGE';
    }

    if (this.batteriesService.getTotalCharge() >= 100) {
      return 'FULLY CHARGED';
    }
    
    return 'CHARGING';
  }

  public startApp() {
    this.batteriesService.startApp();
  }

  public getGeneralChargeStyle() : object {
    return {
        'clip-path': `polygon(
        0 ${100 - this.getTotalCharge()}%,
        100% ${100 - this.getTotalCharge()}%,
        100% 100%,
        0 100%
      )`
    };
  }
}
