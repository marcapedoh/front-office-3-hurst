import { AfterViewInit, Component } from '@angular/core';
import { AuthState } from '../auth/store/reducers/auth.reducers';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WebNotificationService } from 'src/app/services/Notification/web-notification.service';
import { TokenService } from 'src/app/services/token-service/token.service';
import { login } from '../auth/store/actions/auth.actions';
declare var $: any;
@Component({
	selector: 'app-slider-banner',
	templateUrl: './slider-banner.component.html',
	styleUrls: ['./slider-banner.component.css']
})
export class SliderBannerComponent implements AfterViewInit {

	authRequest: any = {
		email: '',
		password: ''
	}

	constructor( private authStore: Store<{ auth: AuthState }>, private tokenService: TokenService) { }


	login(event: any) {
		event.preventDefault()
		this.authStore.dispatch(login(this.authRequest));
	}
	ngAfterViewInit(): void {
		$('#ensign-nivoslider').nivoSlider({
			effect: 'random',
			slices: 15,
			boxCols: 8,
			boxRows: 4,
			animSpeed: 700,
			pauseTime: 9000,
			startSlide: 0,
			directionNav: true,
			controlNavThumbs: false,
			pauseOnHover: false,
			controlNav: true,
			prevText: '<i class="zmdi zmdi-chevron-left"></i>',
			nextText: '<i class="zmdi zmdi-chevron-right"></i>'
		});
	}

}
