using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkPlayground.Data
{
    internal class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }
        public Context() : base() { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Genre>();
            modelBuilder.Entity<Movie>();


            //base.OnModelCreating(modelBuilder); 
        }
    }
}
