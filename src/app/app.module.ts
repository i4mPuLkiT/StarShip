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
import { AccountmanagerComponent } from './accountmanager/accountmanager.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TablesComponent } from './tables/tables.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


let routes = [
  { path: "", component: AccountmanagerComponent },
  { path: "login", component: LoginComponent },
   { path: "menu", component: MenuComponent },
    { path: "signup", component: SignupComponent },
    { path: "home", component: HomeComponent },
     { path: "login", component: LoginComponent },
     { path: "accountmanager", component: AccountmanagerComponent },
     { path: "forgotpassword", component: ForgotpasswordComponent },
     { path: "tables", component: TablesComponent },
    
   
];


@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot(routes, {
          useHash: true,
          enableTracing: false // for Debugging of the Routes
      })

   ],
  declarations: [ AppComponent, HelloComponent, SignupComponent, HomeComponent, MenuComponent, LoginComponent, LayoutComponent, AccountmanagerComponent, ForgotpasswordComponent, TablesComponent, NavMenuComponent, HeaderComponent, FooterComponent,   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 }
