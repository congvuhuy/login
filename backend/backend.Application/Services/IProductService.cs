﻿using backend.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Application.Services
{
    public interface IProductService
    {
        Task<List<Products>> getAllProduct();
    }
}
