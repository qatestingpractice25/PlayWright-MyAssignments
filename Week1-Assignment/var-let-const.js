const browserVersion = "Chrome";

function getBrowserVersion()
{
    if (browserVersion==="Chrome") //var is function-scoped - not block-scoped, and declaring var browserVersion inside the if actually re-declares the variable for the entire function scope.
    //Due to hoisting, the declaration is moved to the top of the function, but the assignment happens inside the block.
    {
        var browserVersion = "shadow with var";
        console.log("Inside if block using var: " + browserVersion); //never prints because if condition fails due to hoisting
    }
    console.log("Outside if block using var: " + browserVersion); //because of hoisting it will print undefined
}

function getBrowserVersionlet()
{
    if (browserVersion==="Chrome")
    {
        let browserVersion = "shadow with let";
        console.log("Inside if block using let: " + browserVersion); //prints - shadow with let and let is block-scoped, so it shadows only inside the block and doesn’t interfere outside.
    }
    console.log("Outside if block using let: " + browserVersion); //prints - Chrome
}

console.log("Outside function block: " + browserVersion); //prints - Chrome
getBrowserVersion();
getBrowserVersionlet();