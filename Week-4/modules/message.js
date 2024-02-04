let localMessage="";
module.exports.writeMessage= (msg)=>{
    localMessage=msg;
}
module.exports.readMessage= (msg)=>{
    console.log(localMessage);
}