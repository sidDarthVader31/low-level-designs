package main

import (
	"errors"
	"fmt"
)

type User struct{
  id string
  name string
  tickets  []Task
  sprints []Sprint
}


func (u *User) createTask(name string, substract string, ticketType TicketType) Task{
  task := Task{
    id: 1,
    name: name,
    userId: u.id,
    status: OPEN,
    subtract: substract,
    ticketType: ticketType,
  }
  u.tickets = append(u.tickets, task)
  return task
}



func(u *User) updateStatus(status TicketStatus, taskId int) error{
  isPresent := false
  var task Task
  for _,v := range u.tickets{
    if v.id == taskId{
      isPresent = true
      task = v
      break;
    }
  }
  if isPresent == false{
    return errors.New("task not part of user tickets")
  }
  task.updateStatus(status)
  return nil
}


func( u *User) printUserTasks(){
  for _,v := range u.tickets{
    fmt.Println(v)
  }
}

func (u *User)sprintDetails(sprintId int) error{
  isPresent := false
  var sprint Sprint
  for _,v:=range u.sprints{
    if v.id == sprintId{
      isPresent = true
      sprint = v
      break
    }
  }
  if isPresent == false{
    return errors.New("sprint not found in user's sprint ")
  }
  fmt.Println("sprint details:", sprint)
  return nil
}

func(u *User) printDelayedTasks(sprintId int){
  var sprint Sprint
  for _, v:= range u.sprints{
    if v.id == sprintId{
      sprint = v
    }
  }
  sprint.printDelayTasks()
}
