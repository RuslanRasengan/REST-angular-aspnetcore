using Microsoft.Extensions.DependencyInjection;
using RAA.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace RAA.Configurations
{
    public static class DatabaseConfiguration
    {
        public static IServiceCollection ConfigureDatabase(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<ApplicationContext>(options =>
                options.UseLazyLoadingProxies()
                    .UseSqlServer(connectionString));

            return services;
        }
    }
}
