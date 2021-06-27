export class TempSensor {

    private readonly MAX_TEMP = 100

    private id: number;
    private temp: number;

    constructor(id: number) {
        this.id = id;
        this.temp = 0;
    }

    public getId(): number { return this.id; }
    public getTemp(): number { return this.temp > this.MAX_TEMP ? this.MAX_TEMP : this.temp; }

    public getPercentage(): number {
        let percentage = Math.floor(this.temp / this.MAX_TEMP * 100);
        
        if (percentage > 100) { percentage = 100; }
        return percentage;
    }

    public changeRandom() {
        this.temp += this.random(2);
    }

    private random(n: number): number {
        return Math.floor( Math.random() * n );
    }

    public updateInfo(newTemp: number) {
        this.temp = newTemp;
    }
}