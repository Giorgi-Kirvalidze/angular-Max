import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = 'No server was created'
  serverName = ''
  username: string = ''
  serverCreated = false
  servers = ['testserver', 'testserver2']
  showSecret = false;
  logs = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName)
    this.serverCreated = true,
      this.serverCreationStatus = 'Server was created ' + this.serverName
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
  onClickReset() {
    this.username = ''
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.logs.push(this.logs.length + 1);
  }
}