


function plus() {
    let a = document.getElementsByName("x")[0].value
    console.log(a)
    let b = document.getElementsByName("y")[0].value
    console.log(b)
    
    let c = Number(a) + Number(b)
    console.log(c)

    document.getElementsByName("result")[0].value = c
}


function minus() {
    let a = document.getElementsByName("x")[0].value
    console.log(a)
    let b = document.getElementsByName("y")[0].value
    console.log(b)
    
    let c = Number(a) - Number(b)
    console.log(c)

    document.getElementsByName("result")[0].value = c
}


function multiply() {
    let a = document.getElementsByName("x")[0].value
    console.log(a)
    let b = document.getElementsByName("y")[0].value
    console.log(b)
    
    let c = Number(a) * Number(b)
    console.log(c)

    document.getElementsByName("result")[0].value = c
}


function divide() {
  let a = document.getElementsByName("x")[0].value
   console.log(a)
    let b = document.getElementsByName("y")[0].value
    console.log(b)
    
    if(Number(b) === 0) {
        alert("Error 404: НА 0 ДЕЛЕНИЕ НЕ ВОЗМОЖНО!")
        return;
    }

    let c = Number(a) / Number(b)
    console.log(c)

    document.getElementsByName("result")[0].value = c
}
 




function degree() {
    let a = document.getElementsByName("x")[0].value
    console.log(a)
    let b = document.getElementsByName("y")[0].value
    console.log(b)
    
    let c = Number(a) ** Number(b)
    console.log(c)

    document.getElementsByName("result")[0].value = c
}


