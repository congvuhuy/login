using backend.Domain.Entities;
using backend.Domain.Services;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Application.Services
{
    public class AuthService:IAuthService
    {
        private readonly List<User> _users = new List<User>
        {
            new User { Username = "user1", Password = "password1", Role = "Admin" },
            new User { Username = "user2", Password = "password2", Role = "User" }
        };
        private readonly IJwtService _jwtService;

        public AuthService(IJwtService jwtService)
        {
            _jwtService = jwtService;
        }

        public string Authenticate(string username, string password)
        {
            var user = _users.FirstOrDefault(u => u.Username == username && u.Password == password);
            if (user == null)
                throw new UnauthorizedAccessException();

            return _jwtService.GenerateToken(user);
        }
    }
}
