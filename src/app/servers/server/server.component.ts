import { Component, OnInit, Input } from '@angular/core';
import { ServerModel } from '../server.model';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() server:ServerModel;
  constructor(private serverService:ServerService) { }

  ngOnInit() {
  }


  selectServer(){
    this.serverService.selectServer(this.server);
  }
}
