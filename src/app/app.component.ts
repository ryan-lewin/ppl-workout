import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { WorkoutService } from './workout.service'
import { ExercisesService } from './exercises.service'
import { SessionService } from './session.service'
import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private workoutService: WorkoutService,
    private exerciseService: ExercisesService,
    private sessionService: SessionService,
    private userService: UserService,
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.workoutService.setWorkouts()
    this.exerciseService.setExercises()
    this.sessionService.setSessions()
    this.userService.setUser()


    // if(await this.storage.get("sessionHistory") == null) {
    //   await this.storage.set("sessionHistory", [])
    // }

  }
}
