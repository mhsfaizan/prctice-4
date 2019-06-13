import { Injectable } from "@angular/core";
import { UserModel } from "./user.model";

@Injectable({
    providedIn:'root'
})
export class UserService{
    private users:UserModel[] = [
        new UserModel('Max',1),
        new UserModel('Millian',2),
        new UserModel('Faiz',3)
    ]
    getUsers(){
        return this.users;
    }
}