import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  sessions: Array<object>

  constructor(private storage: Storage) { }

  //Sets sessions as empty array when called if none existing
  async setSessions() {
    if(await this.storage.get("sessionHistory") == null) {
      let d = new Date()
      let date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
      await this.storage.set("sessionHistory", [])
    }
    this.sessions = await this.storage.get("sessionHistory")
  }

  //Returns session data when called
  getSessions() {
    return this.sessions
  }

  //Saves sessions to storage when called
  saveSessions(data) {
    this.sessions.push(data)
    this.storage.set("sessionHistory", this.sessions)
    console.log(this.sessions)
  }
}
