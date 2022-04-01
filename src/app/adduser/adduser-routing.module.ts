import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdduserComponent } from './adduser.component';


const routes: Routes = [

{path:'addusers',component:AdduserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AddUsersRoutingModule { }
