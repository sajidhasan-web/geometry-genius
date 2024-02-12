function triangleAreaCalculate() {
  
   const triangleBase = getInputValue('triangle-base')
   const triangleHight = getInputValue('triangle-hight')
   const area = 0.5 * triangleBase * triangleHight
   const triangleDisplay = areaDisplay('triangleDisplay', area)

}


function getInputValue(elementValue) {
  const element = document.getElementById(elementValue);
  const elementText = element.value;
  const result = parseFloat(elementText);
  return result;
}

function areaDisplay(elementValue, area){
    const findId = document.getElementById(elementValue)
    findId.innerText = area
   
}




function mouseOver(){
   const mouseOver = document.getElementById('triangleCard').style.background = 'pink';
 
}

function mouseOut() {
    const mouseOut = document.getElementById('triangleCard').style.background = 'white';
  }



// function triangleAreaCalculate() {
  
//     // triangleBase
//     const inputValue = document.getElementById('triangle-base')
//      const inputText = inputValue.value 
//      const base = parseFloat(inputText)


//     // triangleHight
//     const inputValue2 = document.getElementById('triangle-hight')
//      const inputText2 = inputValue2.value 
//      const hight = parseFloat(inputText2)

//      const area = 0.5 * base * hight
     

//     //  display triangle value

//     const displaySpan = document.getElementById('triangleDisplay')
//     displaySpan.innerText = area
     
// }


