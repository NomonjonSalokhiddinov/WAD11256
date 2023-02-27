using System.Collections.Generic;
using WAD11256API.Models;

namespace WAD11256API.Repository
{
    public interface IGenreRepository
    {
        void InsertGenre(Genre genre);
        void UpdateGenre(Genre genre);
        void DeleteGenre(int genreid);
        Genre GetGenreById(int Id);
        IEnumerable<Genre> GetGenre();
    }
}
