using Microsoft.AspNetCore.Mvc;

namespace ReSpond.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public sealed class RepondController : Controller
    {
        [HttpGet]
        public IActionResult Ping()
        {
            return Ok("Respond ok."); 
        }
    }
}
