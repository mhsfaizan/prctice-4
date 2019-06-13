import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';
import { ServerModel } from './server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers:ServerModel[];
  selectedServer:ServerModel;
  constructor(private serverService:ServerService) { }

  ngOnInit() {
    this.servers = this.serverService.getServers();
    this.selectedServer = this.servers[0];
    this.serverService.selectedServer.subscribe( (server:ServerModel) => {
      this.selectedServer = server;
    })
  }

}
