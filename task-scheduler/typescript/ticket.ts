

export enum TicketType {
  STORY,
  BUG, 
  FEATURE
}

export enum TicketStatus {
  OPEN,
  CLOSED,
  IN_PROGRESS
}

export class Task {
  id : number;
  name: string;
  userId: number;
  ticketType: TicketType;
  ticketStatus: TicketStatus;
  subtract: string

  constructor(id: number, name: string, userId: number, ticketType: TicketType, subtract: string){
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.ticketType = ticketType;
    this.ticketStatus = TicketStatus.OPEN;
    if( this.ticketType == TicketType.STORY){
      this.subtract = subtract
    }
  }

  public updateTicket(ticketStatus: TicketStatus){
    this.ticketStatus = ticketStatus;
  }
  public updateSubtract(subtract: string) {
    if (this.ticketType != TicketType.STORY){
      throw new Error(`invalid ticket type to add a story, ${this.ticketType}`)
    }
    this.subtract = subtract
  }
}
