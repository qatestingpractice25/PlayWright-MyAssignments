function launchBrowser(browserName)
{
    if (browserName === "Chrome") 
    {
       console.log("Chrome Browser");
    } 
    else if (browserName==="edge") {
          console.log("Edge Browser");
     } 
    else 
    {
         console.log("Not a supported browser");        
    } 
}

function browserName(testType)
{
    switch (testType) 
    {
        case "unit":
            console.log("Test type is unit");
            break;

        case "sanity":
            console.log("Test type is sanity.");
            break;

        case "regression":
            console.log("Test type is regression.");
            break;

        default:
            console.log("Test type is smoke.");
            break;
    }
}

launchBrowser("Chrome");
browserName ("regression");