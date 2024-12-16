﻿using backend.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Domain.Services
{
    public interface IJwtService
    {
        string GenerateToken(User user);
    }
}
