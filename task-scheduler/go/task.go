package main

import "fmt"
type TicketType string
const (
  STORY     TicketType    = "STORY"
  FEATURE   TicketType    = "FEATURE"
  BUG       TicketType    = "BUG"
)

type TicketStatus string
  const (
  OPEN TicketStatus = "OPEN"
  DONE TicketStatus = "DONE"
  IN_PROGRESS TicketStatus = "IN_PROGRESS"
)
func (t TicketStatus) isValid()bool{
  switch t{
  case OPEN, DONE, IN_PROGRESS:
  return true
  default:
  return false
  }
}

func (t TicketType) isValid()bool{
  switch t{
  case STORY, FEATURE, BUG:
  return true
  default:
    return false
  }
}

type Task struct {
  id int
  name string
  userId string
  status TicketStatus
  subtract string
  ticketType TicketType 
}


func(t *Task)addSubtract(substract string) bool{
  if(t.ticketType != STORY){
    return false 
  }
  t.subtract = substract
  return true
}
func(t *Task) updateStatus(status TicketStatus) bool{
  if !status.isValid(){
    return false
  }
  t.status = status
  return true
}





