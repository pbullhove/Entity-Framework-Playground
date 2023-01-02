namespace EntityFrameworkPlayground.Models
{
    public class Respondent
    {
        public int Id { get; set; }
        public List<Session> Sessions { get; set; }
        public List<Response> responses { get; set; }
    }
}
