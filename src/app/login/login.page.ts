import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user;
  imageFile;

  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.user = this.userService.getUser()
    console.log(this.user)
  }

  saveChanges() {
    this.userService.saveUser(this.user)
  }

  imageSelected(files) {
    let fileReader = new FileReader()
    fileReader.onload = e => {
      this.user.image = fileReader.result
    }
    fileReader.readAsDataURL(files[0])
  }

}
