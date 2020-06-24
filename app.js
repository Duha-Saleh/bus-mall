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

var productName =[];

function Pictures(name,url){
    this.name =name ;
    this.url =url ;
    this.numberOfClicks=0;
    this.timesShown=0;
    array.push(this);
    productName.push(this.name);

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
    currentLeftImage.numberOfClicks = Number(localStorage.getItem(currentLeftImage.name));
    currentLeftImage.numberOfClicks+=1;
    localStorage.setItem(currentLeftImage.name, currentLeftImage.numberOfClicks);
}
    if(clickedElementId==='right_img'){
        currentrightImage.numberOfClicks+=1;
        currentrightImage.numberOfClicks = Number(localStorage.getItem(currentrightImage.name));
        localStorage.setItem(currentrightImage.name, currentrightImage.numberOfClicks);

    }
        if(clickedElementId==='middle_img'){
            currentmiddleImage.numberOfClicks+=1;
            currentmiddleImage.numberOfClicks = Number(localStorage.getItem(currentmiddleImage.name));
            localStorage.setItem(currentmiddleImage.name, currentmiddleImage.numberOfClicks);


}
displayRandomImages();
}
}
else{
//     for (var i=0; i<array.length;i++){
//         var listItem=document.createElement('li')
//         listItem.textContent=array[i].name + ' : has a ' + array[i].numberOfClicks + ' Clicks ,and ' + array[i].timesShown + ' Times Shown';
//     result.appendChild(listItem);
//     }
drawChart();
sectionimge.removeEventListener('click', handelClick)

  
    localStorage.setItem('Products', JSON.stringify(array));
        console.log(JSON.parse(localStorage.getItem('Products')));

        array = JSON.parse(localStorage.getItem('Products'));

   

}}

function drawChart() {

    var allClicks = [];
    var allShown = [];

    for (var i = 0; i < array.length; i++) {
        allClicks.push(array[i].numberOfClicks);
    }

    for (var j = 0; j < array.length; j++) {
        allShown.push(array[j].timesShown);
    }

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productName,
            datasets: [{
                    label: '# of Clicks',
                    data: allClicks,
                    backgroundColor: 'rgba(ddd)',
                    borderColor: '#f4ebc1',
                    borderWidth: 1
                },
                {
                    label: '# of Shows',
                    data: allShown,
                    backgroundColor: '#ff7f50',
                    borderColor: '#0000ff',
                    borderWidth: 1
                }
            ]
            
  
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        precision: 0
                    }
                }]
            }
        }
    });
}


function buatJson() {
    var el_up = document.getElementById("GFG_UP"); 
        var el_down = document.getElementById("GFG_DOWN"); 
        var obj = { 
            "a": { 
                "a_1": "val_11", 
                "a_12": "val_12" 
            }, 
            "a_2": "val_2", 
            "a_3": "val_3" 
        }; 
      
        // el_up.innerHTML = JSON.stringify(obj); 
  
        // function gfg_Run() { 
        //     el_down.innerHTML = JSON.stringify(obj, undefined, 4); 
        // } 

}

