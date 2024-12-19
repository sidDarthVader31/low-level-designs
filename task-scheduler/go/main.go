package main

import "fmt"


func main(){

  //create a user 

  dev1 := User{
    name: "sid",
    id: "1",
    tickets: []Task{},
    sprints: []Sprint{},
  }
  dev1.createTask("create dashboard api", FEATURE, 1)
  dev1.createTask("create analytics story", STORY, 2)

  dev1.createSprint(1, "sprint1" ,10, 100, dev1.tickets)

  fmt.Println("updating ticket status")
  dev1.updateStatus(DONE, 1)

  fmt.Println("printing sprint details")
  dev1.sprintDetails(1)

  fmt.Println("printlnl user tasks")
  dev1.printUserTasks()

  fmt.Println("printing delayed tasks")
  dev1.printDelayedTasks(1)
}
