console.log("Hello React !")

function metaValue(name) {
  return document.querySelector(`meta[name="${name}"]`).getAttribute("content");
}
var action = `${metaValue('controller_name')}/${metaValue('action_name')}`;

if("sample/index" == action) {
  require('./sample/index.js')
}
// else if("welcomes/index" == action) {
//   require('./welcomes/index/index.js')
// }