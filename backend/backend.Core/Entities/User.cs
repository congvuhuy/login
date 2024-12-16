using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Core.Entities
{
    internal class User
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Role {  get; set; }
    }
}
