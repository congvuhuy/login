using backend.Application.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecureDataController : ControllerBase
    {
        private readonly IProductService _productService; 
        public SecureDataController(IProductService productService) 
        { 
            _productService = productService;
        }
        [Authorize]
        [HttpGet("product")] 
        public IActionResult GetProduct() 
        { 
            var products=_productService.getAllProduct();
            return Ok(products); 
        }
      
    }
}
