package main

import "fmt"




func main(){
  room1 := Room{
    name: "Madrid",
    calendar: []Meeting{},
  }
  room2 := Room{
    name: "Barcelona",
    calendar: []Meeting{},
  }
  room3 := Room{
    name: "Munich",
    calendar: []Meeting{},
  }
  roomArr := []Room{room1, room2, room3};
  scheduler := Scheduler{
    Rooms: roomArr,
  }
  //first positive case 
  fmt.Printf("Booking a meeting between 1 and 100\n" )
  roomName1, err := scheduler.book(1, 100)
  if(err != nil){
    fmt.Printf("Error while scheduling room: %v\n", err)
  }else{
  fmt.Printf("Booked room: %s\n", roomName1);
  }

  fmt.Println("#######################")
  fmt.Printf("schedueer state now %v\n", scheduler.Rooms)

  fmt.Println("Booking a meeting starting between 1 and 100")
  roomName2, err2 := scheduler.book(50, 200)
  if(err2 != nil){
    fmt.Printf("error while scheduling a meeting: %v\n", err)
  }else{
  fmt.Printf("booked room : %s \n", roomName2)
  }
}
