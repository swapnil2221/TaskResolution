using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using TaskResolution.WebApi.Models;

namespace TaskResolution.WebApi
{
	public class EFContext :DbContext
	{
		public EFContext() : base("name=DafaultConnection") {
			base.Configuration.ProxyCreationEnabled = false;
		}
		public DbSet<Subject> Subjects { get; set; }
		public DbSet<Student> Students { get; set; }
	}
}