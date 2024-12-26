

export enum TicketType {
  STORY = "STORY",
  BUG = "BUG",
  FEATURE = "FEATURE"
}

export enum TicketStatus {
  OPEN = "OPEN",
  CLOSED ="CLOSED",
  IN_PROGRESS= "IN_PROGRESS"
}

export class Task {
  id : number;
  name: string;
  userId: number;
  ticketType: TicketType;
  ticketStatus: TicketStatus;
  subtract: string

  constructor(name: string, userId: number, ticketType: TicketType, subtract: string){
    this.id = Math.floor(Math.random() * 11);
    this.name = name;
    this.userId = userId;
    this.ticketType = ticketType;
    this.ticketStatus = TicketStatus.OPEN;
    if( this.ticketType == TicketType.STORY){
      this.subtract = subtract
    }
  }

  public updateStatus(ticketStatus: TicketStatus){
    this.ticketStatus = ticketStatus;
  }
  public updateSubtract(subtract: string) {
    if (this.ticketType != TicketType.STORY){
      throw new Error(`invalid ticket type to add a story, ${this.ticketType}`)
    }
    this.subtract = subtract
  }
}
