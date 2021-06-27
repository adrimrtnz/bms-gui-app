import { Component } from '@angular/core';
import { BatteriesService } from './services/batteries.service';
import { Battery } from './models/Battery';
import { TempSensorService } from './services/temp-sensor.service';
import { TempSensor } from './models/TempSensor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'battery-app';

  public batteries : Battery[];
  public tempSensors : TempSensor[];

  constructor( private batteriesService: BatteriesService, private tempSensorService: TempSensorService ) { 
    this.batteries = batteriesService.getBatteries();
    console.log(this.batteries);

    this.tempSensors = tempSensorService.getTempSensors();
    console.log(this.tempSensors);
  }
}
