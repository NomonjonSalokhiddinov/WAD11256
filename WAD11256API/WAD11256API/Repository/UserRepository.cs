using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WAD11256API.Context;
using WAD11256API.Interfaces;
using WAD11256API.Models;

namespace WAD11256API.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly MusicContext _dbContext;
        public UserRepository(MusicContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void DeleteUser(int userId)
        {
            var user = _dbContext.Users.Find(userId);
            _dbContext.Users.Remove(user);
            Save();
        }
        public User GetUserById(int userId)
        {
            var prod = _dbContext.Users.Find(userId);
            return prod;
        }
        public IEnumerable<User> GetUsers()
        {
            return _dbContext.Users.ToList();
        }
        public void UpdateUser(User user)
        {
            _dbContext.Entry(user).State =
           Microsoft.EntityFrameworkCore.EntityState.Modified;
            Save();
        }
        public void InsertUser(User user)
        {
            _dbContext.Add(user);
            Save();
        }

        public void Save()
        {
            _dbContext.SaveChanges();
        }
    }
}
