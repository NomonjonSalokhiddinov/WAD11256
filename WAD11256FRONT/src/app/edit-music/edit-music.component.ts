import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

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
interface Genre {
  id: number;
  name: string;
  description: string
}

@Component({
  selector: 'app-edit-music',
  templateUrl: './edit-music.component.html',
  styleUrls: ['./edit-music.component.css']
})
export class EditMusicComponent implements OnInit {
  musicId = 0;
  isLoading = false;
  genresList!: Genre[];


  inputName = '';
  inputUserID = 0;
  inputAuthor = '';
  inputYear = 0;
  inputLink = '';
  inputGenre = {
    id: 0
  }

  constructor(private http: HttpClient, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.isLoading = true;
    const url = this.router.url;
    const id = url.split("/").splice(-1)[0];
    const requestURL = 'http://localhost:42300/api/music/' + id
    try {
      this.http.get<Genre[]>('http://localhost:42300/api/genre').subscribe(
        (res: Genre[]) => {
          console.log(res);
          if (res) {
            this.genresList = res;
            console.log(this.genresList);
          }
        }
      );
      this.http.get<Music>(requestURL).subscribe(
        (res: Music) => {
          if (res) {
            this.inputName = res.name;
            this.inputUserID = res.userID;
            this.inputAuthor = res.author;
            this.inputYear = res.publicationYear;
            this.inputLink = res.imageLink;
            this.inputGenre = {
              id: res.musicGenre.id
            }
          }
          setInterval(() => {
            this.isLoading = false;
          }, 1000)
        }
      );

    } catch {
      alert("Something went wrong😢")
      this.isLoading = false;
    }


  }

  updateMusic() {
    try {
      const data = {
        name: this.inputName,
        userID: this.inputUserID,
        author: this.inputAuthor,
        publicationYear: this.inputYear,
        imageLink: this.inputLink,
        musicGenre: {
          id: this.inputGenre.id
        }
      }
      console.log(data);

      this.http.put<Music>(`${'http://localhost:42300/api/music'}/${this.musicId}`, data).subscribe(() => {
        alert("Success✅")
        this.isLoading = false;
      });

    } catch {

    }
  }
}
