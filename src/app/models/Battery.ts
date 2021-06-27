export class Battery {

    private readonly TOTAL_VOLTAGE = 40;

    private id: number;
    private voltage: number;
    private temperature1: number;
    private temperature2: number;


    constructor(id: number){
        this.id = id;
        
        this.voltage = 0;
        this.temperature1 = 0;
        this.temperature2 = 0;
    }


    public getId(): number { return this.id; }
    public getVoltage(): number { return this.voltage > this.TOTAL_VOLTAGE ? this.TOTAL_VOLTAGE : this.voltage; }
    public getTemperature1(): number { return this.temperature1; }
    public getTemperature2(): number { return this.temperature2; }

    public getPercentage(): number {
        let percentage = Math.floor(this.voltage / this.TOTAL_VOLTAGE * 100);
        
        if (percentage > 100) { percentage = 100; }
        return percentage;
    }

    public changeRandom() {
        this.voltage += this.random(2);
        this.temperature1 += this.random(2);
        this.temperature2 += this.random(2);
    }

    private random(n: number): number {
        return Math.floor( Math.random() * n );
    }

    public updateInfo(voltage: number, temperature1: number, temperature2: number) {
        this.voltage = voltage;
        this.temperature1 = temperature1;
        this.temperature2 = temperature2;
    }

    public isBatteryLow(): boolean {
        return this.getPercentage() < 75;
    }
}