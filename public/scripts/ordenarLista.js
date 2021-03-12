const textAreaN = document.getElementById('salaN');
const textAreaS = document.getElementById('salaS');
const form = document.getElementById('form');

function validate(event) {
    event.preventDefault();

    const valueN = textAreaN.value;
    const valueS = textAreaS.value;

    if (valueN.includes(' ') && valueN.includes(',')){
        alert('Separe os números apenas com " " ou " , " no campo Sala N \nExemplo: 1,2,3 ou 1 2 3');
        return;
    }

    if (valueS.includes(' ') && valueS.includes(',')){
        alert('Separe os números apenas com " " ou " , " Sala S \nExemplo: a,b,c ou a b c');
        return;
    }

    form.submit();
}