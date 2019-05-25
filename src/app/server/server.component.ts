import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
     templateUrl: './server.component.html',
     styles: [`
         .online {
             color: white
         }
     
     `]
})

export class ServerComponent {
    
    serverId: number = 10;
    serverStatus: string = 'Offline';
    color: string ='red';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "Online" : 'Offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        (this.serverStatus === 'Online')? this.color='green' : this.color= 'Red';
        return this.color;
    }
}