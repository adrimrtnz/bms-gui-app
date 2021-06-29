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
      return 'FAULT'
    }

    else if (!this.batteriesService.isStarted()) {
      return 'IDLE';
    }

    else if (this.batteriesService.getTotalCharge() >= 100) {
      return 'FULLY CHARGED';
    }

    else if (this.batteriesService.isRunning()) {
      return "DISCHARGING";
    }
    
    return 'CHARGING';
  }

  public startApp() {
    if (!this.batteriesService.isFailling() && (this.batteriesService.getTotalCharge() == 0)) {
      this.batteriesService.startApp();
    }
    if (!this.batteriesService.isFailling() && (this.batteriesService.getTotalCharge() == 100)) {
      this.batteriesService.discharge();
    }
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
