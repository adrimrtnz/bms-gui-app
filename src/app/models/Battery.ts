export class Battery {

    // value for random charge and discharge. Min value = 2
    private readonly MAX_GROWTH = 5;

    private readonly MIN_VOLTAGE = 0;
    private readonly MAX_VOLTAGE = 5;
    private readonly MIN_CURRENT = 0;
    private readonly MAX_CURRENT = 60;
    private readonly MIN_TEMP = 0;
    private readonly MAX_TEMP = 75;

    private id : number;
    private voltage : number;
    private current : number;
    private temperature : number;
    private charge : number;

    private isStarted : boolean = false;
    private hasFails : boolean = (this.getVoltage() > this.getMaxVoltage() || this.getTemp() > this.getMaxTemp() || this.getCurrent() > this.getMaxCurrent());
    private isRunning : boolean = false;

    private voltageValues = [ 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7];
    private currentValues = [9.5, 9.6, 9.7, 9.8, 9.9, 10.0, 10.1, 10.2, 10.3, 10.4, 10.5];
    private tempValues = [27.5, 27.6, 27.7, 27.8, 28.1, 28.2];

    constructor(id: number){
        this.id = id;
        
        this.voltage = 0;
        this.current = 0;
        this.temperature = 0;
        this.charge = 0;
    }


    public getId() : number { return this.id; }
    public getCharge() : number { return this.charge; }
    public getVoltage() : number { return this.voltage; }
    public getCurrent() : number { return this.current; }
    public getTemp() : number { return this.temperature; }
    public getMaxVoltage() : number { return this.MAX_VOLTAGE; }
    public getMinVoltage() : number { return this.MIN_VOLTAGE; }
    public getMaxCurrent() : number { return this.MAX_CURRENT; }
    public getMinCurrent() : number { return this.MIN_CURRENT; }
    public getMaxTemp() : number { return this.MAX_TEMP; }
    public getMinTemp() : number { return this.MIN_TEMP; }
    public getIsStarted() : boolean { return this.isStarted; }
    public getIfFail() : boolean { return this.hasFails; }
    public getIfRunning() : boolean { return this.isRunning; }

    // functions to test error feedback
    //public getVoltage(): number { return this.MAX_VOLTAGE * 2; }
    //public getCurrent(): number { return this.MAX_CURRENT * 2; }
    //public getTemp(): number { return this.MAX_TEMP * 2; }

    public startApp() {
        console.log(this.hasFails)
        this.isRunning = false;

        if (!this.hasFails) {
            this.isStarted = true; 
        }
    }

    public discharge() {
        if (!this.hasFails && this.isFullCharge()) {
             this.isRunning = true;
        }
    }

    

    public getPercentage(): number {
        if(!this.isStarted || this.hasFails) { return 0; }
        let percentage = Math.floor(this.charge);
        
        if (percentage > 100) { percentage = 100; }
        else if (percentage < 0) { percentage = 0; }
        return percentage;
    }


    public changeRandom() {
        if(!this.isStarted || this.hasFails) { return; }

        if (this.getCharge() > 0 && this.getCharge() < 100) {
            this.voltage = this.voltageValues[this.random(this.voltageValues.length)];
            this.current = this.currentValues[this.random(this.currentValues.length)]
            this.temperature = this.tempValues[this.random(this.tempValues.length)];
        } else {
            this.voltage = 0;
            this.current = 0;
            this.temperature = this.tempValues[this.random(this.tempValues.length)];
        }

        if (!this.isRunning) {
            this.charge += this.random(this.MAX_GROWTH);
        }
        else {
            if (this.charge <= 0) { this.charge = 0; }
            else { this.charge -= this.random(this.MAX_GROWTH); }
        }

        if (this.isRunning && this.isStarted && this.getPercentage() === 0) {
            this.isRunning = false;
            this.isStarted = false;
        }
    }

    private random(n: number): number {
        if(!this.isStarted || this.hasFails) { return 0; }
        return Math.floor( Math.random() * n );
    }

    public updateInfo(voltage: number, temperature: number) {
        if(!this.isStarted || this.hasFails) { return; }
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