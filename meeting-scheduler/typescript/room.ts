import { Meeting } from "./meeting";



export class Room {
  public name: string;
  public  calendar : Meeting[];

  constructor(name: string) {
    this.name = name;
  }
   public book(startTime: number, endTime: number): string {
    //add validation
    if(!this.isBookingValid(startTime, endTime)){
      throw new Error('Meeting not available at this moment')
    }
    let meeting = new Meeting(startTime, endTime);
    this.calendar.push(meeting);
    return this.name;
  }

  private isBookingValid(startTime: number, endTime: number): boolean{
    for(const slot of this.calendar){
      if((startTime <= slot.startTime && startTime > slot.endTime) || (endTime>= slot.startTime && endTime <= slot.endTime)){
        return false;
      }
    }
    return true;
  }
}
