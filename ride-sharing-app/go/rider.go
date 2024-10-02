package main

import (
	"errors"
	"fmt"
)
type Rider struct{
  Id int
  Name string
  withdrawnRides int
  Rides []Ride
  IsRiderAvailable bool
}

func (rider *Rider) CreateRide(source int, destination int, noOfRiders int, id int) (Ride, error){
  if !rider.IsRiderAvailable {
    return  Ride{}, errors.New("Cannot create multiple rides at a time")
  }
  ride := Ride {
    Id: id,
    Source: source,
    Destination: destination,
    noOfRiders: noOfRiders,
    RideStatus: SCHEDULED,
  }
  rider.Rides = append(rider.Rides, ride)
  return ride, nil
}

func (rider *Rider) UpdateRide(ride Ride) (bool, error){
  rideReturned, err := rider.getRide(ride.Id)
  if(err != nil){
    return false, err
  }
  rideReturned.Source = ride.Source
  rideReturned.Destination = ride.Destination
  rideReturned.noOfRiders = ride.noOfRiders
  return true, nil
}


func (rider *Rider) WithDrawnRide(id int) (bool, error) {
  returnedRide, err := rider.getRide(id)
  if(err != nil){
    return false, err
  }
  if returnedRide.RideStatus != SCHEDULED {
    return false, errors.New("Cannot withdrawn ride, not scheduled")
  }
  rider.withdrawnRides = rider.withdrawnRides + 1
  returnedRide.RideStatus = WITHDRAWN
  rider.IsRiderAvailable = true
  return true, nil;
}

func (rider *Rider) CloseRide(id int) (float32, error) {
  returnedRide, err := rider.getRide(id)
  if(err != nil){
    return 0.0, err
  }
  if returnedRide.RideStatus != SCHEDULED {
    return 0.0, errors.New("Invalid ride to close")
  }
  returnedRide.RideStatus = COMPLETED
  rider.IsRiderAvailable = true
  return  returnedRide.CloseRide(len(rider.Rides) - rider.withdrawnRides >10), nil
}

func (rider *Rider) getRide(id int) (Ride, error) {
  for i:=0; i< len(rider.Rides); i++{
    if rider.Rides[i].Id == id{
      return rider.Rides[i], nil
    }
  }
  return Ride{}, errors.New("Ride not found")
}
