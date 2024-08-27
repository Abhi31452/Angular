import { inject } from "@angular/core";
import { UserService } from "../customService/user.service";

export function authenticationcard():boolean{

    const userservice = inject(UserService);
    if(userservice.loginflag){
        return true;
    }else{
        window.alert("plz login first");
        return false;
    }
}