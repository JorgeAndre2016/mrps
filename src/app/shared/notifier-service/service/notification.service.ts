import { EventEmitter, Injectable } from '@angular/core';

export class NotifyMessage {
    public severity: string;
    public message: string;
    public list: string;
    public title: string;
    public time: number;
}

@Injectable()
export class NotificationService {

    public notifier = new EventEmitter<NotifyMessage>();

    public notify(severityValue: string, titleValue: string, timeValue: number, messageValue?: string, listValue?: string): void {
        this.notifier.emit({
            severity: severityValue,
            message: messageValue,
            list: listValue,
            title: titleValue,
            time: timeValue,
        });
    }
}
