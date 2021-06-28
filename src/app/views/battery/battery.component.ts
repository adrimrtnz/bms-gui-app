import { Input, Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Battery } from '../../models/Battery';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss']
})
export class BatteryComponent implements OnInit {

  @Input() battery: Battery;

  public batteryClasses: any;
  public voltageProblem: any;
  public tempProblem: any;

  constructor() { 
    this.battery = new Battery(1);
  }

  ngOnInit() {
      
  }

  public getBatteryStyle(): object {
    const inversePercentage = 100 - this.battery.getPercentage();
    
    this.batteryClasses = {
      "low-battery" : this.battery.isBatteryLow(),
      "full-battery" : this.battery.isFullCharge(),
    };

    this.voltageProblem = {
      "voltage-problem" : this.battery.getVoltage() > this.battery.getMaxVoltage(),
      "not-started" : !this.battery.getIsStarted() && !this.battery.getIfFail()
    }

    this.tempProblem = {
      "temp-problem" : this.battery.getTemp() > this.battery.getMaxTemp(),
      "not-started" : !this.battery.getIsStarted() && !this.battery.getIfFail()
    }

    return {
      'clip-path': `polygon(
        0 ${inversePercentage}%,
        100% ${inversePercentage}%,
        100% 100%,
        0 100%
      )`
    };
  }
}
