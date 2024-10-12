package main

import "errors"

type Room struct{
  name string
  calendar []Meeting
}



func (room *Room) book(startTime int64, endTime int64) (string, error){
  //add validation
  isValidBooking, _:= room.isValidBooking(startTime, endTime)
  if !isValidBooking {
    return "", errors.New("The room is not available for the scheduled time")  
  }
  meeting := Meeting {
    startTime: startTime,
    endTime: endTime,
  }
  room.calendar = append(room.calendar, meeting)
  return room.name, nil
}


func(room *Room) isValidBooking(startTime int64, endTime int64) (bool, error) {
  for _,v := range room.calendar {
    //check for overlap
    if (endTime >= v.startTime && endTime <= v.endTime) || (startTime >= v.startTime && startTime <= v.endTime) {
      return false , nil
    }
  }
  return true, nil;
}
