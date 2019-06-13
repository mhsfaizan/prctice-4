import { Injectable, EventEmitter } from "@angular/core";
import { ServerModel } from "./server.model";

@Injectable({
    providedIn:'root'
})
export class ServerService{
    private servers:ServerModel[] = [
        new ServerModel('ProductionServer','online',1),
        new ServerModel('TestServer','offline',2)
    ];
    selectedServer = new EventEmitter<ServerModel>();
    getServers(){
        return this.servers;
    }
    selectServer(server:ServerModel){
        this.selectedServer.emit(server);
    }
    update(server:ServerModel){
        for(let s of this.servers){
            if(s.id == server.id){
                s.name = server.name;
                s.status = server.status;
                break;
            }
        }
    }
}