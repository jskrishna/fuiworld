import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'body',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'fuiworld';

  constructor() { }

  ngOnInit() {

  }
}
