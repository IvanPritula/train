 /*const iter = function(){
   let index = 0;// Math.trunc(this.length / 2);
   const end = this.length;

   return{
     next:()=>{
       if(index < end){
       return{
         value:this[index++],
         done: false,
       };
      }

       return{
         value:undefined,
         done:true,
       }
     }
   }
 }

 
 const gen = function* () {
   const arr = this;
   
   for(let i=0;i<arr.length;i++){
     yield arr[i];
     break;
    }
  }

  const arr=[1,2,3,4,5,6];
  arr[Symbol.iterator]=gen;
  for(const value of arr){
  console.log(value);
  }*/




  class gryzVagon{
    constructor(volumeM3,typeVagon,gryz){
      this.volumeM3=volumeM3;
      this.typeVagon=typeVagon;
      this.gryz=gryz;
    }
    unloadGryz = function(){
      return this.gryz=null;
    }
    loadGryz = function(){
      return 'Перевозит ' + this.gryz;
    }
  }

  class Lokomotiv{
    constructor(maxColMest,arrayPeople,typeEngine,powerEngine,startLiEngine){
      this.maxColMest=maxColMest;
      this.arrayPeople=arrayPeople;
      this.typeEngine=typeEngine;
      this.powerEngine=powerEngine;
      this.startLiEngine=startLiEngine;
    }
    startEngine = function(){
      if(this.arrayPeople.length === 0){
        return false;
      }
      return true;
    }
    putPassenger = function(passengerKey){
      if(typeof this.maxColMest === 'number' && 
       passengerKey > this.maxColMest)
       {
        return 'Свободных мест больше нет';
      }
      return 'Ваше место номер ' + passengerKey;
    }
  }

  class Train{
    constructor(arrayVagonov,usedLokomotiv,speed){
      this.arrayVagonov=arrayVagonov;
      this.usedLokomotiv=usedLokomotiv;
      this.speed=speed;
    }
    upSpeed=function(startEngine,oborotov){
      if(startEngine===true){
        for(let i=0;i<oborotov;i++){
          this.speed+=5;
        }
      return this.speed;
      }
      return TypeError('Двигатель не запущен');
    }
    downSpeed=function(startEngine,oborotov){
      if(startEngine===true){
        for(let i=0;i<oborotov;i++){
          this.speed-=5;
        }
      return this.speed;
      }
      return TypeError('Двигатель не запущен');
    }
    stop=function(){
      if(this.speed>=0 && this.speed<=10){
      return this.speed + ' Происходит остановка';
      }
      return 'Скорость еще слишком высока збросьте скорость';
    }
    hookVagonEnd=function(numerVagon){
      this.arrayVagonov.push(numerVagon);
      return this.arrayVagonov.length;
    }
    spisok=function(){
      return this.arrayVagonov.forEach(vagoni=>console.log(vagoni));
  }
  }

  let vagon1=new gryzVagon(77,'пасажирский','люди');
  let vagon2=new gryzVagon(77,'пасажирский','люди');
  let vagon3=new gryzVagon(80,'грузовой','уголь');
  let vagon4=new gryzVagon(80,'грузовой','песок');
  let vagon5=new gryzVagon(80,'грузовой','метал');
  let lokomativ1 = new Lokomotiv(50,['Petrov','Osechkin','Dehtatrov'],
  'електродвигатель',10020,true);
  let train1 = new Train([vagon1,vagon2,vagon3,vagon4],
    lokomativ1,0);
  console.log(vagon1.loadGryz(vagon1.gryz));
  console.log(vagon1.unloadGryz());
  console.log(lokomativ1.startEngine());
  console.log(lokomativ1.putPassenger(51));
  console.log(train1.upSpeed(lokomativ1.startEngine(lokomativ1.arrayPeople),20));
  console.log(train1.downSpeed(lokomativ1.startEngine(lokomativ1.arrayPeople),8));
  console.log(train1.stop());
  console.log(train1.downSpeed(lokomativ1.startEngine(lokomativ1.arrayPeople),11));
  console.log(train1.stop());
  console.log(train1.arrayVagonov);
  console.log(train1.arrayVagonov.length);
  console.log(train1.hookVagonEnd(vagon5));
  console.log(train1.arrayVagonov);
  console.log(train1.spisok());
  