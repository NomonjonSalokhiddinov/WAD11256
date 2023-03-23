using System.Collections.Generic;
using System.Threading.Tasks;
using WAD11256API.Models;

namespace WAD11256API.Interfaces
{
    public interface IMusicRepository
    {
        void InsertMusic(Music music);
        void UpdateMusic(Music music);
        void DeleteMusic(int musicid);
        Music GetMusicById(int Id);
        IEnumerable<Music> GetMusics();
        IEnumerable<Music> GetMusicByGenre(Genre genre);
    }
}
