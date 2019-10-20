import { NotificationService } from './notification.service';

describe('#notificationService', () => {

  let service: NotificationService;

  beforeEach(() => {
    service = new NotificationService();
  });

  it('notify()', () => {
    const severity = 'error';
    const message = 'teste';
    const time = 2000;

    expect(() => {
      expect(service.notify(severity, message, time))
        .toBeUndefined();
    }).not
      .toThrow();
  });
});
