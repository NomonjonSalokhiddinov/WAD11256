using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Transactions;
using WAD11256API.Models;
using WAD11256API.Interfaces;

namespace WAD11256API.Controllers
{
    [Route("api/Genre")]
    [ApiController]
    public class GenreController : ControllerBase
    {
        private readonly IGenreRepository _genreRepository;
        public GenreController(IGenreRepository genreRepository)
        {
            _genreRepository = genreRepository;
        }
        // GET: api/Genre
        [HttpGet]
        public IActionResult Get()
        {
            var genre = _genreRepository.GetGenre();
            return new OkObjectResult(genre);
        }
        // GET: api/Genre/5
        [HttpGet("{id}", Name = "GetC")]
        public IActionResult Get(int id)
        {
            var genre = _genreRepository.GetGenreById(id);
            return new OkObjectResult(genre);
        }
        // POST: api/Genre
        [HttpPost]
        public IActionResult Post([FromBody] Genre genre)
        {
            using (var scope = new TransactionScope())
            {
                _genreRepository.InsertGenre(genre);
                scope.Complete();
                return CreatedAtAction(nameof(Get), new { id = genre.ID }, genre);
            }
        }
        // PUT: api/Genre/5
        [HttpPut("{id}")]
        public IActionResult Put([FromBody] Genre genre)
        {
            if (genre != null)
            {
                using (var scope = new TransactionScope())
                {
                    _genreRepository.UpdateGenre(genre);
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
            _genreRepository.DeleteGenre(id);
            return new OkResult();
        }
    }
}
