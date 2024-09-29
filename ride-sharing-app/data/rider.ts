import Ride from "./ride";


export default class Rider {

  public name: string;
  public rides[]: Ride;
  public id: number;

  constructor(name: string,id: number){
    this.name = name;
    this.id = Math.random();
    this.rides = [];
  }
}
