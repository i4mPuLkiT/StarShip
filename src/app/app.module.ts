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
import { SummaryComponent } from './summary/summary.component';
import { TransactionComponent } from './transaction/transaction.component';
 import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DataServiceService } from './data-service.service';
import { UserService } from './user.service';
import { TestComponent } from './test/test.component';
import { ClientComponent } from './client/client.component';


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
      { path: "summary", component: SummaryComponent },
      { path: "transaction", component: TransactionComponent },
      { path: "test", component: TestComponent },

   
];


@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot(routes, {
          useHash: true,
          enableTracing: false // for Debugging of the Routes
      })

   ],
  declarations: [ AppComponent, HelloComponent, SignupComponent, HomeComponent, MenuComponent, LoginComponent, LayoutComponent, AccountmanagerComponent, ForgotpasswordComponent, TablesComponent, NavMenuComponent, HeaderComponent, FooterComponent, SummaryComponent, TransactionComponent, TestComponent, ClientComponent,   ],
  bootstrap:    [ AppComponent ],
  providers: [DataServiceService, UserService]
})
export class AppModule {
 }
