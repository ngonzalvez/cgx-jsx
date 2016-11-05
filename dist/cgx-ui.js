function __e(tag, attributes) {
  var d = document;
  var args = arguments;
  var i;

  if (typeof tag === 'string') {
    tag = d.createElement(tag);
  } else if (tag.prototype.render) {
    tag = (new tag()).render();
  }

  for (i in attributes) {
    tag.setAttribute(i, attributes[i]);
  }

  for (i = 2; i < args.length; i++) {
    tag.appendChild(typeof child === 'string' ? d.createTextNode(args[i])
                                              : args[i]);
  }

  return tag ;
};


