using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Assignment.Models
{
    public class UserDBContext : DbContext
    {
        public UserDBContext(): base("UserDBContext")
        {
        }
        public DbSet <User> Users { get; set; }

    }
}