import { Meeting } from "./meeting";



export class Room {
  public name: string;
  public  calendar : Meeting[];

  constructor(name: string) {
    this.name = name;
  }
   public book(startTime: number, endTime: number): string {
    //add validation
    let meeting = new Meeting(startTime, endTime);
    this.calendar.push(meeting);
    return this.name;
  }
}
