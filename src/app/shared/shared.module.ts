import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import { NotificationModule } from './notifier-service/notification.module';

import { EncrDecrService } from './services/encr-decr.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    // NotificationModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    // NotificationModule,
  ],
  declarations: [],
  providers: [
    EncrDecrService,
  ],
})
export class SharedModule { }
