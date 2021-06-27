import { Input, Component, OnInit } from '@angular/core';
import { TempSensor } from 'src/app/models/TempSensor';

@Component({
  selector: 'app-temp-sensor',
  templateUrl: './temp-sensor.component.html',
  styleUrls: ['./temp-sensor.component.scss']
})
export class TempSensorComponent implements OnInit {

  @Input() tempSensor: TempSensor;

  constructor() { 
    this.tempSensor = new TempSensor(0);
  }

  ngOnInit(): void {
  }

  public getTempSensorStyle(): object {
    const inversePercentage = 100 - this.tempSensor.getPercentage()
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
