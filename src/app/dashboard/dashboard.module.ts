import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/service/login.service';
import { SessionSetGetService } from '../shared/services/session-setget.service';
import { AuthGuard } from './guards/auth-guard';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [
    AuthGuard,
    LoginService,
    SessionSetGetService,
  ]
})
export class DashboardModule { }
