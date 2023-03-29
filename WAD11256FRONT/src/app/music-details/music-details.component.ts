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
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css']
})
export class MusicDetailsComponent implements OnInit {
  musicId = 0;
  music!: Music;
  isLoading = false;

  constructor(private http: HttpClient, private route: Router, private location: Location) { }

  ngOnInit(): void {
    this.isLoading = true;
    const url = this.route.url;
    const id = url.split("/").splice(-1)[0];
    const requestURL = 'http://localhost:42300/api/music/' + id
    try {
      this.http.get<Music>(requestURL).subscribe(
        (res: Music) => {
          if (res) {
            console.log(res);

            this.music = res;
          }
          this.isLoading = false;
        }
      );
    } catch {
      alert("Something went wrong😢")
      this.isLoading = false;
    }
  }
  delete() {
    const requestURL = 'http://localhost:42300/api/music/' + this.music.id
    this.http.delete(requestURL).subscribe(() => {
      window.location.href = '/';
    })
  }
  goBack(): void {
    this.location.back();
  }
}
