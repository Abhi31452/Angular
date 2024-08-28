import { inject } from "@angular/core";
// import { AdminserviceService } from "../customsServices/adminservice.service";
import { UsersService } from "../customsServices/users.service";


export function authincation():boolean{
let flag=false;
    const admin= inject(UsersService);
    if(admin.loginflag){
        if(admin.usname=="admin")
         flag=true; 
    
    }else{
        window.alert("plz login first");
    }
    return flag;


}
