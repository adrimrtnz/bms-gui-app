import { BatteriesService } from "../services/batteries.service";
import { BatteryComponent } from "../views/battery/battery.component";

export class Battery {

    private readonly MIN_VOLTAGE = 0;
    private readonly MAX_VOLTAGE = 40;
    private readonly MIN_TEMP = 0;
    private readonly MAX_TEMP = 40;

    private id: number;
    private voltage: number;
    private temperature: number;



    constructor(id: number){
        this.id = id;
        
        this.voltage = 0;
        this.temperature = 0;
    }


    public getId(): number { return this.id; }
    public getVoltage(): number { return this.voltage /*> this.MAX_VOLTAGE ? this.MAX_VOLTAGE : this.voltage;*/ }
    public getTemp(): number { return this.temperature; }
    public getMaxVoltage() : number { return this.MAX_VOLTAGE; }
    public getMinVoltage() : number { return this.MIN_VOLTAGE; }
    public getMaxTemp() : number { return this.MAX_TEMP; }
    public getMinTemp() : number { return this.MIN_TEMP; }


    public getPercentage(): number {
        let percentage = Math.floor(this.voltage / this.MAX_VOLTAGE * 100);
        
        if (percentage > 100) { percentage = 100; }
        return percentage;
    }


    public changeRandom() {
        this.voltage += this.random(2);
        this.temperature += this.random(2);
    }

    private random(n: number): number {
        return Math.floor( Math.random() * n );
    }

    public updateInfo(voltage: number, temperature1: number, temperature2: number) {
        this.voltage = voltage;
        this.temperature = temperature1;
    }

    public isBatteryLow(): boolean {
        return this.getPercentage() < 75;
    }

    public isFullCharge(): boolean {
        return this.getPercentage() === 100;
    }

    public getTotalCharge(): number {
        return 0;
    }
}