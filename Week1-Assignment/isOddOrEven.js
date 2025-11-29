function isOddOrEven(numberType)
{
    if (typeof numberType != "number")
        return "Not a valid Number"
    switch (true) 
    {
        case (numberType % 2 === 0):
            return "Even Number"
            break;

         case (numberType % 2 !== 0):
            return "Odd Number"
            break;

        /* default:
            return "Not a valid Number"
            break; */
    }
}

function oddEven(num)
{   
    if (typeof num != "number")
        return "Not a valid Number"
    else if (num % 2 === 0)
        return "Even Number"
    else 
        return "Odd Number"  
}

//using switch statement
console.log(isOddOrEven(25)); 
console.log(isOddOrEven(100));
console.log(isOddOrEven("a")); 

//using if-else
console.log(oddEven(22)); 
console.log(oddEven(151))
console.log(oddEven("A"))
