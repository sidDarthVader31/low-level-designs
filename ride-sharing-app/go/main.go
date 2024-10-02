package main;
import ("fmt")
func main(){

  rider1 := Rider{
    Name: "Siddharth",
    Id :1,
    IsRiderAvailable: true,
    Rides: make([]Ride, 0),
  }
  fmt.Println("rider1: %v", rider1)
  ride1, _:= rider1.CreateRide(50, 60,1,10)
  fmt.Println("ride1: %v", ride1)
  fare, _ := rider1.CloseRide(ride1.Id)
  fmt.Println("fare for ride1: %f ", fare )
}
