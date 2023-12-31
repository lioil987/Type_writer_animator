var span = document.querySelector('div.text span')
var words = ['test1','test2','test3']
var current = "";


  type()




 async function type(){

while(true){


  for (const word of words){
    for(const letter of word){
      current+=letter;
      span.innerHTML = current
      await new Promise(r => setTimeout(r, Math.floor((Math.random() * 300) + 30)));
     
      console.log(letter);
    }
    await new Promise(r => setTimeout(r, 1000)); 
    for(var index=0;index<word.length+1;index++){
      current=  current.substring(0,word.length - index)
      
      span.innerHTML = current
      await new Promise(r => setTimeout(r, Math.floor((Math.random() * 100) + 30)));
    }
    await new Promise(r => setTimeout(r, 2000)); 
    span.innerHTML = ""
    current = ""
  }


}



}

