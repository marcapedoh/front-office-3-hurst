import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WebNotificationService } from 'src/app/services/Notification/web-notification.service';
import { TokenService } from 'src/app/services/token-service/token.service';
import { login } from '../store/actions/auth.actions';
import { AuthState } from '../store/reducers/auth.reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authRequest: any = {
    email: '',
    password: ''
  }
  constructor(private authStore: Store<{ auth: AuthState }>, private tokenService: TokenService, private webNotification: WebNotificationService,private router:Router) { }
  

  login(event: any) {
    event.preventDefault()

    this.authStore.dispatch(login(this.authRequest));
  }

}
