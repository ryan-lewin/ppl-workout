import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  sessions: Array<object>

  constructor(private storage: Storage) { }

  async setSessions() {
    if(await this.storage.get("sessionHistory") == null) {
      let d = new Date()
      let date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
      await this.storage.set("sessionHistory", [])
    }
    this.sessions = await this.storage.get("sessionHistory")
  }

  getSessions() {
    return this.sessions
  }

  saveSessions(data) {
    this.sessions.push(data)
    this.storage.set("sessionHistory", this.sessions)
    console.log(this.sessions)
  }
}
