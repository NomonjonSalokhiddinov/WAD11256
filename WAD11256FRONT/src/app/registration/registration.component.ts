import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


interface User {
  userID: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  password: string = '';
  loading: boolean = true;
  usersList!: User[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    console.log("user" + localStorage.getItem("currentUser"))
    this.loading = true
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    this.http.get<User[]>('http://localhost:42300/api/users')
      .subscribe(
        (res: User[]) => {
          if (res) {
            this.usersList = res;
          }
        });
  }
  onSubmit() {
    console.log(this.firstName, this.lastName, this.password);
    const url = 'http://localhost:42300/api/users';
    try {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username.toLowerCase(),
        password: this.password
      }
      if (!this.firstName || !this.lastName || !this.password) {
        console.log("Please enter all fields");
        return;
      }
      this.http.post(url, user)
        .subscribe((response) => {
          console.log(response);
          localStorage.setItem('currentUser', JSON.stringify(response))
          setTimeout(() => {
            console.log("Wait")
          }, 1000);
          alert(`New user ${this.firstName} ${this.lastName} is added successfuly😀`);
          this.router.navigate(['/']);
        });
    }
    catch {
      console.log("Sorry, something went went wrong☹");
      this.firstName = '';
      this.lastName = '';
      this.password = ''
    }
  }
}
