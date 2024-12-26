import { Task, TicketStatus } from "./ticket";

export class Sprint {
  id: number;
  name: string;
  startDate: number;
  endDate: number;
  tickets: Task[]


  constructor(name: string, endDate: number, startDate: number, tasks: Task[]){
    this.id = Math.floor(Math.random() * 11);
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.tickets = tasks
  }
  public addTask(task: Task){
    this.tickets.push(task)
  }

  public printDelayedTickets(){
    for (const task of this.tickets){
      if (task.ticketStatus !== TicketStatus.CLOSED){
        console.log(task)
      }
    }
  }
}



