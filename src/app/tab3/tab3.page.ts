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
  selection;

  data = [100, 90, 50, 100, 70, 60, 90]
  labels = [0, 1, 2, 3, 4, 5, 6]

  async ngOnInit() {
    this.exercises = await this.storage.get("exercises")
    this.sessionHistory = await this.storage.get("sessionHistory")
    this.makeChart('Deadlift')
  }

  async makeChart(exerciseTitle) {
    this.label = await this.exercises.filter(obj => {return obj.title === exerciseTitle})
    this.dates = await this.label[0].repMax.map(element => element.date)
    this.maxes = await this.label[0].repMax.map(element => element.max)
    this.chart = await new Chart(this.canvas.nativeElement, {
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

}
