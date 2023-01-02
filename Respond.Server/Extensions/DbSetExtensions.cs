using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkPlayground.Extensions
{
    public static class DbSetExtensions
    {
        public static void AddOrUpdate<T>(this DbSet<T> set, T entity) where T : class
        {
            var entry = set.Entry(entity);

            if (entry.State == EntityState.Detached)
            {
                entry.Reload();
            }
            if (entry.State == EntityState.Detached)
            {
                entry.State = EntityState.Added;
            }
            else
            {
                entry.State = EntityState.Modified;
            }
        }
    }
}
