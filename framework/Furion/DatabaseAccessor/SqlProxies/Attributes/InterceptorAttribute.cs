﻿// ------------------------------------------------------------------------
// 版权信息
// 版权归百小僧及百签科技（广东）有限公司所有。
// 所有权利保留。
// 官方网站：https://baiqian.com
//
// 许可证信息
// Furion 项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。
// 许可证的完整文本可以在源代码树根目录中的 LICENSE-APACHE 和 LICENSE-MIT 文件中找到。
// 官方网站：https://furion.net
//
// 使用条款
// 使用本代码应遵守相关法律法规和许可证的要求。
//
// 免责声明
// 对于因使用本代码而产生的任何直接、间接、偶然、特殊或后果性损害，我们不承担任何责任。
//
// 其他重要信息
// Furion 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。
// 有关 Furion 项目的其他详细信息，请参阅位于源代码树根目录中的 COPYRIGHT 和 DISCLAIMER 文件。
//
// 更多信息
// 请访问 https://gitee.com/dotnetchina/Furion 获取更多关于 Furion 项目的许可证和版权信息。
// ------------------------------------------------------------------------

namespace Furion.DatabaseAccessor;

/// <summary>
/// Sql 代理拦截器
/// </summary>
/// <remarks>如果贴在静态方法中且 InterceptorId/MethodName 为空，则为全局拦截</remarks>
[SuppressSniffer, AttributeUsage(AttributeTargets.Method)]
public class InterceptorAttribute : Attribute
{
    /// <summary>
    /// 构造函数
    /// </summary>
    public InterceptorAttribute()
    {
    }

    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="interceptorIds"></param>
    public InterceptorAttribute(params string[] interceptorIds)
    {
        InterceptorIds = interceptorIds;
    }

    /// <summary>
    /// 方法名称
    /// </summary>
    public string[] InterceptorIds { get; set; }
}