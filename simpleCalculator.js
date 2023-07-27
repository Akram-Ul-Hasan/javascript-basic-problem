const calculator = (num1, num2, operator) => {
    if(operator ==='+')
    return num1+num2;
    else if(operator === '-')
    return num1-num2;
    else if(operator === '*')
    return num1*num2;
    else
    return num1/num2;
}

const ans = calculator( 5,2,'-');
console.log(ans);