import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Chart } from 'chart.js'
import { staticViewQueryIds } from '@angular/compiler'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild('sessionStats', {static: true}) canvas

  constructor(private storage: Storage) {}

  exercises;
  sessionHistory;
  chart: any
  label;
  dates;
  maxes;

  data = [100, 90, 50, 100, 70, 60, 90]
  labels = [0, 1, 2, 3, 4, 5, 6]

  async ngOnInit() {
    this.exercises = await this.storage.get("exercises")
    this.sessionHistory = await this.storage.get("sessionHistory")
    this.label = this.exercises[0].repMax
    console.log(this.exercises[0])
    this.dates = this.label.map(element => element.date)
    this.maxes = this.label.map(element => element.max)
    // console.log(this.dates)
    // console.log(this.maxes)
    // console.log(this.label)
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.dates,
        datasets: [{
          label: 'Scores',
          data: this.maxes,
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(75, 192, 192, 0.2)',],
          borderWidth: 5
        }]
      },
    })
  }



    // Intialises array with that ranges to 30 - To simulate dummy data in view
    // numbers = Array(30).fill(0).map((x,i)=>i);
}
