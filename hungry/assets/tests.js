define('hungry/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('hungry/tests/components/buy-button.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/buy-button.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/buy-button.js should pass jshint.');
  });
});
define('hungry/tests/components/content-displayer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/content-displayer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/content-displayer.js should pass jshint.');
  });
});
define('hungry/tests/components/meal-carousel.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/meal-carousel.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/meal-carousel.js should pass jshint.\ncomponents/meal-carousel.js: line 8, col 19, \'$\' is not defined.\ncomponents/meal-carousel.js: line 16, col 9, \'$\' is not defined.\ncomponents/meal-carousel.js: line 17, col 45, \'$\' is not defined.\n\n3 errors');
  });
});
define('hungry/tests/components/meal-item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/meal-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/meal-item.js should pass jshint.');
  });
});
define('hungry/tests/helpers/decimal-to-percentage.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/decimal-to-percentage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/decimal-to-percentage.js should pass jshint.\nhelpers/decimal-to-percentage.js: line 4, col 19, \'hash\' is defined but never used.\n\n1 error');
  });
});
define('hungry/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('hungry/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('hungry/tests/helpers/eq.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/eq.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/eq.js should pass jshint.');
  });
});
define('hungry/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'hungry/tests/helpers/start-app', 'hungry/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _hungryTestsHelpersStartApp, _hungryTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _hungryTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _hungryTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('hungry/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('hungry/tests/helpers/money-format.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/money-format.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/money-format.js should pass jshint.\nhelpers/money-format.js: line 10, col 86, Missing semicolon.\nhelpers/money-format.js: line 4, col 19, \'hash\' is defined but never used.\n\n2 errors');
  });
});
define('hungry/tests/helpers/resolver', ['exports', 'hungry/resolver', 'hungry/config/environment'], function (exports, _hungryResolver, _hungryConfigEnvironment) {

  var resolver = _hungryResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _hungryConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hungryConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('hungry/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('hungry/tests/helpers/start-app', ['exports', 'ember', 'hungry/app', 'hungry/config/environment'], function (exports, _ember, _hungryApp, _hungryConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _hungryConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _hungryApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('hungry/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('hungry/tests/integration/components/buy-button-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('buy-button', 'Integration | Component | buy button', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'buy-button', ['loc', [null, [1, 0], [1, 14]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'revision': 'Ember@2.7.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'buy-button', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('hungry/tests/integration/components/buy-button-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/buy-button-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/buy-button-test.js should pass jshint.');
  });
});
define('hungry/tests/integration/components/content-displayer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('content-displayer', 'Integration | Component | content displayer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 21
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'content-displayer', ['loc', [null, [1, 0], [1, 21]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'revision': 'Ember@2.7.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'content-displayer', [], [], 0, null, ['loc', [null, [2, 4], [4, 26]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('hungry/tests/integration/components/content-displayer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/content-displayer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/content-displayer-test.js should pass jshint.');
  });
});
define('hungry/tests/integration/components/meal-carousel-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('meal-carousel', 'Integration | Component | meal carousel', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 17
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'meal-carousel', ['loc', [null, [1, 0], [1, 17]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'revision': 'Ember@2.7.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'meal-carousel', [], [], 0, null, ['loc', [null, [2, 4], [4, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('hungry/tests/integration/components/meal-carousel-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/meal-carousel-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meal-carousel-test.js should pass jshint.');
  });
});
define('hungry/tests/integration/components/meal-item-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('meal-item', 'Integration | Component | meal item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'meal-item', ['loc', [null, [1, 0], [1, 13]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'revision': 'Ember@2.7.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'meal-item', [], [], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('hungry/tests/integration/components/meal-item-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/meal-item-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meal-item-test.js should pass jshint.');
  });
});
define('hungry/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('hungry/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('hungry/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('hungry/tests/routes/meal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/meal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/meal.js should pass jshint.\nroutes/meal.js: line 39, col 26, \'error\' is defined but never used.\nroutes/meal.js: line 9, col 16, \'$\' is not defined.\n\n2 errors');
  });
});
define('hungry/tests/routes/meals.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/meals.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/meals.js should pass jshint.\nroutes/meals.js: line 5, col 16, \'$\' is not defined.\n\n1 error');
  });
});
define('hungry/tests/test-helper', ['exports', 'hungry/tests/helpers/resolver', 'ember-qunit'], function (exports, _hungryTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_hungryTestsHelpersResolver['default']);
});
define('hungry/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('hungry/tests/unit/helpers/decimal-to-percentage-test', ['exports', 'hungry/helpers/decimal-to-percentage', 'qunit'], function (exports, _hungryHelpersDecimalToPercentage, _qunit) {

  (0, _qunit.module)('Unit | Helper | decimal to percentage');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _hungryHelpersDecimalToPercentage.decimalToPercentage)([42]);
    assert.ok(result);
  });
});
define('hungry/tests/unit/helpers/decimal-to-percentage-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/decimal-to-percentage-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/decimal-to-percentage-test.js should pass jshint.');
  });
});
define('hungry/tests/unit/helpers/eq-test', ['exports', 'hungry/helpers/eq', 'qunit'], function (exports, _hungryHelpersEq, _qunit) {

  (0, _qunit.module)('Unit | Helper | eq');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _hungryHelpersEq.eq)([42]);
    assert.ok(result);
  });
});
define('hungry/tests/unit/helpers/eq-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/eq-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/eq-test.js should pass jshint.');
  });
});
define('hungry/tests/unit/helpers/money-format-test', ['exports', 'hungry/helpers/money-format', 'qunit'], function (exports, _hungryHelpersMoneyFormat, _qunit) {

  (0, _qunit.module)('Unit | Helper | money format');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _hungryHelpersMoneyFormat.moneyFormat)([42]);
    assert.ok(result);
  });
});
define('hungry/tests/unit/helpers/money-format-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/money-format-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/money-format-test.js should pass jshint.');
  });
});
define('hungry/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('hungry/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('hungry/tests/unit/routes/meal-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:meal', 'Unit | Route | meal', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('hungry/tests/unit/routes/meal-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/meal-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meal-test.js should pass jshint.');
  });
});
define('hungry/tests/unit/routes/meals-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:meals', 'Unit | Route | meals', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('hungry/tests/unit/routes/meals-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/meals-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meals-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('hungry/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map