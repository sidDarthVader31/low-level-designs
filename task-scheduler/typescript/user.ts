import { Sprint } from "./sprint";
import { Task, TicketStatus, TicketType } from "./ticket";


enum IdType{
  SPRINT= "SPRINT",
  TASK = "TASK"
}
export class User {
  id : number;
  name: string;
  tickets: Task[];
  sprints: Sprint[];

  constructor(name: string, tickets: Task[], sprints: Sprint[]) {
    this.id = Math.floor(Math.random() * 11);
    this.name = name;
    this.tickets= tickets;
    this.sprints = sprints;
  }
  public printDelayedTasks(sprintId: number): void {
    console.log(`printing delayed tasks`)
    const sprint = this.checkAndGet(sprintId, IdType.SPRINT) as Sprint;
    if(!sprint){
      throw new Error('this sprint does not belong to this user');
    }
    for(let i = 0; i< sprint.tickets.length;i++){
      const ticket = sprint.tickets[i];
      if(ticket.ticketStatus != TicketStatus.CLOSED){
        console.log(ticket)
      }
    }
  }
  public createTask(name: string, ticketType:TicketType, subtract: string): Task {
    const task = new Task(name,this.id,ticketType,subtract)
    this.tickets.push(task)
    return task
  }
  public changeStatus(taskId: number, status: TicketStatus): boolean {
    const task = this.checkAndGet(taskId, IdType.TASK) as Task;
    if(!task){
      throw new Error("task does not belong to user")
    }
    task.updateStatus(status)
    return true
  }
  public printSprintDetails(sprintId: number): void {
    console.log(`printing sprint details`);
    const sprint = this.checkAndGet(sprintId, IdType.SPRINT) as Sprint;
    if(!sprint){
      console.log(`invalid sprint id`);
      return;
    }
    console.log(sprint)
  }
  public printUserTasks():void{
    console.log(`printing user tasks`)
    for(const task of this.tickets){
      console.log(task)
    }
  }
  public removeTaskFromSprint(sprintId: number, taskId: number){
    const sprint = this.checkAndGet(sprintId, IdType.SPRINT) as Sprint;
    const task = this.checkAndGet(taskId, IdType.TASK) as Task;
    if(!sprint || !task){
      throw new Error("Invalid sprint or task id provided")
    }
    let index = -1;
    for(let i = 0; i < sprint.tickets.length;i++){
      if(sprint.tickets[i].id == taskId){
        index = i;
        break;
      }
    }
    if (index == -1 ){
      throw new Error("task does not belong to sprint");
    }
    const removedTicket =sprint.tickets.splice(index, index)
    console.log('removed ticket::', removedTicket)
  }
  
  public addTaskToSprint(sprintId: number, task: Task){
    const sprint = this.checkAndGet(sprintId, IdType.SPRINT) as Sprint;
    const task1 = this.checkAndGet(task.id, IdType.TASK) as Task; 
    if(!sprint || !task1) {
      throw new Error("sprint or task does not belong to the user");
    }
    sprint.addTask(task)
  }

  public createSprint(name: string, startDate: number, endDate: number, tasks: Task[]):Sprint{
    const sprint = new Sprint(name, endDate,startDate, tasks);
    this.sprints.push(sprint)
    return sprint;
  }

  private checkAndGet(id: number, type:IdType):Sprint | Task| undefined {
    const arr = type == IdType.SPRINT ? this.sprints : this.tickets;
    for(let i = 0;i < arr.length; i++){
      if(id == arr[i].id){
        return arr[i];
      }
    }
    return undefined;
  }
}
