using Microsoft.EntityFrameworkCore;
using RAA.Entities;

namespace RAA.DataAccess
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext (DbContextOptions<ApplicationContext> options) : base(options)
        {

        }

        public DbSet<Employee> Employee { get; set; }
    }
}
