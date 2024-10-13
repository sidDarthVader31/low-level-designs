import { Room } from "./room";
import { Scheduler } from "./scheduler";
const execute = () =>{

  //add few rooms 
  const room1 = new Room("madrid");
  const room2 = new Room("barcelona");
  const room3 = new Room("munich");
  const roomArr  = [room1, room2, room3];
  //add scheduler 
  const scheduler = new Scheduler(roomArr);
  console.log(`boooking 1 `);
  console.log(`booking 1 room :`, scheduler.book(1, 100));

  console.log(`booking 2`);
  console.log(`booking at time between 1 and 100`)
  console.log(`booking 2 room :`, scheduler.book(50, 200));
}

execute();
