package main


type Scheduler struct{
  Rooms []Room
}


func (scheduler Scheduler) book(startTime int64, endTime int64) (string, error) {
  room := scheduler.Rooms[len(scheduler.Rooms)-1];
  return room.book(startTime, endTime)
}
