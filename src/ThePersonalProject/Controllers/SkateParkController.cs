using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using ThePersonalProject.Services.Models;
using ThePersonalProject.Services;


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ThePersonalProject.Controllers
{
    [Route("api/[controller]")]
    public class SkateParkController : Controller
    {
        private SkateParkService _parkService;

        public SkateParkController(SkateParkService parkService) {
            _parkService = parkService;
        }

        // GET: api/values
        /// <summary>
        /// THis thing grabs shit
        /// </summary>
        /// <returns>a list of perksssss</returns>
        [HttpGet]
        public ICollection<SkateParkDTO> Get()
        {
            return _parkService.FindParks();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]SkateParkDTO skateSpot)
        {
            if (ModelState.IsValid)
            {
                _parkService.NewSpot(skateSpot);
                return Ok();
            }
            else {
                return HttpBadRequest(ModelState);
            }
            
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            
        }
    }
}
