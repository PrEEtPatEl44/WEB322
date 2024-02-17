const setData = require("../data/setData.json");
const themeData = require("../data/themeData.json");
let sets = [];

function initialize() {
    return new Promise ((resolve, reject)=>{
        setData.forEach((e) => {
            let matchElem = themeData.find((el) => el.id === e.theme_id);
            e.theme = matchElem.name;
            sets.push(e);
        });
        //.length is used because only sets 
        // will always return true even  
        // though the sets array is empty
        sets.length?resolve():reject('Unable to initialize sets')
    });
}

function getAllSets() {
    return new Promise ((resolve, reject)=>{
        sets.length>0?resolve(sets):reject('sets is empty')
    });
}

function getSetByNum(setNum) {
    return new Promise ((resolve, reject) =>{
        let matchElem = sets.find((el) => el.set_num === setNum);
        matchElem? resolve(matchElem):reject('unable to find requested set');
    });
    
}

function getSetsByTheme(theme) {
    return new Promise ((resolve, reject)=>{
        let matchElem = [];
        if(sets.length){
        matchElem.push(
            sets.filter((el) => el.theme.toLowerCase().includes(theme.toLowerCase()))
            );}
            //console.log(matchElem.length)
            matchElem.length? resolve(matchElem): reject('unable to find requested data');
        });
}

module.exports = { initialize, getAllSets, getSetByNum, getSetsByTheme }


