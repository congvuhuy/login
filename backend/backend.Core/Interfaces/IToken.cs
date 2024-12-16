using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Core.Interfaces
{
    public interface IToken
    {
        string GenerateToken(string username, string role);
    }
}
