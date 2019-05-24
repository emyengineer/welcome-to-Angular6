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
  serverName = '';
  constructor() {
    
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);

   }

  ngOnInit() {
  }
  
  createServer() {
    this.serverCreationStatus = "Server Created !";
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
