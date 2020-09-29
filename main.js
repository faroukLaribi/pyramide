var n = prompt();
while(n > 25) {
  n = prompt()
}
var result = ""
for (var i = 1; i <= n ; i++) {
  var diezNumber = 2 * i - 1
  var spaceNumber = n - i
  var space = ""
  for (var j = 0; j < spaceNumber; j++) {
    space += " "
  }
  var diez = ""
  for (var j = 0; j < diezNumber; j++) {
    diez += "#"
  }
  result += space + diez + space + "\n"
}
console.log(result)
