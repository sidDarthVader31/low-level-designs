package main

import "fmt"




func main(){
  scheduler := Scheduler{
    Rooms: make([]Room, 0),
  }
  fmt.Println(scheduler.book(2349823489, 23423423432))
}
