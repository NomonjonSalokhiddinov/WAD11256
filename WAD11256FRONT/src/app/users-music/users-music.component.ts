import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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
  selector: 'app-users-music',
  templateUrl: './users-music.component.html',
  styleUrls: ['./users-music.component.css']
})
export class UsersMusicComponent implements OnInit {
  musicList: Music[] = [];
  isLoading = false;

  constructor(private http: HttpClient, private router: Router, private location: Location) { }

  ngOnInit(): void {
    try {
      this.isLoading = true;
      const url = this.router.url;
      const id = url.split("/").splice(-1)[0];
      const reqUrl = 'http://localhost:42300/api/music/user/' + id;
      this.http.get<Music[]>(reqUrl).subscribe(
        (res: Music[]) => {
          console.log(...res);
          if (res) {
            this.musicList = res;
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
  goBack(): void {
    this.location.back();
  }
}
