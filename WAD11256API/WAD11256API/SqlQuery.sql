use MusicDbApi
Go

----Create Users----
insert into [dbo].Users
([FirstName],[LastName])
values ('John', 'Snow')

go
insert into [dbo].Users
([FirstName],[LastName])
values ('Carl', 'James')

go
insert into [dbo].Users
([FirstName],[LastName])
values ('Bruce', 'Lee')

go
insert into [dbo].Users
([FirstName],[LastName])
values ('Peter', 'Parker')

go
insert into [dbo].Users
([FirstName],[LastName])
values ('Alisher', 'Morgenshtern')
go




----Create Genres----
go
insert into [dbo].[Genres]
([Name], [Description])
values ('Rap', 'Classics of 1990s')

go
insert into [dbo].[Genres]
([Name], [Description])
values ('Pop', 'Popular Music')

go
insert into [dbo].[Genres]
([Name], [Description])
values ('Rock', 'Rock-n-Roll')

go
insert into [dbo].[Genres]
([Name], [Description])
values ('Country', 'Wild West music')




----Create Music----
go
insert into [dbo].Musics
([UserId], [Name], [Author], [PublicationYear], [ImageLink], [MusicGenreID])
values (1, 'Bandana', 'Big Baby Tape, kizaru', 2021, 'https://i.scdn.co/image/ab67616d00001e020839291c1aca1d4373ad80ce', 1)
go

insert into [dbo].Musics
([UserId], [Name], [Author], [PublicationYear], [ImageLink], [MusicGenreID])
values (1, '99 Problems', 'Big Baby Tape, kizaru', 2021, 'https://i.scdn.co/image/ab67616d00001e020839291c1aca1d4373ad80ce', 1)
go

insert into [dbo].Musics
([UserId], [Name], [Author], [PublicationYear], [ImageLink], [MusicGenreID])
values (1, 'Life is Good', 'Drake, Future', 2021, 'https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Future_-_High_Off_Life.png/220px-Future_-_High_Off_Life.png', 1)
go

insert into [dbo].Musics
([UserId], [Name], [Author], [PublicationYear], [ImageLink], [MusicGenreID])
values (2, 'Levitating', 'Dua Lipa', 2021, 'https://cdns-images.dzcdn.net/images/cover/d0f8d853e871838a4a6d8e5b7cdd1432/500x500.jpg', 2)
go

insert into [dbo].Musics
([UserId], [Name], [Author], [PublicationYear], [ImageLink], [MusicGenreID])
values (2, 'Numb', 'Linkin Park', 2021, 'https://upload.wikimedia.org/wikipedia/en/0/0c/Linkin_Park_Meteora_Album_Cover.jpg', 3)

insert into [dbo].Musics
([UserId], [Name], [Author], [PublicationYear], [ImageLink], [MusicGenreID])
values (2, 'Old Town Road', 'Lil Nas X, Billy Ray Cyrus', 2020, 'https://s3.amazonaws.com/media.thecrimson.com/photos/2019/04/14/200610_1337381.jpeg', 4)
go

