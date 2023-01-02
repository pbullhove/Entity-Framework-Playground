﻿namespace EntityFrameworkPlayground.Models
{
    public class Presenter
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public List<Session> Sessions { get; set; }
    }
}
