import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

    // Intialises array with that ranges to 30 - To simulate dummy data in view
    numbers = Array(30).fill(0).map((x,i)=>i);
}
