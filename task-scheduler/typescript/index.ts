import { TicketStatus, TicketType } from "./ticket";
import { User } from "./user";



const user1 = new User("developer",[],[]);
const user2 = new User("tester",[],[]);


const ticket11= user1.createTask("create api11", TicketType.FEATURE, "subtract");
const ticket22 = user2.createTask("create api21", TicketType.FEATURE,"")

console.log(`user1:`, user1)
console.log(`user2:`, user2)



//create sprints 
const sprint11 = user1.createSprint("sprint 11", 1,10,[ticket11]);
const sprint22 = user2.createSprint("sprint 22", 10, 20, [ticket22])

console.log(`sprint 1:`, sprint11)
console.log(`sprint 2:`, sprint22);
//update ticket status 

user1.changeStatus(ticket11.id, TicketStatus.IN_PROGRESS)

console.log(`user1:`, user1)


//user1 add task to sprint  
const task12 = user1.createTask("create api 12", TicketType.STORY,"this is a subtract");
console.log(`task 12::`, task12)
user1.addTaskToSprint(sprint11.id, task12)
console.log(`user 1 now::`, JSON.stringify((user1)))
// remove task from sprint 
user1.removeTaskFromSprint(sprint11.id, task12.id)
console.log(`user final:`, JSON.stringify(user1))

