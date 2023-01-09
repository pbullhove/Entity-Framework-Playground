using Respond.Models;
using Microsoft.EntityFrameworkCore;

namespace Respond.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }
        public Context() : base() { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}
