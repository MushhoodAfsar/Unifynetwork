import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  carouselOptions : any = [];

  ngOnInit(): void {

  }
  submit=false;
  num: any;
 constructor() { }

//  getData() {

//    let a=  document.createElement('a');
//    a.id='mush';
//    a.href='asdada';
//    a.innerHTML='aaaaaaaaaaaaaaaa';
// document.getElementById("myName")?.appendChild(a);

//    }
   Slide1(){
     this.submit=true;
     this.num=1;
   }
   Slide2(){
     this.submit=true;
     this.num=2;
   }
   Slide3(){
     this.submit=true;
     this.num=3;
   }
   Slide4(){
     this.submit=true;
     this.num=4;
   }
   Slide5(){
     this.submit=true;
     this.num=5;
   }
   Slide6(){
     this.submit=true;
     this.num=6;
   }
   Slide7(){
     this.submit=true;
     this.num=7;
   }
   Slide8(){
     this.submit=true;
     this.num=8;
   }
   Slide9(){
     this.submit=true;
     this.num=9;
   }
   Slide10(){
     this.submit=true;
     this.num=10;
   }
   getback(){
     this.submit=false;

   }



}
