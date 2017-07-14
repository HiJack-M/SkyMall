
/* 页面单位基础值 */
export default function () {
  var c = 320
  var a = 100
  var b = document.getElementsByTagName('html')[0]
  var f = b.getBoundingClientRect().width / c
  var d = f * a / 10
  b.style.fontSize = d + 'px'
}
