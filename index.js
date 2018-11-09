function findMatching(drivers, string) {
console.log(string.toLowerCase())
  drivers.filter(function(driver, string) {return driver.toLowerCase() === string.toLowerCase()})
}