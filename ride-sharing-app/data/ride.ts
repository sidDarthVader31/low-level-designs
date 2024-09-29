
export enum RIDESTATUS {
  SCHEDULED = 'SCHEDULED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}
const RIDE_AMOUNT = 20;
export default class Ride {
  public id: number;
  public origin: number;
  public destination: number;
  public rideAmount: number;
  public rideStatus: RIDESTATUS;
  public noOfRiders: number;

  constructor(id: number, origin: number, destination: number, noofSeats: number){
    this.id = id;
    this.origin = origin;
    this.destination = destination;
    this.noOfRiders = noofSeats;
    this.rideStatus = RIDESTATUS.SCHEDULED;
  }
  public calculateRide(): number {
    return  (this.destination - this.origin) * this.noOfRiders * (this.noOfRiders >=2 ? 0.75: 1) * RIDE_AMOUNT;
    
  }
}
