import Ride from "./data/ride"




const execute = () =>{ 
  //test case 1 
  // 50, 60, 1 
  //
  let ride = new Ride(1, 50,60,1);
  console.log(`amonut for ride1:`, ride.calculateRide());

  //test case 2 
  // 50 , 60 , 2
  let ride2 = new Ride(2,50,60,2);
  console.log(`amount for ride 2:`, ride2.calculateRide())
}


execute()
