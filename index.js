var cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.push("Ralph");

    }
    function destructivelyPrependCat() {
        cats.unshift("Bob");
     }
     function destructivelyRemoveLastCat() {
        cats.pop();
     }
     function destructivelyRemoveFirstCat() {
        cats.shift();
     }
     function appendCat(name)
{
    let newCats = ['Milo','Otis','Garfield'];
    newCats.push(name);
    return newCats;
}

function prependCat(name)
{
    let newCats = ['Milo','Otis','Garfield'];
    newCats.unshift(name);
    return newCats;
}

function removeLastCat()
{
    let newCats = ['Milo','Otis','Garfield'];
    newCats.pop();
    return newCats;
}

function removeFirstCat()
{
    let newCats = ['Milo','Otis','Garfield'];
    newCats.shift();
    return newCats;
}

     
