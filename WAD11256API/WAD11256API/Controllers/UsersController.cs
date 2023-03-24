using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Transactions;
using WAD11256API.Interfaces;
using WAD11256API.Models;
using WAD11256API.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WAD11256API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        // GET: api/Users
        [HttpGet]
        public IActionResult Get()
        {
            var users = _userRepository.GetUsers();
            return new OkObjectResult(users);
            //return new string[] { "value1", "value2" };
        }
        // GET: api/Users/5
        [HttpGet, Route("{id}", Name = "GetU")]
        public IActionResult Get(int id)
        {
            var music = _userRepository.GetUserById(id);
            return new OkObjectResult(music);
            //return "value";
        }
        // POST: api/Users
        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            using (var scope = new TransactionScope())
            {
                _userRepository.InsertUser(user);
                scope.Complete();
                return CreatedAtAction(nameof(Get), new { id = user.UserID }, user);
            }
        }
        // PUT: api/Users/5
        [HttpPut("{id}")]
        public IActionResult Put([FromBody] User user)
        {
            if (user != null)
            {
                using (var scope = new TransactionScope())
                {
                    _userRepository.UpdateUser(user);
                    scope.Complete();
                    return new OkResult();
                }
            }
            return new NoContentResult();
        }

        //GET: api/users/playlist/2
        //[HttpGet("playlist/{userId}")]
        //public async Task<ActionResult<IEnumerable<Music>>> GetMusicByUserID(int userId)
        //{
        //    var music = await _userRepository.GetMusicByUserID(userId);

        //    if (music == null || !music.Any())
        //    {
        //        return NotFound();
        //    }

        //    return Ok(music);
        //}

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userRepository.DeleteUser(id);
            return new OkResult();
        }
    }
}
