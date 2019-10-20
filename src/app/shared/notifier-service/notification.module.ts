import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { FrontUnicoModule } from 'front-unico-ui';

import { NotificationComponent } from './notification.component';

import { NotificationService } from './service/notification.service';

@NgModule({
    imports: [
        CommonModule,
        // FrontUnicoModule,
    ],
    exports: [NotificationComponent],
    declarations: [NotificationComponent],
    providers: [NotificationService],
})
export class NotificationModule { }
