function metaValue(name) {
  return document.querySelector(`meta[name="${name}"]`).getAttribute("content");
}

var action = `${metaValue('controller_name')}/${metaValue('action_name')}`;

if("users/index" == action) {
  require('./users/index.js')
}