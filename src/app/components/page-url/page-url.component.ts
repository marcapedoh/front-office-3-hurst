import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-url',
  templateUrl: './page-url.component.html',
  styleUrls: ['./page-url.component.css']
})
export class PageUrlComponent {
 @Input() name:string=''
}
