import { Component, OnInit, Input } from '@angular/core';
import { ServerModel } from '../server.model';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  @Input() server:ServerModel;
  constructor(private serverService:ServerService) { }

  ngOnInit() {
  }
  update(name:string,status:string,id:number){
    this.serverService.update({name,status,id});
  }
}
