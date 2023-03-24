import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  firstName: string = '';
  lastName: string = '';
  username: string = '';


  ngOnInit() {
    const user = localStorage.getItem('currentUser');
    console.log(user)

  }

}
