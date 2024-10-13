import { Room } from "./room";

export class Scheduler {
  private readonly rooms: Room[];
  constructor(rooms : Room[]){
    this.rooms = rooms;
  }

  public book(startTime: number, endTime: number): string {
    for(const room of this.rooms){
      const flag = room.book(startTime, endTime);
      if(flag){
        return room.name;
      }
    }
    throw new Error("All rooms are currently occupied")
  }

  //additional functionality to add a new room 
  public addRoom(room: Room): void {
    this.rooms.push(room)
  }
}
