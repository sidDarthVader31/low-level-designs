package main

type Sprint struct{
  name string
  startDate int
  endDate int
  tasks []Task
}


func (s *Sprint) addTask(task Task)bool{
  s.tasks = append(s.tasks, task)
  return true
}
func (s *Sprint) removeTask(task Task) bool{
  for i, v := range s.tasks{
    if v.id == task.id{
      //remove element 
      s.tasks = append(s.tasks[:i], s.tasks[i+1:]...)
      return true
    }
  }
  return false
}
