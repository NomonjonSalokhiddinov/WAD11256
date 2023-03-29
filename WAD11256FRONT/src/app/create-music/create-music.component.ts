import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Genre {
  id: number;
  name: string;
  description: string
}
interface User {
  userID: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-create-music',
  templateUrl: './create-music.component.html',
  styleUrls: ['./create-music.component.css']
})
export class CreateMusicComponent implements OnInit {
  currentUser!: User;
  genresList!: Genre[];
  userID = 0;
  inputName = '';
  inputAuthor = '';
  inputPublicationYear = 2023;
  inputImageLink = '';
  inputGenre = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const data = localStorage.getItem('currentUser')
    if (data)
      this.currentUser = JSON.parse(data);

    this.http.get<Genre[]>('http://localhost:42300/api/genre').subscribe(
      (res: Genre[]) => {
        console.log(res);
        if (res) {
          this.genresList = res;
          console.log(this.genresList);

        }
        // setTimeout(() => {
        //   this.musicLoading = false;
        // }, 1000);
      }
    );

  }
  onSubmit() {
    const url = 'http://localhost:42300/api/music';
    const inputData = {
      userID: this.currentUser.userID,
      name: this.inputName,
      author: this.inputAuthor,
      publicationYear: this.inputPublicationYear,
      imageLink: this.inputImageLink.length < 20 ? 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/music-icon-mohammed-jabir-ap.jpg' : this.inputImageLink,
      musicGenre: {
        id: this.inputGenre * 1
      }
    }
    console.log(inputData);

    if (!this.inputName || !this.inputAuthor || !this.inputPublicationYear) {
      alert("Please enter all required fields");
      return;
    }
    try {
      this.http.post(url, inputData)
        .subscribe((response) => {
          console.log(response);
          alert('New song is sucessfuly added✅ ')
          window.location.href = "/";
        });
    }
    catch {
      alert("Sorry, something went wrong😢")
      return
    }
  }
}
