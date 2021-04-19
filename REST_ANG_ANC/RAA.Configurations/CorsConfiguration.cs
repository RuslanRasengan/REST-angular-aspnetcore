using Microsoft.AspNetCore.Builder;

namespace RAA.Configurations
{
    public static class CorsConfiguration
    {
        public static IApplicationBuilder ConfigureCors(this IApplicationBuilder app)
        {
            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            return app;
        }
    }
}
