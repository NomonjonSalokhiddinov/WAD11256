use MusicDbApi
Go
insert into [dbo].[Genres]
([Name], [Description])
values ('Rap', 'Classics of West Coast')

use MusicDbApi
Go
insert into [dbo].Musics
([Name], [Author], [PublicationYear], [MusicGenreID])
values ('Bandana', 'Big Baby Tape, kizaru', 2021,1)
Go
