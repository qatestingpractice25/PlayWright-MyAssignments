//Task 1 - Named Function
function userProfile(name)
{
    console.log(`Hello, ${name}!`);
}

//Task 2 - Arrow Function
let double =  (num) => {
    return num*2;
}

//Task 3 - Anonymous Function
let anonyfunc = function () {
    setTimeout(() => {
        console.log(`"This message is delayed by 2 seconds"`);
    }, 2000);
}

//Task 4 - Callback Function
function getUserData(callback)
{
    //console.log("Fetching data");
    setTimeout(() => {
        callback();
    }, 3000);
}

function callback()
{
    console.log (`“Call Back Function” after 3 seconds`);
}

userProfile("Ekta"); //Named Function
console.log(double(16)); //Arrow Function
anonyfunc(); //Anonymous Function
getUserData(callback) //Callback Function

