using backend.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Application.Services
{
    
    public class ProductService : IProductService
    {
        private readonly List<Products> _product = new List<Products>
        {
            new Products { name = "SamSung", price=1000},
            new Products { name = "Ịphone", price=2000},
            new Products { name = "Redmi", price=4000},
            new Products { name = "Oppo", price=3000},

        };
        public  Task<List<Products>> getAllProduct()
        {
           return Task.FromResult(_product);
        }
    }
}
