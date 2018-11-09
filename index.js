function findMatching(drivers, string) {
  const matches = drivers.filter(function(driver) {return driver.toLowerCase() === string.toLowerCase()})
  return matches
}

