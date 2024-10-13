package main

import (
	"errors"
)


type Scheduler struct{
  Rooms []Room
}


func (scheduler *Scheduler) book(startTime int64, endTime int64) (string, error) {
  for i := range (scheduler.Rooms){
    room := &scheduler.Rooms[i];
    flag := room.book(startTime, endTime);
    if(flag == true){
      return room.name, nil;
    }
  }
  return "",errors.New("Cannot book room for this time")
}
