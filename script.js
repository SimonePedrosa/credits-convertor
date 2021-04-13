// Credits Currency Value by https://aminoapps.com/c/star-wars/page/blog/1-credit-to-dollar-conversion/VvF7_u74DBzzDBY3m7b4RK1MWomaZ

function convertMoney() {
 
  var moneyToConvert = document.getElementById('moneyToConvert')

  if (moneyToConvert.value.length == 0 || moneyToConvert.value <= 0) {
    res.innerHTML=(`<br> Sorry! You don't have money to convert`)
  } else {
    if (document.getElementById('dollar').checked) {
      var resultDollar = (moneyToConvert.value / 4.075).toFixed(0)
      res.innerHTML=(`<br> Your Credits Amount Is: ${resultDollar}`)
    } else { 
      if (document.getElementById('euro').checked) {
        var euroToDollar = (moneyToConvert.value * 1.178)
        var resultEuro = (euroToDollar / 4.075).toFixed(0)
        res.innerHTML=(`<br> Your Credits Amount Is: ${resultEuro}`)
      } else {
        if (document.getElementById('real').checked) {
        var realToDollar = (moneyToConvert.value * 0.175)
        var resultReal = (realToDollar / 4.075).toFixed(0)
        res.innerHTML=(`<br> Your Credits Amount Is: ${resultReal}`)
        }

      }

    }
  }
}

