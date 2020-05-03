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
        subscribed: true,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0DaNhgssBkLLF-MgdKp-XTZ_9bovA9feqX_Bjdbz4-munqHbq&usqp=CAU'
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
