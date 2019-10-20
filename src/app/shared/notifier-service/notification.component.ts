import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { NotificationService, NotifyMessage } from './service/notification.service';

// import 'rxjs/add/observable/timer';
// import 'rxjs/add/operator/do';
// import 'rxjs/operator/switchMap';
@Component({
    selector: 'fmt-notification',
    templateUrl: 'notification.component.html',
    styleUrls: ['./notification.component.scss'],
    animations: [
        trigger('row', [
            state('ready', style({ opacity: 1 })),
            transition('void => ready', animate('500ms 0s ease-in', keyframes([
                style({ opacity: 0, transform: 'translateX(-30px)', offset: 0 }),
                style({ opacity: 0.8, transform: 'translateX(-10px)', offset: 0.8 }),
                style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
            ]))),
            transition('ready => void', animate('500ms 0s ease-out', keyframes([
                style({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
                style({ opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2 }),
                style({ opacity: 0, transform: 'translateX(30px)', offset: 1 })
            ])))
        ])
    ]
})

export class NotificationComponent implements OnInit {

    public rowState = 'ready';
    public messageNotification = new Array<NotifyMessage>();
    public flag = false;

    constructor (private readonly notificationService: NotificationService) { }

    public ngOnInit(): void {
        this.notificationService.notifier
            .subscribe((message) => {
                const messageIsInTheArray = !this.messageNotification.find((ms) => ms.message === message.message);
                if (messageIsInTheArray) {
                    this.messageNotification.push(message);
                    this.removedMessage(message);
                    window.scrollTo(0, 0);
                } else {
                    this.flag = messageIsInTheArray;
                }
            });
    }

    public removedMessage(message: NotifyMessage): void {
        setTimeout(() => {
            const index = this.messageNotification.indexOf(message, 0);
            this.messageNotification.splice(index, 1);
        }, message.time);
    }
}
