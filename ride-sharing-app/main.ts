import Ride from "./data/ride"
import Rider from "./data/rider"




const execute = () =>{ 
  //test case 1 
  // 50, 60, 1 

  //create rider 
  let rider1 = new Rider('Siddharth');
  let ride1 =  rider1.createRide(50,60,1);
  const fare = rider1.closeRide(ride1);
  console.log(`rides of rider 1:`, rider1.rides)
  console.log(`rider 1 fare:`, fare);
  //test case 2 
  // 50 , 60 , 2
}


execute()
