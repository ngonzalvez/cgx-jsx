function $h(tag, attributes) {
  var d = document;
  var args = arguments;
  var i;
  var instance;

  // Standard tags.
  if (typeof tag === 'string') {
    tag = d.createElement(tag);

  // Components with a render method.
  } else {
    try {
      instance = new tag();
      tag = instance.render();
    } catch(e) {}
  }

  for (i in attributes) {
    tag.setAttribute(i, attributes[i]);
  }

  // Append all given children.
  for (i = 2; i < args.length; i++) {
    tag.appendChild(
      typeof args[i] === 'string'
        ? d.createTextNode(args[i])
        : args[i]
    );
  }

  return tag;
};


