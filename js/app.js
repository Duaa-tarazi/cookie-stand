`use srtict`;
let workinghoursArr=['6am','7am','8am','9am' ,'10am' ,'11am','12pm' ,'1pm','2pm' ,'3pm','4pm','5pm','6pm' ,'7pm'];
let arrOfObject=['salmonCookiesSeattle','salmonCookiesTokyo','salmonCookiesDubai','salmonCookiesparis','salmonCookieslima'];

let table=document.createElement('table');
let tablecontainer=document.getElementById('tablecontainer');
tablecontainer.appendChild(table);

function salmonCookies(branchname,minCPerHour,maxCPerHour,avgCookiePerCus)
{
this.branchname=branchname;
this.minCPerHour=minCPerHour;
this.maxCPerHour=maxCPerHour;
this.avgCookiePerCus=avgCookiePerCus;
this.randomCusPerHour=[];
this.cookiesPerHour=[];
arrOfObject.push(this);
}
//metho num 1
salmonCookies.prototype.generateCustomersPerHour=function(){
  for (i=0;i<=workinghoursArr.length;i++) {
    this.randomCusPerHour[i] = Math.floor(Math.random() * (this.maxCPerHour - this.minCPerHour+ 1) ) + this.minCPerHour;
  console.log(this.randomCusPerHour);

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
for (i=0;i<workinghoursArr.length;i++){
this.cookiesPerHour.push(Math.ceil(this.randomCusPerHour[i]*(this.avgCookiePerCus)));
}
},
//method num 3
salmonCookies.prototype.render=function(){

let rows=document.createElement('tr');
table.appendChild(rows);
let th2 = document.createElement('th');
        rows.appendChild(th2);
        th2.textContent = this.branchname;
      for(let i=0;i< 14;i++)
    {

       let td=document.createElement('td');
       rows.appendChild(td);
       td.textContent=this.cookiesPerHour[i];
       
  
    }
  
}
headerrow();

let  salmonCookiesSeattle = new salmonCookies('seattle',23,65,6.3);
let salmonCookiesTokyo=new salmonCookies('tokyo',3,24,1.2);
let salmonCookiesDubai=new salmonCookies('dubai',11,38,3.7);
let salmonCookiesparis=new salmonCookies('paris',20,38,2.3);
let salmonCookieslima=new salmonCookies('lima',2,16,4.6);

//callbranches();

salmonCookiesSeattle.generateCustomersPerHour();
salmonCookiesSeattle.randomNumOfCookies();
salmonCookiesSeattle.render();

salmonCookiesTokyo.generateCustomersPerHour();
salmonCookiesTokyo.randomNumOfCookies();
salmonCookiesTokyo.render();

salmonCookiesDubai.generateCustomersPerHour();
salmonCookiesDubai.randomNumOfCookies();
salmonCookiesDubai.render();

salmonCookiesparis.generateCustomersPerHour();
salmonCookiesparis.randomNumOfCookies();
salmonCookiesparis.render();

salmonCookieslima.generateCustomersPerHour();
salmonCookieslima.randomNumOfCookies();
salmonCookieslima.render();

function headerrow()
{
  let firstRow = document.createElement('tr');
        table.appendChild(firstRow);
        let th0 = document.createElement('th');
        firstRow.appendChild(th0);
        th0.textContent = ('Locations');

for(let i=0;i< workinghoursArr.length;i++)
{
  let th=document.createElement('th');
  firstRow.appendChild(th);
  th.textContent=workinghoursArr[i];
  
}
}
/*function callbranches()
{
for (let i=0;i< arrOfObject.lenght;i++)
{
  arrOfObject[i].generateCustomersPerHour();
  arrOfObject[i].randomNumOfCookies();
  arrOfObject[i].render();
}
}*/
