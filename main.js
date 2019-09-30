function calculateGPA() {
  const gpaOne= parseFloat(document.querySelector('#gpaOne').value)
  const gpaTwo= parseFloat(document.querySelector('#gpaTwo').value)
  const gpaThree = parseFloat(document.querySelector('#gpaThree').value)
  const gpaTotal = gpaOne + gpaTwo + gpaThree
  const gpaAverage = gpaTotal/3
  
  document.querySelector('#averageGPA').innerHTML = gpaAverage.toFixed(2)

}
document.querySelector('#Calculate').addEventListener('click', calculateGPA)