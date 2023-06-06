function checkAttendance(word) {
  const inputWords = ['minahal', 'nasaktan', 'nagmahal']
  const lowerTrimmed = word.toLowerCase().trim()
  let result = 'Absent'

  if (inputWords.includes(lowerTrimmed)) {
    result = 'Present'
  }
  return result
}

console.log(checkAttendance('   Minahal'))
console.log(checkAttendance('nasaktan    '))
console.log(checkAttendance('NAGMAHAL'))
console.log(checkAttendance('N agmahal   '))
console.log(checkAttendance('present'))
console.log(checkAttendance('    '))