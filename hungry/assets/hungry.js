"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('hungry/app', ['exports', 'ember', 'hungry/resolver', 'ember-load-initializers', 'hungry/config/environment'], function (exports, _ember, _hungryResolver, _emberLoadInitializers, _hungryConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _hungryConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hungryConfigEnvironment['default'].podModulePrefix,
    Resolver: _hungryResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _hungryConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('hungry/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'hungry/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _hungryConfigEnvironment) {

  var name = _hungryConfigEnvironment['default'].APP.name;
  var version = _hungryConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('hungry/components/buy-button', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        classNames: ['ButtonContainer']
    });
});
define('hungry/components/content-displayer', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        classNames: ['Displayer']
    });
});
define('hungry/components/meal-carousel', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        classNames: [],
        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);

            var owl = $("#carousel");

            owl.owlCarousel({
                dotsContainer: '#carousel-custom-dots',
                loop: true,
                items: 1
            });

            $('.owl-dot').click(function () {
                owl.trigger('to.owl.carousel', [$(this).index(), 300]);
            });
        }
    });
});
define('hungry/components/meal-item', ['exports', 'ember'], function (exports, _ember) {

    var MealItemComponent = _ember['default'].Component.extend({
        classNames: ['Meal'],
        classNameBindings: ['isSoldOut'],
        isSoldOut: _ember['default'].computed('available_quantity', function () {
            return this.get('available_quantity') <= 0 ? true : false;
        })
    });

    MealItemComponent.reopenClass({
        positionalParams: ['photo', 'available_quantity', 'chef_photo', 'name', 'description', 'price', 'rating', 'reviews_count', 'id']
    });

    exports['default'] = MealItemComponent;
});
define('hungry/helpers/decimal-to-percentage', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Helper.extend({
    compute: function compute(params, hash) {
      var ratingAsDecimal = params[0];
      var ratingAsPercentage = ratingAsDecimal * 100;
      return ratingAsPercentage + '%';
    }
  });
});
define('hungry/helpers/eq', ['exports', 'ember'], function (exports, _ember) {

  var eq = function eq(params) {
    return params[0] === params[1];
  };

  exports['default'] = _ember['default'].Helper.helper(eq);
});
define("hungry/helpers/money-format", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Helper.extend({
    compute: function compute(params, hash) {
      var price = params[0],
          splittedPrice = price.split("."),
          dollars = splittedPrice[0],
          cents = splittedPrice[1];

      return cents.length < 2 ? "$" + dollars + "." + cents + cents : "$" + dollars + "." + cents;
    }
  });
});
define('hungry/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('hungry/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('hungry/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'hungry/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _hungryConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_hungryConfigEnvironment['default'].APP.name, _hungryConfigEnvironment['default'].APP.version)
  };
});
define('hungry/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('hungry/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('hungry/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('hungry/initializers/export-application-global', ['exports', 'ember', 'hungry/config/environment'], function (exports, _ember, _hungryConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_hungryConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _hungryConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_hungryConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('hungry/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('hungry/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('hungry/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("hungry/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('hungry/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('hungry/router', ['exports', 'ember', 'hungry/config/environment'], function (exports, _ember, _hungryConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _hungryConfigEnvironment['default'].locationType,
    rootURL: _hungryConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('meals');
    this.route('meal', { path: 'meal/:id' });
    this.route('not-found', { path: '/*path' });
  });

  exports['default'] = Router;
});
define('hungry/routes/index', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);
            this.replaceWith('meals');
        }
    });
});
define('hungry/routes/meal', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            var _this = this;

            var id = params.id,
                returnObj = {};

            return $.get('https://api.tryhungry.com/api/v1/search.json?latitude=38.896127&longitude=-77.0735961').then(function (raw) {

                var modifiedRaw = raw.map(function (entry) {
                    entry.menu_items[0].oldId = entry.menu_items[0].id;
                    entry.menu_items[0].id = entry.menu_items[0].name.toLowerCase().split(" ").join("-");
                    return entry;
                });

                modifiedRaw.forEach(function (entry) {
                    if (id === entry.menu_items[0].id) {
                        returnObj.menuItem = entry.menu_items[0];
                        returnObj.chef = entry.chef;
                        returnObj.ingredients = {
                            ingredients_image: entry.menu_items[0].ingredients_image,
                            ingredients_text: entry.menu_items[0].ingredients_text
                        };
                        return;
                    }
                });

                if (!returnObj["menuItem"]) {
                    _this.transitionTo('/not-found');
                } else {
                    return returnObj;
                }
            });
        },

        actions: {
            error: function error(_error) {
                this.transitionTo('/not-found');
            }
        }
    });
});
define('hungry/routes/meals', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return $.get('https://api.tryhungry.com/api/v1/search.json?latitude=38.896127&longitude=-77.0735961').then(function (raw) {

                return raw.map(function (entry) {
                    entry.menu_items[0].oldId = entry.menu_items[0].id;
                    entry.menu_items[0].id = entry.menu_items[0].name.toLowerCase().split(" ").join("-");
                    entry.menu_items[0].chefImage = entry.chef.chef_profile.headshot_image.url;
                    return entry.menu_items[0];
                });
            });
        }
    });
});
define('hungry/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("hungry/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "hungry/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("main");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 4], [2, 14]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("hungry/templates/components/buy-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "hungry/templates/components/buy-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "button button-muted button-full");
          dom.setAttribute(el1, "disabled", "disabled");
          var el2 = dom.createTextNode("Sold out!");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "hungry/templates/components/buy-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "button button-primary button-full");
          var el2 = dom.createTextNode("Order Now | ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" per meal ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
          return morphs;
        },
        statements: [["inline", "money-format", [["get", "price", ["loc", [null, [4, 77], [4, 82]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 62], [4, 84]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "hungry/templates/components/buy-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "eq", [["get", "available", ["loc", [null, [1, 10], [1, 19]]], 0, 0, 0, 0], 0], [], ["loc", [null, [1, 6], [1, 22]]], 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [5, 7]]]], ["content", "yield", ["loc", [null, [6, 0], [6, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("hungry/templates/components/content-displayer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "hungry/templates/components/content-displayer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "Displayer-title");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "title", ["loc", [null, [3, 33], [3, 42]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "hungry/templates/components/content-displayer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "Displayer-image");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'src');
          return morphs;
        },
        statements: [["attribute", "src", ["concat", [["get", "photo_url", ["loc", [null, [8, 20], [8, 29]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 4
            },
            "end": {
              "line": 15,
              "column": 4
            }
          },
          "moduleName": "hungry/templates/components/content-displayer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "Displayer-contentTitle");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "contentTitle", ["loc", [null, [14, 44], [14, 60]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 4
            },
            "end": {
              "line": 21,
              "column": 4
            }
          },
          "moduleName": "hungry/templates/components/content-displayer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "Displayer-contentDescription");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
          return morphs;
        },
        statements: [["content", "contentDescription", ["loc", [null, [19, 15], [19, 37]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 9
          }
        },
        "moduleName": "hungry/templates/components/content-displayer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "Displayer-content");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [5]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[2] = dom.createMorphAt(element1, 1, 1);
        morphs[3] = dom.createMorphAt(element1, 3, 3);
        morphs[4] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "title", ["loc", [null, [2, 6], [2, 11]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]], ["block", "if", [["get", "photo_url", ["loc", [null, [6, 6], [6, 15]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [6, 0], [10, 7]]]], ["block", "if", [["get", "contentTitle", ["loc", [null, [13, 10], [13, 22]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [13, 4], [15, 11]]]], ["block", "if", [["get", "contentDescription", ["loc", [null, [17, 10], [17, 28]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [17, 4], [21, 11]]]], ["content", "yield", ["loc", [null, [24, 0], [24, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("hungry/templates/components/meal-carousel", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 56,
            "column": 9
          }
        },
        "moduleName": "hungry/templates/components/meal-carousel.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "carousel");
        dom.setAttribute(el1, "class", "owl-carousel");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "Displayer");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "Displayer-image");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "http://placehold.it/800x800");
        dom.setAttribute(el5, "alt", "Image of displayer");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "Displayer-contents");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "Displayer-title");
        var el6 = dom.createTextNode("Caribbean Salmon with Tomato Relish");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "Displayer-description");
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Marinated Salmon is perfectly seared with island spices, roasted zucchini, squash and topped with a fresh tomato relish. Served on a bed of savory rice. Treat yourself to a taste of the Caribbean with this filling meal.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Description ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "Displayer");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "Displayer-image");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "http://placehold.it/800x800");
        dom.setAttribute(el5, "alt", "Image of displayer");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "Displayer-contents");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "Displayer-description");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Salmon");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Zucchini");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Squash");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("White Rice");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Scallion");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Tomato");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Cilantro");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Ingredients ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "item");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "Displayer");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "Displayer-image");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "http://placehold.it/800x800");
        dom.setAttribute(el5, "alt", "Image of displayer");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "Displayer-contents");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "Displayer-description");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "Displayer-title");
        var el7 = dom.createTextNode("Chef Al");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Hometown: Washington, DC");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("br");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("Chef Experience: 6+");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("br");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("Speciality: Caribbean, Southern Comfort");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("br");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("When I'm not cooking I'm..\"spending time with friends and family!\"");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Chef ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Order Now | $13.25 Per Meal");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "id", "carousel-custom-dots");
        dom.setAttribute(el1, "class", "owl-dots Dots");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "Dot owl-dot");
        var el3 = dom.createTextNode("Description");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "Dot owl-dot");
        var el3 = dom.createTextNode("Ingredients");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "Dot owl-dot");
        var el3 = dom.createTextNode("About The Chef");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [56, 0], [56, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("hungry/templates/components/meal-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 2
              }
            },
            "moduleName": "hungry/templates/components/meal-item.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "banner");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "line");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            var el4 = dom.createTextNode("Sold out");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 25,
                "column": 12
              },
              "end": {
                "line": 26,
                "column": 12
              }
            },
            "moduleName": "hungry/templates/components/meal-item.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 26,
                "column": 12
              },
              "end": {
                "line": 29,
                "column": 12
              }
            },
            "moduleName": "hungry/templates/components/meal-item.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1, "src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI5cHgiIGhlaWdodD0iMjhweCIgdmlld0JveD0iMCAwIDI5IDI4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4zLjIgKDEyMDQzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxwYXRoIGQ9Ik00LjU3MTAwMjkzLDIxLjcxNSBDNC41NzEwMDI5MywyMS40MDU2NjY3IDQuNDU4MDAyOTMsMjEuMTM3NjY2NyA0LjIzMjAwMjkzLDIwLjkxMSBDNC4wMDYwMDI5MywyMC42ODQzMzMzIDMuNzM4MDAyOTMsMjAuNTcxMzMzMyAzLjQyODAwMjkzLDIwLjU3MiBDMy4xMDY2Njk2LDIwLjU3MiAyLjgzNTY2OTYsMjAuNjg1IDIuNjE1MDAyOTMsMjAuOTExIEMyLjM5NDMzNjI3LDIxLjEzNyAyLjI4NDMzNjI3LDIxLjQwNSAyLjI4NTAwMjkzLDIxLjcxNSBDMi4yODUwMDI5MywyMi4wMzYzMzMzIDIuMzk1MDAyOTMsMjIuMzA3MzMzMyAyLjYxNTAwMjkzLDIyLjUyOCBDMi44MzUwMDI5MywyMi43NDg2NjY3IDMuMTA2MDAyOTMsMjIuODU4NjY2NyAzLjQyODAwMjkzLDIyLjg1OCBDMy43MzczMzYyNywyMi44NTggNC4wMDUzMzYyNywyMi43NDggNC4yMzIwMDI5MywyMi41MjggQzQuNDU4NjY5NiwyMi4zMDggNC41NzE2Njk2LDIyLjAzNyA0LjU3MTAwMjkzLDIxLjcxNSBMNC41NzEwMDI5MywyMS43MTUgWiBNNy40MjkwMDI5MywxMi41NzIgTDcuNDI5MDAyOTMsMjQuMDAxIEM3LjQyOTAwMjkzLDI0LjMxMDMzMzMgNy4zMTYwMDI5MywyNC41NzgzMzMzIDcuMDkwMDAyOTMsMjQuODA1IEM2Ljg2NDAwMjkzLDI1LjAzMTY2NjcgNi41OTYwMDI5MywyNS4xNDQ2NjY3IDYuMjg2MDAyOTMsMjUuMTQ0IEwxLjE0MzAwMjkzLDI1LjE0NCBDMC44MzM2Njk1OTksMjUuMTQ0IDAuNTY1NjY5NTk5LDI1LjAzMSAwLjMzOTAwMjkzMywyNC44MDUgQzAuMTEyMzM2MjY2LDI0LjU3OSAtMC4wMDA2NjM3MzQxMTUsMjQuMzExIDIuOTMyNTUxMzJlLTA2LDI0LjAwMSBMMi45MzI1NTEzMmUtMDYsMTIuNTcyIEMyLjkzMjU1MTMyZS0wNiwxMi4yNjI2NjY3IDAuMTEzMDAyOTMzLDExLjk5NDY2NjcgMC4zMzkwMDI5MzMsMTEuNzY4IEMwLjU2NTAwMjkzMywxMS41NDEzMzMzIDAuODMzMDAyOTMzLDExLjQyODMzMzMgMS4xNDMwMDI5MywxMS40MjkgTDYuMjg2MDAyOTMsMTEuNDI5IEM2LjU5NTMzNjI3LDExLjQyOSA2Ljg2MzMzNjI3LDExLjU0MiA3LjA5MDAwMjkzLDExLjc2OCBDNy4zMTY2Njk2LDExLjk5NCA3LjQyOTY2OTYsMTIuMjYyIDcuNDI5MDAyOTMsMTIuNTcyIEw3LjQyOTAwMjkzLDEyLjU3MiBaIE0yOC41NzEwMDI5LDEyLjU3MiBDMjguNTcxMDAyOSwxMy41OTYgMjguMjQzNjY5NiwxNC40ODMgMjcuNTg5MDAyOSwxNS4yMzMgQzI3Ljc2NzY2OTYsMTUuNzU3IDI3Ljg1NzAwMjksMTYuMjA5MzMzMyAyNy44NTcwMDI5LDE2LjU5IEMyNy44OTMwMDI5LDE3LjQ5NDY2NjcgMjcuNjM3MDAyOSwxOC4zMSAyNy4wODkwMDI5LDE5LjAzNiBDMjcuMjkxNjY5NiwxOS43MDI2NjY3IDI3LjI5MTY2OTYsMjAuMzk5IDI3LjA4OTAwMjksMjEuMTI1IEMyNi45MTAzMzYzLDIxLjgwMzY2NjcgMjYuNTg5MDAyOSwyMi4zNjMzMzMzIDI2LjEyNTAwMjksMjIuODA0IEMyNi4yMzIzMzYzLDI0LjEzNzMzMzMgMjUuOTQwNjY5NiwyNS4yMTQ2NjY3IDI1LjI1MDAwMjksMjYuMDM2IEMyNC40ODgwMDI5LDI2Ljk0MDY2NjcgMjMuMzE1MzM2MywyNy40MDUgMjEuNzMyMDAyOSwyNy40MjkgTDE5LjQyODAwMjksMjcuNDI5IEMxOC42NDIwMDI5LDI3LjQyOSAxNy43ODUwMDI5LDI3LjMzNjY2NjcgMTYuODU3MDAyOSwyNy4xNTIgQzE1LjkyOTAwMjksMjYuOTY3MzMzMyAxNS4yMDU2Njk2LDI2Ljc5NDY2NjcgMTQuNjg3MDAyOSwyNi42MzQgQzE0LjE2ODMzNjMsMjYuNDczMzMzMyAxMy40NTEwMDI5LDI2LjIzODMzMzMgMTIuNTM1MDAyOSwyNS45MjkgQzExLjA3MTAwMjksMjUuNDE3IDEwLjEzMDY2OTYsMjUuMTU1IDkuNzE0MDAyOTMsMjUuMTQzIEM5LjQwNDY2OTYsMjUuMTMxIDkuMTM2NjY5NiwyNS4wMTUgOC45MTAwMDI5MywyNC43OTUgQzguNjgzMzM2MjcsMjQuNTc1IDguNTcwMzM2MjcsMjQuMzEgOC41NzEwMDI5MywyNCBMOC41NzEwMDI5MywxMi41NTQgQzguNTcxMDAyOTMsMTIuMjU2NjY2NyA4LjY3ODAwMjkzLDExLjk5NzY2NjcgOC44OTIwMDI5MywxMS43NzcgQzkuMTA2MDAyOTMsMTEuNTU2MzMzMyA5LjM2MjAwMjkzLDExLjQzNDMzMzMgOS42NjAwMDI5MywxMS40MTEgQzkuOTQ2MDAyOTMsMTEuMzg3IDEwLjM5ODMzNjMsMTEuMDM1NjY2NyAxMS4wMTcwMDI5LDEwLjM1NyBDMTEuNjM1NjY5Niw5LjY3ODMzMzMzIDEyLjIzNzAwMjksOC45NTggMTIuODIxMDAyOSw4LjE5NiBDMTMuNjMwMzM2Myw3LjE2IDE0LjIzMTY2OTYsNi40NDU2NjY2NyAxNC42MjUwMDI5LDYuMDUzIEMxNC44MzkwMDI5LDUuODM5IDE1LjAyMzY2OTYsNS41NTMzMzMzMyAxNS4xNzkwMDI5LDUuMTk2IEMxNS4zMzQzMzYzLDQuODM4NjY2NjcgMTUuNDM4NjY5Niw0LjU1IDE1LjQ5MjAwMjksNC4zMyBDMTUuNTQ1MzM2Myw0LjExIDE1LjYyNTY2OTYsMy43NSAxNS43MzMwMDI5LDMuMjUgQzE1LjgxNjMzNjMsMi43ODYgMTUuODkwNjY5NiwyLjQyMyAxNS45NTYwMDI5LDIuMTYxIEMxNi4wMjEzMzYzLDEuODk5IDE2LjEzNzMzNjMsMS41ODkzMzMzMyAxNi4zMDQwMDI5LDEuMjMyIEMxNi40NzA2Njk2LDAuODc0NjY2NjY3IDE2LjY3MzAwMjksMC41NzcgMTYuOTExMDAyOSwwLjMzOSBDMTcuMTM3MDAyOSwwLjExMyAxNy40MDUwMDI5LDAgMTcuNzE1MDAyOSwwIEMxOC4yNjIzMzYzLDAgMTguNzUzMzM2MywwLjA2MjY2NjY2NjcgMTkuMTg4MDAyOSwwLjE4OCBDMTkuNjIyNjY5NiwwLjMxMzMzMzMzMyAxOS45Nzk2Njk2LDAuNDY4IDIwLjI1OTAwMjksMC42NTIgQzIwLjUzODMzNjMsMC44MzYgMjAuNzc2MzM2MywxLjA3NyAyMC45NzMwMDI5LDEuMzc1IEMyMS4xNjk2Njk2LDEuNjczIDIxLjMxMjY2OTYsMS45NDEgMjEuNDAyMDAyOSwyLjE3OSBDMjEuNDkxMzM2MywyLjQxNyAyMS41NjI2Njk2LDIuNzE0NjY2NjcgMjEuNjE2MDAyOSwzLjA3MiBDMjEuNjY5MzM2MywzLjQyOTMzMzMzIDIxLjY5OTAwMjksMy42OTczMzMzMyAyMS43MDUwMDI5LDMuODc2IEMyMS43MTEwMDI5LDQuMDU0NjY2NjcgMjEuNzE0MDAyOSw0LjI4NjY2NjY3IDIxLjcxNDAwMjksNC41NzIgQzIxLjcxNDAwMjksNS4wMjQ2NjY2NyAyMS42NTczMzYzLDUuNDc3IDIxLjU0NDAwMjksNS45MjkgQzIxLjQzMDY2OTYsNi4zODEgMjEuMzE3NjY5Niw2LjczOCAyMS4yMDUwMDI5LDcgQzIxLjA5MjMzNjMsNy4yNjIgMjAuOTI4NjY5Niw3LjU5NTMzMzMzIDIwLjcxNDAwMjksOCBDMjAuNjc4MDAyOSw4LjA3MTMzMzMzIDIwLjYxODMzNjMsOC4xNzgzMzMzMyAyMC41MzUwMDI5LDguMzIxIEMyMC40NTE2Njk2LDguNDYzNjY2NjcgMjAuMzg2MzM2Myw4LjU5NDY2NjY3IDIwLjMzOTAwMjksOC43MTQgQzIwLjI5MTY2OTYsOC44MzMzMzMzMyAyMC4yNDQwMDI5LDguOTc2MzMzMzMgMjAuMTk2MDAyOSw5LjE0MyBMMjUuMTQyMDAyOSw5LjE0MyBDMjYuMDcwNjY5Niw5LjE0MyAyNi44NzQzMzYzLDkuNDgyMzMzMzMgMjcuNTUzMDAyOSwxMC4xNjEgQzI4LjIzMTY2OTYsMTAuODM5NjY2NyAyOC41NzEwMDI5LDExLjY0MzMzMzMgMjguNTcxMDAyOSwxMi41NzIgTDI4LjU3MTAwMjksMTIuNTcyIFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRDcwRCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["inline", "decimalToPercentage", [["get", "rating", ["loc", [null, [28, 38], [28, 44]]], 0, 0, 0, 0]], [], ["loc", [null, [28, 16], [28, 46]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 32,
                "column": 13
              },
              "end": {
                "line": 33,
                "column": 13
              }
            },
            "moduleName": "hungry/templates/components/meal-item.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.1",
            "loc": {
              "source": null,
              "start": {
                "line": 33,
                "column": 13
              },
              "end": {
                "line": 35,
                "column": 13
              }
            },
            "moduleName": "hungry/templates/components/meal-item.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "Meal-numberOfRatings");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ratings");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "reviews_count", ["loc", [null, [34, 50], [34, 67]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 38,
              "column": 0
            }
          },
          "moduleName": "hungry/templates/components/meal-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "Meal-photo");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "Meal-chef");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "alt", "Chef photo");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "Meal-content");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "Meal-name");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "Meal-location");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "Meal-description");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "Meal-price");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "Meal-rating");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("         ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3, 1]);
          var element1 = dom.childAt(fragment, [5, 1]);
          var element2 = dom.childAt(fragment, [7]);
          var element3 = dom.childAt(element2, [5]);
          var morphs = new Array(9);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createAttrMorph(element0, 'src');
          morphs[2] = dom.createAttrMorph(element0, 'alt');
          morphs[3] = dom.createAttrMorph(element1, 'src');
          morphs[4] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
          morphs[5] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
          morphs[6] = dom.createMorphAt(dom.childAt(element3, [1]), 0, 0);
          morphs[7] = dom.createMorphAt(dom.childAt(element3, [3]), 1, 1);
          morphs[8] = dom.createMorphAt(element3, 5, 5);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "eq", [["get", "available_quantity", ["loc", [null, [3, 12], [3, 30]]], 0, 0, 0, 0], 0], [], ["loc", [null, [3, 8], [3, 33]]], 0, 0]], [], 0, null, ["loc", [null, [3, 2], [9, 9]]]], ["attribute", "src", ["concat", [["get", "photo", ["loc", [null, [12, 18], [12, 23]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["concat", ["Photo of ", ["get", "description", ["loc", [null, [12, 43], [12, 54]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "chef_photo", ["loc", [null, [16, 18], [16, 28]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "name", ["loc", [null, [20, 29], [20, 37]]], 0, 0, 0, 0], ["content", "location", ["loc", [null, [21, 33], [21, 45]]], 0, 0, 0, 0], ["inline", "money-format", [["get", "price", ["loc", [null, [23, 47], [23, 52]]], 0, 0, 0, 0]], [], ["loc", [null, [23, 32], [23, 54]]], 0, 0], ["block", "if", [["subexpr", "eq", [["get", "rating", ["loc", [null, [25, 22], [25, 28]]], 0, 0, 0, 0], 0], [], ["loc", [null, [25, 18], [25, 31]]], 0, 0]], [], 1, 2, ["loc", [null, [25, 12], [29, 19]]]], ["block", "if", [["subexpr", "eq", [["get", "reviews_count", ["loc", [null, [32, 23], [32, 36]]], 0, 0, 0, 0], 0], [], ["loc", [null, [32, 19], [32, 39]]], 0, 0]], [], 3, 4, ["loc", [null, [32, 13], [35, 20]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "hungry/templates/components/meal-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "link-to", ["meal", ["get", "id", ["loc", [null, [1, 18], [1, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [38, 12]]]], ["content", "yield", ["loc", [null, [40, 0], [40, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("hungry/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "hungry/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("hungry/templates/loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 6
          }
        },
        "moduleName": "hungry/templates/loading.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "Loading");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "Loading-contents");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "Loading-logo");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "alt", "Hungry logo");
        dom.setAttribute(el4, "src", "/hungry/assets/images/logo.png");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "Loading-description");
        var el4 = dom.createTextNode("Finding Meals");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "Loading-spinner");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "dot bounce1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "dot bounce2");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "dot bounce3");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("hungry/templates/meal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "hungry/templates/meal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "Logo");
          dom.setAttribute(el1, "src", "/hungry/assets/images/logo.png");
          dom.setAttribute(el1, "alt", "Hungry Logo");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "hungry/templates/meal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "DisplayItems");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 5, 5);
        morphs[4] = dom.createMorphAt(element0, 7, 7);
        morphs[5] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [1, 0], [3, 12]]]], ["inline", "buy-button", [], ["price", ["subexpr", "@mut", [["get", "model.menuItem.price", ["loc", [null, [6, 23], [6, 43]]], 0, 0, 0, 0]], [], [], 0, 0], "available", ["subexpr", "@mut", [["get", "model.menuItem.scheduled_offerings.0.available_quantity", ["loc", [null, [6, 54], [6, 111]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [6, 4], [6, 113]]], 0, 0], ["inline", "content-displayer", [], ["title", "Description", "photo_url", ["subexpr", "@mut", [["get", "model.menuItem.images.0.url", ["loc", [null, [7, 54], [7, 83]]], 0, 0, 0, 0]], [], [], 0, 0], "contentTitle", ["subexpr", "@mut", [["get", "model.menuItem.name", ["loc", [null, [7, 97], [7, 116]]], 0, 0, 0, 0]], [], [], 0, 0], "contentDescription", ["subexpr", "@mut", [["get", "model.menuItem.description", ["loc", [null, [7, 136], [7, 162]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 4], [7, 164]]], 0, 0], ["inline", "content-displayer", [], ["title", "Ingredients", "photo_url", ["subexpr", "@mut", [["get", "model.ingredients.ingredients_image.url", ["loc", [null, [8, 54], [8, 93]]], 0, 0, 0, 0]], [], [], 0, 0], "contentDescription", ["subexpr", "@mut", [["get", "model.ingredients.ingredients_text", ["loc", [null, [8, 113], [8, 147]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [8, 4], [8, 150]]], 0, 0], ["inline", "content-displayer", [], ["title", "About The Chef", "photo_url", ["subexpr", "@mut", [["get", "model.chef.chef_profile.image.url", ["loc", [null, [9, 57], [9, 90]]], 0, 0, 0, 0]], [], [], 0, 0], "contentTitle", ["subexpr", "@mut", [["get", "model.chef.name", ["loc", [null, [9, 104], [9, 119]]], 0, 0, 0, 0]], [], [], 0, 0], "contentDescription", ["subexpr", "@mut", [["get", "model.chef.chef_profile.description", ["loc", [null, [9, 139], [9, 174]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [9, 4], [9, 176]]], 0, 0], ["content", "outlet", ["loc", [null, [11, 0], [11, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("hungry/templates/meals", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "hungry/templates/meals.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "Logo");
          dom.setAttribute(el1, "src", "/hungry/assets/images/logo.png");
          dom.setAttribute(el1, "alt", "Hungry Logo");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 4
            },
            "end": {
              "line": 19,
              "column": 4
            }
          },
          "moduleName": "hungry/templates/meals.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "meal-item", [], ["photo", ["subexpr", "@mut", [["get", "meal.images.0.url", ["loc", [null, [10, 18], [10, 37]]], 0, 0, 0, 0]], [], [], 0, 0], "available_quantity", ["subexpr", "@mut", [["get", "meal.scheduled_offerings.0.available_quantity", ["loc", [null, [11, 31], [11, 78]]], 0, 0, 0, 0]], [], [], 0, 0], "chef_photo", ["subexpr", "@mut", [["get", "meal.chefImage", ["loc", [null, [12, 23], [12, 37]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "meal.name", ["loc", [null, [13, 17], [13, 26]]], 0, 0, 0, 0]], [], [], 0, 0], "description", ["subexpr", "@mut", [["get", "meal.description", ["loc", [null, [14, 24], [14, 40]]], 0, 0, 0, 0]], [], [], 0, 0], "price", ["subexpr", "@mut", [["get", "meal.price", ["loc", [null, [15, 18], [15, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "rating", ["subexpr", "@mut", [["get", "meal.rating", ["loc", [null, [16, 19], [16, 30]]], 0, 0, 0, 0]], [], [], 0, 0], "reviews_count", ["subexpr", "@mut", [["get", "meal.reviews_count", ["loc", [null, [17, 26], [17, 44]]], 0, 0, 0, 0]], [], [], 0, 0], "id", ["subexpr", "@mut", [["get", "meal.id", ["loc", [null, [18, 15], [18, 22]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [9, 8], [18, 24]]], 0, 0]],
        locals: ["meal"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "hungry/templates/meals.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "Meals");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [1, 0], [3, 12]]]], ["inline", "log", [["get", "model", ["loc", [null, [5, 6], [5, 11]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 0], [5, 13]]], 0, 0], ["block", "each", [["get", "model", ["loc", [null, [8, 12], [8, 17]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [8, 4], [19, 13]]]], ["content", "outlet", ["loc", [null, [21, 0], [21, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("hungry/templates/not-found", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 24
          }
        },
        "moduleName": "hungry/templates/not-found.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("404 - Not Found");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('hungry/config/environment', ['ember'], function(Ember) {
  var prefix = 'hungry';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("hungry/app")["default"].create({"name":"hungry","version":"0.0.0+75e41086"});
}

/* jshint ignore:end */
//# sourceMappingURL=hungry.map