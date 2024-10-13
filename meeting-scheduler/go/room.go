package main
type Room struct{
  name string
  calendar []Meeting
}



func (room *Room) book(startTime int64, endTime int64) (bool){
  //add validation
  isValidBooking, _:= room.isValidBooking(startTime, endTime)
  if isValidBooking == false {
    return false;
  }
  meeting := Meeting {
    startTime: startTime,
    endTime: endTime,
  }
  room.calendar = append(room.calendar, meeting)
  return true
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
