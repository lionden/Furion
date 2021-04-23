﻿using Furion;
using Furion.DependencyInjection;
using Furion.DynamicApiController;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.AspNetCore.Mvc.Formatters;
using System;
using System.Linq;

namespace Microsoft.Extensions.DependencyInjection
{
    /// <summary>
    ///动态接口控制器拓展类
    /// </summary>
    [SkipScan]
    public static class DynamicApiControllerServiceCollectionExtensions
    {
        /// <summary>
        /// 添加动态接口控制器服务
        /// </summary>
        /// <param name="mvcBuilder">Mvc构建器</param>
        /// <returns>Mvc构建器</returns>
        public static IMvcBuilder AddDynamicApiControllers(this IMvcBuilder mvcBuilder)
        {
            // 添加基础服务
            AddBaseServices(mvcBuilder.Services);

            // 配置 Mvc 选项
            mvcBuilder.AddMvcOptions(options =>
            {
                ConfigureMvcBuilder(options);
            });

            // 载入程序集部件
            mvcBuilder.AddExternalAssemblyParts();

            return mvcBuilder;
        }

        /// <summary>
        /// 添加外部程序集部件集合
        /// </summary>
        /// <param name="mvcBuilder">Mvc构建器</param>
        /// <returns>Mvc构建器</returns>
        public static IMvcBuilder AddExternalAssemblyParts(this IMvcBuilder mvcBuilder)
        {
            // 载入程序集部件
            if (App.ExternalAssemblies.Any())
            {
                foreach (var assembly in App.ExternalAssemblies)
                {
                    mvcBuilder.AddApplicationPart(assembly);
                }
            }

            return mvcBuilder;
        }

        /// <summary>
        /// 添加动态接口控制器服务
        /// </summary>
        /// <param name="services"></param>
        /// <returns>Mvc构建器</returns>
        public static IServiceCollection AddDynamicApiControllers(this IServiceCollection services)
        {
            // 添加基础服务
            AddBaseServices(services);

            // 配置 Mvc 选项
            services.Configure<MvcOptions>(options =>
            {
                ConfigureMvcBuilder(options);
            });

            return services;
        }

        /// <summary>
        /// 添加基础服务
        /// </summary>
        /// <param name="services"></param>
        private static void AddBaseServices(IServiceCollection services)
        {
            var partManager = services.FirstOrDefault(s => s.ServiceType == typeof(ApplicationPartManager))?.ImplementationInstance as ApplicationPartManager
                ?? throw new InvalidOperationException($"`{nameof(AddDynamicApiControllers)}` must be invoked after `{nameof(MvcServiceCollectionExtensions.AddControllers)}`.");

            // 添加控制器特性提供器
            partManager.FeatureProviders.Add(new DynamicApiControllerFeatureProvider());

            // 添加配置
            services.AddConfigurableOptions<DynamicApiControllerSettingsOptions>();
        }

        /// <summary>
        /// 配置 Mvc 构建器
        /// </summary>
        /// <param name="options"></param>
        private static void ConfigureMvcBuilder(MvcOptions options)
        {
            // 添加应用模型转换器
            options.Conventions.Add(new DynamicApiControllerApplicationModelConvention());

            // 添加 Xml 支持
            options.InputFormatters.Add(new XmlSerializerInputFormatter(options));
        }
    }
}