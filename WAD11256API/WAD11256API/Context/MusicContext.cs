using Microsoft.EntityFrameworkCore;
using WAD11256API.Models;

namespace WAD11256API.Context
{
    public class MusicContext : DbContext
    {
        // Constructer
        public MusicContext(DbContextOptions<MusicContext> o) : base(o)
        {
            Database.EnsureCreated();
        }
        // Music Database
        public DbSet<Music> Musics { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
