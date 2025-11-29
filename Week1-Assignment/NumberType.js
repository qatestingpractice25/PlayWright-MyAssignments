function named(numberType)
{
    switch (true) 
    {
        case numberType > 0:
            return "Positive Number";
            break;

        case numberType < 0:
            return "Negative Number";
            break;

        case numberType === 0:
            return "Zero Number";
            break;

        default:
            return "Not a Valid Number";
            break;
    }
}

function checkNumber(num)
{
    if (num > 0)
        return "Positive Number";
    else if (num < 0)
        return "Negative Number";
    else if (num === 0)
        return "Zero Number";
    else
        return "Not a valid Number";        
}

//using switch statement
console.log(named(78)); 
console.log(named(0));
console.log(named(-15));
console.log(named("ASD"));

//using if-else
console.log(checkNumber("A")); 
console.log(checkNumber(0));
console.log(checkNumber(-55));
console.log(checkNumber(76));
