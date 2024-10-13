import { Meeting } from "./meeting";

interface IRoom{
  book(startTime: number, endTime: number): boolean;
}

export class Room implements IRoom{
  public name: string;
  public  calendar : Meeting[];

  constructor(name: string) {
    this.name = name;
    this.calendar = [];
  }
   public book(startTime: number, endTime: number): boolean {
    //validation
    if(!this.isBookingValid(startTime, endTime)){
      return false;
    }
    let meeting = new Meeting(startTime, endTime);
    this.calendar.push(meeting);
    return true;
  }

  private isBookingValid(startTime: number, endTime: number): boolean{
    for(const slot of this.calendar){
      if((startTime >= slot.startTime && startTime <= slot.endTime) || (endTime >= slot.startTime && endTime <= slot.endTime)){
        return false;
      }
    }
    return true;
  }
}
