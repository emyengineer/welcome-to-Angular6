import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created!';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Server 1', 'server 2'];

  constructor() {
    
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);

   }

  ngOnInit() {
  }
  
  createServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server Created ! name is " + this.serverName;
    this.servers.push(this.serverName);
    
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
