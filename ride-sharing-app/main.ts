import Rider from "./data/rider"
const execute = () =>{ 
  //test case 1 
  // 50, 60, 1 

  //create rider 
  let rider1 = new Rider('Siddharth');
  let rideId =  rider1.createRide(50,60,1);
  const fare = rider1.closeRide(rideId);
  console.log(`rides of rider 1:`, rider1.rides)
  console.log(`rider 1 fare:`, fare);
  //test case 2 
  // 50 , 60 , 2
  let rider2 = new Rider('sid1');
  let rideId2_1 = rider2.createRide( 50,60,2);
  const fare2 = rider2.closeRide(rideId2_1);
  console.log(`rides of rider2 :`, rider2.rides);
  console.log(`rider 2 fair:`, fare2);
}


execute()
