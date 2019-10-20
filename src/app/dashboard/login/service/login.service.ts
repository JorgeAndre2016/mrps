import { Injectable, EventEmitter, Injector, Inject } from '@angular/core';

import { UsersModel } from '../../../shared/models/users.model';

// tslint:disable-next-line: import-blacklist
import { Observable } from 'rxjs';
import { SessionSetGetService } from 'src/app/shared/services/session-setget.service';

@Injectable()
export class LoginService {

  private timeDefault = 5000;
  private userAuthenticated = false;

  public isLoging = new EventEmitter<boolean>();

  constructor(
    // protected injector: Injector
    @Inject(SessionSetGetService)
    private sessionService: SessionSetGetService,
  ) {

  }

  public login(user: string, pwd: string): Observable<any> {
    const userL = user.toUpperCase();
    // Retorna usuário por matrícula




    return new Observable((obser) => {
      obser.next(true);
      obser.complete();
    });

    // return this.callResource('get', `/${userL}/userLogin`, {}, false)
    // .flatMap((resp) => this.userhasRegistered(resp))
    // .flatMap((resp2) => this.userIsAllowed(resp2))
    // .flatMap((resp3) => this.usernameAndPasswordValid(resp3, pwd));
  }

  public logout(): boolean {
    this.userAuthenticated = false;
    this.sessionService.clearSession();
    this.emitIsLoging(this.userAuthenticated);
    return this.userAuthenticated;
  }

  public userIsAuthenticated(): boolean {
    return false;
    // return this.userAuthenticated;
  }

  public userIsAdministrator(): boolean {
    const profilesSiglas = this.sessionService.getProfiles();
    const isAdm = profilesSiglas.includes('ADM');
    return isAdm;
  }

  public emitIsLoging(isLoging: boolean): void {
    this.isLoging.emit(isLoging);
  }

  // methods private
  // private userhasRegistered(resp: Array<UsersModel>): Observable<any> {
  //   if (resp.length === 0) {
  //     this.notificationService.notify('warning', '', this.timeDefault, 'Cadastro não localizado!');
  //     this.activeSession(false);
  //     return Observable.throw(resp);
  //   } else {
  //     return Observable.of(resp);
  //   }
  // }

  // private userIsAllowed(resp: Array<UsersModel>): Observable<any> {
  //   if (resp[0].permission === 'A' &&
  //   resp[0].registeredByTheSystem === 'FMT' &&
  //   resp[0].profiles.length > 0) {
  //     return Observable.of(resp);
  //   } else {
  //     this.notificationService.notify('error', '', this.timeDefault,
  //     'Cadastro inativo ou não permitido, por favor contate o administrador!');
  //     this.activeSession(false);
  //     return Observable.throw(resp);
  //   }
  // }

  // private usernameAndPasswordValid(resp: Array<UsersModel>, pwd: string): Observable<any> {
  //   const pwdEncrypt = this.encrDecrService.encrypt(`${pwd}`);
  //   if (resp[0].password === pwdEncrypt) {
  //     const userSalved = this.sessionService.setUser(resp[0]);
  //     if (userSalved) {
  //       this.activeSession(true);
  //       return Observable.of(true);
  //     } else {
  //       this.notificationService.notify('error', '', this.timeDefault, `Houve uma indisponibilidade no sistema, tente novamente!`);
  //       return Observable.throw(false);
  //     }
  //   } else {
  //     this.notificationService.notify('error', '', this.timeDefault, 'Senha inválida!');
  //     this.activeSession(false);
  //     return Observable.throw(false);
  //   }
  // }

  private activeSession(user: boolean): void {
    this.userAuthenticated = user;
    this.emitIsLoging(user);
  }
}
