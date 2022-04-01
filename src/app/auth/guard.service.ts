import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private auth:AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
   return this.auth.user.pipe(map(user=>{
      return !!user
 
      
    })
    
    )
 
   
   }
}
