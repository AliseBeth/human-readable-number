module.exports = function toReadable (number) {
    function singleNumber (num1) {
        switch (num1) {
            case 0:
                return 'zero';
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
        }
    }

    function notStandartNumber (num2) {
        switch (num2) {
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
        }
    }

    function doubleNumber (num3) {
        switch (num3) {
            case 1:
                return 'ten';
            case 2:
                return 'twenty';
            case 3:
                return 'thirty';
            case 4:
                return 'forty';
            case 5:
                return 'fifty';
            case 6:
                return 'sixty';
            case 7:
                return 'seventy';
            case 8:
                return 'eighty';
            case 9:
                return 'ninety';
        }
    }



    let numLeng = String(number).length;
    let numStr = String(number);

    if (numLeng === 1) {
        return singleNumber(number);
    
    } else if (numLeng === 2) {
        if (Number(numStr) === 10) {
            return 'ten';
        } else if (Number(numStr[0]) === 1) {
            return notStandartNumber(Number(numStr[0] + numStr[1]));
        } else if (Number(numStr[0]) > 1 && Number(numStr[1]) === 0) {
            return doubleNumber(Number(numStr[0]));
        } else if (Number(numStr[0]) > 1) {
            return doubleNumber(Number(numStr[0])) + ' ' + singleNumber(Number(numStr[1]))
        } 

    } else if (numLeng === 3) {
        if (Number(numStr[0]) >= 1 && Number(numStr[1]) === 0 && Number(numStr[2]) === 0) {
            return singleNumber(Number(numStr[0])) + ' hundred';
        } else if (Number(numStr[0]) >= 1 && Number(numStr[1]) === 0) {
            return singleNumber(Number(numStr[0])) + ' hundred ' + singleNumber(Number(numStr[2]));
        } else if (Number(numStr[0]) >= 1 && Number(numStr[1]) === 1 && Number(numStr[2]) === 0) {
            return singleNumber(Number(numStr[0])) + ' hundred ten';   
        } else if (Number(numStr[0]) >= 1 && Number(numStr[2]) === 0) {
            return singleNumber(Number(numStr[0])) + ' hundred ' + doubleNumber(Number(numStr[1]));
        } else if (Number(numStr[0]) >= 1 && Number(numStr[1]) >= 1 && Number(numStr[1]) < 2) {
            return singleNumber(Number(numStr[0])) + ' hundred ' + notStandartNumber(Number(numStr[1] + numStr[2]));
        } else {
            return singleNumber(Number(numStr[0])) + ' hundred ' + doubleNumber(Number(numStr[1])) + ' ' + singleNumber(Number(numStr[2]));
        }
    }
}
