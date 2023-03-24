import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  onSubmit() {
    const userData = {
      username: this.username,
      password: this.password
    }
    const users: any = [];
    this.http.get<any[]>('http://localhost:42300/api/users')
      .subscribe(response => {
        for (let i = 0; i < response.length; i++)
          users.push(response[i])
      });

  }
}

