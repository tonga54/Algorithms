let str = "WLDAlfredoDWWilfredo fefardo ruizL";

function equallyRearranging(str){
    let haveBucle = false;
    let response = "";
    let letters = [{"name": "W", "lastOcurrence": -1}, {"name": "D", "lastOcurrence": -1},{"name": "L", "lastOcurrence": -1}];

    for(let i = 0; i < letters.length; i++){
        if(letters[i].lastOcurrence > -2){
            letters[i].lastOcurrence = str.indexOf(letters[i].name, letters[i].lastOcurrence + 1);
    
            if(letters[i].lastOcurrence != -1){
                haveBucle = true;
                response += letters[i].name;
            }
            else{
                letters[i].lastOcurrence = -2;
            }
        }

        if(haveBucle && i == letters.length - 1){
            i = -1;
            haveBucle = false;
        }
    }

    return response;
}