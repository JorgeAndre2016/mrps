import { TestBed } from '@angular/core/testing';
import { FrontUnicoModule } from 'front-unico-ui';
import { NotificationComponent } from './notification.component';
import { NotificationService, NotifyMessage } from './service/notification.service';

describe('#notificiationService', () => {

  let component: NotificationComponent;
  let service: NotificationService;
  let originalTimeout;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotificationComponent,
      ],
      imports: [
        FrontUnicoModule,
      ],
      providers: [
        NotificationService
      ],
    });

    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    service = new NotificationService();
    component = new NotificationComponent(service);
  });

  it('should be create', () => {
    expect(component)
    .toBeTruthy();
  });

  it('shoul test ngOnInit', () => {
    component.ngOnInit();
    service.notify('error', 'Teste', 2000, 'ms', 'list');

    service.notifier.subscribe((message) => {
      expect(message)
      .toEqual({
        severity: 'error',
        title: 'Teste',
        time: 2000,
        message: 'ms',
        list: 'list'
      });
    });

    service.notify('error', 'Teste', 2000, 'ms', 'list');

    service.notifier.subscribe((message) => {
      expect(component.flag)
      .toBe(true);
    });
  });

  it('takes a long time', function (done) {
    const message: NotifyMessage = {message: 'teste', severity: 'error', time: 5000, list: '', title: 'title'};
    const message2: NotifyMessage = {message: 'teste2', severity: 'errorr', time: 9000, list: '', title: 'title'};

    component.removedMessage(message);

    setTimeout(function () {
      component.messageNotification.push(message);
      component.messageNotification.push(message2);

      const index = component.messageNotification.indexOf(message, 0);
      component.messageNotification.splice(index, 1);

      expect(component.messageNotification.length)
      .toEqual(1);
      done();
    }, message.time);
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
