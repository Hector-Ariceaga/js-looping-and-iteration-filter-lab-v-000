function findMatching(drivers, string) {
  console.log(drivers)
  console.log(string)
  drivers.filter(function(driver, string) {return driver == string})
}