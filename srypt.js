var warrior = {
    typeOfAttack : 'melee',
    level : 25,
    icq : 100
}

var archer = {
    typeOfAttack : 'range',
    level : 15,
    icq : 125
}

var mag = {
    typeOfAttack : 'range',
    level : 25,
    icq : 150
}

var arr = [warrior, mag, archer];

function getHeroTypeOfAttack (arr, typeOfAttack){
    var filteredArr = []
    for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        if(element.typeOfAttack === typeOfAttack) {
            filteredArr.push(element);
        }
    }
    return filteredArr;
}

console.log(getHeroTypeOfAttack(arr, 'range'))

function getHeroLevel (arr, level){
    var filteredArr = []
    for (let index = 0; index < arr.length; index++) {
        var element = arr[index];
        if(element.level > 20) {
            filteredArr.push(element);
        }
    }
    return filteredArr;
}

console.log(getHeroLevel(arr, 20))

function getHeroICQ(arr, icq){
    var filteredArr = []
    for (let index = 0; index < arr.length; index++) {
        var element = arr[index];
        if(element.icq > 100) {
            filteredArr.push(element);
        }
    }
    return filteredArr;
}

console.log(getHeroICQ(arr, 100))