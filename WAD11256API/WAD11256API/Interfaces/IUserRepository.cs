using System.Collections.Generic;
using WAD11256API.Models;

namespace WAD11256API.Interfaces
{
    public interface IUserRepository
    {
        void InsertUser(User user);
        void DeleteUser(int userId);
        User GetUserById(int userId);
        IEnumerable<User> GetUsers();
        IEnumerable<Music> GetMusicByUserID(int userID);
        void UpdateUser(User user);
    }
}
