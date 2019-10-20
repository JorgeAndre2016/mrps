import { Injectable } from '@angular/core';

import { EncrDecrService } from './encr-decr.service';

// import { ISearchFunctionalitiesRequest } from '../../core/shared-core/contracts/search-functionalities.interface';

import { UsersModel } from '../models/users.model';

@Injectable()
export class SessionSetGetService {

  // private payload: ISearchFunctionalitiesRequest;

  constructor(private readonly encrDecr: EncrDecrService) { }

  public setUser(user: UsersModel): boolean {
    sessionStorage.setItem('name', `${user.name}`);
    sessionStorage.setItem('login', `${user.login}`);
    sessionStorage.setItem('permission', `${user.permission}`);
    sessionStorage.setItem('profiles', `${user.profiles}`);
    sessionStorage.setItem('registeredByTheSystem', `${user.registeredByTheSystem}`);
    return true;
  }

  // public setSearchFunctionality(searchFunctionality: ISearchFunctionalitiesRequest): boolean {
  //   if (searchFunctionality.family) {
  //     sessionStorage.setItem('family', searchFunctionality.family);
  //   }
  //   if (searchFunctionality.channel) {
  //     sessionStorage.setItem('channel', searchFunctionality.channel);
  //   }
  //   if (searchFunctionality.transaction) {
  //     sessionStorage.setItem('transaction', searchFunctionality.transaction);
  //   }
  //   if (searchFunctionality.screen) {
  //     sessionStorage.setItem('screen', searchFunctionality.screen);
  //   }
  //   if (searchFunctionality.description) {
  //     sessionStorage.setItem('description', searchFunctionality.description);
  //   }
  //   if (searchFunctionality.groupDescription) {
  //     sessionStorage.setItem('group', searchFunctionality.groupDescription);
  //   }
  //   return true;
  // }

  // public getSearchFunctionality(): ISearchFunctionalitiesRequest {
  //   const family = sessionStorage.getItem('family');
  //   const channel = sessionStorage.getItem('channel');
  //   const transaction = sessionStorage.getItem('transaction');
  //   const screen = sessionStorage.getItem('screen');
  //   const description = sessionStorage.getItem('description');
  //   const groupDescription = sessionStorage.getItem('group');

  //   this.payload = {
  //     channel: channel ? channel : undefined,
  //     family: family ? family : undefined,
  //     transaction: transaction ? transaction : undefined,
  //     groupDescription: groupDescription ? groupDescription : undefined,
  //     screen: screen ? screen : undefined,
  //     description: description ? description : undefined
  //   };
  //   return this.payload;
  // }

  public setVisitScreen(screen: string): void {
    sessionStorage.setItem('visit', `${screen}`);
  }

  public clearFieldSession(field: string): void {
    sessionStorage.removeItem(field);
  }

  public clearSession(): void {
    sessionStorage.clear();
  }

  public getProfiles(): Array<string> {
    const profilesSession = sessionStorage.getItem('profiles');
    const profileSigla = profilesSession.split(',');
    return profileSigla;
  }

  public setItem(key: string, value: string): boolean {
    const valueEncrypt = this.encrDecr.encrypt(value);
    sessionStorage.setItem(key, valueEncrypt);
    return true;
  }
}
