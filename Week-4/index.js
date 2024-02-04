// // let message = require("./modules/message.js");

// // message.writeMessage("Hello World");
// // message.readMessage(); 
// // console.log("HHHHHH");
const path = "C:/Users/preet/OneDrive - Seneca/SEM_3/WEB322/Week-4/hell.txt";
const pathTodir = "C:/Users/preet/OneDrive - Seneca/SEM_3/WEB322/Week-4/dire";
let totalfilesize=0;

const fs = require('node:fs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Do you wish to process a File (f) or directory (d):  ', (answer) => {
 if(answer.toLocaleLowerCase()==='f'){
    fs.readFile('C:/Users/preet/OneDrive - Seneca/SEM_3/WEB322/Week-4/hell.txt', (err, data) => {
        if (err) throw err;
        let content=data.toString();
        let freq = content.replace(/[^a-zA-Z]/g, "").toLocaleLowerCase();
        let lines = content.split(/\n/g);
        let words = content.split(/\s/);
        let chars = content.replace(/\s\n/, "");
    
        // let arrayOfObj=[];
        // let obj={
        //     count:0
        // };
        // for(let i=0;i<freq.length;i++)
        // {
        //   if(obj[freq[i]]==undefined)
        //   {
        //     obj[freq[i]]=1;
        //   }
        //   else
        //   {
        //     obj[freq[i]]+=1;
        //   }
        // }
        
        let arr=[];
        for (let i = 0; i < freq.length; i++) {
            let found = false;
          
            for (let j = 0; j < arr.length; j++) {
              if (arr[j].char === freq[i]) {
                arr[j].count += 1;
                found = true;
                
              }
            }
          
            if (!found) {
              arr.push({ char: freq[i], count: 1 });
            }
          }
          arr.sort((a, b) => a.count - b.count);
        
          console.log(words.length);
          console.log(chars.length);

          console.log(lines.length);
          console.log(arr);
      });
 }
 else if(answer.toLocaleLowerCase()==='d'){
    fs.readdir(pathTodir, (err, files)=>{
        if(err) throw err;
        console.log(files.length);
        //console.log(files.size);
      for(let i=0; i<files.length; i++){
        const fii =fs.statSync(`${pathTodir}/${files[i]}`);
        console.log(fii.size);
        totalfilesize+=fii.size;
        }
    console.log(totalfilesize);
      
    })

 }
 else{
    console.log('Invalid Selection');
 }

  rl.close();
});


