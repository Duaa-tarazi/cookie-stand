`use srtict`;
let workinghoursArr=['6am','7am','8am','9am' ,'10am' ,'11am','12pm' ,'1pm','2pm' ,'3pm','4pm','5pm','6pm' ,'7pm'];
//sattle num1
var seattle={
branchname:'seattle',
minCPerHour:'23',
maxCPerHour:'65',
avgCookiePerCus:'6.3',
randomCusPerHour:[],
cookiesPerHour:[],
 generateCustomersPerHour:function(){
    for (i=0;i<=workinghoursArr.length;i++) {
    let randomlynum=Math.floor(Math.random() * (this.maxCPerHour - this.minCPerHour) + this.minCPerHour);
    this.randomCusPerHour.push(randomlynum)
   
 }
},
randomNumOfCookies:function()
{
  for (i=0;i<=workinghoursArr.length;i++){
this.cookiesPerHour.push(Math.ceil(this.randomCusPerHour[i]*(this.avgCookiePerCus)));
}
},
render:function(){
  this.branchname=document.createElement('h2')
  let list=document.getElementById('duaa');
  for (i=0;i<=workinghoursArr.length;i++) {
  let listelement=document.createElement('li')
  listelement.textContent=this.cookiesPerHour[i];
  list.append(listelement);
  
}

}}
seattle.generateCustomersPerHour();
seattle.randomNumOfCookies();
seattle.render();
/* //tokyo num2
var tokyo={minCPerHour:'3',
    maxCPerHour:'24',
    avgCookiePerCus:'1.2',
    randomCusPerHour:[],
    cookiesPerHour:[],
     generateCustomersPerHour:function(){
        for (i=0;i<=workinghoursArr.length;i++) {
        randomlynum=Math.floor(Math.random() * (this.maxCPerHour - this.minCPerHour) + minCPerHour);
        this.randomCusPerHour.push(randomlynum)
       
     }
    }
    randomNumOfCookies:function(){for (i=0;i<=workinghoursArr.length;i++){
    this.cookiesPerHour.push(this.randomCusPerHour[i]*Math.ceil(this.avgCookiePerCus));
    }},
    render:function(){
      let branchname=document.createElement('h2');
      duaa1=document.getElementById('duaa');
      duaa1.textcontent=workinghoursArr;
    },
    }
//dubai num3
var dubai={minCPerHour:'11',
    maxCPerHour:'38',
    avgCookiePerCus:'3.7',
    randomCusPerHour:[],
//custumerperhour=prompt"add the numbers of custumers this hour",
 generateCustomersPerHour:function(){
    for (i=0;i<=workinghoursArr.length;i++) {
    randomlynum=Math.floor(Math.random() * (this.maxCPerHour - this.minCPerHour) + minCPerHour);
    this.randomCusPerHour.push(randomlynum)
   document.write(<h3>workinghoursArr</h3>);}
   
 }
     }
//paris num4
var paris={minCPerHour:'20',
    maxCPerHour:'38',
    avgCookiePerCus:'2.3',
     generateCustomersPerHour:function(){
        randomCusPerHour:[],
//custumerperhour=prompt"add the numbers of custumers this hour",
 generateCustomersPerHour:function(){
    for (i=0;i<=workinghoursArr.length;i++) {
    randomlynum=Math.floor(Math.random() * (this.maxCPerHour - this.minCPerHour) + minCPerHour);
    this.randomCusPerHour.push(randomlynum)
   document.write(<h3>workinghoursArr</h3>);}
   
 }
     }
//lima num5
var lima={minCPerHour:'2',
    maxCPerHour:'16',
    avgCookiePerCus:'4.6',
     generateCustomersPerHour:function(){
        randomCusPerHour:[],
//custumerperhour=prompt"add the numbers of custumers this hour",
 generateCustomersPerHour:function(){
    for (i=0;i<=workinghoursArr.length;i++) {
    randomlynum=Math.floor(Math.random() * (this.maxCPerHour - this.minCPerHour) + minCPerHour);
    this.randomCusPerHour.push(randomlynum)
   document.write(<h3>workinghoursArr</h3>);}
   
 }*/