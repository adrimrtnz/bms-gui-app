import { Input, Component, OnInit } from '@angular/core';
import { Battery } from '../../models/Battery';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss']
})
export class BatteryComponent implements OnInit {

  @Input() battery: Battery;

  public batteryClasses: any;

  constructor() { 
    this.battery = new Battery(1);
  }

  ngOnInit() {
      
  }

  public getBatteryStyle(): object {
    const inversePercentage = 100 - this.battery.getPercentage();
    this.batteryClasses = {
      "low-battery" : this.battery.isBatteryLow()
    };
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
