function findMatching(drivers, string) {
  console.log(drivers)
  drivers.filter(function(driver, name) {return `${name}` === `${driver}`})
}