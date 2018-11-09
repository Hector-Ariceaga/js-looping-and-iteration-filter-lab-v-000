function findMatching(drivers, string) {
console.log(string.toLowerCase())
  const matches = drivers.filter(function(driver) {return driver.toLowerCase() === string.toLowerCase()})
  return matches
}