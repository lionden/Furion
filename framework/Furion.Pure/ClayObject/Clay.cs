﻿// MIT 许可证
//
// 版权 © 2020-present 百小僧, 百签科技（广东）有限公司 和所有贡献者
//
// 特此免费授予任何获得本软件副本和相关文档文件（下称“软件”）的人不受限制地处置该软件的权利，
// 包括不受限制地使用、复制、修改、合并、发布、分发、转授许可和/或出售该软件副本，
// 以及再授权被配发了本软件的人如上的权利，须在下列条件下：
//
// 上述版权声明和本许可声明应包含在该软件的所有副本或实质成分中。
//
// 本软件是“如此”提供的，没有任何形式的明示或暗示的保证，包括但不限于对适销性、特定用途的适用性和不侵权的保证。
// 在任何情况下，作者或版权持有人都不对任何索赔、损害或其他责任负责，无论这些追责来自合同、侵权或其它行为中，
// 还是产生于、源于或有关于本软件以及本软件的使用或其它处置。

using Furion.ClayObject.Extensions;
using Furion.JsonSerialization;
using System.Diagnostics;
using System.Dynamic;
using System.Reflection;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Xml;
using System.Xml.Linq;

namespace Furion.ClayObject;

/// <summary>
/// 粘土对象
/// </summary>
[SuppressSniffer]
public class Clay : DynamicObject, IEnumerable
{
    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="throwOnUndefined">如果设置 false，则读取不存在的值返回 null，默认 true</param>
    public Clay(bool throwOnUndefined = true)
    {
        XmlElement = new XElement("root", CreateTypeAttr(JsonType.@object));
        jsonType = JsonType.@object;
        ThrowOnUndefined = throwOnUndefined;
    }

    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="element"></param>
    /// <param name="type"></param>
    /// <param name="throwOnUndefined">如果设置 false，则读取不存在的值返回 null，默认 true</param>
    private Clay(XElement element, JsonType type, bool throwOnUndefined = true)
    {
        Debug.Assert(type == JsonType.array || type == JsonType.@object);

        XmlElement = element;
        jsonType = type;
        ThrowOnUndefined = throwOnUndefined;
    }

    /// <summary>
    /// 是否是 Object 类型
    /// </summary>
    public bool IsObject => jsonType == JsonType.@object;

    /// <summary>
    /// 是否是 Array 类型
    /// </summary>
    public bool IsArray => jsonType == JsonType.array;

    /// <summary>
    /// XML 元素
    /// </summary>
    public XElement XmlElement { get; private set; }

    /// <summary>
    /// 当 Clay 是 数组类型时的长度
    /// </summary>
    public int Length => XmlElement.Elements().Count();

    /// <summary>
    /// 如果未定义则抛出异常
    /// </summary>
    /// <remarks>如果设置 false，那么返回 null</remarks>
    public bool ThrowOnUndefined { get; set; } = true;

    /// <summary>
    /// 创建一个超级类型
    /// </summary>
    /// <param name="throwOnUndefined">如果设置 false，则读取不存在的值返回 null，默认 true</param>
    /// <returns></returns>
    public static dynamic Object(bool throwOnUndefined = true)
    {
        return new Clay(throwOnUndefined);
    }

    /// <summary>
    /// 基于现有类型创建一个超级类型
    /// </summary>
    /// <param name="obj"></param>
    /// <param name="throwOnUndefined">如果设置 false，则读取不存在的值返回 null，默认 true</param>
    /// <returns></returns>
    public static dynamic Object(object obj, bool throwOnUndefined = true)
    {
        return Parse(Serialize(obj), throwOnUndefined);
    }

    /// <summary>
    /// 将 Json 转换成动态类型
    /// </summary>
    /// <param name="json"></param>
    /// <param name="throwOnUndefined">如果设置 false，则读取不存在的值返回 null，默认 true</param>
    /// <returns></returns>
    public static dynamic Parse(string json, bool throwOnUndefined = true)
    {
        return Parse(json, Encoding.Unicode, throwOnUndefined);
    }

    /// <summary>
    /// 将 Json 转换成动态类型
    /// </summary>
    /// <param name="json"></param>
    /// <param name="encoding"></param>
    /// <param name="throwOnUndefined">如果设置 false，则读取不存在的值返回 null，默认 true</param>
    /// <returns></returns>
    public static dynamic Parse(string json, Encoding encoding, bool throwOnUndefined = true)
    {
        using var reader = JsonReaderWriterFactory.CreateJsonReader(encoding.GetBytes(json), XmlDictionaryReaderQuotas.Max);
        return ToValue(XElement.Load(reader), throwOnUndefined);
    }

    /// <summary>
    /// 将 Steam 转换成动态类型
    /// </summary>
    /// <param name="stream"></param>
    /// <param name="throwOnUndefined">如果设置 false，则读取不存在的值返回 null，默认 true</param>
    /// <returns></returns>
    public static dynamic Parse(Stream stream, bool throwOnUndefined = true)
    {
        using var reader = JsonReaderWriterFactory.CreateJsonReader(stream, XmlDictionaryReaderQuotas.Max);
        return ToValue(XElement.Load(reader), throwOnUndefined);
    }

    /// <summary>
    /// 将 Steam 转换成动态类型
    /// </summary>
    /// <param name="stream"></param>
    /// <param name="encoding"></param>
    /// <param name="throwOnUndefined">如果设置 false，则读取不存在的值返回 null，默认 true</param>
    /// <returns></returns>
    public static dynamic Parse(Stream stream, Encoding encoding, bool throwOnUndefined = true)
    {
        using var reader = JsonReaderWriterFactory.CreateJsonReader(stream, encoding, XmlDictionaryReaderQuotas.Max, _ => { });
        return ToValue(XElement.Load(reader), throwOnUndefined);
    }

    /// <summary>
    /// 序列化对象
    /// </summary>
    /// <param name="obj"></param>
    /// <returns></returns>
    public static string Serialize(object obj)
    {
        return CreateJsonString(new XStreamingElement("root", CreateTypeAttr(GetJsonType(obj)), CreateJsonNode(obj)));
    }

    /// <summary>
    /// 是否定义某个键
    /// </summary>
    /// <param name="name"></param>
    /// <returns></returns>
    public bool IsDefined(string name)
    {
        return IsObject && (FindItemElement(name, out _) != null);
    }

    /// <summary>
    /// 判断数组索引是否存在
    /// </summary>
    /// <param name="index"></param>
    /// <returns></returns>
    public bool IsDefined(int index)
    {
        return IsArray && (XmlElement.Elements().ElementAtOrDefault(index) != null);
    }

    /// <summary>
    /// 删除键
    /// </summary>
    /// <param name="name"></param>
    /// <returns></returns>
    public bool Delete(string name)
    {
        var elem = FindItemElement(name, out _);
        if (elem != null)
        {
            elem.Remove();
            return true;
        }
        else return false;
    }

    /// <summary>
    /// 根据索引删除元素
    /// </summary>
    /// <param name="index"></param>
    /// <returns></returns>
    public bool Delete(int index)
    {
        var elem = XmlElement.Elements().ElementAtOrDefault(index);
        if (elem != null)
        {
            elem.Remove();
            return true;
        }
        else return false;
    }

    /// <summary>
    /// 反序列化
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <returns></returns>
    public T Deserialize<T>()
    {
        return (T)Deserialize(typeof(T));
    }

    /// <summary>
    /// 删除
    /// </summary>
    /// <param name="binder"></param>
    /// <param name="args"></param>
    /// <param name="result"></param>
    /// <returns></returns>
    public override bool TryInvoke(InvokeBinder binder, object[] args, out object result)
    {
        result = (IsArray)
            ? Delete((int)args[0])
            : Delete((string)args[0]);
        return true;
    }

    /// <summary>
    /// 判断是否定义
    /// </summary>
    /// <param name="binder"></param>
    /// <param name="args"></param>
    /// <param name="result"></param>
    /// <returns></returns>
    public override bool TryInvokeMember(InvokeMemberBinder binder, object[] args, out object result)
    {
        if (args.Length > 0)
        {
            result = null;
            return false;
        }

        result = IsDefined(binder.Name);
        return true;
    }

    /// <summary>
    /// 支持 Foreach 遍历
    /// </summary>
    /// <param name="binder"></param>
    /// <param name="result"></param>
    /// <returns></returns>
    public override bool TryConvert(ConvertBinder binder, out object result)
    {
        if (binder.Type == typeof(IEnumerable) || binder.Type == typeof(object[]))
        {
            var ie = (IsArray)
                ? XmlElement.Elements().Select(x => ToValue(x, ThrowOnUndefined))
                : XmlElement.Elements().Select(x => (dynamic)new KeyValuePair<string, object>(x.Name.LocalName, ToValue(x, ThrowOnUndefined)));
            result = (binder.Type == typeof(object[])) ? ie.ToArray() : ie;
        }
        else
        {
            result = Deserialize(binder.Type);
        }
        return true;
    }

    /// <summary>
    /// 获取索引值
    /// </summary>
    /// <param name="binder"></param>
    /// <param name="indexes"></param>
    /// <param name="result"></param>
    /// <returns></returns>
    public override bool TryGetIndex(GetIndexBinder binder, object[] indexes, out object result)
    {
        return (IsArray)
            ? TryGet(XmlElement.Elements().ElementAtOrDefault((int)indexes[0]), out result, ThrowOnUndefined)
            : TryGet(FindItemElement((string)indexes[0], out _), out result, ThrowOnUndefined);
    }

    /// <summary>
    /// 获取成员值
    /// </summary>
    /// <param name="binder"></param>
    /// <param name="result"></param>
    /// <returns></returns>
    public override bool TryGetMember(GetMemberBinder binder, out object result)
    {
        return (IsArray)
            ? TryGet(XmlElement.Elements().ElementAtOrDefault(int.Parse(binder.Name)), out result, ThrowOnUndefined)
            : TryGet(FindItemElement(binder.Name, out _), out result, ThrowOnUndefined);
    }

    /// <summary>
    /// 设置索引
    /// </summary>
    /// <param name="binder"></param>
    /// <param name="indexes"></param>
    /// <param name="value"></param>
    /// <returns></returns>
    public override bool TrySetIndex(SetIndexBinder binder, object[] indexes, object value)
    {
        return (IsArray)
            ? TrySet((int)indexes[0], value)
            : TrySet((string)indexes[0], value);
    }

    /// <summary>
    /// 设置成员
    /// </summary>
    /// <param name="binder"></param>
    /// <param name="value"></param>
    /// <returns></returns>
    public override bool TrySetMember(SetMemberBinder binder, object value)
    {
        return (IsArray)
            ? TrySet(int.Parse(binder.Name), value)
            : TrySet(binder.Name, value);
    }

    /// <summary>
    /// 获取动态成员名称
    /// </summary>
    /// <returns></returns>
    public override IEnumerable<string> GetDynamicMemberNames()
    {
        return (IsArray)
            ? XmlElement.Elements().Select((x, i) => i.ToString())
            : XmlElement.Elements().Select(x => x.Name.LocalName);
    }

    /// <summary>
    /// 重写 .ToString()
    /// </summary>
    /// <returns></returns>
    public override string ToString()
    {
        // <foo type="null"></foo> is can't serialize. replace to <foo type="null" />
        foreach (var elem in XmlElement.Descendants().Where(x => x.Attribute("type").Value == "null"))
        {
            elem.RemoveNodes();
        }
        return CreateJsonString(new XStreamingElement("root", CreateTypeAttr(jsonType), XmlElement.Elements()));
    }

    /// <summary>
    /// 固化粘土，也就是直接输出对象
    /// </summary>
    /// <returns></returns>
    public object Solidify()
    {
        return Solidify<object>();
    }

    /// <summary>
    /// 固化粘土，也就是直接输出对象
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <returns></returns>
    public T Solidify<T>()
    {
        return JSON.Deserialize<T>(ToString());
    }

    /// <summary>
    /// 输出字典类型
    /// </summary>
    /// <returns></returns>
    public IDictionary<string, object> ToDictionary()
    {
        return Solidify().ToDictionary();
    }

    /// <summary>
    /// JSON 类型
    /// </summary>
    private enum JsonType
    {
        @string, number, boolean, @object, array, @null
    }

    /// <summary>
    /// XElement 转动态类型
    /// </summary>
    /// <param name="element"></param>
    /// <param name="throwOnUndefined">如果设置 false，则读取不存在的值返回 null，默认 true</param>
    /// <returns></returns>
    private static dynamic ToValue(XElement element, bool throwOnUndefined = true)
    {
        var type = (JsonType)Enum.Parse(typeof(JsonType), element.Attribute("type").Value);
        return type switch
        {
            JsonType.boolean => (bool)element,
            JsonType.number when element.Value.Contains('.') => (double)element,
            JsonType.number => (long)element,
            JsonType.@string => (string)element,
            JsonType.@object or JsonType.array => new Clay(element, type, throwOnUndefined),
            _ => null,
        };
    }

    /// <summary>
    /// 获取 JSON 类型
    /// </summary>
    /// <param name="obj"></param>
    /// <returns></returns>
    private static JsonType GetJsonType(object obj)
    {
        if (obj == null) return JsonType.@null;

        var objType = obj.GetType();

        // 将特别类型转换成 string
        if (ToBeConvertStringTypes.Contains(objType)) return JsonType.@string;

        // 处理循环 Clay 类型
        if (obj is ExpandoObject) return JsonType.@object;

        return Type.GetTypeCode(objType) switch
        {
            TypeCode.Boolean => JsonType.boolean,
            TypeCode.String or TypeCode.Char or TypeCode.DateTime => JsonType.@string,
            TypeCode.Int16 or TypeCode.Int32 or TypeCode.Int64 or TypeCode.UInt16 or TypeCode.UInt32 or TypeCode.UInt64 or TypeCode.Single or TypeCode.Double or TypeCode.Decimal or TypeCode.SByte or TypeCode.Byte => JsonType.number,
            TypeCode.Object => (obj is IEnumerable) ? JsonType.array : JsonType.@object,
            _ => JsonType.@null,
        };
    }

    /// <summary>
    /// 创建类型属性
    /// </summary>
    /// <param name="type"></param>
    /// <returns></returns>
    private static XAttribute CreateTypeAttr(JsonType type)
    {
        return new XAttribute("type", type.ToString());
    }

    /// <summary>
    /// 创建 JSON 节点
    /// </summary>
    /// <param name="obj"></param>
    /// <returns></returns>
    private static object CreateJsonNode(object obj)
    {
        var type = GetJsonType(obj);
        return type switch
        {
            JsonType.@string or JsonType.number => obj,
            JsonType.boolean => obj.ToString().ToLower(),
            JsonType.@object => CreateXObject(obj),
            JsonType.array => CreateXArray(obj as IEnumerable),
            _ => null,
        };
    }

    /// <summary>
    /// 创建 XStreamingElement 对象
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="obj"></param>
    /// <returns></returns>
    private static IEnumerable<XStreamingElement> CreateXArray<T>(T obj) where T : IEnumerable
    {
        return obj.Cast<object>()
            .Select(o => new XStreamingElement("item", CreateTypeAttr(GetJsonType(o)), CreateJsonNode(o)));
    }

    /// <summary>
    /// 创建 XStreamingElement 对象
    /// </summary>
    /// <param name="obj"></param>
    /// <returns></returns>
    private static IEnumerable<XStreamingElement> CreateXObject(object obj)
    {
        if (obj is ExpandoObject expando)
        {
            var dict = (IDictionary<string, object>)expando;
            return dict.Select(a => new XStreamingElement(a.Key, CreateTypeAttr(GetJsonType(a.Value)), CreateJsonNode(a.Value)));
        }

        return obj.GetType()
            .GetProperties(BindingFlags.Public | BindingFlags.Instance)
            .Select(pi => new { pi.Name, Value = pi.GetValue(obj, null) })
            .Select(a => new XStreamingElement(a.Name, CreateTypeAttr(GetJsonType(a.Value)), CreateJsonNode(a.Value)));
    }

    /// <summary>
    /// 创建 JSON 字符串
    /// </summary>
    /// <param name="element"></param>
    /// <returns></returns>
    private static string CreateJsonString(XStreamingElement element)
    {
        using var ms = new MemoryStream();
        using var writer = JsonReaderWriterFactory.CreateJsonWriter(ms, Encoding.Unicode);
        element.WriteTo(writer);
        writer.Flush();
        return Encoding.Unicode.GetString(ms.ToArray());
    }

    /// <summary>
    /// JSON 类型
    /// </summary>
    private readonly JsonType jsonType;

    /// <summary>
    /// 读取值
    /// </summary>
    /// <param name="element"></param>
    /// <param name="result"></param>
    /// <param name="throwOnUndefined"></param>
    /// <returns></returns>
    private static bool TryGet(XElement element, out object result, bool throwOnUndefined = true)
    {
        if (element == null)
        {
            result = null;
            return !throwOnUndefined;   // 如果这里返回 true，那么不存在的 Key 不会报错
        }

        result = ToValue(element, throwOnUndefined);
        return true;
    }

    /// <summary>
    /// 设置值
    /// </summary>
    /// <param name="name"></param>
    /// <param name="value"></param>
    /// <returns></returns>
    private bool TrySet(string name, object value)
    {
        var type = GetJsonType(value);

        // 处理循环 Clay 类型
        if (value is Clay clay)
        {
            if (clay.IsObject) value = value.ToExpandoObject();
            else if (clay.IsArray)
            {
                var list = new List<object>();
                foreach (var item in (dynamic)clay)
                {
                    list.Add(item is Clay c ? c.ToExpandoObject() : item);
                }
                value = list;
            }
        }

        var element = FindItemElement(name, out var isValid);
        if (element == null)
        {
            if (isValid) XmlElement.Add(new XElement(name, CreateTypeAttr(type), CreateJsonNode(value)));
            else
            {
                var xmlString = $"<a:item xmlns:a=\"item\" item=\"{name}\" type=\"{type}\"></a:item>";
                var xEle = XElement.Parse(xmlString);
                xEle.ReplaceNodes(CreateJsonNode(value));
                XmlElement.Add(xEle);
            }
        }
        else
        {
            element.Attribute("type").Value = type.ToString();
            element.ReplaceNodes(CreateJsonNode(value));
        }

        return true;
    }

    /// <summary>
    /// 设置值
    /// </summary>
    /// <param name="index"></param>
    /// <param name="value"></param>
    /// <returns></returns>
    private bool TrySet(int index, object value)
    {
        var type = GetJsonType(value);
        var e = XmlElement.Elements().ElementAtOrDefault(index);
        if (e == null)
        {
            XmlElement.Add(new XElement("item", CreateTypeAttr(type), CreateJsonNode(value)));
        }
        else
        {
            e.Attribute("type").Value = type.ToString();
            e.ReplaceNodes(CreateJsonNode(value));
        }

        return true;
    }

    /// <summary>
    /// 反序列化
    /// </summary>
    /// <param name="type"></param>
    /// <returns></returns>
    private object Deserialize(Type type)
    {
        return (IsArray) ? DeserializeArray(type) : DeserializeObject(type);
    }

    /// <summary>
    /// 反序列化值
    /// </summary>
    /// <param name="element"></param>
    /// <param name="elementType"></param>
    /// <param name="throwOnUndefined">如果设置 false，则读取不存在的值返回 null，默认 true</param>
    /// <returns></returns>
    private static dynamic DeserializeValue(XElement element, Type elementType, bool throwOnUndefined = true)
    {
        var value = ToValue(element, throwOnUndefined);

        if (value is Clay json)
        {
            value = json.Deserialize(elementType);
        }

        return Furion.Extensions.ObjectExtensions.ChangeType(value, elementType);
    }

    /// <summary>
    /// 反序列化对象
    /// </summary>
    /// <param name="targetType"></param>
    /// <returns></returns>
    private object DeserializeObject(Type targetType)
    {
        var result = Activator.CreateInstance(targetType);
        var dict = targetType.GetProperties(BindingFlags.Public | BindingFlags.Instance)
            .Where(p => p.CanWrite)
            .ToDictionary(pi => pi.Name, pi => pi);

        foreach (var item in XmlElement.Elements())
        {
            if (!dict.TryGetValue(item.Name.LocalName, out var propertyInfo)) continue;
            var value = Clay.DeserializeValue(item, propertyInfo.PropertyType, ThrowOnUndefined);
            propertyInfo.SetValue(result, value, null);
        }
        return result;
    }

    /// <summary>
    /// 序列化数组
    /// </summary>
    /// <param name="targetType"></param>
    /// <returns></returns>
    private object DeserializeArray(Type targetType)
    {
        if (targetType.IsArray)
        {
            var elemType = targetType.GetElementType();
            dynamic array = Array.CreateInstance(elemType, XmlElement.Elements().Count());
            var index = 0;
            foreach (var item in XmlElement.Elements())
            {
                array[index++] = Clay.DeserializeValue(item, elemType, ThrowOnUndefined);
            }
            return array;
        }
        else
        {
            var elemType = targetType.GetGenericArguments()[0];
            dynamic list = Activator.CreateInstance(targetType);
            foreach (var item in XmlElement.Elements())
            {
                list.Add(Clay.DeserializeValue(item, elemType, ThrowOnUndefined));
            }
            return list;
        }
    }

    /// <summary>
    /// 查找包含 a:item 的节点
    /// </summary>
    /// <param name="name"></param>
    /// <param name="isValid"></param>
    /// <returns></returns>
    private XElement FindItemElement(string name, out bool isValid)
    {
        // 校验 Name 是否是合法的
        var validName = isValid = TryVerifyNCName(name) == null;

        var xelement = XmlElement.Elements("{item}item")
            .Where(e => (string)e.Attribute("item") == name)
            .FirstOrDefault();

        return xelement ?? (validName ? XmlElement.Element(name) : null);
    }

    /// <summary>
    /// 校验 Xml 标签格式
    /// </summary>
    private static readonly Func<string, Exception> TryVerifyNCName = (Func<string, Exception>)Delegate.CreateDelegate(typeof(Func<string, Exception>), typeof(XmlConvert).GetMethod("TryVerifyNCName", BindingFlags.Static | BindingFlags.NonPublic));

    /// <summary>
    /// 初始化粘土对象枚举器
    /// </summary>
    /// <returns></returns>
    public IEnumerator GetEnumerator()
    {
        return IsArray
            ? new ClayArrayEnumerator(this)
            : new ClayObjectEnumerator(this);
    }

    /// <summary>
    /// 将粘土对象转换成 IEnumerable{T} 对象
    /// </summary>
    /// <returns></returns>
    public IEnumerable<T> AsEnumerator<T>()
    {
        return ((IEnumerable)this).Cast<T>();
    }

    /// <summary>
    /// 内部粘土对象枚举器
    /// </summary>
    /// <returns></returns>
    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }

    /// <summary>
    /// 将被转换成字符串的类型
    /// </summary>
    private static readonly Type[] ToBeConvertStringTypes = new[] {
            typeof(DateTimeOffset)
        };
}