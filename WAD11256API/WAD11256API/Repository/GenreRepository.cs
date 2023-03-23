using System.Collections.Generic;
using System.Linq;
using WAD11256API.Context;
using WAD11256API.Interfaces;
using WAD11256API.Models;


namespace WAD11256API.Repository
{
    public class GenreRepository : IGenreRepository
    {
        private readonly MusicContext _dbContext;
        public GenreRepository(MusicContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void DeleteGenre(int genreid)
        {
            var genre = _dbContext.Genres.Find(genreid);
            _dbContext.Genres.Remove(genre);
            Save();
        }
        public Genre GetGenreById(int Id)
        {
            var cate = _dbContext.Genres.Find(Id);
            return cate;
        }
        public IEnumerable<Genre> GetGenre()
        {
            return _dbContext.Genres.ToList();
        }
        public void InsertGenre(Genre genre)
        {
            _dbContext.Add(genre);
            Save();
        }
        public void UpdateGenre(Genre genre)
        {
           _dbContext.Entry(genre).State =
           Microsoft.EntityFrameworkCore.EntityState.Modified;
           Save();
        }
        public void Save()
        {
            _dbContext.SaveChanges();
        }
    }
}
