import { AfterViewInit, Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-slider-area',
  templateUrl: './slider-area.component.html',
  styleUrls: ['./slider-area.component.css']
})
export class SliderAreaComponent implements AfterViewInit {
  

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