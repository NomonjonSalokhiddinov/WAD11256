import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  userID: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}
interface Music {
  id: number;
  userID: number;
  name: string;
  author: string;
  publicationYear: number;
  imageLink: string;
  musicGenre: {
    id: number;
    name: string;
    description: string;
  };
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: User;
  musicList!: Music[];
  userId!: number;
  firstName = '';
  lastName = '';
  username = '';
  isLoading = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.isLoading = true;
    const data = localStorage.getItem('currentUser')
    if (data) {
      this.user = JSON.parse(data);
      console.log(this.user);

      this.userId = this.user.userID;
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.username = this.user.username;
    }

    try {
      const url = 'http://localhost:42300/api/music/user/' + this.user.userID;
      this.http.get<Music[]>(url).subscribe(
        (res: Music[]) => {
          console.log(res);
          if (res) {
            this.musicList = res.reverse();
          }
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        }
      );
    }
    catch {
      this.isLoading = false;
      alert('Sorry, cannot get music data😢')
    }
  }

  logOut() {
    localStorage.removeItem('currentUser');
    window.location.href = "/";
  }

}
