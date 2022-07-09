import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretpageComponent } from './secretpage/secretpage.component';
import { HomeComponent } from './home/home.component';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './_service/authentication.service';
@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SecretpageComponent,
  ],
  imports: [
 BrowserModule,
 AppRoutingModule,
 FormsModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
