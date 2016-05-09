var randomNumber = function(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = randomNumber; //may need to enter arguments here instead of in calling file?
//or restructure function to be declared like in kris's example
