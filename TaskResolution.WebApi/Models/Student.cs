using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TaskResolution.WebApi.Models
{
    public class Student
    {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        [Required]
        //[Index(IsUnique =true)]
        public string Number { get; set; }
        [Required]
        public string FirstName { get; set; }
        
        public string MidName { get; set; }
        public string LastName { get; set; }
        [Required]
        public DateTime BirthDate { get; set; }
        public List<Subject> Subjects { get; set; }
    }
}