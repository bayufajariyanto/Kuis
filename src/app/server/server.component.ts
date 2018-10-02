import { Component } from '@angular/core';

@Component({
   //selector: '[app-server]', //property selector
   //selector :'.app-server',// class selector 
   selector: 'app-server', //tag selektor
   templateUrl: './server.component.html',
   styleUrls: ['./server.component.css']
})

export class ServerComponent {
    //serverName = 'server';
    serverID : number = 12;
    serverStatus = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
}