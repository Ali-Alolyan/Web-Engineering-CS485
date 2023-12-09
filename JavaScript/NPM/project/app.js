const fs = require('fs');


let keyword = 'The'
let arr = [];

fs.readFile('./story.txt', 'utf-8', (err, data)=> {
    if(err){
        console.log(Error)
    } else{
        arr = data.split('.');
        arr.forEach((elm)=>{
            if(elm.includes(keyword)){
                console.log(elm);
            }
        })
    }
})