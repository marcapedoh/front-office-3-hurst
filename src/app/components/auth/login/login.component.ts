import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WebNotificationService } from 'src/app/services/Notification/web-notification.service';
import { TokenService } from 'src/app/services/token-service/token.service';
import { login, register } from '../store/actions/auth.actions';
import { AuthState } from '../store/reducers/auth.reducers';
import { RegisterState } from '../store/reducers/register.reducers';
import { NotificationModel } from 'src/app/models/notification.model';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  confirmPassword: string = ''
  token:string=''
  isLoginForm:boolean=false;
  authRequest: any = {
    email: '',
    password: ''
  }
  registrationRequest: any = {
    companyDTO: {
      companyId: ''
    },
    firstname: '',
    companyLogoPath: 'photo.jpg',
    email: '',
    password: ''
  }
  constructor(private registerStore: Store<{ register: RegisterState }>,private authStore: Store<{ auth: AuthState }>, private tokenService: TokenService, private webNotification: WebNotificationService,private router:Router) { }
  

  login(event: any) {
    event.preventDefault()

    this.authStore.dispatch(login(this.authRequest));
  }
  
  register(event: any) {
    console.log("event:? ")
    event.preventDefault();
    this.registrationRequest.companyDTO.companyId = environment.companyId
    if (this.confirmPassword != this.registrationRequest.password) {
      event.preventDefault()
      console.log(this.registrationRequest)
      let notification: NotificationModel = new NotificationModel();
      notification.message = "the confirmation password should be the same like the password you provided in the password field";
      notification.status = "danger";
      this.webNotification.emitNotification(notification)
    } else {
      
      event.preventDefault();

      this.registerStore.dispatch(register(this.registrationRequest));
     
    }
  }

  ngOnInit(): void {
    this.token=JSON.parse(localStorage.getItem("token")!) as string
    this.isLoginForm=this.tokenService.isTokenValid(JSON.parse(localStorage.getItem("token")!))? true:false;
    console.log(this.isLoginForm)
  }
}
