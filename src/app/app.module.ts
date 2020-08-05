import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

let routes = [
  { path: "", component: LayoutComponent },
   { path: "menu", component: MenuComponent },
    { path: "signup", component: SignupComponent },
    { path: "home", component: HomeComponent },
    
   
];


@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot(routes, {
          useHash: true,
          enableTracing: false // for Debugging of the Routes
      })

   ],
  declarations: [ AppComponent, HelloComponent, SignupComponent, HomeComponent, MenuComponent, LoginComponent, LayoutComponent,   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
