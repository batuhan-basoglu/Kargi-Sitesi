import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  lat = 8.988759;
  lng = 38.788968;
  constructor() {}

  ngOnInit() {}
}
