import Ride, { RIDESTATUS } from "./ride";


export default class Rider {

  public name: string;
  public rides: Ride[];
  public id: number;
  public withdrawnRides: number; // to store withdrawn ride count
  public isRiderBusy: boolean;
  constructor(name: string){
    this.name = name;
    this.id = Math.round(Math.random()*10);
    this.rides = [];
    this.isRiderBusy = false;
  }

  public createRide(origin: number, destination: number, noofRiders: number): number {
    if(this.isRiderBusy){
      throw new Error('Cannot book two rides simultaneously');
    }
    let ride = new Ride(Math.round(Math.random()*10), origin, destination, noofRiders);
    this.rides.push(ride);
    this.isRiderBusy = true;
    return ride.id;
  }

  public updateRide(rideUpdate: Ride): void {
    let ride = this.getRide(rideUpdate.id);
    if(!ride){
      throw new Error("Invalid ride");
    }

    //update ride 
    ride.id = rideUpdate.id;
    ride.origin = rideUpdate.origin;
    ride.destination = rideUpdate.destination;
    ride.noOfRiders = rideUpdate.noOfRiders;
  }
  public closeRide(id: number): number {
    //check for invalid id or invalid ride todo 
    let ride = this.getRide(id);
    if(!ride || ride.rideStatus === RIDESTATUS.COMPLETED || ride.rideStatus === RIDESTATUS.WITHDRAWN){
      throw new Error('Ride does not exist or has been completed or withdrawm')
    }
    this.isRiderBusy = false;
    return ride.closeRide(this.rides.length - this.withdrawnRides >10);
  }

  public withdrawRide(id: number): void {
    let ride = this.getRide(id);
    if(!ride || ride.rideStatus === RIDESTATUS.COMPLETED || ride.rideStatus === RIDESTATUS.WITHDRAWN){
      throw new Error(`Ride is invalid or ${ride.rideStatus.toLowerCase()}`)
    }
    this.withdrawnRides = this.withdrawnRides +1;
    ride.rideStatus = RIDESTATUS.WITHDRAWN;
  }

  private getRide(rideId: number): Ride | undefined {
    let ride = this.rides.filter((ride) =>{
      return ride.id === rideId;
    });
    return ride.length > 0 ? ride[0] : undefined
  }
}
