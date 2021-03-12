const textAreaA = document.getElementById('intervaloTA');
const textAreaB = document.getElementById('intervaloTB');
const form = document.getElementById('form');

function validate(event) {
    event.preventDefault();

    const valueA = textAreaA.value;
    const valueB = textAreaB.value;

    if (valueA.includes(' ') && valueA.includes(',')){
        alert('Separe os números apenas com " " ou " , " no campo Intervalo A \nExemplo: 1,2,3 ou 1 2 3')
        return;
    }

    if (valueB.includes(' ') && valueB.includes(',')){
        alert('Separe os números apenas com " " ou " , " no campo Intervalo B \nExemplo: 1,2,3 ou 1 2 3');
        return;
    }

    form.submit();
}