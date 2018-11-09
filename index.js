function findMatching(drivers, string) {
  console.log(drivers)
  console.log(string)
  drivers.filter(function(driver, name) {return `${name}` === `${driver}`})
}