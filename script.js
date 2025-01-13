//Accordion
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        // Toggle aria-expanded
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        header.setAttribute('aria-expanded', !isExpanded);

        // Close all other accordions
        accordions.forEach(item => {
            if (item !== accordion) {
                item.classList.remove('active');
                item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                item.querySelector('.accordion-content').style.maxHeight = 0;
            }
        });

        // Toggle the active class for the clicked accordion
        accordion.classList.toggle('active');
        const content = accordion.querySelector('.accordion-content');

        if (accordion.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = 0;
        }
    });
});

//Typed
var props = {
  introText: {
    strings: ["Welcome", "This is", "ill.umo"],
    "type-speed": "80",
    "start-delay": 0,
    "back-speed": "60",
    "smart-backspace": true,
    "back-delay": "1000",
    "fade-out": false,
    "fade-out-class": "typed-fade-out",
    "fade-out-delay": 500,
    "show-cursor": true,
    "cursor-char": "_",
    "auto-insert-css": true,
    "bind-input-focus-events": false,
    "content-type": "html",
    loop: false,
    "loop-count": null,
    shuffle: false,
    attr: "",
    typedsrc: "https://cdn.jsdelivr.net/npm/typed.js@2.0.11",
  },
};
var ids = Object.keys(props)
  .map(function (id) {
    return "#" + id;
  })
  .join(",");
var els = document.querySelectorAll(ids);
for (var i = 0, len = els.length; i < len; i++) {
  var el = els[i];
  (function (e) {
    var t,
      n = this,
      o =
        ((t = e.strings),
        Array.isArray(t) ? t : t.indexOf("\n") >= 0 ? t.split("\n") : []),
      r = function (e) {
        return parseInt(e, 10) || 0;
      },
      a = function (e) {
        return !!e;
      },
      s = function () {
        var t = n;
        t.innerHTML = "<span></span>";
        var s = parseInt("".concat(e["loop-count"]), 10);
        "".concat(e["type-speed"]);
        var p = {
          typeSpeed: r(e["type-speed"]),
          startDelay: r(e["start-delay"]),
          backDelay: r(e["back-delay"]),
          backSpeed: r(e["back-speed"]),
          smartBackspace: a(e["smart-backspace"]),
          fadeOut: a(e["fade-out"]),
          fadeOutClass: e["fade-out-class"],
          fadeOutDelay: r(e["fade-out-delay"]),
          shuffle: a(e.shuffle),
          loop: a(e.loop),
          loopCount: isNaN(s) ? 1 / 0 : s,
          showCursor: a(e["show-cursor"]),
          cursorChar: e["cursor-char"],
          autoInsertCss: a(e["auto-insert-css"]),
          bindInputFocusEvents: a(e["bind-input-focus-events"]),
          attr: e.attr,
          contentType: e["content-type"],
        };
        o && o.length && (p.strings = o),
          new window.Typed(t.children[0], p);
      };
    if (window.Typed) s();
    else {
      var p = document.createElement("script");
      (p.src = e.typedsrc), (p.onload = s), document.head.appendChild(p);
    }
  }).bind(el)(props[el.id]);
}

//Start of OpenWidget (www.openwidget.com) code
window.__ow = window.__ow || {};
window.__ow.organizationId = "39ce687e-cb8d-4894-98ea-e9d8b311fa92";
window.__ow.integration_name = "manual_settings";
window.__ow.product_name = "openwidget";
(function (n, t, c) {
  function i(n) {
    return e._h ? e._h.apply(null, n) : e._q.push(n);
  }
  var e = {
    _q: [],
    _h: null,
    _v: "2.0",
    on: function () {
      i(["on", c.call(arguments)]);
    },
    once: function () {
      i(["once", c.call(arguments)]);
    },
    off: function () {
      i(["off", c.call(arguments)]);
    },
    get: function () {
      if (!e._h)
        throw new Error(
          "[OpenWidget] You can't use getters before load."
        );
      return i(["get", c.call(arguments)]);
    },
    call: function () {
      i(["call", c.call(arguments)]);
    },
    init: function () {
      var n = t.createElement("script");
      (n.async = !0),
        (n.type = "text/javascript"),
        (n.src = "https://cdn.openwidget.com/openwidget.js"),
        t.head.appendChild(n);
    },
  };
  !n.__ow.asyncInit && e.init(), (n.OpenWidget = n.OpenWidget || e);
})(window, document, [].slice);