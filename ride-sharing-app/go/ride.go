package main

import "fmt"

type Ride struct {
  Id int
  Source int
  Destination int
  RideAmount int
  RideStatus RIDESTATUS
  noOfRiders int
}

const RIDE_AMOUNT = 20
type RIDESTATUS string
const (
  SCHEDULED RIDESTATUS = "SCHEDULED"
  COMPLETED RIDESTATUS = "COMPLETED"
  WITHDRAWN RIDESTATUS = "WITHDRAWN"
)

func (ride *Ride) CloseRide(isPreferredRider bool) float32{
  ride.RideStatus = COMPLETED;
  return ride.calculateRide(isPreferredRider)
}


func getMultiplier(isPreferredRide bool, noOfRiders int) float32{
  if noOfRiders >=2 && isPreferredRide{
    return 0.5
  }else if isPreferredRide {
    return 0.75
  }else{
    return 1
  }
}

func (ride *Ride) calculateRide(isPreferredRider bool) float32{
  multiplier := getMultiplier(isPreferredRider, ride.noOfRiders)
  return (float32(ride.Destination) - float32(ride.Source) ) * float32(ride.noOfRiders) * multiplier * RIDE_AMOUNT
}
