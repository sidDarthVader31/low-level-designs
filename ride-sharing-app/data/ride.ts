
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

  public closeRide(isPreferredRider: boolean): number {
     this.rideStatus = RIDESTATUS.COMPLETED;
    return this.calculateRide(isPreferredRider);
  }
  private calculateRide(isPreferredRider: boolean): number {
    const multiplier = this.getMultiplier(isPreferredRider);
    return  (this.destination - this.origin) * this.noOfRiders * multiplier* RIDE_AMOUNT;
  }
  private getMultiplier(isPreferredRider: boolean) : number {
    if(this.noOfRiders >=2 && isPreferredRider){
      return 0.5;
    }
    else if(isPreferredRider){
      return 0.75;
    }
    else if(this.noOfRiders >=2){
      return 0.75;
    }
    else{
      return 1;
    }
  }
}
