export interface IDelay {
    delay(seconds: number, callback: () => void);
}
