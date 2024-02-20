let blocks=document.querySelector(".Game");
let arrayOfBlocks=Array.from(...[blocks.children]);

let w=document.querySelector(".win");
let l=document.querySelector(".lose");
let ww=document.querySelector(".winwin");

let arr= new Set();
let counter=0;
let name=document.querySelector(".number");
name.innerHTML=counter;

function GenerateRandomNumber()
{
  while(arr.size<20)
  {
    arr.add(Math.floor(Math.random() * 20));
  }
}

let m=0;
let s=0;



let nn=document.querySelector(".personName");
 let b=document.querySelector(".but");
 b.addEventListener('click', function () {
   nn.innerHTML= window.prompt("Eneter Your Name ");
   document.querySelector(".firstPage").remove();

   let counterbar=setInterval(function ()
   {  
   ++s;
   if(s===60)
   {
     m++;
     s=0;
   }

   document.querySelector(".seconds").innerHTML = s;
   document.querySelector(".minutes").innerHTML = m;
   }, 1000);
   function stop(){
    clearInterval(counterbar);
}

   FlipAll();

   
})


function FlipAll()
{
  arrayOfBlocks.forEach((block) => {
    block.classList.add("flipped");
    setTimeout(()=>{block.classList.remove("flipped")}, 2000);
  });
}

GenerateRandomNumber();
let myArray=[...arr];
console.log(myArray[1]);

function ChangeOrder()
{
  arrayOfBlocks.forEach((block, index) => {
    block.style.order=myArray[index];
  });
};

ChangeOrder();


arrayOfBlocks.forEach((block) => {

    block.addEventListener('click', function () {

      console.log(block.getAttribute("Order"))
      flipBlock(block);
    });
  });

function flipBlock(selectedBlock) {
    selectedBlock.classList.add("flipped");
    let flippedBlocks=arrayOfBlocks.filter(f=> f.classList.contains("flipped"));
    if(flippedBlocks.length===2)
    {
      w.pause();
      w.currentTime = 0;
        stopClicking();
        console.log(flippedBlocks[0].dataset.image);
        console.log(flippedBlocks[1].dataset.image);

        if(flippedBlocks[0].dataset.image===flippedBlocks[1].dataset.image)
        {
            flippedBlocks[0].classList.remove("flipped");
            flippedBlocks[1].classList.remove("flipped");
            flippedBlocks[0].classList.add("true");
            flippedBlocks[1].classList.add("true");
            w.play();
        }
        else{
            l.play();
            counter++;
           name.innerHTML= parseInt(counter);
             setTimeout(()=>{flippedBlocks[0].classList.remove("flipped");
                flippedBlocks[1].classList.remove("flipped"); l.pause();
                l.currentTime = 0;}, 1000);
        }
    }
    let allflippedBlocks=arrayOfBlocks.filter(f=> f.classList.contains("true"));

    if(allflippedBlocks.length==20)
      {
        stop();
        ww.play();
        stopClicking(0)
      }
};
function stopClicking(x=1) {

    blocks.classList.add('no-clicking');
    if(x===1)
    {
      setTimeout(() => {
        blocks.classList.remove('no-clicking');
    }, 1000);
    }
  }

