namespace EntityFrameworkPlayground.Models
{
    public class Course
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public List<Session> Sessions { get; set; }
    }
}
