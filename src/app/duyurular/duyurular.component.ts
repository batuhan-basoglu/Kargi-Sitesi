import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duyurular',
  templateUrl: './duyurular.component.html',
  styleUrls: ['./duyurular.component.css']
})
export class DuyurularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imgSrc: string = "assets/images/duyuru-images/duyuru.jpg";
  imgSrc2: string = "assets/images/duyuru-images/duyuru.jpg";
  imgSrc3: string = "assets/images/duyuru-images/duyuru.jpg";

  onMouseOver(): void {
    this.imgSrc = "assets/images/duyuru-images/duyuru-2.jpg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/duyuru-images/duyuru.jpg";
  }

  onMouseOver2(): void {
    this.imgSrc2 = "assets/images/duyuru-images/duyuru-2.jpg";
  }

  onMouseOut2(): void {
    this.imgSrc2 = "assets/images/duyuru-images/duyuru.jpg";
  }

  onMouseOver3(): void {
    this.imgSrc3 = "assets/images/duyuru-images/duyuru-2.jpg";
  }

  onMouseOut3(): void {
    this.imgSrc3 = "assets/images/duyuru-images/duyuru.jpg";
  }
}
