// www → 非www 301 重定向 + HTTP → HTTPS
export function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const hostname = url.hostname;

  // www 跳转到根域名 (301 永久重定向)
  if (hostname.startsWith('www.')) {
    url.hostname = hostname.slice(4);
    return Response.redirect(url.href, 301);
  }

  // 非 www 请求正常放行，交给静态资源处理
  return context.next();
}
