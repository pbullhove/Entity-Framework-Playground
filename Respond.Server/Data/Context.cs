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
            modelBuilder.Entity<Course>(g =>
            {
                g.HasKey(g => g.Id);
            });
            modelBuilder.Entity<Presenter>(m =>
            {
                m.HasKey(m => m.Id);
                m.HasOne(m => m.Genre)
                 .WithMany()
                 .IsRequired(true); 
            });
        }
    }
}
