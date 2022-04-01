import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './adduser/adduser.component';
import { AddUsersRoutingModule } from './adduser/adduser-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutModule } from './about/about.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdduserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     DashboardModule,
     UsersModule,
     HttpClientModule,
     AddUsersRoutingModule,
     ReactiveFormsModule,
     AboutModule,
     AuthModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
