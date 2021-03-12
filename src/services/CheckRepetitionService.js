module.exports = class CheckRepetitionService {
    run({ intervaloA, intervaloB }) {
        let arrayA = [];
        let arrayB = [];
        let valuesA = [];
        let valuesB = [];

        if (intervaloA.includes(',')) valuesA = intervaloA.split(',');
        if (intervaloB.includes(',')) valuesB = intervaloB.split(',');

        if (intervaloA.includes(' ')) valuesA = intervaloA.split(' ');
        if (intervaloB.includes(' ')) valuesB = intervaloB.split(' ');

        if (intervaloA.length === 1) {
            valuesA = intervaloA[0];
            arrayA.push(Number(valuesA));
        } else {
            valuesA.forEach(element => {
                if (element === '') {
                } else {
                    const elementInNumber = Number(element);
                    arrayA.push(elementInNumber);
                }
            });
        }

        if (intervaloB.length === 1) {
            valuesB = intervaloB[0];
            arrayB.push(Number(valuesB));
        } else {
            valuesB.forEach(element => {
                if (element === '') {
                } else {
                    const elementInNumber = Number(element);
                    arrayB.push(elementInNumber);
                }
            });
        }

        if (arrayA[0] === 0) arrayA.shift();
        if (arrayB[0] === 0) arrayB.shift();

        console.log(arrayA, arrayB);
            
        for (let value in arrayA) {
            if (arrayB.includes(arrayA[value])) return {
                message: "Possui números iguais",
                type: 'error'
            }
        }

        return {
            message: "Não possui números iguais",
            type: 'accept'
        }
    }
}