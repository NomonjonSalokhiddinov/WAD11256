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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputUsername: string = '';
  inputPassword: string = '';
  isLoading = false;

  usersList!: User[];

  constructor(private http: HttpClient) { }
  checkLogin(list: User[], username: string, password: string) {
    var success = false;
    for (let i = 0; i < list.length; i++) {
      if (username == list[i].username && password == list[i].password) {
        localStorage.setItem("currentUser", JSON.stringify(list[i]));
        this.isLoading = false;
        success = true;
        alert("Success")
        window.location.href = "/";
        break;
      }
      else {
        continue;
      }
    }
    if (!success) {
      this.isLoading = false;
      alert('Check credentials and try again🙂')
      this.inputUsername = '';
      this.inputPassword = '';
    }
  }
  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  }
  onSubmit() {
    this.isLoading = true;
    this.http.get<User[]>('http://localhost:42300/api/users')
      .subscribe(
        (res: User[]) => {
          if (res) {
            this.usersList = res;
            console.log(this.usersList);
            this.checkLogin(this.usersList, this.inputUsername, this.inputPassword)
          }
        });


  }
}

