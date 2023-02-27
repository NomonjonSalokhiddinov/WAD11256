using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Transactions;
using WAD11256API.Repository;
using WAD11256API.Models;

namespace WAD11256API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MusicController : ControllerBase
    {
        private readonly IMusicRepository _musicRepository;
        public MusicController(IMusicRepository musicRepository)
        {
            _musicRepository = musicRepository;
        }
        // GET: api/Music
        [HttpGet]
        public IActionResult Get()
        {
            var musics = _musicRepository.GetMusics();
            return new OkObjectResult(musics);
            //return new string[] { "value1", "value2" };
        }
        // GET: api/Music/5
        [HttpGet, Route("{id}", Name = "GetP")]
        public IActionResult Get(int id)
        {
            var music = _musicRepository.GetMusicById(id);
            return new OkObjectResult(music);
            //return "value";
        }
        // POST: api/Music
        [HttpPost]
        public IActionResult Post([FromBody] Music music)
        {
            using (var scope = new TransactionScope())
            {
                _musicRepository.InsertMusic(music);
                scope.Complete();
                return CreatedAtAction(nameof(Get), new { id = music.Id }, music);
            }
        }
        // PUT: api/Music/5
        [HttpPut("{id}")]
        public IActionResult Put([FromBody] Music music)
        {
            if (music != null)
            {
                using (var scope = new TransactionScope())
                {
                    _musicRepository.UpdateMusic(music);
                    scope.Complete();
                    return new OkResult();
                }
            }
            return new NoContentResult();
        }
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _musicRepository.DeleteMusic(id);
            return new OkResult();
        }
    }
}
