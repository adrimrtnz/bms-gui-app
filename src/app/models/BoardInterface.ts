export class BoardInterface {

    private readonly MIN_VOLTAGE = 0;
    private readonly MAX_VOLTAGE = 5;
    private readonly MIN_CURRENT = 0;
    private readonly MAX_CURRENT = 60;
    private readonly MIN_TEMP = 0;
    private readonly MAX_TEMP = 75;

    private voltageValues = [ 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7];
    private currentValues = [9.5, 9.6, 9.7, 9.8, 9.9, 10.0, 10.1, 10.2, 10.3, 10.4, 10.5];
    private tempValues = [27.5, 27.6, 27.7, 27.8, 28.1, 28.2];

    
}