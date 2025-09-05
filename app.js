const stringUtils = require("./stringUtils.js");

//try
//{

    console.log("Test reverse:");

    console.log(stringUtils.reverse("Launchcode"));
  
    console.log(stringUtils.reverse());
    console.log(stringUtils.reverse(""));
    console.log(stringUtils.reverse(" "));

    //let myResult = stringUtils.reverse(" ");
//console.log(myResult);


    console.log(stringUtils.reverse(12345));
    console.log(stringUtils.reverse(null));
    console.log(stringUtils.reverse(undefined));
    console.log(stringUtils.reverse(true));
    console.log(stringUtils.reverse(false));


    console.log();
    console.log("Test capitalize:");

    console.log(stringUtils.capitalize("edward"));
  
    console.log(stringUtils.capitalize());
    console.log(stringUtils.capitalize(""));
    console.log(stringUtils.capitalize(" "));
    console.log(stringUtils.capitalize(12345));
    console.log(stringUtils.capitalize(null));
    console.log(stringUtils.capitalize(undefined));
    console.log(stringUtils.capitalize(true));
    console.log(stringUtils.capitalize(false));


    console.log();
    console.log("Test contains:");

    console.log(stringUtils.contains("scooby doo", "doo"));
    console.log(stringUtils.contains("scooby doo", "scoobs"));
    
    //console.log(stringUtils.contains( , ));   //this wont run
    //console.log(stringUtils.contains(, "doo"));   //this wont run
    
    
    
    console.log(stringUtils.contains("a b c", " "));


    console.log(stringUtils.contains("", "doo"));
    console.log(stringUtils.contains("doo", ""));
    console.log(stringUtils.contains("doo", " "));

    console.log(stringUtils.contains(" "));
    console.log(stringUtils.contains(12345));
    console.log(stringUtils.contains("scooby", 12345));
    console.log(stringUtils.contains(null));
    console.log(stringUtils.contains(undefined));    
    console.log(stringUtils.contains(true));
    console.log(stringUtils.contains(false));


//}

//catch (err)
//{
//    console.error(`Error: ${err.message}`);
//}

