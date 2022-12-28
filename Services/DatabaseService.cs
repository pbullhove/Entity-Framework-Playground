using EntityFrameworkPlayground.Data;
using EntityFrameworkPlayground.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace EntityFrameworkPlayground.NewFolder
{
    public class DatabaseService
    {
        private readonly Context _dbContext;

        public DatabaseService(Context dbContext) { }

        

        public void AddMovie(Movie movie) => AddEntity<Movie>(movie);
        public void AddGenre(Genre genre) => AddEntity<Genre>(genre);
        public void AddEntity<T>(T entity) where T : class
        {
            _dbContext.Set<T>().Add(entity);
            _dbContext.SaveChanges();
        }
    }
}
