using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityFrameworkPlayground.Data
{
    internal class Movie
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public Genre Genre { get; set; }
    }
}
