import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateMusicComponent } from './create-music/create-music.component';
import { CreateGenreComponent } from './create-genre/create-genre.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MusicDetailsComponent } from './music-details/music-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'create-music', component: CreateMusicComponent },
  { path: 'create-genre', component: CreateGenreComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'music-details/:id', component: MusicDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
