export default function (context) {
  console.log('使用中间件')
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  console.log(context.userAgent )
}
