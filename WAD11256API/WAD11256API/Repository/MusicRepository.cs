using System.Collections.Generic;
using System.Linq;
using WAD11256API.Context;
using WAD11256API.Models;

namespace WAD11256API.Repository
{
    public class MusicRepository : IMusicRepository
    {
        private readonly MusicContext _dbContext;
        public MusicRepository(MusicContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void DeleteMusic(int musicId)
        {
            var music = _dbContext.Musics.Find(musicId);
            _dbContext.Musics.Remove(music);
            Save();
        }
        public Music GetMusicById(int musicId)
        {
            var prod = _dbContext.Musics.Find(musicId);
            //_dbContext.Entry(prod).Reference(s => s.MusicGenre).Load();
            return prod;
        }
        public IEnumerable<Music> GetMusics()
        {
            return _dbContext.Musics.ToList();
            //.Include(s => s.MusicGenre).ToList();
        }
        public void InsertMusic(Music music)
        {
            music.MusicGenre =
           _dbContext.Genres.Find(music.MusicGenre.ID);
            _dbContext.Add(music);
            Save();
        }
        public void UpdateMusic(Music music)
        {
            _dbContext.Entry(music).State =
           Microsoft.EntityFrameworkCore.EntityState.Modified;
            Save();
        }
        public void Save()
        {
            _dbContext.SaveChanges();
        }

    }
}
