import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../auth/guard.service';
import { UsersComponent } from './users/users.component';


const routes: Routes = [

{path:'users',component:UsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
