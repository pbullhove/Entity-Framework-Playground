﻿using System.ComponentModel.DataAnnotations;

namespace Respond.Models
{
    public class Response
    {
        public int Id { get; set; }
        public User Respondent { get; set; }
        
        [Timestamp]
        public byte[] Timestamp { get; set; }
        public ResponseType Message { get; set; }
    }
}
