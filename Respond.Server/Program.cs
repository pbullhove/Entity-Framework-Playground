using EntityFrameworkPlayground.Data;
using EntityFrameworkPlayground.Data.Models;
using EntityFrameworkPlayground.Extensions;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

Console.WriteLine("Hello, World!");
var connectionString = @"Data Source=R91268WZ;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False;Database=Movies;";

builder.Services.AddDbContext<Context>(options =>
{
    options.UseSqlServer(connectionString);
});

var app = builder.Build();


using var scope = app.Services.CreateScope();
var database = scope.ServiceProvider.GetRequiredService<Context>();

//database.Database.Migrate();

var genre = new Genre { 
    Id = "action-id", 
    Name = "Action"
};

var movie = new Movie
{
    Id = "die-hard-id",
    Name = "Die Hard 2",
    Genre = genre
};

database.Set<Genre>().AddOrUpdate(genre);
database.Set<Movie>().AddOrUpdate(movie);

database.SaveChanges(); 