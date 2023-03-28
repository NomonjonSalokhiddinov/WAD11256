import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  musicList!: Music[];
  musicLoading = true;
  currentUser = 'User';


  constructor(private http: HttpClient) { }

  ngOnInit() {
    const user = localStorage.getItem('currentUser')
    if (user) {
      this.currentUser = JSON.parse(user).firstName;
    }

    this.musicLoading = true;
    this.http.get<Music[]>('http://localhost:42300/api/music').subscribe(
      (res: Music[]) => {
        console.log(res);
        if (res) {
          this.musicList = res.reverse();
        }
        setTimeout(() => {
          this.musicLoading = false;
        }, 1000);
      }
    );
  }

}
