import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatteriesService } from './services/batteries.service';
import { BatteryComponent } from './views/battery/battery.component';
import { TempSensorComponent } from './views/temp-sensor/temp-sensor.component';

@NgModule({
  declarations: [
    AppComponent,
    BatteryComponent,
    TempSensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
