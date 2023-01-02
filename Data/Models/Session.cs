namespace EntityFrameworkPlayground.Data.Models
{
    public class Session
    {
        public string Id { get; set; }
        public List<Response> Responses { get; set; }
        public Course Course { get; set; }
        public Presenter Presenter { get; set; }
        public List<ResponseType> ValidResponses { get; set; }
    }
}