import { Room } from "./room";

export class Scheduler {
  private readonly rooms: Room[];
  constructor(){
    this.rooms = [];
  }

  public book(startTime: number, endTime: number): string {
    let room = this.rooms.pop();
    if(!room){
      throw new Error('No rooms available')
    }
    return room?.book(startTime, endTime)
  }
}
