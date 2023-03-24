import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Music {
  id: number;
  userID: number;
  name: string;
  author: string;
  publicationYear: number;
  imageLink: string;
  musicGenre: null;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  musicList!: Music[];
  musicLoading = true
  // musicList = [
  //   {
  //     id: 1,
  //     userID: 1,
  //     name: "Bandana",
  //     author: "Big Baby Tape, kizaru",
  //     publicationYear: 2021,
  //     imageLink: "https://i.scdn.co/image/ab67616d00001e020839291c1aca1d4373ad80ce",
  //     musicGenre: null
  //   },
  //   {
  //     id: 2,
  //     userID: 1,
  //     name: "99 Problems",
  //     author: "Big Baby Tape, kizaru",
  //     publicationYear: 2021,
  //     imageLink: "https://i.scdn.co/image/ab67616d00001e020839291c1aca1d4373ad80ce",
  //     musicGenre: null
  //   },
  //   {
  //     id: 3,
  //     userID: 1,
  //     name: "Life is Good",
  //     author: "Drake, Future",
  //     publicationYear: 2021,
  //     imageLink: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Future_-_High_Off_Life.png/220px-Future_-_High_Off_Life.png",
  //     musicGenre: null
  //   },
  //   {
  //     id: 4,
  //     userID: 2,
  //     name: "Levitating",
  //     author: "Dua Lipa",
  //     publicationYear: 2021,
  //     imageLink: "https://cdns-images.dzcdn.net/images/cover/d0f8d853e871838a4a6d8e5b7cdd1432/500x500.jpg",
  //     musicGenre: null
  //   },
  //   {
  //     id: 5,
  //     userID: 2,
  //     name: "Numb",
  //     author: "Linkin Park",
  //     publicationYear: 2021,
  //     imageLink: "https://upload.wikimedia.org/wikipedia/en/0/0c/Linkin_Park_Meteora_Album_Cover.jpg",
  //     musicGenre: null
  //   },
  //   {
  //     id: 6,
  //     userID: 2,
  //     name: "Old Town Road",
  //     author: "Lil Nas X, Billy Ray Cyrus",
  //     publicationYear: 2020,
  //     imageLink: "https://s3.amazonaws.com/media.thecrimson.com/photos/2019/04/14/200610_1337381.jpeg",
  //     musicGenre: null
  //   }
  // ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.musicLoading = true;
    this.http.get<Music[]>('http://localhost:42300/api/music').subscribe(
      (res: Music[]) => {
        console.log(res);
        if (res) {
          this.musicList = res;
        }
        this.musicLoading = false;
      }
    );
  }

}
