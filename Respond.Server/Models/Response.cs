using System.ComponentModel.DataAnnotations;

namespace EntityFrameworkPlayground.Models
{
    public class Response
    {
        public int Id { get; set; }
        public Respondent Respondent { get; set; }
        
        [Timestamp]
        public byte[] Timestamp { get; set; }
        public ResponseType Message { get; set; }
    }
}
