﻿using System;

namespace WAD11256API.Models
{
    public class Music
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public int PublicationYear { get; set; }
        public Genre MusicGenre { get; set; }
    }
}
