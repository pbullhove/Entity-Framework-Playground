﻿using System.ComponentModel.DataAnnotations;

namespace Respond.Models
{
    public class Session
    {
        public int Id { get; set; }
        public List<Response> Responses { get; set; }
        public Course Course { get; set; }
        public User Presenter { get; set; }
        public List<ResponseType> ValidResponses { get; set; }
        public SessionStatus Status { get; set; }

        [ConcurrencyCheck]
        public int Version { get; set; }
    }
}