const button = document.getElementById("icon-dice");
const result = document.getElementById("result");
const adviceNumber = document.getElementById("adviceNumber")

button.addEventListener("click", getDataFromAPI);

async function getDataFromAPI() {
  const url = "	https://api.adviceslip.com/advice";
  let output = " ";
  let num = " ";
  try {
    //renderig the advice
    const response = await fetch(url);
    const adviceData = await response.json();
    const adviceObj = adviceData.slip;
    output = `${adviceObj.advice}`;
    renderAdvice(output);
    
    //rendering the number of the advice(aka the id)
    num = `${adviceObj.id}`;
    console.log(num)
    renderNumberAdvice(num);

    //console.log(output);
  } catch (eroare) {
    console.log(eroare);
  }
}

function renderAdvice(advice) {
  result.textContent = `"${advice}"`;
}
function renderNumberAdvice(num){
  adviceNumber.textContent=`#${num}`;
}

