import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.loading = true
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  onSubmit() {
    console.log(this.firstName, this.lastName, this.password);
    const url = 'http://localhost:42300/api/users';
    try {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        password: this.password
      }
      if (!this.firstName || !this.lastName || !this.password) {
        console.log("Please enter all fields");
        return;
      }
      this.http.post(url, user)
        .subscribe((response) => {
          console.log(response);
          localStorage.setItem("currentUser", JSON.stringify(user));
          alert(`New user ${this.firstName} ${this.lastName} is added successfuly😀`);
          window.location.href = "/";
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
