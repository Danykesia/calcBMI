// Validar campos
/*
  Apagar campos quando calcular;
  Escrever aviso de campo inválido
  Estilizar resultado
*/
function BmiCalc() {
  const button = document.querySelector('.btn');
  const result = document.querySelector('.result');

  button.addEventListener('click', function () {
    const dataWrapper = document.querySelector('.data-wrapper')
    const weightInput = document.querySelector('.weight-input');
    const heightInput = document.querySelector('.height-input');
    const resultText = document.querySelector('.result-text');
    const resultImg = document.querySelector('.result-img');

    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    const bmi = getBmi(weight, height);
    const indexBmi = getIndexBmi(bmi);

    const msg = `Your BMI is ${bmi} (${indexBmi})`;

    if ((!weight || !height) || (weight < 1 || height < 1)) {
      setResult('Invalid data', false);
    } else {
      dataWrapper.style.display = 'none';
      button.style.display = 'none'
      setResult(msg, true)
    }

    weightInput.value = '';
    heightInput.value = '';

    function getBmi(weight, height) {
      const bmi = weight / (height / 100) ** 2;
      return bmi.toFixed(2)
    }

    function getIndexBmi(bmi) {
      const img = resultImg

      const index = [
        'Underweight', 'Normal weight', 'Overweight', 'Obesity'
      ];

      if (bmi < 18.5) {
        img.src = "/img/underweight.png";
        return index[0]
      }
      if (bmi >= 18.5 && bmi < 24.9)  {
        img.src = "/img/normal-weight.png";
        return index[1]
      }
      if (bmi >= 24.9 && bmi < 29.9) {
        img.src = "/img/overweight.png";
        return index[2]
      }
      if (bmi >= 29.9) {
        img.src = "/img/obesity.png";
        return index[3]
      }
    }

    function setResult(msg, isValid) {
      const p = resultText

      if (isValid) {
        p.classList.add('valid');
      } else {
        p.classList.add('invalid');
      }

      p.innerHTML = msg
    }
  })
}
BmiCalc()