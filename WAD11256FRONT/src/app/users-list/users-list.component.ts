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
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList!: User[];
  isLoading = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.http.get<User[]>('http://localhost:42300/api/users').subscribe(
      (res: User[]) => {
        console.log(res);
        if (res) {
          this.usersList = res.reverse();
        }
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      }
    );
  }
}
