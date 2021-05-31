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
  let container=document.getElementById('container');
  let h2=document.createElement('h2');
  container.append(h2);
  h2.textContent=(this.branchname);
  let list=document.createElement('ul');
  container.append(list);
  for (i=0;i<workinghoursArr.length;i++) {
  let listelement=document.createElement('li')
  
  listelement.textContent=`${workinghoursArr[i]}:${this.cookiesPerHour[i]}`;
  list.append(listelement);
}

}}
seattle.generateCustomersPerHour();
seattle.randomNumOfCookies();
seattle.render();
 //tokyo num2
var tokyo={
  branchname:'tokyo',
  minCPerHour:'3',
  maxCPerHour:'24',
  avgCookiePerCus:'1.2',
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
  let container=document.getElementById('container');
  let h2=document.createElement('h2');
  container.append(h2);
  h2.textContent=(this.branchname);
  let list=document.createElement('ul');
  container.append(list);
  for (i=0;i<workinghoursArr.length;i++) {
  let listelement=document.createElement('li')
  
  listelement.textContent=`${workinghoursArr[i]}:${this.cookiesPerHour[i]}`;
  list.append(listelement);
}

}}
tokyo.generateCustomersPerHour();
tokyo.randomNumOfCookies();
tokyo.render();
//dubai num3
var dubai={
  branchname:'dubai',
  minCPerHour:'11',
    maxCPerHour:'38',
    avgCookiePerCus:'3.7',
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
  let container=document.getElementById('container');
  let h2=document.createElement('h2');
  container.append(h2);
  h2.textContent=(this.branchname);
  let list=document.createElement('ul');
  container.append(list);
  for (i=0;i<workinghoursArr.length;i++) {
  let listelement=document.createElement('li')
  
  listelement.textContent=`${workinghoursArr[i]}:${this.cookiesPerHour[i]}`;
  list.append(listelement);
}

}}
dubai.generateCustomersPerHour();
dubai.randomNumOfCookies();
dubai.render();
   
//paris num4
var paris={
  branchname:'paris',
  minCPerHour:'20',
    maxCPerHour:'38',
    avgCookiePerCus:'2.3',
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
      let container=document.getElementById('container');
      let h2=document.createElement('h2');
      container.append(h2);
      h2.textContent=(this.branchname);
      let list=document.createElement('ul');
      container.append(list);
      for (i=0;i<workinghoursArr.length;i++) {
      let listelement=document.createElement('li')
      
      listelement.textContent=`${workinghoursArr[i]}:${this.cookiesPerHour[i]}`;
      list.append(listelement);
    }
    
    }}
    paris.generateCustomersPerHour();
    paris.randomNumOfCookies();
    paris.render();
//lima num5
var lima={
  branchname:'lima', 
  minCPerHour:'2',
    maxCPerHour:'16',
    avgCookiePerCus:'4.6',
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
      let container=document.getElementById('container');
      let h2=document.createElement('h2');
      container.append(h2);
      h2.textContent=(this.branchname);
      let list=document.createElement('ul');
      container.append(list);
      for (i=0;i<workinghoursArr.length;i++) {
      let listelement=document.createElement('li')
      
      listelement.textContent=`${workinghoursArr[i]}:${this.cookiesPerHour[i]}`;
      list.append(listelement);
    }
    
    }}
   
    lima.generateCustomersPerHour();
    lima.randomNumOfCookies();
    lima.render();