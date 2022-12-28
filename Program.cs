using EntityFrameworkPlayground.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


Console.WriteLine("Hello, World!");
var connectionString = @"Data Source=R91268WZ;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False;Database=Test;";

builder.Services.AddDbContext<Context>(options =>
{
    options.UseSqlServer(connectionString);
});


var app = builder.Build();

using var scope = app.Services.CreateScope();
var database = scope.ServiceProvider.GetRequiredService<Context>();

database.Set<Genre>().Add(new Genre { Id = "genre-id"});

