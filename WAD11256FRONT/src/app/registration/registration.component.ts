import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }
  checkRegister(list: User[], username: string, password: string) {
    var success = false;
    for (let i = 0; i < list.length; i++) {
      if (username == list[i].username && password == list[i].password) {
        localStorage.setItem("currentUser", JSON.stringify(list[i]));
        this.loading = false;
        success = true;
        window.location.href = "/";
        break;
      }
      else {
        continue;
      }
    }
    if (!success) {
      this.loading = false;
      alert('Check credentials and try again🙂')
    }
  }
  ngOnInit(): void {
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
          this.checkRegister(this.usersList, this.username, this.password)
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
