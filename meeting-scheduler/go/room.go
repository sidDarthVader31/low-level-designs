package main

type Room struct{
  name string
  calendar []Meeting
}



func (room *Room) book(startTime int64, endTime int64) (string, error){
  //add validation
  meeting := Meeting {
    startTime: startTime,
    endTime: endTime,
  }
  room.calendar = append(room.calendar, meeting)
  return room.name, nil
}
