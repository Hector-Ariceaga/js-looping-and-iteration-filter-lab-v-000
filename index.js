function findMatching(drivers, string) {
console.log(string.toLowerCase())
  drivers.filter(function(driver) {return driver.toLowerCase() === string.toLowerCase()})
}