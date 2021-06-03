`use srtict`;
let workinghoursArr=['6am','7am','8am','9am' ,'10am' ,'11am','12pm' ,'1pm','2pm' ,'3pm','4pm','5pm','6pm' ,'7pm'];
function salmonCookies(branchname,minCPerHour,maxCPerHour,avgCookiePerCus)
{this.branchname=branchname;
this.minCPerHour=minCPerHour;
this.maxCPerHour=maxCPerHour;
this.avgCookiePerCus=avgCookiePerCus;
this.randomCusPerHour=[];
this.cookiesPerHour=[];
}
//metho num 1
salmonCookies.prototype.generateCustomersPerHour=function(){
  for (i=0;i<=workinghoursArr.length;i++) {
  let randomlynum=Math.floor(Math.random() * (this.maxCPerHour - this.minCPerHour) + this.minCPerHour);
  this.randomCusPerHour.push(randomlynum)
}
}
//method num 2
salmonCookies.prototype.randomNumOfCookies=function()
{
 /* let container=document.getElementById('container');
  let h2=document.createElement('h2');
  container.append(h2);
  h2.textContent=(this.branchname);
  let list=document.createElement('ul');
  container.append(list);
  for (i=0;i<workinghoursArr.length;i++) {
  let listelement=document.createElement('li')
  
  listelement.textContent=`${workinghoursArr[i]}:${this.cookiesPerHour[i]}`;
  list.append(listelement);
  }*/
for (i=0;i<=workinghoursArr.length;i++){
this.cookiesPerHour.push(Math.ceil(this.randomCusPerHour[i]*(this.avgCookiePerCus)));
}
},
//method num 3
salmonCookies.prototype.render=function(){
for(let i=0;i<= arrOfObject.length;i++)
{
let rows=document.createElement('tr');
table.appendChild(rows);
      for(let i=0;i<= cookiesPerHour.length;i++)
    {
       let td=document.createElement('td');
       td.textContent=cookiesPerHour[i];
       secondRowRow.appendChild(td);
  
    };
    
headerrow();

let  salmonCookiesSeattle = new salmonCookies('seattle',23,65,6.3,0,0);
let salmonCookiesTokyo=new salmonCookies('tokyo',3,24,1.2,0,0);
let salmonCookiesDubai=new salmonCookies('dubai',11,38,3.7,0,0);
let salmonCookiesparis=new salmonCookies('paris',20,38,2.3,0,0);
let salmonCookieslima=new salmonCookies('lima',2,16,4.6,0,0);

/*salmonCookiesSeattle.randomNumOfCookies();
salmonCookiesSeattle.randomNumOfCookies();
salmonCookiesSeattle.render();

salmonCookiesTokyo.randomNumOfCookies();
salmonCookiesTokyo.randomNumOfCookies();
salmonCookiesTokyo.render();*/


function headerrow()
{
let table=document.createElement('table');
let tablecontainer=document.getElementById('tablecontainer');
tablecontainer.appendChild(table);
let firstRow=document.createElement('tr');
table.appendChild(firstRow);
for(let i=0;i<= workinghoursArr.length;i++)
{
  let th=document.createElement('th');
  th.textContent=workinghoursArr[i];
  firstRow.appendChild(th);
}
}
let arrOfObject=['salmonCookiesSeattle','salmonCookiesTokyo','salmonCookiesDubai','salmonCookiesparis','salmonCookieslima'];
for (let i=0;i< arrOfObject.lenght;i++)
{
  arrOfObject[i].generateCustomersPerHour();
  arrOfObject[i].randomNumOfCookies();
  arrOfObject[i].render();
}
