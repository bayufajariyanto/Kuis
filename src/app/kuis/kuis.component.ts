import { Component, OnInit } from '@angular/core';
import { Datamhs } from '../shared/Datamhs';
@Component({
  selector: 'app-kuis',
  templateUrl: './kuis.component.html',
  styleUrls: ['./kuis.component.css']
})
export class KuisComponent implements OnInit {
  nim='';
  nama='';
  kelas='';
  status=true;
  daftarMhs:Datamhs[]=[];
  panjang=this.daftarMhs.length;
  mhs;
  constructor() { }

  ngOnInit() {
  }
  tambahMhs(){    
    if(this.status===true){
    this.mhs= new Datamhs(this.nim,this.nama,this.kelas);
    this.daftarMhs.push(this.mhs);
    this.nim='';
    this.nama='';
    this.kelas='';
    this.status=true;
    }
  }

}