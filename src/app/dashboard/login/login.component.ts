import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Router } from '@angular/router';

import { LoginService } from './service/login.service';

@Component({
  selector: 'mrps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('row', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', animate('500ms 0s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateX(-300px)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateX(-150px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
      ]))),
      transition('ready => void', animate('500ms 0s ease-out', keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateX(-150px)', offset: 0.5 }),
        style({ opacity: 0, transform: 'translateX(-300px)', offset: 1 })
      ])))
    ])
  ]
})
export class LoginComponent implements OnInit {

  public rowState = 'ready';
  public loginForm: FormGroup;
  public user: string;
  public pwd: string;

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService,
    private readonly formBuilder: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.router.navigate(['/home']);

    this.loginForm = this.formBuilder.group({
      user: this.formBuilder.control('', [Validators.required, Validators.maxLength(12)]),
      pwd: this.formBuilder.control('', [Validators.required])
    });
  }

  public send(event): void {
    if (event.which === 13) {
      this.login();
    }
  }

  public login(): void {
    this.loginService.login(this.user.trim(), `${this.pwd.trim()}`)
    .subscribe(() => {
      if (this.loginService.userIsAdministrator()) {

      }
      this.router.navigate(['/home']);
    }, (e) => { });
  }
}
