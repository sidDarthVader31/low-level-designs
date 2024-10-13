import { Scheduler } from "./scheduler";



const scheduler = new Scheduler();
const room = scheduler.book(12341231, 123123123123);
console.log(`room :`, room);
