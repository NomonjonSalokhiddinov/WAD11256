import { Component, OnInit } from '@angular/core';

interface User {
  userID: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;

  ngOnInit() {
    const data = localStorage.getItem('currentUser')
    if (data)
      this.user = JSON.parse(data);

  }

}
