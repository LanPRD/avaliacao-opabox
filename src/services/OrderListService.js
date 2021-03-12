module.exports = class OrderListService {
    run({ salaN, salaS }) {
        let arrayN = [];
        let arrayS = [];
        let valuesN = [];
        let valuesS = [];

        if (salaN.includes(',')) valuesN = salaN.split(',');
        if (salaS.includes(',')) valuesS = salaS.split(',');

        if (salaN.includes(' ')) valuesN = salaN.split(' ');
        if (salaS.includes(' ')) valuesS = salaS.split(' ');

        if (salaN.length === 1) {
            valuesN = salaN[0];
            arrayN.push(Number(valuesN));
        } else {
            valuesN.forEach(element => {
                const elementInNumber = Number(element);
                arrayN.push(elementInNumber);
            });
        }

        if (salaS.length === 1) {
            valuesS = salaS[0];
            arrayS.push(String(valuesS).toUpperCase());
        } else {
            valuesS.forEach(element => {
                const elementInString = String(element).toUpperCase();
                arrayS.push(elementInString);
            });
        }

        if (arrayN[0] === 0) arrayN.shift();
        if (arrayS[0] === '') arrayS.shift();

        console.log(arrayN, arrayS)
        
        const sortSalaN = arrayN.sort((a, b) => a - b);
        const sortSalaS = arrayS.sort();

        return {
            sortSalaN,
            sortSalaS,
        };
    }
}