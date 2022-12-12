/*Buy some milk chocolate
Add some mint flavoring
Combine the chocolate and mint
Bake the mixture
Break the hardened sheet into 6 pieces
🍫 🍫 🍫 🍫 🍫 🍫 Enjoy!*/

//first function will return an object with one property
const Chocolate = () => {
    const candy = {
        type: "Milk Chocolate"
    }
    return candy
}


//Define a function named addFlavoring. 
//The function needs one parameter to accept an object as input. 
//It should add a new flavor property to the object with a value of "Mint".
const addFlavoring = (candy) => {
    candy.flavor = "Mint"
    return candy
}

//Define a function named makeBarkMixture. 
//It should have one parameter for an incoming object to be stored for use in the function.
//If the flavor property on the object is equal to "Mint", 
//then you should add a new mixed property to the object with a value of true. 
//If the flavor is not "Mint" then the property value should be false.
const makeBarkMixture = (candy) => {
    if (candy.flavor === "Mint") {
        candy.mixed = true 
    }
    else {
        candy.mixed = false
    }
    return candy
}

//Define a function named bakeCandy. 
//It should have one parameter for an incoming object to be stored for use in the function.
//The function should check if the mixed property on the incoming object has a value of true.
//If it does, then add a baked property to the object with a value of true
//If the mixed property is not true, then add a baked property with a value of false.
const bakeCandy = (candy) => {
    if (candy.mixed = true) {
        candy.baked = true
    }
    else {
        candy.baked = false
    }
    return candy
}

//Define a function named breakBark. 
//It should have one parameter for an incoming object to be stored for use in the function.
//If the incoming object's baked property is true, the function should return a new array with 6 strings in it. 
//Each string should be "Mint Chocolate Bark Piece".
const breakBark = (candy) => {
    if (candy.mixed = true) {
         return candyPieces = ["Mint Chocolate Bar Piece", "Mint Chocolate Bar Piece", "Mint Chocolate Bar Piece", "Mint Chocolate Bar Piece","Mint Chocolate Bar Piece","Mint Chocolate Bar Piece",]
    }
}
let newCandy = Chocolate()
let chocolateWithFlavor = addFlavoring(newCandy)
let chocolateMixed = makeBarkMixture(newCandy)
let chocolateBaked = bakeCandy(newCandy)
let chocolateBroken = breakBark(newCandy)
console.log(candyPieces)