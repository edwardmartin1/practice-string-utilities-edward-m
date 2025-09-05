const stringUtils = require("./stringUtils.js");


console.log("Test capitalize:");
console.log("Test 1:", stringUtils.capitalize("edward"));  
console.log("Test 2:", stringUtils.capitalize("MARTIN"));  
console.log("Test 3:", stringUtils.capitalize());
console.log("Test 4:", stringUtils.capitalize(""));
console.log("Test 5:", stringUtils.capitalize(" "));
console.log("Test 6:", stringUtils.capitalize(12345));
console.log("Test 7:", stringUtils.capitalize(null));
console.log("Test 8:", stringUtils.capitalize(undefined));
console.log("Test 9:", stringUtils.capitalize(true));
console.log("Test 10:", stringUtils.capitalize(false));


console.log();
console.log("Test reverse:");
console.log("Test 1:", stringUtils.reverse("Launchcode"));  
console.log("Test 2:", stringUtils.reverse("Scooby Snacks"));
console.log("Test 3:", stringUtils.reverse());
console.log("Test 4:", stringUtils.reverse(""));
console.log("Test 5:", stringUtils.reverse(" "));
console.log("Test 6:", stringUtils.reverse(12345));
console.log("Test 7:", stringUtils.reverse(null));
console.log("Test 8:", stringUtils.reverse(undefined));
console.log("Test 9:", stringUtils.reverse(true));
console.log("Test 10:", stringUtils.reverse(false));


console.log();
console.log("Test contains:");
console.log("Test 1:", stringUtils.contains("scooby doo", "doo"));
console.log("Test 2:", stringUtils.contains("scooby doo", "scoobs"));
console.log("Test 3:", stringUtils.contains("a b c", " "));
console.log("Test 4:", stringUtils.contains("", "doo"));
console.log("Test 5:", stringUtils.contains("doo", ""));
console.log("Test 6:", stringUtils.contains("doo", " "));
console.log("Test 7:", stringUtils.contains(" "));
console.log("Test 8:", stringUtils.contains(" ", "doo"));
console.log("Test 9:", stringUtils.contains(12345));
console.log("Test 10:", stringUtils.contains("scooby", 12345));
console.log("Test 11:", stringUtils.contains(null));
console.log("Test 12:", stringUtils.contains(undefined));    
console.log("Test 13:", stringUtils.contains(true));
console.log("Test 14:", stringUtils.contains(false));
        
