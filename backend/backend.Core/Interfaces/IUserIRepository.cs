﻿using backend.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Core.Interfaces
{
    internal interface IUserIRepository
    {
        Task<User> GetUserByIdAsync(Guid userId);
        Task CreateUserAsync(User user);
    }
}
