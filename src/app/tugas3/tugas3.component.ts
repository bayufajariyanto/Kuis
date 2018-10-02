import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  styleUrls: ['./tugas3.component.css']
})
export class Tugas3Component implements OnInit {
  kalimat;
  status=true;
  log=[];
  panjang=this.log.length;
  constructor() { }
  ngOnInit() {
  }
  clickOnMe(){
    this.log.push(this.log.length+1);
    if(this.status === true){
      this.kalimat="POLITEKNIK NEGERI MALANG";
      this.status=false;
    }else{
      this.kalimat='';
      this.status=true;
    }
  }
}
