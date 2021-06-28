import { BatteriesService } from "../services/batteries.service";
import { BatteryComponent } from "../views/battery/battery.component";

export class Battery {

    private readonly MIN_VOLTAGE = 0;
    private readonly MAX_VOLTAGE = 5;
    private readonly MIN_TEMP = 0;
    private readonly MAX_TEMP = 45;

    private id: number;
    private voltage: number;
    private temperature: number;
    private charge: number;

    private isStarted: boolean = false;
    private isFailling: boolean = (this.getVoltage() > this.getMaxVoltage() || this.getTemp() > this.getMaxTemp());

    private voltageValues = [ 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7]
    private tempValues = [27.5, 27.6, 27.7, 27.8, 28.1, 28.2]

    constructor(id: number){
        this.id = id;
        
        this.voltage = 0;
        this.temperature = 0;
        this.charge = 0;
    }


    public getId(): number { return this.id; }
    public getCharge(): number { return this.charge; }
    public getVoltage(): number { return this.voltage; }
    public getTemp(): number { return this.temperature; }
    public getMaxVoltage() : number { return this.MAX_VOLTAGE; }
    public getMinVoltage() : number { return this.MIN_VOLTAGE; }
    public getMaxTemp() : number { return this.MAX_TEMP; }
    public getMinTemp() : number { return this.MIN_TEMP; }
    public getIsStarted() : boolean { return this.isStarted; }
    public getIfFail() : boolean { return this.isFailling; }

    public startApp() {
        console.log(this.isFailling)

        if (!this.isFailling) {
            this.isStarted = true; 
        }
    }

    //public getVoltage(): number { return this.MAX_VOLTAGE * 2; }
    //public getTemp(): number { return this.MAX_TEMP * 2; }

    public getPercentage(): number {
        if(!this.isStarted || this.isFailling) { return 0; }
        let percentage = Math.floor(this.charge);
        
        if (percentage > 100) { percentage = 100; }
        return percentage;
    }


    public changeRandom() {
        if(!this.isStarted || this.isFailling) { return; }
        this.voltage = this.voltageValues[this.random(this.voltageValues.length)];
        this.temperature = this.tempValues[this.random(this.tempValues.length)];
        this.charge += this.random(2);
    }

    private random(n: number): number {
        if(!this.isStarted || this.isFailling) { return 0; }
        return Math.floor( Math.random() * n );
    }

    public updateInfo(voltage: number, temperature: number) {
        if(!this.isStarted || this.isFailling) { return; }
        this.voltage = voltage;
        this.temperature = temperature;
    }

    public isBatteryLow(): boolean {
        return this.getPercentage() < 75;
    }

    public isFullCharge(): boolean {
        return this.getPercentage() === 100;
    }
}