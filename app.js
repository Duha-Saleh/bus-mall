'use strict';

var array=[];
var totalClicks=0;

var sectionimge =document.getElementById('yes');
var leftImage=document.getElementById('left_img');
var rightImage=document.getElementById('right_img');
var middleImage=document.getElementById('middle_img');
var result=document.getElementById('finalResult');

var previosLeftImageIndex;
var previosMiddleImageIndex;
var previosrightImageIndex; 

var currentLeftImage;
var currentrightImage;
var currentmiddleImage;


function Pictures(name,url){
    this.name =name ;
    this.url =url ;
    this.numberOfClicks=0;
    this.timesShown=0;
    array.push(this);
}
new Pictures ('bag','assets/bag.jpg');
new Pictures ('banana','assets/banana.jpg');
new Pictures ('bathroom','assets/bathroom.jpg');
new Pictures ('boots','assets/boots.jpg');
new Pictures ('breakfast','assets/breakfast.jpg');
new Pictures ('bubblegum','assets/bubblegum.jpg');
new Pictures ('chair','assets/chair.jpg');
new Pictures ('cthulhu','assets/cthulhu.jpg');
new Pictures ('dog','assets/dog-duck.jpg');
new Pictures ('dragon','assets/dragon.jpg');
new Pictures ('pen','assets/pen.jpg');
new Pictures ('pet','assets/pet-sweep.jpg');
new Pictures ('scissors','assets/scissors.jpg');
new Pictures ('shark','assets/shark.jpg');
new Pictures ('sweep','assets/sweep.png');
new Pictures ('tautaun','assets/tauntaun.jpg');
new Pictures ('uncorn','assets/unicorn.jpg');
new Pictures ('usb','assets/usb.gif');
new Pictures ('water','assets/water-can.jpg');
new Pictures ('wine','assets/wine-glass.jpg');
displayRandomImages();
function displayRandomImages(){
    var forbiddenIndex =[];
    if (totalClicks>0){
        forbiddenIndex=[previosLeftImageIndex,previosMiddleImageIndex,previosrightImageIndex];
  
    }
    var leftIndex=generateaRandomNumber(forbiddenIndex);
    forbiddenIndex.push(leftIndex);
    var middleIndex=generateaRandomNumber(forbiddenIndex);
    forbiddenIndex.push(middleIndex);
    var rightIndex =generateaRandomNumber(forbiddenIndex);
    
    previosLeftImageIndex=leftIndex;
    previosrightImageIndex=rightIndex;
    previosMiddleImageIndex=middleIndex;


    currentLeftImage=array[leftIndex];
    currentrightImage=array[rightIndex];
    currentmiddleImage=array[middleIndex];


    leftImage.setAttribute('src',currentLeftImage.url);
    rightImage.setAttribute('src',currentrightImage.url);
    middleImage.setAttribute('src',currentmiddleImage.url)


    currentLeftImage.timesShown +=1;
    currentrightImage.timesShown +=1;
    currentmiddleImage.timesShown +=1;

}

function generateaRandomNumber(forbiddenIndex){
    var allowed;
    var randomNumber;
    do{randomNumber=Math.floor(Math.random()*array.length);
        allowed=true;
        for(var i=0;i<forbiddenIndex.length;i++){
            if(forbiddenIndex[i]===randomNumber){
                allowed=false;           
            }
        }

    }
    while(!allowed);
    return randomNumber;
   
}


sectionimge.addEventListener('click',handelClick);

function handelClick(event){  if (totalClicks<25){

    var clickedElement =event.target;
    var clickedElementId=clickedElement.id;
  
    if(clickedElementId === 'left_img'|| clickedElementId === 'right_img' || clickedElementId === 'middle_img') 
{totalClicks++;
if(clickedElementId==='left_img'){
    currentLeftImage.numberOfClicks+=1;}
    if(clickedElementId==='right_img'){
        currentrightImage.numberOfClicks+=1;}
        if(clickedElementId==='middle_img'){
            currentmiddleImage.numberOfClicks+=1;
}
displayRandomImages();
}
}
else{
    for (var i=0; i<array.length;i++){
        var listItem=document.createElement('li')
        listItem.textContent=array[i].name + ' : has a ' + array[i].numberOfClicks + ' Clicks ,and ' + array[i].timesShown + ' Times Shown';
    result.appendChild(listItem);
    }
    sectionimge.removeEventListener('click', handelClick)

    }

}