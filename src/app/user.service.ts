import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: object;

  constructor(private storage: Storage) { }

  async setUser() {
    if(await this.storage.get("user") == null) {
      await this.storage.set("user", {
        username: 'Ryan Lewin',
        email: 'ryan@example.com',
        startWeight: 75,
        goalWeight: 85,
        dob: '1991-01-25',
        subscribed: true
      })
    }
    this.user = await this.storage.get("user")
  }

  getUser() {
    return this.user
  }

  saveUser(data) {
    this.storage.set("user", this.user)
  }
}
