import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: object;

  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.user = this.userService.getUser()
    console.log(this.user)
  }

  saveChanges() {
    this.userService.saveUser(this.user)

  }
}
