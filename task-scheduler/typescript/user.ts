import { Sprint } from "./sprint";
import { Task, TicketStatus } from "./ticket";

export class User {
  id : number;
  name: string;
  tickets: Task[];
  sprints: Sprint[];

  constructor(id: number, name: string, tickets: Task[], sprints: Sprint[]){
    this.id = id;
    this.name = name;
    this.tickets= tickets;
    this.sprints = sprints;
  }

  public updateTaskStatus(taskId: number, status: TicketStatus): boolean{
    for(let i =0;i< this.tickets.length;i++){
      if (this.tickets[i].id == taskId){
        this.tickets[i].ticketStatus = status
        return true;
      }
    }
    return false;
  }
}
