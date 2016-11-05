function $h(tag, attributes) {
  var d = document;
  var args = arguments;
  var i;

  // Standard tags.
  if (typeof tag === 'string') {
    tag = d.createElement(tag);

  // Components with a render method.
  } else if (tag.prototype.render) {
    tag = (new tag()).render();
  }

  for (i in attributes) {
    tag.setAttribute(i, attributes[i]);
  }

  // Append all given children.
  for (i = 2; i < args.length; i++) {
    tag.appendChild(typeof child === 'string' ? d.createTextNode(args[i])
                                              : args[i]);
  }

  return tag ;
};


