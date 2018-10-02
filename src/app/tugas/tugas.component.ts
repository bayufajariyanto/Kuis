import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewServer = false;
  //serverCreationStatus = 'Tidak ada Inputan';
  InputanName = "";

  
  constructor() { 
  setTimeout(()=> {
    this.allowNewServer = true;
  }, 2000)
}

  ngOnInit() {
  }
  /*onCreationStatus() {
    this.serverCreationStatus = 'Inputan telah diisi!';
  }*/
  onUpdateServerName(event:Event){
    this.InputanName =(<HTMLInputElement>event.target).value;
  }
  onReset(){
    this.InputanName='';
  }
}
