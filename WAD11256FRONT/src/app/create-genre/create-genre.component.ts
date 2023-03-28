import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { setupTestingRouter } from '@angular/router/testing';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent {
  inputName = "";
  inputDescription = "";
  isLoading = false;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.isLoading = true;
    const url = 'http://localhost:42300/api/genre';
    const inputData = {
      name: this.inputName,
      description: this.inputDescription
    }

    if (!this.inputName || !this.inputDescription) {
      alert("Please enter all required fields");
      return;
    }
    try {
      this.http.post(url, inputData)
        .subscribe((response) => {
          console.log(response);
          setTimeout(() => {
            this.isLoading = false;
          }, 1000)
          alert('New genre is sucessfuly added✅ ')
          window.location.href = "/create-music";
        });
    }
    catch {
      this.isLoading = false;
      alert("Sorry, something went wrong😢")
      return
    }
  }
}
