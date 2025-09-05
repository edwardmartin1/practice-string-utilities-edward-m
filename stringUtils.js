

function capitalize(str)
{
    try
    {
        if (typeof str !== "string")
        {
            throw new Error("Input must be a string.");
        }

        if (!str)
        {
            throw new Error("No input was provided.");
        }

        if (str.trim() === "")
        {
            throw new Error("Blank input was provided.");
        }

        return str.charAt(0).toUpperCase() + str.slice(1);
    } 

    catch (err)
    {
        console.error(`Error: ${err.message}`);

        return "";
    } 
} 


function reverse(str)
{
    try
    { 
        if (typeof str !== "string")
        {
            throw new Error("Input must be a string.");
        }

        if (!str)
        {
            throw new Error("No input was provided.");
        }

        if (str.trim() === "")
        {
            throw new Error("Blank input was provided.");
        }
        return str.split("").reverse().join("");
    } 

    catch (err)
    {        
        console.error(`Error: ${err.message}`);
    
        return "";
    } 

    
} 


function contains(str, substr)
{
    try
    {
        if (typeof str !== "string")
        {
            throw new Error("Input string must be a string.");
        }

        if (!str)
        {
            throw new Error("No input string was provided.");
        }

        if (str.trim() === "")
        {
            throw new Error("Blank input string was provided.");
        }


        if (typeof substr !== "string")
        {
            throw new Error("Input substring must be a string.");
        }

        if (!substr)
        {
            throw new Error("No input substring was provided.");
        }

//        if (substr.trim() === "")
//        {
//            throw new Error("Blank input substring was provided.");
//        }

        return str.includes(substr);
    } 

    catch (err)
    {
        console.error(`Error: ${err.message}`);    

        return false;
    } 

} 


//console.log("5");
module.exports = 
{
    capitalize: capitalize,
    reverse: reverse,
    contains: contains

};




