import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private storage: Storage) { }

  exercises: Array<object>;

  async setExercises() {
    if(await this.storage.get("exercises") == null) {
      let d = new Date()
      let date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
      await this.storage.set("exercises", 
      [
        {
          title: "Deadlift",
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/deadlift.gif?crop=1xw:1xh;center,top&resize=480:*',
        },
        {
          title: "Wide Grip Pulldowns",
          repMax: [{date:'2020-03-01' ,max: 80}, {date:'2020-03-05' ,max: 80}, {date:'2020-03-05' ,max: 82}, {date:'2020-03-05' ,max: 85}, {date:'2020-03-05' ,max: 85}, {date:'2020-03-05' ,max: 90}, {date:'2020-03-05' ,max: 92}],
          image: 'https://program.rapidloss.com.au/wp-content/uploads/lat-pulldown.gif'
        },
        {
          title: "Face Pulls",
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://3vnqw32fta3x1ysij926ljs3-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/F_Face-Pull.gif'
        },
        {
          title: "Hammer Curls",
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/curlsthor3.gif?crop=1xw:1xh;center,top&resize=480:*'
        },
        {
          title: "Dumbbell Curls", 
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/how-to-do-the-zottoman-curl.gif?resize=480:*'
        },
        {
          title: "Bench Press", 
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bench-press.gif?resize=480:*'
        },
        {
          title: "Overhead Press", 
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://www.nerdfitness.com/wp-content/uploads/2014/05/military-press.gif'  
        },
        {
          title: "Incline Dumbbell Press", 
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/inclinedumbbellpress.gif?resize=480:*'
        },
        {
          title: "Triceps Pushdown", 
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://weighteasyloss.com/wp-content/uploads/2018/06/razgibanie-s-kanatnoy-rukoyatkoy.gif'
        },
        {
          title: "Tricep Extensions", 
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://qph.fs.quoracdn.net/main-qimg-960ff78b5967e66c9b0198eb54102bd3'
        },
        {
          title: "Squat", 
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/barbell-squat.gif?resize=480:*'
        },
        {
          title: "Leg Press", 
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/how-to-do-the-leg-press.gif?resize=480:*'
        },
        {
          title: "Romanian Deadlift", 
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/deadlift.gif?crop=1xw:1xh;center,top&resize=480:*'
        },
        {
          title: "Leg Curls", 
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://cdn.shopify.com/s/files/1/0057/5599/4225/products/RS-1408_ProneLegCurl.gif?v=1576175009'
        },
        {
          title: "Calf Raises", 
          repMax: [{date:'2020-03-01' ,max: 130}, {date:'2020-03-05' ,max: 125}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 130}, {date:'2020-03-05' ,max: 140}, {date:'2020-03-05' ,max: 145}, {date:'2020-03-05' ,max: 150}],
          image: 'https://cdn.shopify.com/s/files/1/0057/5599/4225/products/ani_rpl-5405_grande.gif?v=1576176250'
        },
      ])
    }
    this.exercises = await this.storage.get("exercises")
  }

  getExercises() {
    return this.exercises
  }

  async saveExercise(data) {
    this.exercises = await this.storage.set('exercises', data)
  }

}

