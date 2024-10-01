import Ride from "./ride";


export default class Rider {

  public name: string;
  public rides: Ride[];
  public id: number;
  public withdrawnRides: number; // to store withdrawn ride count
  constructor(name: string){
    this.name = name;
    this.id = Math.random();
    this.rides = [];
  }

  public createRide(origin: number, destination: number, noofRiders: number): number {
    let ride = new Ride(Math.random(), origin, destination, noofRiders);
    this.rides.push(ride);
    return ride.id;
  }

  public closeRide(id: number): number {
    //check for invalid id or invalid ride todo 
    let ride =  this.rides.filter((ride) =>{
      return ride.id === id;
    });
    if(ride.length == 0){
      throw new Error('Invalid ride');
    }
    return ride[0].closeRide(this.rides.length - this.withdrawnRides >10);
  }
}
