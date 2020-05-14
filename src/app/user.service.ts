import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: object;

  constructor(private storage: Storage) { }

  //Sets user details to dummy data if no user exists
  async setUser() {
    if(await this.storage.get("user") == null) {
      await this.storage.set("user", {
        username: 'Ryan Lewin',
        email: 'ryan@example.com',
        startWeight: 75,
        goalWeight: 85,
        dob: '1991-01-25',
        subscribed: true,
        image: 'https://img.icons8.com/plasticine/2x/user.png'
      })
    }
    this.user = await this.storage.get("user")
  }

  //Returns user when called
  getUser() {
    return this.user
  }

  //Saves user data when updated
  saveUser(data) {
    this.storage.set("user", this.user)
  }
}
