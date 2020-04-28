import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private storage: Storage) {}

  exercises;

  async ngOnInit() {
    this.exercises = await this.storage.get("exercises")
  }

    // Intialises array with that ranges to 30 - To simulate dummy data in view
    numbers = Array(30).fill(0).map((x,i)=>i);
}
