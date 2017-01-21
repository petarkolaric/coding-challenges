let cake = n => {


  for (let i=0; i<n; i++) {
    let startingWhitespace = " ".repeat((n-i)*2)
    let layerStartingWhitespace = " ".repeat((n-i)*2-1)
    let whitespace = " ".repeat(5+i*4)

    let layer = "-".repeat(5+i*4)
    if(i != n-1){
      layer = layer + "--"
    } else {
      layerStartingWhitespace = layerStartingWhitespace + " "
    }
    if(i == 0){
      console.log(startingWhitespace + " _|_|_")
    }
    console.log(startingWhitespace + "|" + whitespace + "|")
    console.log(layerStartingWhitespace + "+" + layer + "+")
  }
}

cake(5)
