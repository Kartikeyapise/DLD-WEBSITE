! function(c) {
    function t(t) { for (var n, e, r = t[0], o = t[1], a = t[2], u = 0, i = []; u < r.length; u++) e = r[u], Object.prototype.hasOwnProperty.call(s, e) && s[e] && i.push(s[e][0]), s[e] = 0; for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (c[n] = o[n]); for (p && p(t); i.length;) i.shift()(); return f.push.apply(f, a || []), l() }

    function l() {
        for (var t, n = 0; n < f.length; n++) {
            for (var e = f[n], r = !0, o = 1; o < e.length; o++) {
                var a = e[o];
                0 !== s[a] && (r = !1)
            }
            r && (f.splice(n--, 1), t = u(u.s = e[0]))
        }
        return t
    }
    var e = {},
        s = { 6: 0 },
        f = [];

    function u(t) { if (e[t]) return e[t].exports; var n = e[t] = { i: t, l: !1, exports: {} }; return c[t].call(n.exports, n, n.exports, u), n.l = !0, n.exports }
    u.m = c, u.c = e, u.d = function(t, n, e) { u.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e }) }, u.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, u.t = function(n, t) {
        if (1 & t && (n = u(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var e = Object.create(null);
        if (u.r(e), Object.defineProperty(e, "default", { enumerable: !0, value: n }), 2 & t && "string" != typeof n)
            for (var r in n) u.d(e, r, function(t) { return n[t] }.bind(null, r));
        return e
    }, u.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return u.d(n, "a", n), n }, u.o = function(t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, u.p = "";
    var n = window.webpackJsonp = window.webpackJsonp || [],
        r = n.push.bind(n);
    n.push = t, n = n.slice();
    for (var o = 0; o < n.length; o++) t(n[o]);
    var p = r;
    f.push([146, 0]), l()
}({
    10:
    /*!****************************************!*\
      !*** ./app/drivers/prevent-default.js ***!
      \****************************************/
    /*! exports provided: preventDefaultDriver */
    /*! exports used: preventDefaultDriver */
        function(t, n, e) {
        "use strict";
        e.d(n, "a", function() { return r });
        var r = function(t) { return t.subscribe(function(t) { t.preventDefault() }), Object.create(null) }
    },
    11:
    /*!**************************************!*\
      !*** ./app/drivers/global-events.js ***!
      \**************************************/
    /*! exports provided: globalEventDriver */
    /*! exports used: globalEventDriver */
        function(t, n, e) {
        "use strict";
        e.d(n, "a", function() { return o });
        var r = e( /*! rx */ 1),
            o = function() { return { events: function(n) { return r.Observable.fromEventPattern(function(t) { document.addEventListener(n, t, !0) }, function(t) { document.removeEventListener(n, t, !0) }) } } }
    },
    12:
    /*!************************************************!*\
      !*** ./app/components/logic/lib/expression.js ***!
      \************************************************/
    /*! exports provided: labelExpression, binaryExpression, unaryExpression, groupExpression, identifierExpression, constantExpression, vectorExpression, expressionFromJson */
    /*! exports used: expressionFromJson, identifierExpression */
        function(t, n, e) {
        "use strict";
        e.d(n, "b", function() { return c }), e.d(n, "a", function() { return f });
        var r = e( /*! immutable */ 2),
            o = r.a.Record({ location: null, name: null, body: null }, "label"),
            a = r.a.Record({ operator: null, lhs: null, rhs: null }, "binary"),
            u = r.a.Record({ operator: null, operand: null }, "unary"),
            i = r.a.Record({ style: null, body: null }, "group"),
            c = r.a.Record({ name: null }, "identifier"),
            l = r.a.Record({ value: null }, "constant"),
            s = r.a.Record({ identifiers: r.a.List(), values: r.a.List() }, "vector"),
            f = function t(n) {
                switch (n.node) {
                    case "label":
                        return o({ location: n.location, name: n.name, body: t(n.body) });
                    case "binary":
                        return a({ operator: n.operator.toString(), lhs: t(n.lhs), rhs: t(n.rhs) });
                    case "unary":
                        return u({ operator: n.operator.toString(), operand: t(n.operand) });
                    case "group":
                        return i({ body: t(n.body), style: n.style });
                    case "identifier":
                        return c({ name: n.name.toString() });
                    case "constant":
                        return l({ value: n.value });
                    case "vector":
                        return s({ identifiers: n.vector.identifiers.map(t), values: r.a.List(n.vector.values) });
                    default:
                        throw new Error("unknown node: ".concat(n))
                }
            }
    },
    13:
    /*!***********************************!*\
      !*** ./app/drivers/select-all.js ***!
      \***********************************/
    /*! exports provided: selectAllDriver */
    /*! exports used: selectAllDriver */
        function(t, n, e) {
        "use strict";
        e.d(n, "a", function() { return r });
        var r = function(t) { return t.subscribe(function(t) { t.setSelectionRange(0, 9999999) }), Object.create(null) }
    },
    133:
    /*!**********************************************!*\
      !*** ./app/components/logic/view/index.styl ***!
      \**********************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(t, n, e) {},
    134:
    /*!*********************************************!*\
      !*** ./app/components/tree/view/index.styl ***!
      \*********************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(t, n, e) {},
    14:
    /*!****************************************!*\
      !*** ./app/drivers/textarea-resize.js ***!
      \****************************************/
    /*! exports provided: autoResizeDriver */
    /*! exports used: autoResizeDriver */
        function(t, n, e) {
        "use strict";
        e.d(n, "a", function() { return a });
        var r = e( /*! raf */ 23),
            o = e.n(r),
            a = function(t) {
                var r = null;
                return t.subscribe(function(e) {
                    r = r || o()(function() {
                        r = null, e.style.height = "0px";
                        var t = e.offsetHeight;
                        e.style.padding = "0px";
                        var n = e.scrollHeight + t;
                        e.style.padding = null, e.style.height = n + "px"
                    })
                }), Object.create(null)
            }
    },
    146:
    /*!******************************************************!*\
      !*** ./app/pages/logic-editor/index.js + 32 modules ***!
      \******************************************************/
    /*! no exports provided */
    /*! all exports used */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@cycle/core/lib/cycle.js (<- Module is not an ECMAScript module) */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@cycle/dom/lib/cycle-dom.js (<- Module is not an ECMAScript module) */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@cycle/isolate/lib/index.js (<- Module is not an ECMAScript module) */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/graphics/index.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/graphics/lib/bounds.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/logic/input-field/index.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/logic/lib/evaluation.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/logic/lib/formatter.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/logic/lib/formatter/c-bitwise.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/logic/lib/formatter/math.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/modal/index.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/splitpane/index.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/table/index.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/table/lib/format-ascii.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/drivers/global-events.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/drivers/prevent-default.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/drivers/rangy.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/drivers/select-all.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/drivers/textarea-resize.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/icons/export.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/icons/help.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/icons/open.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/lib/dom-helper.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/lib/h-helper.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/immutable/dist/immutable.es.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rx/dist/rx.all.js (<- Module is not an ECMAScript module) */
        function(t, n, e) {
        "use strict";
        e.r(n);

        function o(t, n) {
            switch (t._name) {
                case "binary":
                case "unary":
                case "group":
                case "identifier":
                case "vector":
                    return function(t, n) { var e = n.get(t); return null === e ? T : e ? L : z }(t, n);
                case "label":
                    return o(t.body, n);
                case "constant":
                    return function(t) { return null === t.value ? T : t.value ? L : z }(t);
                default:
                    throw new Error("unknown node: ".concat(t._name))
            }
        }

        function a(t, n, e) {
            var r = 2 < arguments.length && void 0 !== e ? e : null;
            return "group" === t._name ? a(t.body, n, r) : {
                name: function(t, n) {
                    switch (t._name) {
                        case "binary":
                            return n.binaryOperator(t.operator.toString());
                        case "unary":
                            return n.unaryOperator(t.operator.toString());
                        case "group":
                            return "(...)";
                        case "label":
                            return null === t.name ? null : n.formatLabel(t.name.toString());
                        case "identifier":
                            return n.formatName(t.name.toString());
                        case "constant":
                            return n.formatValue(t.value);
                        case "vector":
                            return "<Vector:...>";
                        default:
                            throw new Error("unknown node: ".concat(t._name))
                    }
                }(t, n),
                title: function(t) {
                    switch (t._name) {
                        case "binary":
                        case "unary":
                            return t.operator.toString();
                        case "group":
                            return "(...)";
                        case "label":
                            return null === t.name ? "" : "".concat(t.name, " x= ");
                        case "identifier":
                            return t.name.toString();
                        case "constant":
                            return function(t) { return null === t.value ? "*" : t.value ? "1" : "0" }(t);
                        case "vector":
                            return "<Vector:...>";
                        default:
                            throw new Error("unknown node: ".concat(t._name))
                    }
                }(t),
                children: function(t) {
                    switch (t._name) {
                        case "binary":
                            return [t.lhs, t.rhs];
                        case "unary":
                            return [t.operand];
                        case "group":
                        case "label":
                            return [t.body];
                        case "identifier":
                        case "constant":
                            return [];
                        case "vector":
                            return t.identifiers;
                        default:
                            throw new Error("unknown node: ".concat(t._name))
                    }
                }(t).map(function(t) { return a(t, n, r) }),
                color: r && o(t, r)
            }
        }

        function u(t, n) { return a(t, n, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null) }

        function i(t, n, e) { var r = 2 < arguments.length && void 0 !== e ? e : null; if (null === t || 0 === t.expressions.size) return null; var o = null === r ? null : function(t, e) { var n = D.a.Map(t.freeIdentifiers.map(function(t, n) { return [t, !!(Math.pow(2, n) & e)] })); return t.sortedExpressions.reduce(k.c, t.subExpressions.reduce(k.c, n)) }(t, r); return 1 === t.expressions.size ? u(t.expressions.get(0), n, o) : { name: "Multiple Expressions", children: t.expressions.map(function(t) { return u(t, n, o) }).toArray(), hidden: !0 } }

        function c(t, n, e) { return t && t.expressions.size ? function(t, n, e) { var r = []; return t.freeIdentifiers.size && r.push({ name: "identifiers", columns: t.freeIdentifiers.map(function(t) { return { name: Object(X.b)(t, e) } }).toArray() }), t.sortedExpressions.isEmpty() || r.push({ name: "expressions", columns: t.sortedExpressions.map(function(t) { return { name: t.name ? t.name + (n ? " = " + Object(X.b)(t.body, e) : "") : Object(X.b)(t.body, e) } }).toArray() }), n && t.subExpressions.size && r.push({ name: "Sub expressions", columns: t.subExpressions.map(function(t) { return { name: Object(X.b)(t, e) } }).toArray() }), { columnGroups: r, rows: t.freeIdentifiers.size < 9 ? Object(k.a)({ expressions: t.freeIdentifiers.concat(t.sortedExpressions).concat(n ? t.subExpressions : []).toList(), identifiers: t.freeIdentifiers }).map(function(t) { return { values: t.values.map(e.formatVectorValue.bind(e)).toArray() } }).toArray() : [], error: t.freeIdentifiers.size < 9 ? null : "Too many variables" } }(t, n, e) : null }

        function l(t, n) { return t[n] || n }

        function s(t, n) { return t[n] || n }

        function f(t, n) { return t[n] || n }

        function h(t, n, o) { return x.Observable.combineLatest(n.take(1).merge(n.skip(1).debounce(300)), t.selectFormat$.startWith(""), t.showSubExpressions$.startWith(!1), function(t, n, e) { var r = H[n || t.language.shortName]; return o.startWith(K({ fieldOutput: t, showSubExpressions: e, formatId: n, formatList: J, formula: function(t, n) { return null !== t ? Object(X.a)(t.expressions, n) : "" }(t.network, r), table: c(t.network, e, r), tree: i(t.network, r) })).scan(function(t, n) { return t.set("selectedRow", n).set("tree", i(t.fieldOutput.network, r, n)) }) }).switch().shareReplay(1) }

        function v(t, n, e, r) { return x.Observable.combineLatest(t, n, e, r, function(t, n, e, r) { return Object(w.div)([r, function(t, n, e) { return Object(w.div)(".app", [Object(w.div)(".app-head", [Object(w.div)(".action-panel", [Object(w.div)(".action-list", [Object(w.div)(".action-list-item", [Object(w.button)(".action-button", { attributes: { "data-panel": "open" }, title: "Open Diagram..." }, Object(tt.a)(24))]), Object(w.div)(".action-list-item", [Object(w.button)(".action-button", { attributes: { "data-panel": "save" }, title: "Export Diagram..." }, Object(nt.a)(24))]), Object(w.div)(".action-list-item", [Object(w.button)(".action-button", { attributes: { "data-panel": "help" }, title: "Help..." }, Object(et.a)(24))])])]), Object(w.div)(".field-panel", [n])]), Object(w.div)(".app-body", [t.fieldOutput.network && t.fieldOutput.network.expressions.size ? Object(w.div)([Object(w.div)({ style: { display: "block" } }, ["", Object(w.select)(".format-select", t.formatList.map(function(t) { return Object(w.option)({ value: t.id }, t.name) }).toArray()), Object(w.br)(), Object(w.label)([Object(w.input)({ type: "checkbox", name: "subexpressions", checked: t.showSubExpressions }), "EXPAND"])]), Object(w.h2)("GENERATED TABLE"), e]) : null])]) }(t, n, e)]) }) }

        function m(t) {
            var n = t.DOM,
                e = t.openData$,
                r = n.select('input[name="subexpressions"]'),
                o = n.select(".format-select"),
                a = r.events("change"),
                u = o.events("change"),
                i = function(t) {
                    var n = t.DOM.select("[data-panel]"),
                        e = n.events("click");
                    return { open$: e.map(function(t) { return t.ownerTarget.dataset.panel }).share(), preventDefault: x.Observable.merge([e, n.events("mousedown")]).share() }
                }({ DOM: n });
            return { showSubExpressions$: a.map(function(t) { return t.ownerTarget.checked }).share(), panel$: i.open$, selectFormat$: u.map(function(t) { return t.ownerTarget.value }).share(), openData$: e, preventDefault: x.Observable.merge([i.preventDefault]) }
        }

        function p(t, n) { return [Object(w.dt)(".modal-item-titel", t), Object(w.dd)(".modal-item-body", n.map(function(t) { return [t, Object(w.br)()] }))] }

        function b(t) {
            var n = t.DOM,
                e = t.globalEvents,
                r = t.visible$;
            return { DOM: j()(ut.a, "modal")({ DOM: n, globalEvents: e, props$: r.startWith(!1).map(function(t) { return { visible: t } }), content$: x.Observable.just(Object(w.div)([Object(w.h1)(".modal-box-title", "Logic expression editor"), Object(w.h2)("Languages"), Object(w.dl)([p("Auto detection:", ["If the language is set to auto detect a dialect of the logic expression will be guessed."]), p("C", ["Literals: 1, 0, true, false, void", "Binary Operators: &&, &, ||, |, ^", "Unary Operators: !, ~", "Identifiers can be quoted"]), p("Python", ["Literals: 1, 0, True, False, None", "Binary Operators: and, or, xor", "Unary Operators: not", "Identifiers can be quoted"]), p("Math", ["Literals: 1, 0, true, false, undefined, W, T, F, ⊤, ⊥, Ø", "Binary Operators: &&, &, ∧, ||, |, ∨, ^, ⊕, +, *", "Unary Operators: !, ~, -, ¬", "Identifiers can be quoted", "adjacent get ANDed automatically"]), p("Latex", ["Literals: 1, 0, true, false, W, T, F, \\top, \\bot, ⊤, ⊥, \\nothing", "Binary Operators: &&, &, ∧, ||, |, ^, ⊕, +, *, \\oplus, \\vee, \\wedge", "Unary Operators: !, ~, -, ¬, \\neg, \\overline", "Identifiers can be quoted", "adjacent get ANDed automatically"]), p("Table/Vector literal", ["In all languages a vector of truth values can be", "expressed via for example: <P,Q:0110>", "In which case P and Q are identfiers and 0110 is", "a sequence of value of the table's column.", "A * can be used to indicate a dont-care value. Eg:", "<P,Q:*1*0>"])]), Object(w.h2)("Truth table"), Object(w.dl)([p("Select row", ["Select a row in the table to color the expression tree accordingly."])])])) }).DOM.map(at.a) }
        }

        function d() { return Object(w.div)([Object(w.h1)(".modal-box-title", "Open..."), Object(w.h3)("Examples"), Object(w.ul)(".block-list.style-small", [it.map(function(t) { return Object(w.li)([Object(w.button)(".block-button", { attributes: { "data-open-json": JSON.stringify(t.data) } }, t.name)]) })])]) }

        function g(t) {
            var n = t.DOM,
                e = t.globalEvents,
                r = t.visible$,
                o = n.isolateSource,
                a = n.isolateSink,
                u = function(t) {
                    var n = t.DOM.select("[data-open-json]"),
                        e = n.events("click");
                    return { open$: x.Observable.merge([e.map(function(t) { return t.ownerTarget.dataset.openJson })]).share(), preventDefault: x.Observable.merge([e, n.events("mousedown")]) }
                }({ DOM: o(n, "modalBody") }),
                i = function(t, n) { return x.Observable.merge([t.startWith(!1), n.open$.map(function() { return !1 })]).map(function(t) { return { visible: t } }).map(function(t) { return { props: t } }).shareReplay(1) }(r, u);
            return { DOM: j()(ut.a, "modal")({ DOM: n, globalEvents: e, props$: i.map(function(t) { return t.props }), content$: a(function(t) { return t.map(d) }(i), "modalBody") }).DOM.map(at.a), preventDefault: u.preventDefault, data$: u.open$ }
        }

        function y(t) {
            return t.map(function(t) {
                return function(t) {
                    var n = t.table,
                        e = t.formula,
                        r = t.tree;
                    return Object(w.div)([Object(w.h1)(".modal-box-title", "Export..."), Object(w.h3)("ASCII Table"), Object(w.div)([Object(w.textarea)(".export-text", { attributes: { readonly: !0 } }, n ? n.toString() : "")]), Object(w.h3)("Formula"), Object(w.div)([Object(w.input)(".export-text-single", { attributes: { readonly: !0 }, value: e })]), Object(w.h3)("LaTeX Forest Tree"), Object(w.div)([Object(w.input)(".export-text-single", { attributes: { readonly: !0 }, value: r })])])
                }(t)
            })
        }
        var x = e(1),
            r = e(15),
            O = e.n(r),
            w = e(0),
            A = e(4),
            j = e.n(A),
            C = e(10),
            E = e(14),
            S = e(13),
            $ = e(11),
            M = e(32),
            R = e(24),
            D = e(2),
            k = e(18),
            L = "#00cc00",
            z = "#cc0000",
            T = "#00dddd",
            X = e(17),
            B = e(43),
            F = { AND: "\\wedge", OR: "\\oplus", NOT: "\\neg", XOR: "\\oplus" },
            _ = new RegExp("[^a-z0-9]", "i"),
            N = { name: "Latex", formatBinary: function(t, n, e) { return N.formatBinaryChain(t, n, e) }, formatBinaryChain: function(t) { for (var n = arguments.length, e = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r]; return "(".concat(e.join(" ".concat(l(F, t), " ")), ")") }, formatUnary: function(t, n) { return "(".concat(N.formatUnarySimple(t, n), ")") }, formatUnarySimple: function(t, n) { return "".concat(l(F, t), " ").concat(n) }, formatGroup: function(t) { return t }, formatName: function(t) { return function(t) { return _.test(t) ? '"'.concat(t, '"') : t }(t) }, formatValue: function(t) { return !0 === t ? "\\top" : !1 === t ? "\\bot" : "\\nothing" }, formatVector: function(t, n) { return "<".concat(t.map(function(t) { return t.name }).join(","), ":").concat(n.map(N.formatVectorValue).join(""), ">") }, formatVectorValue: function(t) { return !0 === t ? "1" : !1 === t ? "0" : "*" }, formatLabel: function(t, n) { var e = 1 < arguments.length && void 0 !== n ? n : ""; return "".concat(t, "=").concat(e) }, formatExpressions: function(t) { return t.join(", ") }, binaryOperator: function(t) { return l(F, t) }, unaryOperator: function(t) { return l(F, t) } },
            Y = N,
            I = { AND: "and", OR: "or", XOR: "xor", NOT: "not" },
            V = new RegExp("s+", "g"),
            U = { name: "Python", formatBinary: function(t, n, e) { return U.formatBinaryChain(t, n, e) }, formatBinaryChain: function(t) { for (var n = arguments.length, e = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r]; return "(".concat(e.join(" ".concat(s(I, t), " ")), ")") }, formatUnary: function(t, n) { return "(".concat(U.formatUnarySimple(t, n), ")") }, formatUnarySimple: function(t, n) { return "".concat(s(I, t), " ").concat(n) }, formatGroup: function(t) { return t }, formatName: function(t) { return function(t) { return t.replace(V, "_") }(t) }, formatValue: function(t) { return !0 === t ? "True" : !1 === t ? "False" : "None" }, formatVector: function(t, n) { return "<".concat(t.map(function(t) { return t.name }).join(","), ":").concat(n.map(U.formatVectorValue).join(""), ">") }, formatVectorValue: function(t) { return !0 === t ? "1" : !1 === t ? "0" : "*" }, formatLabel: function(t, n) { var e = 1 < arguments.length && void 0 !== n ? n : ""; return "".concat(t, "=").concat(e) }, formatExpressions: function(t) { return t.join(", ") }, binaryOperator: function(t) { return s(I, t) }, unaryOperator: function(t) { return s(I, t) } },
            P = U,
            Z = e(8),
            W = { AND: "&&", OR: "||", NOT: "!", XOR: "!=" },
            G = new RegExp("s+", "g"),
            Q = { name: "C Boolean", formatBinary: function(t, n, e) { return Q.formatBinaryChain(t, n, e) }, formatBinaryChain: function(t) { for (var n = arguments.length, e = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r]; return "(".concat(e.join(" ".concat(f(W, t), " ")), ")") }, formatUnary: function(t, n) { return "(".concat(Q.formatUnarySimple(t, n), ")") }, formatUnarySimple: function(t, n) { return "".concat(f(W, t)).concat(n) }, formatGroup: function(t) { return t }, formatName: function(t) { return function(t) { return t.replace(G, "_") }(t) }, formatValue: function(t) { return !0 === t ? "true" : !1 === t ? "false" : "void" }, formatVector: function(t, n) { return "<".concat(t.map(function(t) { return t.name }).join(","), ":").concat(n.map(Q.formatVectorValue).join(""), ">") }, formatVectorValue: function(t) { return !0 === t ? "1" : !1 === t ? "0" : "*" }, formatLabel: function(t, n) { var e = 1 < arguments.length && void 0 !== n ? n : ""; return "".concat(t, "=").concat(e) }, formatExpressions: function(t) { return t.join(", ") }, binaryOperator: function(t) { return f(W, t) }, unaryOperator: function(t) { return f(W, t) } },
            q = Q,
            H = { math: B.a, latex: Y, python: P, cbitwise: Z.a, cBoolean: q },
            J = D.a.List(Object.keys(H).map(function(t) { return { id: t, name: H[t].name } })).unshift({ id: "", name: "Same as input" }),
            K = D.a.Record({ selectedRow: null, fieldOutput: null, formatId: null, formatList: D.a.List(), showSubExpressions: !1, formula: null, table: null, tree: null }),
            tt = e(19),
            nt = e(20),
            et = e(21),
            rt = (e(133), e(46)),
            ot = e(44),
            at = e(6),
            ut = e(7),
            it = [{ name: "De Morgan", data: { langId: "math", term: "(P ∧ Q), ¬(¬P ∨ ¬Q)" } }, { name: "Invalid Cycle", data: { langId: "c_bitwise", term: "A = P & Q, P = R | S, R = A" } }, { name: "Dependencies", data: { langId: "c_bitwise", term: "A = P & Q, B = P | Q, C = A ^ B" } }, { name: "Vector", data: { langId: "c_bitwise", term: "Y1 = <X1, X2, X3: 10011101>" } }, { name: "Vector (Dont-Care)", data: { langId: "c_bitwise", term: "Y1 = <X1, X2, X3: 1**1010*>" } }];

        function ct(t) { return function(t) { if (Array.isArray(t)) { for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n]; return e } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

        function lt(t) { return null === t ? "" : "[".concat([t.hidden ? ", phantom, s sep = 3cm" : "$".concat(t.name, "$, text centered")].concat(ct(t.children.map(lt))).join(" "), "]") }

        function st(t) { return "\\begin{forest}".concat(t, "\\end{forest}") }

        function ft(t) {
            var n = t.DOM,
                e = t.globalEvents,
                r = t.visible$,
                o = t.table$,
                a = void 0 === o ? x.Observable.empty() : o,
                u = t.formula$,
                i = void 0 === u ? x.Observable.empty() : u,
                c = t.tree$,
                l = void 0 === c ? x.Observable.empty() : c,
                s = n.isolateSource,
                f = n.isolateSink,
                p = function(t) { return { selectAll$: t.DOM.select(".export-text, .export-text-single").events("click").map(function(t) { return t.ownerTarget }).share() } }({ DOM: s(n, "modalBody") }),
                d = function(t, n, e) { return x.Observable.combineLatest(t.startWith(""), n.startWith(""), e.startWith(null).map(lt).map(st), function(t, n, e) { return { table: t, formula: n, tree: e } }).shareReplay(1) }(a, i, l);
            return { DOM: j()(ut.a, "modal")({ DOM: n, globalEvents: e, props$: r.map(function(t) { return { visible: t } }), content$: f(y(d), "modalBody") }).DOM.map(at.a), selectAll: p.selectAll$ }
        }

        function pt(t) {
            var n = t.DOM,
                e = t.globalEvents,
                r = new x.Subject,
                o = new x.Subject,
                a = m({ DOM: n, openData$: r }),
                u = j()(R.a, "logic-field")({ DOM: n, input$: a.openData$.map(JSON.parse.bind(JSON)) }),
                i = h(a, u.output$, o),
                c = i.map(function(t) { return t.tree }).share(),
                l = i.distinctUntilChanged(function(t) { return t.table }).map(function(t) { return t.table }).share(),
                s = i.map(function(t) { return t.formula }).share(),
                f = j()(rt.a, "table")({ DOM: n, table$: l }),
                p = function(t) {
                    var n = t.DOM,
                        e = t.globalEvents,
                        r = t.asciiTable$,
                        o = t.formula$,
                        a = t.tree$,
                        u = t.open$;
                    return { help: j()(b, "helpPanel")({ DOM: n, globalEvents: e, visible$: u.map(function(t) { return "help" === t }) }), open: j()(g, "openPanel")({ DOM: n, globalEvents: e, visible$: u.map(function(t) { return "open" === t }) }), save: j()(ft, "savePanel")({ DOM: n, globalEvents: e, table$: r, formula$: o, tree$: a, visible$: u.map(function(t) { return "save" === t }) }) }
                }({ DOM: n, globalEvents: e, open$: a.panel$, asciiTable$: l.map(ot.a), formula$: s, tree$: c }),
                d = v(i, u.DOM, f.DOM, x.Observable.combineLatest(Object.values(p).map(function(t) { return t.DOM })));
            return f.selectedRow$.subscribe(o), p.open.data$.subscribe(r), { DOM: d, preventDefault: x.Observable.merge([a.preventDefault, u.preventDefault, p.open.preventDefault]).share(), autoResize: u.autoResize, selectAll: p.save.selectAll, tree$: c, insertString: u.insertString }
        }

        function dt(t) {
            return bt({
                nodes: function r(o, t, n, e) {
                    var a = 1 < arguments.length && void 0 !== t ? t : D.a.List(),
                        u = 2 < arguments.length && void 0 !== n ? n : "middle",
                        i = 3 < arguments.length && void 0 !== e && e;
                    if (null === o) return a;
                    var c = u,
                        l = 0;
                    "start" === u ? l = 5 : "end" === u && (l = -5);
                    var s = (o.children.length - 1) / 2;
                    return o.children.reduce(function(t, n, e) { return r(n, t, e < s ? "end" : s < e ? "start" : "middle" === u ? "end" : u, 1 < o.children.length) }, a.push(vt({ label: o.node.name, title: o.node.title, x: o.x, y: o.y, leaf: 0 === o.children.length, siblings: i, labelAlignment: c, xOffset: l, color: o.node.color, faded: o.node.hidden })))
                }(t),
                edges: function e(t, n) { var r = 1 < arguments.length && void 0 !== n ? n : D.a.List(); return null === t ? r : t.children.reduce(function(t, n) { return e(n, t) }, t.parent ? r.push(mt({ fromX: t.parent.x, fromY: t.parent.y, toX: t.x, toY: t.y, color: t.node.color, faded: t.parent.node.hidden })) : r) }(t)
            })
        }
        var ht = e(22),
            vt = D.a.Record({ label: null, title: null, x: 0, y: 0, leaf: !1, siblings: !1, labelAlignment: "middle", xOffset: 0, color: null, faded: !1 }, "treeNode"),
            mt = D.a.Record({ fromX: 0, fromY: 0, toX: 0, toY: 0, color: null, faded: !1 }, "treeEdge"),
            bt = D.a.Record({ nodes: D.a.List(), edges: D.a.List() }, "tree");

        function gt(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function yt(t, n, e) {
            var r, o, a, u, i, c, l = t.leftBrother(),
                s = n;
            if (null !== l) {
                for (var f = t, p = t, d = l, h = t.getLeftMostSibling(), v = t.mod, m = t.mod, b = d.mod, g = h.mod; d.right() && f.left();) {
                    d = d.right(), f = f.left(), h = h.left(), (p = p.right()).ancestor = t;
                    var y = d.x + b - (f.x + v) + e;
                    if (0 < y) {
                        var x = (i = d, c = n, -1 < t.parent.children.indexOf(i.ancestor) ? i.ancestor : c);
                        r = x, a = y, void 0, u = (o = t).number - r.number, o.change -= a / u, o.shift += a, r.change += a / u, o.x += a, o.mod += a, v += y, m += y
                    }
                    b += d.mod, v += f.mod, g += h.mod, m += p.mod
                }
                d.right() && !p.right() ? (p.thread = d.right(), p.mod += b - m) : (f.left() && !h.left() && (h.thread = f.left(), h.mod += v - g), s = t)
            }
            return s
        }

        function xt(t) {
            var n = function t(n, e) {
                var r = 1 < arguments.length && void 0 !== e ? e : 1;
                if (0 === n.children.length) n.getLeftMostSibling() ? n.x = n.leftBrother().x + r : n.x = 0;
                else {
                    var o = n.children[0],
                        a = !0,
                        u = !1,
                        i = void 0;
                    try {
                        for (var c, l = n.children[Symbol.iterator](); !(a = (c = l.next()).done); a = !0) {
                            var s = c.value;
                            t(s), o = yt(s, o, r)
                        }
                    } catch (t) { u = !0, i = t } finally { try { a || null == l.return || l.return() } finally { if (u) throw i } }! function(t) {
                        for (var n = 0, e = 0, r = t.children.length - 1; 0 <= r; r--) {
                            var o = t.children[r];
                            o.x += n, o.mod += n, e += o.change, n += o.shift + e
                        }
                    }(n);
                    var f = (n.children[0].x + n.children[n.children.length - 1].x) / 2,
                        p = n.leftBrother();
                    p ? (n.x = p.x + r, n.mod = n.x - f) : n.x = f
                }
                return n
            }(t);
            return function t(n, e, r) {
                var o = 1 < arguments.length && void 0 !== e ? e : 0,
                    a = 2 < arguments.length && void 0 !== r ? r : 0;
                n.x += o, n.y = a;
                var u = !0,
                    i = !1,
                    c = void 0;
                try { for (var l, s = n.children[Symbol.iterator](); !(u = (l = s.next()).done); u = !0) { t(l.value, o + n.mod, a + 1) } } catch (t) { i = !0, c = t } finally { try { u || null == s.return || s.return() } finally { if (i) throw c } }
            }(n), n
        }

        function Ot(t) {
            var n = t ? function(t) { var n = new Ct(t); return xt(n) }(t) : null,
                e = dt(n);
            return { graph: e, bounds: function(t) { return Object(Et.a)(t.reduce(function(t, n) { return { minX: Math.min(t.minX, n.x), maxX: Math.max(t.maxX, n.x), minY: Math.min(t.minY, n.y), maxY: Math.max(t.maxY, n.y) } }, { minX: 1 / 0, maxX: -1 / 0, minY: 1 / 0, maxY: -1 / 0 })) }(e.nodes) }
        }

        function wt(t, n) {
            return [Object(w.svg)("circle", { cx: n.x * t.scaleX, cy: n.y * t.scaleY, r: 6, class: "tree-node" + (n.faded ? " tree-faded" : ""), fill: "black", style: { fill: Object($t.b)(n.color) } }), function(t, n) {
                var e = t.x,
                    r = t.y,
                    o = t.anchor,
                    a = t.faded,
                    u = t.color;
                return [Object(w.svg)("text", { x: e, y: r, "text-anchor": o, "alignment-baseline": "middle", class: "tree-node-label-outline" }, n), Object(w.svg)("text", { x: e, y: r, "text-anchor": o, "alignment-baseline": "middle", class: "tree-node-label" + (a ? " tree-faded" : ""), style: { fill: Object($t.b)(u) } }, n)]
            }({ x: n.x * t.scaleX + (n.leaf ? 0 : n.xOffset * (n.siblings || "middle" === n.labelAlignment ? 1 : 2)), y: n.y * t.scaleY + (n.leaf ? 25 : n.siblings || "middle" === n.labelAlignment ? -15 : 5), anchor: n.leaf ? "middle" : n.labelAlignment, faded: n.faded, color: n.color }, n.label)]
        }

        function At(n) { return Object(w.svg)("g", [n.graph.edges.map(function(t) { return function(t, n) { return Object(w.svg)("line", { x1: n.fromX * t.scaleX, y1: n.fromY * t.scaleY, x2: n.toX * t.scaleX, y2: n.toY * t.scaleY, "stroke-width": "3", class: "tree-edge" + (n.faded ? " tree-faded" : ""), stroke: "black", style: { stroke: Object($t.b)(n.color) } }) }(n, t) }).toArray(), n.graph.nodes.map(function(t) { return wt(n, t) }).toArray()]) }

        function jt(t) {
            var n = t.DOM,
                e = t.globalEvents,
                r = t.props$,
                o = void 0 === r ? x.Observable.just({ scaleX: 100, scaleY: 100 }) : r,
                a = t.data$,
                u = void 0 === a ? x.Observable.just({ name: "Root", title: null, color: "black", hidden: !1, children: [] }) : a,
                i = n.isolateSource,
                c = n.isolateSink,
                l = (i(n, "graphicsContent"), { click$: x.Observable.just(!0), preventDefault: x.Observable.empty() }),
                s = function(t, n) { var e = n.map(Ot).shareReplay(1); return x.Observable.combineLatest(t, function(n) { return e.map(function(t) { return St({ graph: t.graph, scaleX: n.scaleX, scaleY: n.scaleX, bounds: function(t) { return t.nodes.isEmpty() && t.edges.isEmpty() }(t.graph) ? Object(Et.a)() : Object(Et.a)({ minX: (t.bounds.minX - .8) * n.scaleX, maxX: (t.bounds.maxX + .8) * n.scaleX, minY: (t.bounds.minY - .8) * n.scaleX, maxY: (t.bounds.maxY + .8) * n.scaleX }) }) }) }).switch().shareReplay(1) }(o, u),
                f = function(t) { return t.map(At) }(s),
                p = j()(ht.a, "mygraphics")({ DOM: n, globalEvents: e, props$: x.Observable.just({ width: 600, height: 600 }), camera$: x.Observable.just({ x: 0, y: 0, zoom: 1 }), bounds$: s.map(function(t) { return t.bounds }), content$: c(f, "graphicsContent"), autoCenter$: s.map(function() { return !0 }) });
            return { DOM: p.DOM.map(at.a), preventDefault: x.Observable.merge([l.preventDefault, p.preventDefault]) }
        }
        var Ct = function() {
                function a(t) {
                    var e = this,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                        o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1;
                    ! function(t, n) { if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function") }(this, a), this.x = -1, this.y = r, this.node = t, this.children = t.children.map(function(t, n) { return new a(t, e, r + 1, n + 1) }), this.parent = n, this.thread = null, this.offset = 0, (this.ancestor = this).change = 0, this.shift = 0, this.leftMostSibling = null, this.mod = 0, this.number = o
                }
                return function(t, n, e) { n && gt(t.prototype, n), e && gt(t, e) }(a, [{
                    key: "leftBrother",
                    value: function() {
                        var t = null;
                        if (this.parent) {
                            var n = !0,
                                e = !1,
                                r = void 0;
                            try {
                                for (var o, a = this.parent.children[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                    var u = o.value;
                                    if (u === this) return t;
                                    t = u
                                }
                            } catch (t) { e = !0, r = t } finally { try { n || null == a.return || a.return() } finally { if (e) throw r } }
                        }
                    }
                }, { key: "getLeftMostSibling", value: function() { return !this.leftMostSibling && this.parent && this !== this.parent.children[0] && (this.leftMostSibling = this.parent.children[0]), this.leftMostSibling } }, { key: "left", value: function() { return this.thread || this.children.length && this.children[0] } }, { key: "right", value: function() { return this.thread || this.children.length && this.children[this.children.length - 1] } }]), a
            }(),
            Et = e(16),
            St = D.a.Record({ graph: bt(), scaleX: 1, scaleY: 1, bounds: Object(Et.a)() }, "treeUiState"),
            $t = e(5),
            Mt = (e(134), e(31)),
            Rt = { DOM: Object(w.makeDOMDriver)("#app"), preventDefault: C.a, autoResize: E.a, selectAll: S.a, globalEvents: $.a, insertString: M.a };
        O.a.run(function(t) {
            var n = t.DOM,
                e = t.autoResize,
                r = t.selectAll,
                o = t.globalEvents,
                a = j()(pt, "logic")({ DOM: n, globalEvents: o, autoResize: e, selectAll: r }),
                u = j()(jt, "tree")({ DOM: n, globalEvents: o, data$: a.tree$, props$: x.Observable.just({ scaleX: 150, scaleY: 150 }) }),
                i = a.DOM,
                c = u.DOM,
                l = j()(Mt.a, "splitpane")({ DOM: n, globalEvents: o, props$: x.Observable.just({ proportion: .65 }), firstChild$: i, secondChild$: c });
            return { DOM: l.DOM, preventDefault: x.Observable.merge([a.preventDefault, u.preventDefault, l.preventDefault]), selectAll: a.selectAll, autoResize: a.autoResize, insertString: a.insertString }
        }, Rt)
    },
    16:
    /*!***********************************************!*\
      !*** ./app/components/graphics/lib/bounds.js ***!
      \***********************************************/
    /*! exports provided: default */
    /*! exports used: default */
        function(t, n, e) {
        "use strict";
        var r = e( /*! immutable */ 2);
        n.a = r.a.Record({ minX: 0, maxX: 0, minY: 0, maxY: 0 })
    },
    17:
    /*!***********************************************!*\
      !*** ./app/components/logic/lib/formatter.js ***!
      \***********************************************/
    /*! exports provided: expressionToString, expressionListToString */
    /*! exports used: expressionListToString, expressionToString */
        function(t, n, e) {
        "use strict";
        e.d(n, "b", function() { return r }), e.d(n, "a", function() { return o });
        var i = { formatBinary: function(t, n, e) { return i.formatBinaryChain(t, n, e) }, formatBinaryChain: function(t) { for (var n = arguments.length, e = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r]; return "(".concat(e.join(" " + t + " "), ")") }, formatUnary: function(t, n) { return "(".concat(t, " ").concat(n, ")") }, formatUnarySimple: function(t, n) { return i.formatUnary(t, n) }, formatGroup: function(t) { return t }, formatName: function(t) { return t }, formatValue: function(t) { return t }, formatVector: function(t, n) { return "<".concat(t.map(function(t) { return t.name }).join(","), ":").concat(n.map(i.formatVectorValue).join(""), ">") }, formatVectorValue: function(t) { return !0 === t ? "1" : !1 === t ? "0" : "*" }, formatLabel: function(t, n) { return "".concat(t, "=").concat(n) }, formatExpressions: function(t) { return t.join(", ") }, binaryOperator: function(t) { return t }, unaryOperator: function(t) { return t } },
            r = function t(n, e, r) {
                var o = 1 < arguments.length && void 0 !== e ? e : i,
                    a = 2 < arguments.length && void 0 !== r ? r : 0;
                if (null === n) return "";
                switch (n._name) {
                    case "binary":
                        return o.formatBinary(n.operator, t(n.lhs, o, a + 1), t(n.rhs, o, a + 1), a);
                    case "unary":
                        return o.formatUnary(n.operator, t(n.operand, o, a + 1), a);
                    case "group":
                        var u = t(n.body, o, a + 1);
                        return o.formatGroup(u, a);
                    case "identifier":
                        return o.formatName(n.name);
                    case "constant":
                        return o.formatValue(n.value);
                    case "vector":
                        return o.formatVector(n.identifiers, n.values);
                    default:
                        throw new Error("unknown node: ".concat(n._name))
                }
            },
            o = function(t, n) { var e = 1 < arguments.length && void 0 !== n ? n : i; return e.formatExpressions(t.map(function(t) { return null !== t.name ? e.formatLabel(e.formatName(t.name), r(t.body, e)) : r(t.body, e) })) }
    },
    18:
    /*!************************************************!*\
      !*** ./app/components/logic/lib/evaluation.js ***!
      \************************************************/
    /*! exports provided: evaluateExpression, evaluator, evaluateSingle, evaluateAll */
    /*! exports used: evaluateAll, evaluateSingle, evaluator */
        function(t, n, e) {
        "use strict";
        e.d(n, "c", function() { return u }), e.d(n, "b", function() { return s }), e.d(n, "a", function() { return f });

        function r(t, n) {
            switch (t._name) {
                case "binary":
                    return function(t, n, e) {
                        var r = e(t.lhs, n),
                            o = e(t.rhs, n);
                        switch (t.operator) {
                            case "AND":
                                return function(t, n) { return !1 !== t && !1 !== n && (t && n) }(r, o);
                            case "OR":
                                return function(t, n) { return null === t && !1 === n ? null : t || n }(r, o);
                            case "XOR":
                                return function(t, n) { return null === t || null === n ? null : !t != !n }(r, o);
                            default:
                                throw new Error("unknown operator: ".concat(t.operator))
                        }
                    }(t, n, a);
                case "unary":
                    return function(t, n, e) {
                        switch (t.operator) {
                            case "NOT":
                                return function(t) { return null === t ? null : !t }(e(t.operand, n));
                            default:
                                throw new Error("unknown operator: ".concat(t.operator))
                        }
                    }(t, n, a);
                case "group":
                    return a(t.body, n);
                case "identifier":
                    return n.get(t);
                case "vector":
                    return function(t, r) { var n = t.identifiers.reduce(function(t, n, e) { return t + (r.get(n) ? Math.pow(2, e) : 0) }, 0); return t.values.get(n) }(t, n);
                case "constant":
                    return t.value;
                case "label":
                    return a(t.body, n);
                default:
                    throw new Error("unknown node: ".concat(t._name))
            }
        }

        function i(t, e) { return c.a.OrderedMap(t.map(function(t, n) { return [t, !!(Math.pow(2, n) & e)] })) }
        var c = e( /*! immutable */ 2),
            o = e( /*! ./expression */ 12),
            l = c.a.Record({ identifierValues: c.a.Map(), values: c.a.List() }),
            a = function(t, n) { return null === t ? null : n.has(t) ? n.get(t) : r(t, n) },
            u = function(t, n) { var e = a(n, t); if ("label" !== n._name) return t.set(n, e); var r = t.set(n.body, e).set(n, e); return null !== n.name ? r.set(Object(o.b)({ name: n.name }), e) : r },
            s = function(t) {
                var n = t.expressions,
                    e = t.identifierMap;
                return n.reduce(u, e)
            },
            f = function(t) {
                for (var n = t.expressions, e = t.identifiers, r = Math.pow(2, e.size) - 1, o = c.a.List(); 0 <= r;) {
                    var a = i(e, r).asMutable(),
                        u = s({ expressions: n, identifierMap: a }).asImmutable();
                    o = o.push(l({ identifierValues: a, values: n.map(u.get.bind(u)) })), r--
                }
                return o.reverse()
            }
    },
    19:
    /*!***************************!*\
      !*** ./app/icons/open.js ***!
      \***************************/
    /*! exports provided: default */
    /*! exports used: default */
        function(t, n, e) {
        "use strict";
        var r = e( /*! @cycle/dom */ 0);
        n.a = function(t) { return Object(r.svg)("svg", { attributes: { preserveAspectRatio: "xMidYMid meet", "aria-hidden": !0, class: "svg-icon", viewBox: "0 0 24 24", width: t, height: t } }, [Object(r.svg)("path", { class: "icon-shape", d: "M22.5,3.847l-4.5,0c-0.829,0 -1.5,0.671 -1.5,\n    1.5l-12,0l0,1.5l17.67,0l-2.02,10.102l-2.15,-8.602l-18,\n    0l3,12l18,0l3,-15c0,-0.829 -0.671,-1.5 -1.5,-1.5Z" })]) }
    },
    20:
    /*!*****************************!*\
      !*** ./app/icons/export.js ***!
      \*****************************/
    /*! exports provided: default */
    /*! exports used: default */
        function(t, n, e) {
        "use strict";
        var r = e( /*! @cycle/dom */ 0);
        n.a = function(t) { return Object(r.svg)("svg", { attributes: { preserveAspectRatio: "xMidYMid meet", "aria-hidden": !0, class: "svg-icon", viewBox: "0 0 24 24", width: t, height: t } }, [Object(r.svg)("path", { class: "icon-shape", d: "M14.534,5.472l0,-5.472l9.382,9.382l-9.382,9.382l0,\n    -5.879c-6.758,0.146 -12.409,4.825 -14.031,11.115c-0.305,\n    -1.185 -0.468,-2.427 -0.468,-3.706c0,-8.073 6.468,-14.648\n    14.499,-14.822Z" })]) }
    },
    21:
    /*!***************************!*\
      !*** ./app/icons/help.js ***!
      \***************************/
    /*! exports provided: default */
    /*! exports used: default */
        function(t, n, e) {
        "use strict";
        var r = e( /*! @cycle/dom */ 0);
        n.a = function(t) { return Object(r.svg)("svg", { attributes: { preserveAspectRatio: "xMidYMid meet", "aria-hidden": !0, class: "svg-icon", viewBox: "0 0 24 24", width: t, height: t } }, [Object(r.svg)("path", { class: "icon-shape", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12,0c6.623,0 12,5.377 12,12c0,6.623\n    -5.377,12 -12,12c-6.623,0 -12,-5.377 -12,-12c0,-6.623\n    5.377,-12 12,-12ZM10.432,16.615c0,-0.772 0.376,-1.158\n    1.127,-1.158c0.368,0 0.649,0.101 0.843,0.303c0.195,0.202\n    0.292,0.487 0.292,0.855c0,0.363 -0.099,0.65 -0.295,0.862\n    c-0.197,0.213 -0.477,0.319 -0.84,0.319c-0.363,0\n    -0.641,-0.104 -0.835,-0.311c-0.195,-0.207 -0.292,-0.497\n    -0.292,-0.87l0,0ZM12.249,14.17l0,-0.345c0,-0.414 0.081,\n    -0.744 0.242,-0.989c0.161,-0.246 0.479,-0.555 0.954,\n    -0.928c0.557,-0.434 0.949,-0.787 1.177,-1.058c0.227,-0.271\n    0.397,-0.556 0.51,-0.855c0.112,-0.299 0.168,-0.64 0.168,\n    -1.023c0,-0.864 -0.294,-1.541 -0.881,-2.032c-0.588,-0.49\n    -1.383,-0.736 -2.385,-0.736c-1.185,0 -2.297,0.289 -3.334,\n    0.867l0.644,1.349c0.393,-0.194 0.797,-0.36 1.211,-0.498c0.414,\n    -0.138 0.864,-0.207 1.349,-0.207c0.537,0 0.948,0.115 1.234,\n    0.345c0.287,0.23 0.43,0.559 0.43,0.989c0,0.368 -0.088,0.684\n    -0.265,0.95c-0.176,0.266 -0.568,0.639 -1.177,1.119c-0.511,\n    0.399 -0.868,0.785 -1.073,1.158c-0.204,0.373 -0.306,0.841\n    -0.306,1.403l0,0.491l1.502,0Z" })]) }
    },
    22:
    /*!******************************************************!*\
      !*** ./app/components/graphics/index.js + 5 modules ***!
      \******************************************************/
    /*! exports provided: default */
    /*! exports used: default */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@cycle/dom/lib/cycle-dom.js (<- Module is not an ECMAScript module) */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/lib/utils.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/immutable/dist/immutable.es.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rx/dist/rx.all.js (<- Module is not an ECMAScript module) */
        function(t, n, e) {
        "use strict";

        function h(t, n) { this.node = t, this.key = n }
        var v = e(1),
            m = e(3);
        h.prototype.type = "Thunk", h.prototype.render = function(t) { return t && t.key === this.key ? t.vnode : this.node };

        function b(t, u, i) {
            var c = t.factor,
                n = t.pivot,
                l = n.x,
                s = n.y;
            return function(t) {
                var n = t.x,
                    e = t.y,
                    r = t.zoom,
                    o = Object(m.a)(r * c, u.min, u.max),
                    a = 1 - 1 / (o / r);
                return { zoom: o, x: Object(m.a)(n + (l - n) * a, i.minX, i.maxX), y: Object(m.a)(e + (s - e) * a, i.minY, i.maxY) }
            }
        }

        function g(r, o) {
            return function(t) {
                var n = t.x,
                    e = t.y;
                return { zoom: t.zoom, x: Object(m.a)(n - r.x, o.minX, o.maxX), y: Object(m.a)(e - r.y, o.minY, o.maxY) }
            }
        }

        function y(t, n, e, r) {
            var o = t.weightX,
                a = void 0 === o ? .5 : o,
                u = t.weightY,
                i = void 0 === u ? 0 : u,
                c = r.width,
                l = r.height,
                s = (e.maxX + e.minX) / 2,
                f = (e.maxY + e.minY) / 2,
                p = e.maxX - e.minX,
                d = e.maxY - e.minY,
                h = (c - 20) / p;
            return function() { return { x: Object(m.a)(s + (a - .5) * p, e.minX, e.maxX), y: Object(m.a)(l / h / 2 + f + (i - .5) * d, e.minY, e.maxY), zoom: Object(m.a)(h, n.min, n.max) } }
        }

        function x(t) {
            var n = t.width,
                e = t.height,
                r = t.camera,
                o = t.bounds,
                a = t.content;
            return Object(i.div)(".graphics-container", [Object(i.svg)("svg", { attributes: { width: ~~(.5 + n), height: ~~(.5 + e), class: "graphics-root", viewBox: function(t, n, e) { return "".concat(e.x - t / 2 / e.zoom, "\n   ").concat(e.y - n / 2 / e.zoom, "\n   ").concat(t / e.zoom, "\n   ").concat(n / e.zoom) }(n, e, r), preserveAspectRatio: "xMidYMin meet" } }, [function(t, n, e) { return Object(i.svg)("rect", { attributes: { x: ~~(.5 + e.x - t / e.zoom / 2), y: ~~(.5 + e.y - n / e.zoom / 2), width: ~~(.5 + t / e.zoom), height: ~~(.5 + n / e.zoom), class: "graphics-background" } }) }(n, e, r), function(t) {
                var n = t.minX,
                    e = t.maxX,
                    r = t.minY,
                    o = t.maxY;
                return Object(i.svg)("rect", { attributes: { x: ~~(.5 + n), y: ~~(.5 + r), width: ~~(.5 + e - n), height: ~~(.5 + o - r), class: "graphics-camera-bounds" } })
            }(o), function(t) {
                var n = t.minX,
                    e = t.maxX,
                    r = t.minY,
                    o = t.maxY;
                return [Object(i.svg)("defs", [Object(i.svg)("pattern", { attributes: { id: "smallGrid", width: "10", height: "10", patternUnits: "userSpaceOnUse" } }, [Object(i.svg)("path", { attributes: { d: "M 10 0 L 0 0 0 10", class: "graphics-grid graphics-grid-small" } })]), Object(i.svg)("pattern", { attributes: { id: "grid", width: "100", height: "100", patternUnits: "userSpaceOnUse" } }, [Object(i.svg)("rect", { attributes: { width: "100", height: "100", fill: "url(#smallGrid)" } }), Object(i.svg)("path", { attributes: { d: "M 100 0 L 0 0 0 100", class: "graphics-grid graphics-grid-large" } })])]), Object(i.svg)("rect", { attributes: { x: ~~(.5 + n), y: ~~(.5 + r), width: ~~(.5 + e - n), height: ~~(.5 + o - r), class: "graphics-grid-container", fill: "url(#grid)" } })]
            }(o), Object(i.svg)("g", { attributes: { class: "graphics-content" } }, a)])])
        }

        function O(t) { return t.observable.map(function(t) { return t[0] }).distinctUntilChanged(function(t) { return t }, function(t, n) { return t === n }).shareReplay(1) }

        function r(t) { return t.identifier }

        function w(t) { return "buttons" in t ? 1 === t.buttons : "which" in t ? 1 === t.which : 1 === t.button }

        function A(t, n) { return v.Observable.merge([n.events("touchstart").map(function(n) { return function(t) { return t.union(Array.prototype.map.call(n.changedTouches, r)) } }), t.events("touchend").map(function(n) { return function(t) { return t.subtract(Array.prototype.map.call(n.changedTouches, r)) } })]).scan(function(t, n) { return n(t) }, o.a.Set()).distinctUntilChanged(function(t) { return t }, function(t, n) { return t === n }).share() }

        function j(t) { var e = t.length; return Array.prototype.reduce.call(t, function(t, n) { return { x: t.x + n.pageX / e, y: t.y + n.pageY / e } }, { x: 0, y: 0 }) }

        function C(n, t) { return Array.prototype.filter.call(t, function(t) { return n.contains(t.identifier) }) }

        function f(t) {
            var n = t.pinchStart$,
                e = t.pinchMove$,
                r = t.pinchEnd$,
                o = t.owner$,
                i = t.positionFn;
            return n.map(function(u) {
                return e.withLatestFrom(o, function(t, n) {
                    var e = C(u, t.touches),
                        r = i(j(e), n),
                        o = r.x,
                        a = r.y;
                    return {
                        distance: function(t) {
                            var n = t.length,
                                e = j(t),
                                r = e.x,
                                o = e.y;
                            return t.reduce(function(t, n) { return t + Math.sqrt(Math.pow(n.pageX - r, 2) + Math.pow(n.pageY - o, 2)) }, 0) / n
                        }(e),
                        pivot: { x: o, y: a },
                        factor: 1
                    }
                }).scan(function(t, n) { return { pivot: n.pivot, distance: n.distance, factor: n.distance / t.distance } }).takeUntil(r).share()
            }).switch()
        }

        function p(t) {
            var n = t.wheel$,
                e = t.owner$,
                r = t.positionFn;
            return n.withLatestFrom(e, function(t, n) { var e = r({ x: t.pageX, y: t.pageY }, n); return { factor: function(t) { var n = t.deltaY / -40; return Math.pow(1 + Math.abs(n) / 2, 0 < n ? 1 : -1) }(t), pivot: e } }).share()
        }

        function a(t, n, e) {
            var r = O(n),
                o = v.Observable.merge([n.events("touchstart"), t.events("touchend")]).share(),
                a = A(t, n),
                u = a.filter(function(t) { return 0 < t.size }),
                i = a.filter(function(t) { return t.size <= 0 }),
                c = t.events("touchmove"),
                l = n.events("mousedown").filter(w),
                s = t.events("mousemove"),
                f = t.events("mouseup"),
                p = function(t) {
                    var n = t.touchChange$,
                        e = t.panStart$,
                        u = t.panMove$,
                        i = t.panEnd$,
                        r = t.owner$,
                        c = t.positionFn;
                    return e.withLatestFrom(n, r, function(n, t, e) {
                        var r = c(j(C(n, t.touches)), e),
                            o = r.x,
                            a = r.y;
                        return u.map(function(t) { return c(j(C(n, t.touches)), e) }).map(function(t) { return { x: t.x - o, y: t.y - a } }).takeUntil(i).share()
                    }).switch()
                }({ touchChange$: o, panStart$: u, panMove$: c, panEnd$: i, owner$: r, positionFn: e }),
                d = function(t) {
                    var n = t.mouseDown$,
                        a = t.mouseMove$,
                        u = t.mouseUp$,
                        e = t.owner$,
                        i = t.positionFn;
                    return n.withLatestFrom(e, function(t, n) {
                        var e = i({ x: t.pageX, y: t.pageY }, n),
                            r = e.x,
                            o = e.y;
                        return a.map(function(t) { return i({ x: t.pageX, y: t.pageY }, n) }).map(function(t) { return { x: t.x - r, y: t.y - o } }).takeUntil(u).share()
                    }).switch()
                }({ mouseDown$: l, mouseMove$: s, mouseUp$: f, owner$: r, positionFn: e }),
                h = v.Observable.merge([u.map(function() { return c.takeUntil(i) }).switch(), l.map(function() { return s.takeUntil(f) }).switch()]).share();
            return { action$: v.Observable.merge([p, d]).share(), stopPropagation: v.Observable.empty(), preventDefault: h }
        }

        function E(t, n) {
            var e = t.select(".graphics-root"),
                r = a(n, e, c),
                o = function(t, n, e) {
                    var r = O(n),
                        o = A(t, n),
                        a = o.filter(function(t) { return 2 <= t.size }),
                        u = o.filter(function(t) { return t.size < 2 }),
                        i = n.events("wheel").filter(function(t) { return !t.altKey }).share(),
                        c = t.events("touchmove"),
                        l = f({ pinchStart$: a, pinchMove$: c, pinchEnd$: u, owner$: r, positionFn: e }),
                        s = p({ wheel$: i, owner$: r, positionFn: e });
                    return { action$: v.Observable.merge([l, s]).share(), stopPropagation: v.Observable.empty(), preventDefault: i }
                }(n, e, c);
            return { zoom$: o.action$, pan$: r.action$, preventDefault: v.Observable.merge([o.preventDefault, r.preventDefault]).share(), stopPropagation: v.Observable.merge([o.stopPropagation, r.stopPropagation]).share() }
        }
        var u, i = e(0),
            o = (e(35), e(2)),
            c = (u = null, function(t, n) {
                var e = t.x,
                    r = t.y,
                    o = u = u || n.createSVGPoint();
                return o.x = e, o.y = r, o.matrixTransform(n.getScreenCTM().inverse())
            });

        function S(t, n, e) { return n in t ? Object.defineProperty(t, n, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = e, t }
        n.a = function(t) {
            var n, e = t.DOM,
                r = t.globalEvents,
                o = t.props$,
                a = void 0 === o ? v.Observable.just({ width: 500, height: 500 }) : o,
                u = t.camera$,
                i = void 0 === u ? v.Observable.just({ x: 0, y: 0, zoom: 1 }) : u,
                c = t.bounds$,
                l = void 0 === c ? v.Observable.just((S(n = { minX: 0, maxX: 0 }, "minX", 0), S(n, "maxX", 0), n)) : c,
                s = t.content$,
                f = t.autoCenter$,
                p = void 0 === f ? v.Observable.just(null) : f,
                d = E(e, r);
            return {
                DOM: function(t) { return t.map(x) }(function(t, e) {
                    var o = t.props$,
                        n = t.camera$,
                        a = t.bounds$,
                        r = t.content$,
                        u = t.autoCenter$,
                        i = r.map(function(t, n) { return new h(t, n % 2) });
                    return v.Observable.combineLatest(o, n, function(r, t) { var n = a.map(function(t) { return { min: Math.min(r.width / (t.maxX - t.minX), r.height / (t.maxY - t.minY), .5), max: 5 } }); return v.Observable.merge([e.zoom$.withLatestFrom(n, a, b), e.pan$.withLatestFrom(a, g), u.withLatestFrom(n, a, o, y)]).startWith({ zoom: t.zoom, x: t.x, y: t.y }).scan(function(t, n) { return n(t) }).combineLatest(a, i, function(t, n, e) { return { width: r.width, height: r.height, camera: t, bounds: n, content: e } }) }).switch().shareReplay(1)
                }({ props$: a, camera$: i, bounds$: l, content$: s, autoCenter$: p }, d)),
                preventDefault: d.preventDefault
            }
        }
    },
    24:
    /*!****************************************************************!*\
      !*** ./app/components/logic/input-field/index.js + 11 modules ***!
      \****************************************************************/
    /*! exports provided: default */
    /*! exports used: default */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@cycle/dom/lib/cycle-dom.js (<- Module is not an ECMAScript module) */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/logic/lib/expression.js because of ./app/components/logic/lib/diff.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/lib/h-helper.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/logic/lib/syntax/logic-c-bitwise.pegjs (<- Module is not an ECMAScript module) */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/logic/lib/syntax/logic-c-boolean.pegjs (<- Module is not an ECMAScript module) */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/logic/lib/syntax/logic-latex.pegjs (<- Module is not an ECMAScript module) */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/logic/lib/syntax/logic-math.pegjs (<- Module is not an ECMAScript module) */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/components/logic/lib/syntax/logic-python.pegjs (<- Module is not an ECMAScript module) */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/immutable/dist/immutable.es.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rx/dist/rx.all.js (<- Module is not an ECMAScript module) */
        function(t, n, e) {
        "use strict";

        function r(r) {
            var o = function(i) {
                return function(t) {
                    for (var n = null, e = null, r = 0, o = Object.keys(i); r < o.length; r++) {
                        var a = o[r],
                            u = i[a];
                        if (null !== u) try { return S({ ast: u.parse(t), language: u, langId: a }) } catch (t) { null === n ? (e = a, n = t) : t.location.start.offset > n.location.start.offset && (e = a, n = t) }
                    }
                    throw $({ input: j({ string: t, langId: e }), language: i[e], message: n.message, location: n.location })
                }
            }(r);
            return function(n) { try { if (r.hasOwnProperty(n.langId)) { var t = r[n.langId]; return R({ input: n, language: t, expressions: t.parse(n.string).map(A.a) }) } var e = o(n.string, r); return R({ input: n, language: e.language, expressions: e.ast.map(A.a) }) } catch (t) { throw M({ input: n, message: t.message, location: t.location, language: t.language || r[n.langId] }) } }
        }

        function b(t, n) {
            var e = 1 < arguments.length && void 0 !== n ? n : g.a.Set();
            if (null === t) return e;
            switch (t._name) {
                case "binary":
                    return b(t.lhs, e).union(b(t.rhs, e));
                case "unary":
                    return b(t.operand, e);
                case "group":
                    return b(t.body, e);
                case "identifier":
                    return e.add(t);
                case "constant":
                    return e;
                case "vector":
                    return e.union(t.identifiers);
                default:
                    throw new Error("unknown node: ".concat(t._name))
            }
        }
        var l = e(1),
            g = e(2),
            o = e(26),
            a = e.n(o),
            u = e(27),
            i = e.n(u),
            c = e(28),
            s = e.n(c),
            f = e(29),
            p = e.n(f),
            d = e(30),
            h = e.n(d),
            v = g.a.Record({ name: null, shortName: null, completions: g.a.List(), parse: function() { throw new Error("not implemented") } }),
            m = v({ name: "C - Bitwise", shortName: "cbitwise", completions: g.a.List(["&", "|", "^", "~", "1", "0", "void"]), parse: function(t) { return a.a.parse(t) } }),
            y = v({ name: "C - Boolean", shortName: "cboolean", completions: g.a.List(["&&", "||", "!=", "!", "true", "false", "void"]), parse: function(t) { return i.a.parse(t) } }),
            x = v({ name: "Python", shortName: "python", completions: g.a.List(["and", "or", "xor", "not", "True", "False", "None"]), parse: function(t) { return h.a.parse(t) } }),
            O = v({ name: "Latex", shortName: "latex", completions: g.a.List(["\\wedge", "\\vee", "\\oplus", "\\neg", "\\top", "\\bot", "\\nothing"]), parse: function(t) { return s.a.parse(t) } }),
            w = v({ name: "Math", shortName: "math", completions: g.a.List(["∧", "∨", "⊕", "¬", "⊤", "⊥", "Ø"]), parse: function(t) { return p.a.parse(t) } }),
            A = e(12),
            j = g.a.Record({ langId: "auto", string: "" }, "input"),
            C = g.a.Record({ language: null, network: null, error: null }, "output"),
            E = g.a.Record({ message: null, location: null }, "error"),
            S = g.a.Record({ ast: null, language: null, langId: null }),
            $ = g.a.Record({ input: null, message: null, location: null, language: null }),
            M = g.a.Record({ input: null, message: null, location: null, language: null }),
            R = g.a.Record({ input: null, language: null, expressions: g.a.List() }, "parseResult");

        function D(t) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : new window.Set,
                e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
            ! function(t, n) { if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function") }(this, D), this.data = t, this.outgoing = n, this.incomingCount = e
        }

        function k(t) { return 0 === t.incomingCount }

        function L(t, n) { var e = new Error(t); return e.location = n, e }

        function z(t) {
            var n = g.a.List(t),
                e = n.filter(function(t) { return null !== t.name }),
                r = function(t) {
                    var n = new window.Set,
                        e = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(e = (a = u.next()).done); e = !0) {
                            var i = a.value;
                            if (n.has(i.name)) throw L("Duplicate declaration of " + i.name, i.location);
                            n.add(i.name)
                        }
                    } catch (t) { r = !0, o = t } finally { try { e || null == u.return || u.return() } finally { if (r) throw o } }
                    return n
                }(e),
                o = n.flatMap(function(t) { return b(t.body) }).toSet().filter(function(t) { return !r.has(t.name) }).toList(),
                a = function(t) {
                    var n = new window.Set(t.filter(function(t) { return null !== t.name }).map(function(t) { return t.name }).toArray()),
                        e = t.reduce(function(t, n) {
                            var e = t.map,
                                r = t.list,
                                o = new D(n),
                                a = r.push(o);
                            return null === n.name ? { map: e, list: a } : { map: e.set(n.name, o), list: a }
                        }, { map: new g.a.Map, list: new g.a.List }),
                        r = e.list,
                        o = e.map,
                        a = !0,
                        u = !1,
                        i = void 0;
                    try {
                        for (var c, l = r[Symbol.iterator](); !(a = (c = l.next()).done); a = !0) {
                            var s = c.value,
                                f = b(s.data.body).map(function(t) { return t.name }).filter(n.has.bind(n)).map(o.get.bind(o)).toArray(),
                                p = !0,
                                d = !1,
                                h = void 0;
                            try { for (var v, m = f[Symbol.iterator](); !(p = (v = m.next()).done); p = !0) { v.value.outgoing.add(s) } } catch (t) { d = !0, h = t } finally { try { p || null == m.return || m.return() } finally { if (d) throw h } }
                        }
                    } catch (t) { u = !0, i = t } finally { try { a || null == l.return || l.return() } finally { if (u) throw i } }
                    return r
                }(n);
            try {
                var u = g.a.List(function(t) {
                        var n = [];
                        t.forEach(function(t) { t.outgoing.forEach(function(t) { t.incomingCount += 1 }) });
                        var e = new window.Set(t.filter(k)),
                            r = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var u, i = e[Symbol.iterator](); !(r = (u = i.next()).done); r = !0) {
                                var c = u.value;
                                e.delete(c), n.push(c);
                                var l = !0,
                                    s = !1,
                                    f = void 0;
                                try {
                                    for (var p, d = c.outgoing[Symbol.iterator](); !(l = (p = d.next()).done); l = !0) {
                                        var h = p.value;
                                        c.outgoing.delete(h), h.incomingCount--, 0 === h.incomingCount && e.add(h)
                                    }
                                } catch (t) { s = !0, f = t } finally { try { l || null == d.return || d.return() } finally { if (s) throw f } }
                            }
                        } catch (t) { o = !0, a = t } finally { try { r || null == i.return || i.return() } finally { if (o) throw a } }
                        var v = t.filter(function(t) { return !k(t) });
                        if (v.size) { var m = new Error("Cyclic dependency"); throw m.cycle = v, m }
                        return n
                    }(a)).map(function(t) { return t.data }),
                    i = n.flatMap(function(t) {
                        return function t(n, e, r) {
                            var o = 1 < arguments.length && void 0 !== e ? e : g.a.OrderedSet(),
                                a = !0 === (2 < arguments.length && void 0 !== r ? r : "group" !== n._name) ? o.add(n) : o;
                            switch (n._name) {
                                case "binary":
                                    return t(n.lhs, a, !0).concat(t(n.rhs, a, !0));
                                case "unary":
                                    return t(n.operand, a, !0);
                                case "group":
                                    return t(n.body, o);
                                case "identifier":
                                case "constant":
                                    return o;
                                case "vector":
                                    return a;
                                default:
                                    throw new Error("unknown node: ".concat(n._name))
                            }
                        }(t.body)
                    }).toSet().toList(),
                    c = u.filter(function(t) { return null !== t.name || "identifier" !== t.body._name });
                return _({ freeIdentifiers: o, declaredIdentifiers: e, expressions: n, sortedExpressions: u, subExpressions: i, toplevelExpressions: c })
            } catch (t) { if (t.cycle) { var l = t.cycle.map(function(t) { return t.data.name }); throw L("Cyclic dependency between: ".concat(l.join(", ")), t.cycle.get(t.cycle.size - 1).data.location) } throw t }
        }

        function T(n) { try { var t = z(n.expressions); return N({ language: n.language, network: t }) } catch (t) { return N({ language: n.language, error: t }) } }

        function X(t) { return l.Observable.just(C({ network: null, language: t.language, error: E({ location: t.location, message: t.message }) })) }

        function B(n, t, e) { return t.startWith({ term: "", langId: "auto" }).map(function(t) { return l.Observable.combineLatest(l.Observable.combineLatest(e.input$.startWith(t.term), e.language$.startWith(t.langId), function(t, n) { return j({ string: t, langId: n }) }), n, function(n, e) { return function(t) { return l.Observable.just(t).map(r(Y)).map(T).map(function(t) { return C({ language: t.language, network: t.network, error: t.error }) }).catch(X) }(n).map(function(t) { return I({ input: n, output: t, languageList: V, showCompletion: e.showCompletion }) }) }).switch() }).switch().shareReplay(1) }

        function F(n) {
            return Object(U.div)(".logic-panel", [Object(U.div)(".logic-panel-body", [Object(U.label)(".logic-language-chooser", [Object(U.span)(".logic-language-chooser-label", "Language:"), Object(U.select)(".syntax-selector", { name: "language" }, ["auto" === n.input.langId ? Object(U.option)({ value: "auto", selected: !0 }, "Auto detect (".concat(n.output.language.name || "???", ")")) : Object(U.option)({ value: "auto", selected: !1 }, "Auto detect"), n.languageList.map(function(t) { return Object(U.option)({ value: t.id, selected: n.input.langId === t.id }, t.language.name) }).toArray()])]), Object(P.a)(n.showCompletion, function() { return Object(U.div)(".complete-panel", n.output.language.completions.map(function(t) { return Object(U.button)(".completion-button", { title: "Bottom", attributes: { "data-action-insert": t } }, t) }).toArray()) }), Object(U.div)(".logic-input", [Object(U.textarea)(".logic-input-field", { value: n.input.string, placeholder: "INPUT BOOLEAN EXPRESSION", autocomplete: "off", autocorrect: "off", autocapitalize: "off", spellcheck: !1 }), Object(U.div)(".logic-input-overlay", [function(t, n) {
                if (n && n.location) {
                    var e = n.location,
                        r = e.start.offset,
                        o = e.end.offset;
                    return [t.substring(0, r), Object(U.span)(".overlay-text-marker.text-marker-error", t.substring(r, o) || " "), t.substring(o)]
                }
                return [t]
            }(n.input.string, n.output.error)])]), Object(P.a)(null !== n.output.error, function() { return Object(U.div)(".error-box", [Object(U.h2)(".error-box-title", "Error"), Object(U.div)(".error-body", [n.output.error.message])]) })])])
        }
        var _ = g.a.Record({ freeIdentifiers: g.a.Set(), declaredIdentifiers: g.a.Set(), expressions: g.a.List(), sortedExpressions: g.a.List(), toplevelExpressions: g.a.List(), subExpressions: g.a.Set() }, "logicNetwork"),
            N = g.a.Record({ language: null, network: null, error: null }, "postProcessing"),
            Y = { c_bitwise: m, c_boolean: y, latex: O, math: w, python: x },
            I = g.a.Record({ languageList: g.a.List(), input: null, output: null, showCompletion: !0 }, "state"),
            V = g.a.List(Object.keys(Y).map(function(t) { return { id: t, language: Y[t] } })),
            U = e(0),
            P = e(5);
        e(41), n.a = function(t) {
            var n = t.DOM,
                e = t.globalEvents,
                r = t.input$,
                o = void 0 === r ? l.Observable.just({ langId: "auto", term: "" }) : r,
                a = t.props$,
                u = void 0 === a ? l.Observable.just({ showCompletion: !0 }) : a,
                i = function(t) {
                    var n = t.DOM,
                        e = n.select(".logic-input-field"),
                        r = n.select(".syntax-selector"),
                        o = n.select("[data-action-insert]"),
                        a = e.events("input"),
                        u = r.events("change"),
                        i = o.events("click"),
                        c = i.withLatestFrom(n.select(".logic-input-field").observable.filter(function(t) { return 0 < t.length }), function(t, n) { return { element: n[0], string: t.ownerTarget.dataset.actionInsert } }).share();
                    return { input$: a.map(function(t) { return t.ownerTarget.value }).share(), language$: u.map(function(t) { return t.ownerTarget.value }).share(), insertString$: c, preventDefault: l.Observable.merge([o.events("mousedown"), i]), autoResize: a.map(function(t) { return t.ownerTarget }).share() }
                }({ DOM: n, globalEvents: e }),
                c = B(u, o, i);
            return { DOM: function(t) { return t.map(F) }(c), preventDefault: i.preventDefault, autoResize: i.autoResize, insertString: i.insertString$, output$: c.map(function(t) { return t.output }) }
        }
    },
    26:
    /*!***************************************************************!*\
      !*** ./app/components/logic/lib/syntax/logic-c-bitwise.pegjs ***!
      \***************************************************************/
    /*! no static exports found */
    /*! exports used: default */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(t, n, e) {
        "use strict";

        function Fn(t) { return function(t) { if (Array.isArray(t)) { for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n]; return e } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

        function _n(t, n, e, r) { this.message = t, this.expected = n, this.found = e, this.location = r, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, _n) }

        function r() { this.constructor = o }
        var o, a;
        o = _n, a = Error, r.prototype = a.prototype, o.prototype = new r, _n.buildMessage = function(t, n) {
            var e, a = { literal: function(t) { return '"' + o(t.text) + '"' }, class: function(t) { var n, e = ""; for (n = 0; n < t.parts.length; n++) e += t.parts[n] instanceof Array ? u(t.parts[n][0]) + "-" + u(t.parts[n][1]) : u(t.parts[n]); return "[" + (t.inverted ? "^" : "") + e + "]" }, any: function() { return "any character" }, end: function() { return "end of input" }, other: function(t) { return t.description } };

            function r(t) { return t.charCodeAt(0).toString(16).toUpperCase() }

            function o(t) { return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) { return "\\x0" + r(t) }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) { return "\\x" + r(t) }) }

            function u(t) { return t.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) { return "\\x0" + r(t) }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) { return "\\x" + r(t) }) }
            return "Expected " + function(t) {
                var n, e, r, o = new Array(t.length);
                for (n = 0; n < t.length; n++) o[n] = (r = t[n], a[r.type](r));
                if (o.sort(), 0 < o.length) {
                    for (e = n = 1; n < o.length; n++) o[n - 1] !== o[n] && (o[e] = o[n], e++);
                    o.length = e
                }
                switch (o.length) {
                    case 1:
                        return o[0];
                    case 2:
                        return o[0] + " or " + o[1];
                    default:
                        return o.slice(0, -1).join(", ") + ", or " + o[o.length - 1]
                }
            }(t) + " but " + ((e = n) ? '"' + o(e) + '"' : "end of input") + " found."
        }, t.exports = {
            SyntaxError: _n,
            parse: function(a, t) {
                t = void 0 !== t ? t : {};
                var n, i = {},
                    e = { start: ln },
                    r = ln,
                    o = function(t) { return t },
                    u = function() { return [] },
                    c = rn("labelOperator"),
                    l = "=",
                    s = nn("=", !1),
                    f = /^[^0-9A-Za-z_\-]/,
                    p = en([
                        ["0", "9"],
                        ["A", "Z"],
                        ["a", "z"], "_", "-"
                    ], !0, !1),
                    d = "&",
                    h = nn("&", !1),
                    v = "|",
                    m = nn("|", !1),
                    b = "^",
                    g = nn("^", !1),
                    y = "~",
                    x = nn("~", !1),
                    O = "1",
                    w = nn("1", !1),
                    A = "0",
                    j = nn("0", !1),
                    C = "void",
                    E = nn("void", !1),
                    S = "<",
                    $ = nn("<", !1),
                    M = ">",
                    R = nn(">", !1),
                    D = rn("binary operator"),
                    k = function() { return "AND" },
                    L = function() { return "XOR" },
                    z = function() { return "OR" },
                    T = rn("unary operator"),
                    X = function() { return "NOT" },
                    B = /^[A-Za-z_]/,
                    F = en([
                        ["A", "Z"],
                        ["a", "z"], "_"
                    ], !1, !1),
                    _ = /^[\-_a-zA-Z0-9]/,
                    N = en(["-", "_", ["a", "z"],
                        ["A", "Z"],
                        ["0", "9"]
                    ], !1, !1),
                    Y = function(t, n) { return t + n.join("") },
                    I = '"',
                    V = nn('"', !1),
                    U = function(t) { return t.join("") },
                    P = "'",
                    Z = nn("'", !1),
                    W = /^[^"]/,
                    G = en(['"'], !0, !1),
                    Q = /^[^']/,
                    q = en(["'"], !0, !1),
                    H = "\\\\",
                    J = nn("\\\\", !1),
                    K = function() { return "\\" },
                    tt = "\\'",
                    nt = nn("\\'", !1),
                    et = function() { return "'" },
                    rt = '\\"',
                    ot = nn('\\"', !1),
                    at = function() { return '"' },
                    ut = function() { return !0 },
                    it = function() { return !1 },
                    ct = function() { return null },
                    lt = rn("vectorHead"),
                    st = function(t, n) { return [t].concat(Fn(n.map(function(t) { return t[2] }))) },
                    ft = function(t) { return [t] },
                    pt = "*",
                    dt = nn("*", !1),
                    ht = rn("vectorBody"),
                    vt = ":",
                    mt = nn(":", !1),
                    bt = function(t, n) {
                        var e = t.length,
                            r = Math.pow(2, e);
                        return r !== n.length && function(t, n) { throw n = void 0 !== n ? n : an(Qt, Gt), cn([rn(t)], a.substring(Qt, Gt), n) }("Vector with " + e + " identifers to have " + r + " values.", "x"), { identifiers: t, values: n }
                    },
                    gt = "(",
                    yt = nn("(", !1),
                    xt = ")",
                    Ot = nn(")", !1),
                    wt = function(t) { return { body: t, style: 1 } },
                    At = rn("expression separator"),
                    jt = ",",
                    Ct = nn(",", !1),
                    Et = rn("end of input"),
                    St = { type: "any" },
                    $t = rn("whitespace"),
                    Mt = /^[ \t\n\r]/,
                    Rt = en([" ", "\t", "\n", "\r"], !1, !1),
                    Dt = rn("expressionLabel"),
                    kt = function(t) { return t },
                    Lt = function(t, n) { return { location: tn(), node: "label", name: t, body: n } },
                    zt = function(t) { return { location: tn(), node: "label", name: null, body: t } },
                    Tt = function(t, n) { return n.reduce(function(t, n) { return { node: "binary", operator: n[0], lhs: t, rhs: n[2] } }, t) },
                    Xt = function(t, n) { return n.reduce(function(t, n) { return { node: "binary", operator: n[0] || "AND", lhs: t, rhs: n[2] } }, t) },
                    Bt = function(t) { return t },
                    Ft = function(t) { return t },
                    _t = function(t) { return t },
                    Nt = function(t) { return t },
                    Yt = function(t) { return { node: "group", body: t.body, style: t.style } },
                    It = function(t, n) { return { node: "unary", operator: t, operand: n } },
                    Vt = rn("identifier"),
                    Ut = function(t) { return { node: "identifier", name: t } },
                    Pt = rn("literal"),
                    Zt = function(t) { return { node: "constant", value: t } },
                    Wt = function(t) { return { node: "vector", vector: t } },
                    Gt = 0,
                    Qt = 0,
                    qt = [{ line: 1, column: 1 }],
                    Ht = 0,
                    Jt = [],
                    Kt = 0;
                if ("startRule" in t) {
                    if (!(t.startRule in e)) throw new Error("Can't start parsing from rule \"" + t.startRule + '".');
                    r = e[t.startRule]
                }

                function tn() { return an(Qt, Gt) }

                function nn(t, n) { return { type: "literal", text: t, ignoreCase: n } }

                function en(t, n, e) { return { type: "class", parts: t, inverted: n, ignoreCase: e } }

                function rn(t) { return { type: "other", description: t } }

                function on(t) { var n, e = qt[t]; if (e) return e; for (n = t - 1; !qt[n];) n--; for (e = { line: (e = qt[n]).line, column: e.column }; n < t;) 10 === a.charCodeAt(n) ? (e.line++, e.column = 1) : e.column++, n++; return qt[t] = e }

                function an(t, n) {
                    var e = on(t),
                        r = on(n);
                    return { start: { offset: t, line: e.line, column: e.column }, end: { offset: n, line: r.line, column: r.column } }
                }

                function un(t) { Gt < Ht || (Ht < Gt && (Ht = Gt, Jt = []), Jt.push(t)) }

                function cn(t, n, e) { return new _n(_n.buildMessage(t, n), t, n, e) }

                function ln() {
                    var t, n;
                    return t = Gt, (t = (n = function() {
                        var t, n, e, r, o, a, u;
                        if (t = Gt, (n = kn()) !== i)
                            if (Dn() !== i) {
                                if (e = [], r = Gt, o = Mn(), (r = o !== i ? (a = Dn()) !== i ? (u = kn()) !== i ? o = [o, a, u] : (Gt = r, i) : (Gt = r, i) : (Gt = r, i)) !== i)
                                    for (; r !== i;) e.push(r), r = Gt, o = Mn(), r = o !== i ? (a = Dn()) !== i ? (u = kn()) !== i ? o = [o, a, u] : (Gt = r, i) : (Gt = r, i) : (Gt = r, i);
                                else e = i;
                                t = e !== i ? (Qt = t, n = st(n, e)) : (Gt = t, i)
                            } else Gt = t, t = i;
                        else Gt = t, t = i;
                        t === i && (t = Gt, (n = kn()) !== i && (Qt = t, n = ft(n)), t = n);
                        return t
                    }()) !== i && Rn() !== i ? (Qt = t, n = o(n)) : (Gt = t, i)) === i && (t = Gt, t = (n = Dn()) !== i && Rn() !== i ? (Qt = t, n = u()) : (Gt = t, i)), t
                }

                function sn() { var t; return Kt++, 61 === a.charCodeAt(Gt) ? (t = l, Gt++) : (t = i, 0 === Kt && un(s)), Kt--, t === i && (i, 0 === Kt && un(c)), t }

                function fn() { var t; return 38 === a.charCodeAt(Gt) ? (t = d, Gt++) : (t = i, 0 === Kt && un(h)), t }

                function pn() { var t; return 124 === a.charCodeAt(Gt) ? (t = v, Gt++) : (t = i, 0 === Kt && un(m)), t }

                function dn() { var t; return 94 === a.charCodeAt(Gt) ? (t = b, Gt++) : (t = i, 0 === Kt && un(g)), t }

                function hn() { var t; return 126 === a.charCodeAt(Gt) ? (t = y, Gt++) : (t = i, 0 === Kt && un(x)), t }

                function vn() { var t; return 49 === a.charCodeAt(Gt) ? (t = O, Gt++) : (t = i, 0 === Kt && un(w)), t }

                function mn() { var t; return 48 === a.charCodeAt(Gt) ? (t = A, Gt++) : (t = i, 0 === Kt && un(j)), t }

                function bn() { var t, n, e, r; return t = Gt, a.substr(Gt, 4) === C ? (n = C, Gt += 4) : (n = i, 0 === Kt && un(E)), t = n !== i ? (e = Gt, Kt++, r = function() { var t; return f.test(a.charAt(Gt)) ? (t = a.charAt(Gt), Gt++) : (t = i, 0 === Kt && un(p)), t === i && (t = Rn()), t }(), Kt--, (e = r !== i ? void(Gt = e) : i) !== i ? n = [n, e] : (Gt = t, i)) : (Gt = t, i) }

                function gn() { var t; return 60 === a.charCodeAt(Gt) ? (t = S, Gt++) : (t = i, 0 === Kt && un($)), t }

                function yn() { var t; return 62 === a.charCodeAt(Gt) ? (t = M, Gt++) : (t = i, 0 === Kt && un(R)), t }

                function xn() { var t, n; return Kt++, t = Gt, (n = fn()) !== i && (Qt = t, n = k()), Kt--, (t = n) === i && (n = i, 0 === Kt && un(D)), t }

                function On() { var t, n; return t = Gt, (n = dn()) !== i && (Qt = t, n = L()), t = n }

                function wn() { var t, n; return Kt++, t = Gt, (n = pn()) !== i && (Qt = t, n = z()), Kt--, (t = n) === i && (n = i, 0 === Kt && un(D)), t }

                function An() {
                    var t, n, e, r, o;
                    if (n = t = Gt, Kt++, e = function() { var t; return (t = sn()) === i && (t = fn()) === i && (t = pn()) === i && (t = dn()) === i && (t = hn()) === i && (t = vn()) === i && (t = mn()) === i && (t = bn()) === i && (t = gn()) === i && (t = yn()), t }(), Kt--, (n = e === i ? void 0 : (Gt = n, i)) !== i)
                        if (B.test(a.charAt(Gt)) ? (e = a.charAt(Gt), Gt++) : (e = i, 0 === Kt && un(F)), e !== i) {
                            for (r = [], _.test(a.charAt(Gt)) ? (o = a.charAt(Gt), Gt++) : (o = i, 0 === Kt && un(N)); o !== i;) r.push(o), _.test(a.charAt(Gt)) ? (o = a.charAt(Gt), Gt++) : (o = i, 0 === Kt && un(N));
                            t = r !== i ? (Qt = t, n = Y(e, r)) : (Gt = t, i)
                        } else Gt = t, t = i;
                    else Gt = t, t = i;
                    if (t === i) {
                        if (t = Gt, 34 === a.charCodeAt(Gt) ? (n = I, Gt++) : (n = i, 0 === Kt && un(V)), n !== i) {
                            if (e = [], (r = jn()) !== i)
                                for (; r !== i;) e.push(r), r = jn();
                            else e = i;
                            t = e !== i ? (34 === a.charCodeAt(Gt) ? (r = I, Gt++) : (r = i, 0 === Kt && un(V)), r !== i ? (Qt = t, n = U(e)) : (Gt = t, i)) : (Gt = t, i)
                        } else Gt = t, t = i;
                        if (t === i)
                            if (t = Gt, 39 === a.charCodeAt(Gt) ? (n = P, Gt++) : (n = i, 0 === Kt && un(Z)), n !== i) {
                                if (e = [], (r = Cn()) !== i)
                                    for (; r !== i;) e.push(r), r = Cn();
                                else e = i;
                                t = e !== i ? (39 === a.charCodeAt(Gt) ? (r = P, Gt++) : (r = i, 0 === Kt && un(Z)), r !== i ? (Qt = t, n = U(e)) : (Gt = t, i)) : (Gt = t, i)
                            } else Gt = t, t = i
                    }
                    return t
                }

                function jn() { var t; return (t = En()) === i && (W.test(a.charAt(Gt)) ? (t = a.charAt(Gt), Gt++) : (t = i, 0 === Kt && un(G))), t }

                function Cn() { var t; return (t = En()) === i && (Q.test(a.charAt(Gt)) ? (t = a.charAt(Gt), Gt++) : (t = i, 0 === Kt && un(q))), t }

                function En() { var t, n; return t = Gt, a.substr(Gt, 2) === H ? (n = H, Gt += 2) : (n = i, 0 === Kt && un(J)), n !== i && (Qt = t, n = K()), (t = n) === i && (t = Gt, a.substr(Gt, 2) === tt ? (n = tt, Gt += 2) : (n = i, 0 === Kt && un(nt)), n !== i && (Qt = t, n = et()), (t = n) === i && (t = Gt, a.substr(Gt, 2) === rt ? (n = rt, Gt += 2) : (n = i, 0 === Kt && un(ot)), n !== i && (Qt = t, n = at()), t = n)), t }

                function Sn() { var t, n; return t = Gt, 49 === a.charCodeAt(Gt) ? (n = O, Gt++) : (n = i, 0 === Kt && un(w)), n !== i && (Qt = t, n = ut()), (t = n) === i && (t = Gt, 48 === a.charCodeAt(Gt) ? (n = A, Gt++) : (n = i, 0 === Kt && un(j)), n !== i && (Qt = t, n = it()), (t = n) === i && (t = Gt, 42 === a.charCodeAt(Gt) ? (n = pt, Gt++) : (n = i, 0 === Kt && un(dt)), n !== i && (Qt = t, n = ct()), t = n)), t }

                function $n() {
                    var t, n, e, r;
                    return t = Gt, t = gn() !== i && Dn() !== i && (n = function() {
                        var t, n, e, r, o, a, u;
                        if (Kt++, t = Gt, (n = Bn()) !== i)
                            if (Dn() !== i) {
                                if (e = [], r = Gt, (r = (o = Mn()) !== i && (a = Dn()) !== i && (u = Bn()) !== i ? o = [o, a, u] : (Gt = r, i)) !== i)
                                    for (; r !== i;) e.push(r), r = Gt, r = (o = Mn()) !== i && (a = Dn()) !== i && (u = Bn()) !== i ? o = [o, a, u] : (Gt = r, i);
                                else e = i;
                                t = e !== i ? (Qt = t, n = st(n, e)) : (Gt = t, i)
                            } else Gt = t, t = i;
                        else Gt = t, t = i;
                        return t === i && (t = Gt, (n = Bn()) !== i && (Qt = t, n = ft(n)), t = n), Kt--, t === i && (n = i, 0 === Kt && un(lt)), t
                    }()) !== i && Dn() !== i ? (58 === a.charCodeAt(Gt) ? (e = vt, Gt++) : (e = i, 0 === Kt && un(mt)), e !== i && Dn() !== i && (r = function() { var t, n; for (Kt++, t = [], n = Sn(); n !== i;) t.push(n), n = Sn(); return Kt--, t === i && (n = i, 0 === Kt && un(ht)), t }()) !== i && Dn() !== i && yn() !== i ? (Qt = t, bt(n, r)) : (Gt = t, i)) : (Gt = t, i)
                }

                function Mn() { var t; return Kt++, 44 === a.charCodeAt(Gt) ? (t = jt, Gt++) : (t = i, 0 === Kt && un(Ct)), Kt--, t === i && (i, 0 === Kt && un(At)), t }

                function Rn() { var t, n; return Kt++, t = Gt, Kt++, a.length > Gt ? (n = a.charAt(Gt), Gt++) : (n = i, 0 === Kt && un(St)), Kt--, t = n === i ? void 0 : (Gt = t, i), Kt--, t === i && (n = i, 0 === Kt && un(Et)), t }

                function Dn() { var t, n; for (Kt++, t = [], Mt.test(a.charAt(Gt)) ? (n = a.charAt(Gt), Gt++) : (n = i, 0 === Kt && un(Rt)); n !== i;) t.push(n), Mt.test(a.charAt(Gt)) ? (n = a.charAt(Gt), Gt++) : (n = i, 0 === Kt && un(Rt)); return Kt--, t === i && (n = i, 0 === Kt && un($t)), t }

                function kn() { var t, n, e; return t = Gt, (t = (n = function() { var t, n; return Kt++, t = Gt, t = Dn() !== i && (n = An()) !== i && Dn() !== i ? (Qt = t, kt(n)) : (Gt = t, i), Kt--, t === i && (i, 0 === Kt && un(Dt)), t }()) !== i && Dn() !== i && sn() !== i && Dn() !== i && (e = Ln()) !== i ? (Qt = t, n = Lt(n, e)) : (Gt = t, i)) === i && (t = Gt, (n = Ln()) !== i && (Qt = t, n = zt(n)), t = n), t }

                function Ln() {
                    var t, n, e, r, o, a, u;
                    if (t = Gt, (n = zn()) !== i)
                        if (Dn() !== i) {
                            if (e = [], r = Gt, (r = (o = wn()) !== i && (a = Dn()) !== i && (u = zn()) !== i ? o = [o, a, u] : (Gt = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = Gt, r = (o = wn()) !== i && (a = Dn()) !== i && (u = zn()) !== i ? o = [o, a, u] : (Gt = r, i);
                            else e = i;
                            t = e !== i ? (Qt = t, n = Tt(n, e)) : (Gt = t, i)
                        } else Gt = t, t = i;
                    else Gt = t, t = i;
                    return t === i && (t = zn()), t
                }

                function zn() {
                    var t, n, e, r, o, a, u;
                    if (t = Gt, (n = Tn()) !== i)
                        if (Dn() !== i) {
                            if (e = [], r = Gt, (r = (o = On()) !== i && (a = Dn()) !== i && (u = Tn()) !== i ? o = [o, a, u] : (Gt = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = Gt, r = (o = On()) !== i && (a = Dn()) !== i && (u = Tn()) !== i ? o = [o, a, u] : (Gt = r, i);
                            else e = i;
                            t = e !== i ? (Qt = t, n = Tt(n, e)) : (Gt = t, i)
                        } else Gt = t, t = i;
                    else Gt = t, t = i;
                    return t === i && (t = Tn()), t
                }

                function Tn() {
                    var t, n, e, r, o, a, u;
                    if (t = Gt, (n = Xn()) !== i)
                        if (Dn() !== i) {
                            if (e = [], r = Gt, (o = xn()) === i && (o = null), (r = o !== i && (a = Dn()) !== i && (u = Xn()) !== i ? o = [o, a, u] : (Gt = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = Gt, (o = xn()) === i && (o = null), r = o !== i && (a = Dn()) !== i && (u = Xn()) !== i ? o = [o, a, u] : (Gt = r, i);
                            else e = i;
                            t = e !== i ? (Qt = t, n = Xt(n, e)) : (Gt = t, i)
                        } else Gt = t, t = i;
                    else Gt = t, t = i;
                    return t === i && (t = Xn()), t
                }

                function Xn() {
                    var t, n;
                    return t = Gt, (t = Dn() !== i && (n = function() {
                        var t, n;
                        Kt++, t = Gt, (n = function() { var t, n; return t = Gt, (n = vn()) !== i && (Qt = t, n = ut()), (t = n) === i && (t = Gt, (n = mn()) !== i && (Qt = t, n = it()), (t = n) === i && (t = Gt, (n = bn()) !== i && (Qt = t, n = ct()), t = n)), t }()) !== i && (Qt = t, n = Zt(n));
                        (t = n) === i && (t = Gt, (n = $n()) !== i && (Qt = t, n = Wt(n)), t = n);
                        Kt--, t === i && (n = i, 0 === Kt && un(Pt));
                        return t
                    }()) !== i && Dn() !== i ? (Qt = t, Bt(n)) : (Gt = t, i)) === i && (t = Gt, (t = Dn() !== i && (n = Bn()) !== i && Dn() !== i ? (Qt = t, Ft(n)) : (Gt = t, i)) === i && (t = Gt, (t = Dn() !== i && (n = function() {
                        var t, n;
                        t = Gt, (n = function() { var t, n, e, r; return t = Gt, 40 === a.charCodeAt(Gt) ? (n = gt, Gt++) : (n = i, 0 === Kt && un(yt)), t = n !== i && Dn() !== i && (e = Ln()) !== i && Dn() !== i ? (41 === a.charCodeAt(Gt) ? (r = xt, Gt++) : (r = i, 0 === Kt && un(Ot)), r !== i ? (Qt = t, n = wt(e)) : (Gt = t, i)) : (Gt = t, i) }()) !== i && (Qt = t, n = Yt(n));
                        return t = n
                    }()) !== i && Dn() !== i ? (Qt = t, _t(n)) : (Gt = t, i)) === i && (t = Gt, t = Dn() !== i && (n = function() {
                        var t, n, e, r;
                        t = Gt, t = (n = function() { var t, n; return Kt++, t = Gt, (n = hn()) !== i && (Qt = t, n = X()), Kt--, (t = n) === i && (n = i, 0 === Kt && un(T)), t }()) !== i ? (e = Dn(), e !== i ? (r = Xn()) !== i ? (Qt = t, n = It(n, r)) : (Gt = t, i) : (Gt = t, i)) : (Gt = t, i);
                        return t
                    }()) !== i ? (Qt = t, Nt(n)) : (Gt = t, i)))), t
                }

                function Bn() { var t, n; return Kt++, t = Gt, (n = An()) !== i && (Qt = t, n = Ut(n)), Kt--, (t = n) === i && (n = i, 0 === Kt && un(Vt)), t }
                if ((n = r()) !== i && Gt === a.length) return n;
                throw n !== i && Gt < a.length && un({ type: "end" }), cn(Jt, Ht < a.length ? a.charAt(Ht) : null, Ht < a.length ? an(Ht, Ht + 1) : an(Ht, Ht))
            }
        }
    },
    27:
    /*!***************************************************************!*\
      !*** ./app/components/logic/lib/syntax/logic-c-boolean.pegjs ***!
      \***************************************************************/
    /*! no static exports found */
    /*! exports used: default */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(t, n, e) {
        "use strict";

        function Pn(t) { return function(t) { if (Array.isArray(t)) { for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n]; return e } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

        function Zn(t, n, e, r) { this.message = t, this.expected = n, this.found = e, this.location = r, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, Zn) }

        function r() { this.constructor = o }
        var o, a;
        o = Zn, a = Error, r.prototype = a.prototype, o.prototype = new r, Zn.buildMessage = function(t, n) {
            var e, a = { literal: function(t) { return '"' + o(t.text) + '"' }, class: function(t) { var n, e = ""; for (n = 0; n < t.parts.length; n++) e += t.parts[n] instanceof Array ? u(t.parts[n][0]) + "-" + u(t.parts[n][1]) : u(t.parts[n]); return "[" + (t.inverted ? "^" : "") + e + "]" }, any: function() { return "any character" }, end: function() { return "end of input" }, other: function(t) { return t.description } };

            function r(t) { return t.charCodeAt(0).toString(16).toUpperCase() }

            function o(t) { return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) { return "\\x0" + r(t) }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) { return "\\x" + r(t) }) }

            function u(t) { return t.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) { return "\\x0" + r(t) }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) { return "\\x" + r(t) }) }
            return "Expected " + function(t) {
                var n, e, r, o = new Array(t.length);
                for (n = 0; n < t.length; n++) o[n] = (r = t[n], a[r.type](r));
                if (o.sort(), 0 < o.length) {
                    for (e = n = 1; n < o.length; n++) o[n - 1] !== o[n] && (o[e] = o[n], e++);
                    o.length = e
                }
                switch (o.length) {
                    case 1:
                        return o[0];
                    case 2:
                        return o[0] + " or " + o[1];
                    default:
                        return o.slice(0, -1).join(", ") + ", or " + o[o.length - 1]
                }
            }(t) + " but " + ((e = n) ? '"' + o(e) + '"' : "end of input") + " found."
        }, t.exports = {
            SyntaxError: Zn,
            parse: function(a, t) {
                t = void 0 !== t ? t : {};
                var n, i = {},
                    e = { start: vn },
                    r = vn,
                    o = function(t) { return t },
                    u = function() { return [] },
                    c = sn("labelOperator"),
                    l = "=",
                    s = cn("=", !1),
                    f = /^[^0-9A-Za-z_\-]/,
                    p = ln([
                        ["0", "9"],
                        ["A", "Z"],
                        ["a", "z"], "_", "-"
                    ], !0, !1),
                    d = "&&",
                    h = cn("&&", !1),
                    v = "||",
                    m = cn("||", !1),
                    b = "!=",
                    g = cn("!=", !1),
                    y = "!",
                    x = cn("!", !1),
                    O = /^[^=]/,
                    w = ln(["="], !0, !1),
                    A = "true",
                    j = cn("true", !1),
                    C = "false",
                    E = cn("false", !1),
                    S = "void",
                    $ = cn("void", !1),
                    M = "<",
                    R = cn("<", !1),
                    D = ">",
                    k = cn(">", !1),
                    L = sn("binary operator"),
                    z = function() { return "AND" },
                    T = function() { return "XOR" },
                    X = function() { return "OR" },
                    B = sn("unary operator"),
                    F = function() { return "NOT" },
                    _ = /^[A-Za-z_]/,
                    N = ln([
                        ["A", "Z"],
                        ["a", "z"], "_"
                    ], !1, !1),
                    Y = /^[\-_a-zA-Z0-9]/,
                    I = ln(["-", "_", ["a", "z"],
                        ["A", "Z"],
                        ["0", "9"]
                    ], !1, !1),
                    V = function(t, n) { return t + n.join("") },
                    U = '"',
                    P = cn('"', !1),
                    Z = function(t) { return t.join("") },
                    W = "'",
                    G = cn("'", !1),
                    Q = /^[^"]/,
                    q = ln(['"'], !0, !1),
                    H = /^[^']/,
                    J = ln(["'"], !0, !1),
                    K = "\\\\",
                    tt = cn("\\\\", !1),
                    nt = function() { return "\\" },
                    et = "\\'",
                    rt = cn("\\'", !1),
                    ot = function() { return "'" },
                    at = '\\"',
                    ut = cn('\\"', !1),
                    it = function() { return '"' },
                    ct = function() { return !0 },
                    lt = function() { return !1 },
                    st = function() { return null },
                    ft = sn("vectorHead"),
                    pt = function(t, n) { return [t].concat(Pn(n.map(function(t) { return t[2] }))) },
                    dt = function(t) { return [t] },
                    ht = "1",
                    vt = cn("1", !1),
                    mt = "0",
                    bt = cn("0", !1),
                    gt = "*",
                    yt = cn("*", !1),
                    xt = sn("vectorBody"),
                    Ot = ":",
                    wt = cn(":", !1),
                    At = function(t, n) {
                        var e = t.length,
                            r = Math.pow(2, e);
                        return r !== n.length && function(t, n) { throw n = void 0 !== n ? n : pn(nn, tn), hn([sn(t)], a.substring(nn, tn), n) }("Vector with " + e + " identifers to have " + r + " values.", "x"), { identifiers: t, values: n }
                    },
                    jt = "(",
                    Ct = cn("(", !1),
                    Et = ")",
                    St = cn(")", !1),
                    $t = function(t) { return { body: t, style: 1 } },
                    Mt = sn("expression separator"),
                    Rt = ",",
                    Dt = cn(",", !1),
                    kt = sn("end of input"),
                    Lt = { type: "any" },
                    zt = sn("whitespace"),
                    Tt = /^[ \t\n\r]/,
                    Xt = ln([" ", "\t", "\n", "\r"], !1, !1),
                    Bt = sn("expressionLabel"),
                    Ft = function(t) { return t },
                    _t = function(t, n) { return { location: un(), node: "label", name: t, body: n } },
                    Nt = function(t) { return { location: un(), node: "label", name: null, body: t } },
                    Yt = function(t, n) { return n.reduce(function(t, n) { return { node: "binary", operator: n[0], lhs: t, rhs: n[2] } }, t) },
                    It = function(t, n) { return n.reduce(function(t, n) { return { node: "binary", operator: n[0] || "AND", lhs: t, rhs: n[2] } }, t) },
                    Vt = function(t) { return t },
                    Ut = function(t) { return t },
                    Pt = function(t) { return t },
                    Zt = function(t) { return t },
                    Wt = function(t) { return { node: "group", body: t.body, style: t.style } },
                    Gt = function(t, n) { return { node: "unary", operator: t, operand: n } },
                    Qt = sn("identifier"),
                    qt = function(t) { return { node: "identifier", name: t } },
                    Ht = sn("literal"),
                    Jt = function(t) { return { node: "constant", value: t } },
                    Kt = function(t) { return { node: "vector", vector: t } },
                    tn = 0,
                    nn = 0,
                    en = [{ line: 1, column: 1 }],
                    rn = 0,
                    on = [],
                    an = 0;
                if ("startRule" in t) {
                    if (!(t.startRule in e)) throw new Error("Can't start parsing from rule \"" + t.startRule + '".');
                    r = e[t.startRule]
                }

                function un() { return pn(nn, tn) }

                function cn(t, n) { return { type: "literal", text: t, ignoreCase: n } }

                function ln(t, n, e) { return { type: "class", parts: t, inverted: n, ignoreCase: e } }

                function sn(t) { return { type: "other", description: t } }

                function fn(t) { var n, e = en[t]; if (e) return e; for (n = t - 1; !en[n];) n--; for (e = { line: (e = en[n]).line, column: e.column }; n < t;) 10 === a.charCodeAt(n) ? (e.line++, e.column = 1) : e.column++, n++; return en[t] = e }

                function pn(t, n) {
                    var e = fn(t),
                        r = fn(n);
                    return { start: { offset: t, line: e.line, column: e.column }, end: { offset: n, line: r.line, column: r.column } }
                }

                function dn(t) { tn < rn || (rn < tn && (rn = tn, on = []), on.push(t)) }

                function hn(t, n, e) { return new Zn(Zn.buildMessage(t, n), t, n, e) }

                function vn() {
                    var t, n;
                    return t = tn, (t = (n = function() {
                        var t, n, e, r, o, a, u;
                        if (t = tn, (n = _n()) !== i)
                            if (Fn() !== i) {
                                if (e = [], r = tn, o = Xn(), (r = o !== i ? (a = Fn()) !== i ? (u = _n()) !== i ? o = [o, a, u] : (tn = r, i) : (tn = r, i) : (tn = r, i)) !== i)
                                    for (; r !== i;) e.push(r), r = tn, o = Xn(), r = o !== i ? (a = Fn()) !== i ? (u = _n()) !== i ? o = [o, a, u] : (tn = r, i) : (tn = r, i) : (tn = r, i);
                                else e = i;
                                t = e !== i ? (nn = t, n = pt(n, e)) : (tn = t, i)
                            } else tn = t, t = i;
                        else tn = t, t = i;
                        t === i && (t = tn, (n = _n()) !== i && (nn = t, n = dt(n)), t = n);
                        return t
                    }()) !== i && Bn() !== i ? (nn = t, n = o(n)) : (tn = t, i)) === i && (t = tn, t = (n = Fn()) !== i && Bn() !== i ? (nn = t, n = u()) : (tn = t, i)), t
                }

                function mn() { var t; return an++, 61 === a.charCodeAt(tn) ? (t = l, tn++) : (t = i, 0 === an && dn(s)), an--, t === i && (i, 0 === an && dn(c)), t }

                function bn() { var t; return f.test(a.charAt(tn)) ? (t = a.charAt(tn), tn++) : (t = i, 0 === an && dn(p)), t === i && (t = Bn()), t }

                function gn() { var t; return a.substr(tn, 2) === d ? (t = d, tn += 2) : (t = i, 0 === an && dn(h)), t }

                function yn() { var t; return a.substr(tn, 2) === v ? (t = v, tn += 2) : (t = i, 0 === an && dn(m)), t }

                function xn() { var t; return a.substr(tn, 2) === b ? (t = b, tn += 2) : (t = i, 0 === an && dn(g)), t }

                function On() { var t, n, e, r; return t = tn, 33 === a.charCodeAt(tn) ? (n = y, tn++) : (n = i, 0 === an && dn(x)), t = n !== i ? (e = tn, an++, O.test(a.charAt(tn)) ? (r = a.charAt(tn), tn++) : (r = i, 0 === an && dn(w)), an--, (e = r !== i ? void(tn = e) : i) !== i ? n = [n, e] : (tn = t, i)) : (tn = t, i) }

                function wn() { var t, n, e, r; return t = tn, a.substr(tn, 4) === A ? (n = A, tn += 4) : (n = i, 0 === an && dn(j)), t = n !== i ? (e = tn, an++, r = bn(), an--, (e = r !== i ? void(tn = e) : i) !== i ? n = [n, e] : (tn = t, i)) : (tn = t, i) }

                function An() { var t, n, e, r; return t = tn, a.substr(tn, 5) === C ? (n = C, tn += 5) : (n = i, 0 === an && dn(E)), t = n !== i ? (e = tn, an++, r = bn(), an--, (e = r !== i ? void(tn = e) : i) !== i ? n = [n, e] : (tn = t, i)) : (tn = t, i) }

                function jn() { var t, n, e, r; return t = tn, a.substr(tn, 4) === S ? (n = S, tn += 4) : (n = i, 0 === an && dn($)), t = n !== i ? (e = tn, an++, r = bn(), an--, (e = r !== i ? void(tn = e) : i) !== i ? n = [n, e] : (tn = t, i)) : (tn = t, i) }

                function Cn() { var t; return 60 === a.charCodeAt(tn) ? (t = M, tn++) : (t = i, 0 === an && dn(R)), t }

                function En() { var t; return 62 === a.charCodeAt(tn) ? (t = D, tn++) : (t = i, 0 === an && dn(k)), t }

                function Sn() { var t, n; return an++, t = tn, (n = gn()) !== i && (nn = t, n = z()), an--, (t = n) === i && (n = i, 0 === an && dn(L)), t }

                function $n() { var t, n; return t = tn, (n = xn()) !== i && (nn = t, n = T()), t = n }

                function Mn() { var t, n; return an++, t = tn, (n = yn()) !== i && (nn = t, n = X()), an--, (t = n) === i && (n = i, 0 === an && dn(L)), t }

                function Rn() {
                    var t, n, e, r, o;
                    if (n = t = tn, an++, e = function() { var t; return (t = mn()) === i && (t = gn()) === i && (t = yn()) === i && (t = xn()) === i && (t = On()) === i && (t = wn()) === i && (t = An()) === i && (t = jn()) === i && (t = Cn()) === i && (t = En()), t }(), an--, (n = e === i ? void 0 : (tn = n, i)) !== i)
                        if (_.test(a.charAt(tn)) ? (e = a.charAt(tn), tn++) : (e = i, 0 === an && dn(N)), e !== i) {
                            for (r = [], Y.test(a.charAt(tn)) ? (o = a.charAt(tn), tn++) : (o = i, 0 === an && dn(I)); o !== i;) r.push(o), Y.test(a.charAt(tn)) ? (o = a.charAt(tn), tn++) : (o = i, 0 === an && dn(I));
                            t = r !== i ? (nn = t, n = V(e, r)) : (tn = t, i)
                        } else tn = t, t = i;
                    else tn = t, t = i;
                    if (t === i) {
                        if (t = tn, 34 === a.charCodeAt(tn) ? (n = U, tn++) : (n = i, 0 === an && dn(P)), n !== i) {
                            if (e = [], (r = Dn()) !== i)
                                for (; r !== i;) e.push(r), r = Dn();
                            else e = i;
                            t = e !== i ? (34 === a.charCodeAt(tn) ? (r = U, tn++) : (r = i, 0 === an && dn(P)), r !== i ? (nn = t, n = Z(e)) : (tn = t, i)) : (tn = t, i)
                        } else tn = t, t = i;
                        if (t === i)
                            if (t = tn, 39 === a.charCodeAt(tn) ? (n = W, tn++) : (n = i, 0 === an && dn(G)), n !== i) {
                                if (e = [], (r = kn()) !== i)
                                    for (; r !== i;) e.push(r), r = kn();
                                else e = i;
                                t = e !== i ? (39 === a.charCodeAt(tn) ? (r = W, tn++) : (r = i, 0 === an && dn(G)), r !== i ? (nn = t, n = Z(e)) : (tn = t, i)) : (tn = t, i)
                            } else tn = t, t = i
                    }
                    return t
                }

                function Dn() { var t; return (t = Ln()) === i && (Q.test(a.charAt(tn)) ? (t = a.charAt(tn), tn++) : (t = i, 0 === an && dn(q))), t }

                function kn() { var t; return (t = Ln()) === i && (H.test(a.charAt(tn)) ? (t = a.charAt(tn), tn++) : (t = i, 0 === an && dn(J))), t }

                function Ln() { var t, n; return t = tn, a.substr(tn, 2) === K ? (n = K, tn += 2) : (n = i, 0 === an && dn(tt)), n !== i && (nn = t, n = nt()), (t = n) === i && (t = tn, a.substr(tn, 2) === et ? (n = et, tn += 2) : (n = i, 0 === an && dn(rt)), n !== i && (nn = t, n = ot()), (t = n) === i && (t = tn, a.substr(tn, 2) === at ? (n = at, tn += 2) : (n = i, 0 === an && dn(ut)), n !== i && (nn = t, n = it()), t = n)), t }

                function zn() { var t, n; return t = tn, 49 === a.charCodeAt(tn) ? (n = ht, tn++) : (n = i, 0 === an && dn(vt)), n !== i && (nn = t, n = ct()), (t = n) === i && (t = tn, 48 === a.charCodeAt(tn) ? (n = mt, tn++) : (n = i, 0 === an && dn(bt)), n !== i && (nn = t, n = lt()), (t = n) === i && (t = tn, 42 === a.charCodeAt(tn) ? (n = gt, tn++) : (n = i, 0 === an && dn(yt)), n !== i && (nn = t, n = st()), t = n)), t }

                function Tn() {
                    var t, n, e, r;
                    return t = tn, t = Cn() !== i && Fn() !== i && (n = function() {
                        var t, n, e, r, o, a, u;
                        if (an++, t = tn, (n = Un()) !== i)
                            if (Fn() !== i) {
                                if (e = [], r = tn, (r = (o = Xn()) !== i && (a = Fn()) !== i && (u = Un()) !== i ? o = [o, a, u] : (tn = r, i)) !== i)
                                    for (; r !== i;) e.push(r), r = tn, r = (o = Xn()) !== i && (a = Fn()) !== i && (u = Un()) !== i ? o = [o, a, u] : (tn = r, i);
                                else e = i;
                                t = e !== i ? (nn = t, n = pt(n, e)) : (tn = t, i)
                            } else tn = t, t = i;
                        else tn = t, t = i;
                        return t === i && (t = tn, (n = Un()) !== i && (nn = t, n = dt(n)), t = n), an--, t === i && (n = i, 0 === an && dn(ft)), t
                    }()) !== i && Fn() !== i ? (58 === a.charCodeAt(tn) ? (e = Ot, tn++) : (e = i, 0 === an && dn(wt)), e !== i && Fn() !== i && (r = function() { var t, n; for (an++, t = [], n = zn(); n !== i;) t.push(n), n = zn(); return an--, t === i && (n = i, 0 === an && dn(xt)), t }()) !== i && Fn() !== i && En() !== i ? (nn = t, At(n, r)) : (tn = t, i)) : (tn = t, i)
                }

                function Xn() { var t; return an++, 44 === a.charCodeAt(tn) ? (t = Rt, tn++) : (t = i, 0 === an && dn(Dt)), an--, t === i && (i, 0 === an && dn(Mt)), t }

                function Bn() { var t, n; return an++, t = tn, an++, a.length > tn ? (n = a.charAt(tn), tn++) : (n = i, 0 === an && dn(Lt)), an--, t = n === i ? void 0 : (tn = t, i), an--, t === i && (n = i, 0 === an && dn(kt)), t }

                function Fn() { var t, n; for (an++, t = [], Tt.test(a.charAt(tn)) ? (n = a.charAt(tn), tn++) : (n = i, 0 === an && dn(Xt)); n !== i;) t.push(n), Tt.test(a.charAt(tn)) ? (n = a.charAt(tn), tn++) : (n = i, 0 === an && dn(Xt)); return an--, t === i && (n = i, 0 === an && dn(zt)), t }

                function _n() { var t, n, e; return t = tn, (t = (n = function() { var t, n; return an++, t = tn, t = Fn() !== i && (n = Rn()) !== i && Fn() !== i ? (nn = t, Ft(n)) : (tn = t, i), an--, t === i && (i, 0 === an && dn(Bt)), t }()) !== i && Fn() !== i && mn() !== i && Fn() !== i && (e = Nn()) !== i ? (nn = t, n = _t(n, e)) : (tn = t, i)) === i && (t = tn, (n = Nn()) !== i && (nn = t, n = Nt(n)), t = n), t }

                function Nn() {
                    var t, n, e, r, o, a, u;
                    if (t = tn, (n = Yn()) !== i)
                        if (Fn() !== i) {
                            if (e = [], r = tn, (r = (o = Mn()) !== i && (a = Fn()) !== i && (u = Yn()) !== i ? o = [o, a, u] : (tn = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = tn, r = (o = Mn()) !== i && (a = Fn()) !== i && (u = Yn()) !== i ? o = [o, a, u] : (tn = r, i);
                            else e = i;
                            t = e !== i ? (nn = t, n = Yt(n, e)) : (tn = t, i)
                        } else tn = t, t = i;
                    else tn = t, t = i;
                    return t === i && (t = Yn()), t
                }

                function Yn() {
                    var t, n, e, r, o, a, u;
                    if (t = tn, (n = In()) !== i)
                        if (Fn() !== i) {
                            if (e = [], r = tn, (r = (o = $n()) !== i && (a = Fn()) !== i && (u = In()) !== i ? o = [o, a, u] : (tn = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = tn, r = (o = $n()) !== i && (a = Fn()) !== i && (u = In()) !== i ? o = [o, a, u] : (tn = r, i);
                            else e = i;
                            t = e !== i ? (nn = t, n = Yt(n, e)) : (tn = t, i)
                        } else tn = t, t = i;
                    else tn = t, t = i;
                    return t === i && (t = In()), t
                }

                function In() {
                    var t, n, e, r, o, a, u;
                    if (t = tn, (n = Vn()) !== i)
                        if (Fn() !== i) {
                            if (e = [], r = tn, (o = Sn()) === i && (o = null), (r = o !== i && (a = Fn()) !== i && (u = Vn()) !== i ? o = [o, a, u] : (tn = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = tn, (o = Sn()) === i && (o = null), r = o !== i && (a = Fn()) !== i && (u = Vn()) !== i ? o = [o, a, u] : (tn = r, i);
                            else e = i;
                            t = e !== i ? (nn = t, n = It(n, e)) : (tn = t, i)
                        } else tn = t, t = i;
                    else tn = t, t = i;
                    return t === i && (t = Vn()), t
                }

                function Vn() {
                    var t, n;
                    return t = tn, (t = Fn() !== i && (n = function() {
                        var t, n;
                        an++, t = tn, (n = function() { var t, n; return t = tn, (n = wn()) !== i && (nn = t, n = ct()), (t = n) === i && (t = tn, (n = An()) !== i && (nn = t, n = lt()), (t = n) === i && (t = tn, (n = jn()) !== i && (nn = t, n = st()), t = n)), t }()) !== i && (nn = t, n = Jt(n));
                        (t = n) === i && (t = tn, (n = Tn()) !== i && (nn = t, n = Kt(n)), t = n);
                        an--, t === i && (n = i, 0 === an && dn(Ht));
                        return t
                    }()) !== i && Fn() !== i ? (nn = t, Vt(n)) : (tn = t, i)) === i && (t = tn, (t = Fn() !== i && (n = Un()) !== i && Fn() !== i ? (nn = t, Ut(n)) : (tn = t, i)) === i && (t = tn, (t = Fn() !== i && (n = function() {
                        var t, n;
                        t = tn, (n = function() { var t, n, e, r; return t = tn, 40 === a.charCodeAt(tn) ? (n = jt, tn++) : (n = i, 0 === an && dn(Ct)), t = n !== i && Fn() !== i && (e = Nn()) !== i && Fn() !== i ? (41 === a.charCodeAt(tn) ? (r = Et, tn++) : (r = i, 0 === an && dn(St)), r !== i ? (nn = t, n = $t(e)) : (tn = t, i)) : (tn = t, i) }()) !== i && (nn = t, n = Wt(n));
                        return t = n
                    }()) !== i && Fn() !== i ? (nn = t, Pt(n)) : (tn = t, i)) === i && (t = tn, t = Fn() !== i && (n = function() {
                        var t, n, e, r;
                        t = tn, t = (n = function() { var t, n; return an++, t = tn, (n = On()) !== i && (nn = t, n = F()), an--, (t = n) === i && (n = i, 0 === an && dn(B)), t }()) !== i ? (e = Fn(), e !== i ? (r = Vn()) !== i ? (nn = t, n = Gt(n, r)) : (tn = t, i) : (tn = t, i)) : (tn = t, i);
                        return t
                    }()) !== i ? (nn = t, Zt(n)) : (tn = t, i)))), t
                }

                function Un() { var t, n; return an++, t = tn, (n = Rn()) !== i && (nn = t, n = qt(n)), an--, (t = n) === i && (n = i, 0 === an && dn(Qt)), t }
                if ((n = r()) !== i && tn === a.length) return n;
                throw n !== i && tn < a.length && dn({ type: "end" }), hn(on, rn < a.length ? a.charAt(rn) : null, rn < a.length ? pn(rn, rn + 1) : pn(rn, rn))
            }
        }
    },
    28:
    /*!***********************************************************!*\
      !*** ./app/components/logic/lib/syntax/logic-latex.pegjs ***!
      \***********************************************************/
    /*! no static exports found */
    /*! exports used: default */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(t, n, e) {
        "use strict";

        function jr(t) { return function(t) { if (Array.isArray(t)) { for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n]; return e } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

        function Cr(t, n, e, r) { this.message = t, this.expected = n, this.found = e, this.location = r, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, Cr) }

        function r() { this.constructor = o }
        var o, a;
        o = Cr, a = Error, r.prototype = a.prototype, o.prototype = new r, Cr.buildMessage = function(t, n) {
            var e, a = { literal: function(t) { return '"' + o(t.text) + '"' }, class: function(t) { var n, e = ""; for (n = 0; n < t.parts.length; n++) e += t.parts[n] instanceof Array ? u(t.parts[n][0]) + "-" + u(t.parts[n][1]) : u(t.parts[n]); return "[" + (t.inverted ? "^" : "") + e + "]" }, any: function() { return "any character" }, end: function() { return "end of input" }, other: function(t) { return t.description } };

            function r(t) { return t.charCodeAt(0).toString(16).toUpperCase() }

            function o(t) { return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) { return "\\x0" + r(t) }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) { return "\\x" + r(t) }) }

            function u(t) { return t.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) { return "\\x0" + r(t) }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) { return "\\x" + r(t) }) }
            return "Expected " + function(t) {
                var n, e, r, o = new Array(t.length);
                for (n = 0; n < t.length; n++) o[n] = (r = t[n], a[r.type](r));
                if (o.sort(), 0 < o.length) {
                    for (e = n = 1; n < o.length; n++) o[n - 1] !== o[n] && (o[e] = o[n], e++);
                    o.length = e
                }
                switch (o.length) {
                    case 1:
                        return o[0];
                    case 2:
                        return o[0] + " or " + o[1];
                    default:
                        return o.slice(0, -1).join(", ") + ", or " + o[o.length - 1]
                }
            }(t) + " but " + ((e = n) ? '"' + o(e) + '"' : "end of input") + " found."
        }, t.exports = {
            SyntaxError: Cr,
            parse: function(a, t) {
                t = void 0 !== t ? t : {};
                var n, i = {},
                    e = { start: We },
                    r = We,
                    o = function(t) { return t },
                    u = function() { return [] },
                    c = Ie("labelOperator"),
                    l = "=",
                    s = Ne("=", !1),
                    f = /^[^0-9A-Za-z_\-]/,
                    p = Ye([
                        ["0", "9"],
                        ["A", "Z"],
                        ["a", "z"], "_", "-"
                    ], !0, !1),
                    d = "∧",
                    h = Ne("∧", !1),
                    v = "\\wedge",
                    m = Ne("\\wedge", !1),
                    b = "∨",
                    g = Ne("∨", !1),
                    y = "\\vee",
                    x = Ne("\\vee", !1),
                    O = "⊕",
                    w = Ne("⊕", !1),
                    A = "\\oplus",
                    j = Ne("\\oplus", !1),
                    C = "¬",
                    E = Ne("¬", !1),
                    S = "\\neg",
                    $ = Ne("\\neg", !1),
                    M = "\\overline",
                    R = Ne("\\overline", !1),
                    D = "true",
                    k = Ne("true", !1),
                    L = "1",
                    z = Ne("1", !1),
                    T = "T",
                    X = Ne("T", !1),
                    B = "W",
                    F = Ne("W", !1),
                    _ = "⊤",
                    N = Ne("⊤", !1),
                    Y = "\\top",
                    I = Ne("\\top", !1),
                    V = "false",
                    U = Ne("false", !1),
                    P = "0",
                    Z = Ne("0", !1),
                    W = "F",
                    G = Ne("F", !1),
                    Q = "⊥",
                    q = Ne("⊥", !1),
                    H = "\\bot",
                    J = Ne("\\bot", !1),
                    K = "\\nothing",
                    tt = Ne("\\nothing", !1),
                    nt = "<",
                    et = Ne("<", !1),
                    rt = ">",
                    ot = Ne(">", !1),
                    at = Ie("binary operator"),
                    ut = function() { return "AND" },
                    it = function() { return "XOR" },
                    ct = function() { return "OR" },
                    lt = Ie("unary operator"),
                    st = function() { return "NOT" },
                    ft = /^[A-Za-z_]/,
                    pt = Ye([
                        ["A", "Z"],
                        ["a", "z"], "_"
                    ], !1, !1),
                    dt = /^[\-_a-zA-Z0-9{}]/,
                    ht = Ye(["-", "_", ["a", "z"],
                        ["A", "Z"],
                        ["0", "9"], "{", "}"
                    ], !1, !1),
                    vt = function(t, n) { return t + n.join("") },
                    mt = '"',
                    bt = Ne('"', !1),
                    gt = function(t) { return t.join("") },
                    yt = "'",
                    xt = Ne("'", !1),
                    Ot = /^[^"]/,
                    wt = Ye(['"'], !0, !1),
                    At = /^[^']/,
                    jt = Ye(["'"], !0, !1),
                    Ct = "\\\\",
                    Et = Ne("\\\\", !1),
                    St = function() { return "\\" },
                    $t = "\\'",
                    Mt = Ne("\\'", !1),
                    Rt = function() { return "'" },
                    Dt = '\\"',
                    kt = Ne('\\"', !1),
                    Lt = function() { return '"' },
                    zt = function() { return !0 },
                    Tt = function() { return !1 },
                    Xt = function() { return null },
                    Bt = function(t, n) { return [t].concat(jr(n.map(function(t) { return t[2] }))) },
                    Ft = function(t) { return [t] },
                    _t = "*",
                    Nt = Ne("*", !1),
                    Yt = Ie("vectorBody"),
                    It = ":",
                    Vt = Ne(":", !1),
                    Ut = function(t, n) {
                        var e = t.length,
                            r = Math.pow(2, e);
                        return r !== n.length && function(t, n) { throw n = void 0 !== n ? n : Ue(ze, Le), Ze([Ie(t)], a.substring(ze, Le), n) }("Vector with " + e + " identifers to have " + r + " values.", "x"), { identifiers: t, values: n }
                    },
                    Pt = "(",
                    Zt = Ne("(", !1),
                    Wt = ")",
                    Gt = Ne(")", !1),
                    Qt = function(t) { return { body: t, style: 1 } },
                    qt = "\\bigl(",
                    Ht = Ne("\\bigl(", !1),
                    Jt = "\\bigr)",
                    Kt = Ne("\\bigr)", !1),
                    tn = function(t) { return { body: t, style: 2 } },
                    nn = "\\Bigl(",
                    en = Ne("\\Bigl(", !1),
                    rn = "\\Bigr)",
                    on = Ne("\\Bigr)", !1),
                    an = function(t) { return { body: t, style: 3 } },
                    un = "\\biggl(",
                    cn = Ne("\\biggl(", !1),
                    ln = "\\biggr)",
                    sn = Ne("\\biggr)", !1),
                    fn = function(t) { return { body: t, style: 4 } },
                    pn = "\\Biggl(",
                    dn = Ne("\\Biggl(", !1),
                    hn = "\\Biggr)",
                    vn = Ne("\\Biggr)", !1),
                    mn = function(t) { return { body: t, style: 5 } },
                    bn = "[",
                    gn = Ne("[", !1),
                    yn = "]",
                    xn = Ne("]", !1),
                    On = function(t) { return { body: t, style: 6 } },
                    wn = "\\bigl[",
                    An = Ne("\\bigl[", !1),
                    jn = "\\bigr]",
                    Cn = Ne("\\bigr]", !1),
                    En = function(t) { return { body: t, style: 7 } },
                    Sn = "\\Bigl[",
                    $n = Ne("\\Bigl[", !1),
                    Mn = "\\Bigr]",
                    Rn = Ne("\\Bigr]", !1),
                    Dn = function(t) { return { body: t, style: 8 } },
                    kn = "\\biggl[",
                    Ln = Ne("\\biggl[", !1),
                    zn = "\\biggr]",
                    Tn = Ne("\\biggr]", !1),
                    Xn = function(t) { return { body: t, style: 9 } },
                    Bn = "\\Biggl[",
                    Fn = Ne("\\Biggl[", !1),
                    _n = "\\Biggr]",
                    Nn = Ne("\\Biggr]", !1),
                    Yn = function(t) { return { body: t, style: 10 } },
                    In = "\\lbrack",
                    Vn = Ne("\\lbrack", !1),
                    Un = "\\rbrack",
                    Pn = Ne("\\rbrack", !1),
                    Zn = "\\bigl\\lbrack",
                    Wn = Ne("\\bigl\\lbrack", !1),
                    Gn = "\\bigr\\rbrack",
                    Qn = Ne("\\bigr\\rbrack", !1),
                    qn = "\\Bigl\\lbrack",
                    Hn = Ne("\\Bigl\\lbrack", !1),
                    Jn = "\\Bigr\\rbrack",
                    Kn = Ne("\\Bigr\\rbrack", !1),
                    te = "\\biggl\\lbrack",
                    ne = Ne("\\biggl\\lbrack", !1),
                    ee = "\\biggr\\rbrack",
                    re = Ne("\\biggr\\rbrack", !1),
                    oe = "\\Biggl\\lbrack",
                    ae = Ne("\\Biggl\\lbrack", !1),
                    ue = "\\Biggr\\rbrack",
                    ie = Ne("\\Biggr\\rbrack", !1),
                    ce = (Ne("{", !1), Ne("}", !1), Ie("expression separator")),
                    le = ",",
                    se = Ne(",", !1),
                    fe = Ie("end of input"),
                    pe = { type: "any" },
                    de = Ie("whitespace"),
                    he = /^[ \t\n\r]/,
                    ve = Ye([" ", "\t", "\n", "\r"], !1, !1),
                    me = Ie("expressionLabel"),
                    be = function(t) { return t },
                    ge = function(t, n) { return { location: _e(), node: "label", name: t, body: n } },
                    ye = function(t) { return { location: _e(), node: "label", name: null, body: t } },
                    xe = function(t, n) { return n.reduce(function(t, n) { return { node: "binary", operator: n[0], lhs: t, rhs: n[2] } }, t) },
                    Oe = function(t, n) { return n.reduce(function(t, n) { return { node: "binary", operator: n[0] || "AND", lhs: t, rhs: n[2] } }, t) },
                    we = function(t) { return t },
                    Ae = function(t) { return t },
                    je = function(t) { return t },
                    Ce = function(t) { return t },
                    Ee = function(t) { return { node: "group", body: t.body, style: t.style } },
                    Se = function(t, n) { return { node: "unary", operator: t, operand: n } },
                    $e = Ie("identifier"),
                    Me = function(t) { return { node: "identifier", name: t } },
                    Re = Ie("literal"),
                    De = function(t) { return { node: "constant", value: t } },
                    ke = function(t) { return { node: "vector", vector: t } },
                    Le = 0,
                    ze = 0,
                    Te = [{ line: 1, column: 1 }],
                    Xe = 0,
                    Be = [],
                    Fe = 0;
                if ("startRule" in t) {
                    if (!(t.startRule in e)) throw new Error("Can't start parsing from rule \"" + t.startRule + '".');
                    r = e[t.startRule]
                }

                function _e() { return Ue(ze, Le) }

                function Ne(t, n) { return { type: "literal", text: t, ignoreCase: n } }

                function Ye(t, n, e) { return { type: "class", parts: t, inverted: n, ignoreCase: e } }

                function Ie(t) { return { type: "other", description: t } }

                function Ve(t) { var n, e = Te[t]; if (e) return e; for (n = t - 1; !Te[n];) n--; for (e = { line: (e = Te[n]).line, column: e.column }; n < t;) 10 === a.charCodeAt(n) ? (e.line++, e.column = 1) : e.column++, n++; return Te[t] = e }

                function Ue(t, n) {
                    var e = Ve(t),
                        r = Ve(n);
                    return { start: { offset: t, line: e.line, column: e.column }, end: { offset: n, line: r.line, column: r.column } }
                }

                function Pe(t) { Le < Xe || (Xe < Le && (Xe = Le, Be = []), Be.push(t)) }

                function Ze(t, n, e) { return new Cr(Cr.buildMessage(t, n), t, n, e) }

                function We() {
                    var t, n;
                    return t = Le, (t = (n = function() {
                        var t, n, e, r, o, a, u;
                        if (t = Le, (n = gr()) !== i)
                            if (br() !== i) {
                                if (e = [], r = Le, o = vr(), (r = o !== i ? (a = br()) !== i ? (u = gr()) !== i ? o = [o, a, u] : (Le = r, i) : (Le = r, i) : (Le = r, i)) !== i)
                                    for (; r !== i;) e.push(r), r = Le, o = vr(), r = o !== i ? (a = br()) !== i ? (u = gr()) !== i ? o = [o, a, u] : (Le = r, i) : (Le = r, i) : (Le = r, i);
                                else e = i;
                                t = e !== i ? (ze = t, n = Bt(n, e)) : (Le = t, i)
                            } else Le = t, t = i;
                        else Le = t, t = i;
                        t === i && (t = Le, (n = gr()) !== i && (ze = t, n = Ft(n)), t = n);
                        return t
                    }()) !== i && mr() !== i ? (ze = t, n = o(n)) : (Le = t, i)) === i && (t = Le, t = (n = br()) !== i && mr() !== i ? (ze = t, n = u()) : (Le = t, i)), t
                }

                function Ge() { var t; return Fe++, 61 === a.charCodeAt(Le) ? (t = l, Le++) : (t = i, 0 === Fe && Pe(s)), Fe--, t === i && (i, 0 === Fe && Pe(c)), t }

                function Qe() { var t; return f.test(a.charAt(Le)) ? (t = a.charAt(Le), Le++) : (t = i, 0 === Fe && Pe(p)), t === i && (t = mr()), t }

                function qe() { var t, n, e, r; return 8743 === a.charCodeAt(Le) ? (t = d, Le++) : (t = i, 0 === Fe && Pe(h)), t === i && (t = Le, a.substr(Le, 6) === v ? (n = v, Le += 6) : (n = i, 0 === Fe && Pe(m)), t = n !== i ? (e = Le, Fe++, r = Qe(), Fe--, (e = r !== i ? void(Le = e) : i) !== i ? n = [n, e] : (Le = t, i)) : (Le = t, i)), t }

                function He() { var t, n, e, r; return 8744 === a.charCodeAt(Le) ? (t = b, Le++) : (t = i, 0 === Fe && Pe(g)), t === i && (t = Le, a.substr(Le, 4) === y ? (n = y, Le += 4) : (n = i, 0 === Fe && Pe(x)), t = n !== i ? (e = Le, Fe++, r = Qe(), Fe--, (e = r !== i ? void(Le = e) : i) !== i ? n = [n, e] : (Le = t, i)) : (Le = t, i)), t }

                function Je() { var t, n, e, r; return 8853 === a.charCodeAt(Le) ? (t = O, Le++) : (t = i, 0 === Fe && Pe(w)), t === i && (t = Le, a.substr(Le, 6) === A ? (n = A, Le += 6) : (n = i, 0 === Fe && Pe(j)), t = n !== i ? (e = Le, Fe++, r = Qe(), Fe--, (e = r !== i ? void(Le = e) : i) !== i ? n = [n, e] : (Le = t, i)) : (Le = t, i)), t }

                function Ke() { var t, n, e, r; return 172 === a.charCodeAt(Le) ? (t = C, Le++) : (t = i, 0 === Fe && Pe(E)), t === i && (t = Le, a.substr(Le, 4) === S ? (n = S, Le += 4) : (n = i, 0 === Fe && Pe($)), (t = n !== i ? (e = Le, Fe++, r = Qe(), Fe--, (e = r !== i ? void(Le = e) : i) !== i ? n = [n, e] : (Le = t, i)) : (Le = t, i)) === i && (t = Le, a.substr(Le, 9) === M ? (n = M, Le += 9) : (n = i, 0 === Fe && Pe(R)), t = n !== i ? (e = Le, Fe++, r = Qe(), Fe--, (e = r !== i ? void(Le = e) : i) !== i ? n = [n, e] : (Le = t, i)) : (Le = t, i))), t }

                function tr() { var t, n, e, r; return t = Le, a.substr(Le, 4) === D ? (n = D, Le += 4) : (n = i, 0 === Fe && Pe(k)), (t = n !== i ? (e = Le, Fe++, r = Qe(), Fe--, (e = r !== i ? void(Le = e) : i) !== i ? n = [n, e] : (Le = t, i)) : (Le = t, i)) === i && (49 === a.charCodeAt(Le) ? (t = L, Le++) : (t = i, 0 === Fe && Pe(z)), t === i && (t = Le, 84 === a.charCodeAt(Le) ? (n = T, Le++) : (n = i, 0 === Fe && Pe(X)), (t = n !== i ? (e = Le, Fe++, r = Qe(), Fe--, (e = r !== i ? void(Le = e) : i) !== i ? n = [n, e] : (Le = t, i)) : (Le = t, i)) === i && (t = Le, 87 === a.charCodeAt(Le) ? (n = B, Le++) : (n = i, 0 === Fe && Pe(F)), (t = n !== i ? (e = Le, Fe++, r = Qe(), Fe--, (e = r !== i ? void(Le = e) : i) !== i ? n = [n, e] : (Le = t, i)) : (Le = t, i)) === i && (8868 === a.charCodeAt(Le) ? (t = _, Le++) : (t = i, 0 === Fe && Pe(N)), t === i && (t = Le, a.substr(Le, 4) === Y ? (n = Y, Le += 4) : (n = i, 0 === Fe && Pe(I)), t = n !== i ? (e = Le, Fe++, r = Qe(), Fe--, (e = r !== i ? void(Le = e) : i) !== i ? n = [n, e] : (Le = t, i)) : (Le = t, i)))))), t }

                function nr() { var t, n, e, r; return t = Le, a.substr(Le, 5) === V ? (n = V, Le += 5) : (n = i, 0 === Fe && Pe(U)), (t = n !== i ? (e = Le, Fe++, r = Qe(), Fe--, (e = r !== i ? void(Le = e) : i) !== i ? n = [n, e] : (Le = t, i)) : (Le = t, i)) === i && (48 === a.charCodeAt(Le) ? (t = P, Le++) : (t = i, 0 === Fe && Pe(Z)), t === i && (t = Le, 70 === a.charCodeAt(Le) ? (n = W, Le++) : (n = i, 0 === Fe && Pe(G)), (t = n !== i ? (e = Le, Fe++, r = Qe(), Fe--, (e = r !== i ? void(Le = e) : i) !== i ? n = [n, e] : (Le = t, i)) : (Le = t, i)) === i && (8869 === a.charCodeAt(Le) ? (t = Q, Le++) : (t = i, 0 === Fe && Pe(q)), t === i && (t = Le, a.substr(Le, 4) === H ? (n = H, Le += 4) : (n = i, 0 === Fe && Pe(J)), t = n !== i ? (e = Le, Fe++, r = Qe(), Fe--, (e = r !== i ? void(Le = e) : i) !== i ? n = [n, e] : (Le = t, i)) : (Le = t, i))))), t }

                function er() { var t, n, e, r; return t = Le, a.substr(Le, 8) === K ? (n = K, Le += 8) : (n = i, 0 === Fe && Pe(tt)), t = n !== i ? (e = Le, Fe++, r = Qe(), Fe--, (e = r !== i ? void(Le = e) : i) !== i ? n = [n, e] : (Le = t, i)) : (Le = t, i) }

                function rr() { var t; return 60 === a.charCodeAt(Le) ? (t = nt, Le++) : (t = i, 0 === Fe && Pe(et)), t }

                function or() { var t; return 62 === a.charCodeAt(Le) ? (t = rt, Le++) : (t = i, 0 === Fe && Pe(ot)), t }

                function ar() { var t, n; return Fe++, t = Le, (n = qe()) !== i && (ze = t, n = ut()), Fe--, (t = n) === i && (n = i, 0 === Fe && Pe(at)), t }

                function ur() { var t, n; return t = Le, (n = Je()) !== i && (ze = t, n = it()), t = n }

                function ir() { var t, n; return Fe++, t = Le, (n = He()) !== i && (ze = t, n = ct()), Fe--, (t = n) === i && (n = i, 0 === Fe && Pe(at)), t }

                function cr() {
                    var t, n, e, r, o;
                    if (n = t = Le, Fe++, e = function() { var t; return (t = Ge()) === i && (t = qe()) === i && (t = He()) === i && (t = Je()) === i && (t = Ke()) === i && (t = tr()) === i && (t = nr()) === i && (t = er()) === i && (t = rr()) === i && (t = or()), t }(), Fe--, (n = e === i ? void 0 : (Le = n, i)) !== i)
                        if (ft.test(a.charAt(Le)) ? (e = a.charAt(Le), Le++) : (e = i, 0 === Fe && Pe(pt)), e !== i) {
                            for (r = [], dt.test(a.charAt(Le)) ? (o = a.charAt(Le), Le++) : (o = i, 0 === Fe && Pe(ht)); o !== i;) r.push(o), dt.test(a.charAt(Le)) ? (o = a.charAt(Le), Le++) : (o = i, 0 === Fe && Pe(ht));
                            t = r !== i ? (ze = t, n = vt(e, r)) : (Le = t, i)
                        } else Le = t, t = i;
                    else Le = t, t = i;
                    if (t === i) {
                        if (t = Le, 34 === a.charCodeAt(Le) ? (n = mt, Le++) : (n = i, 0 === Fe && Pe(bt)), n !== i) {
                            if (e = [], (r = lr()) !== i)
                                for (; r !== i;) e.push(r), r = lr();
                            else e = i;
                            t = e !== i ? (34 === a.charCodeAt(Le) ? (r = mt, Le++) : (r = i, 0 === Fe && Pe(bt)), r !== i ? (ze = t, n = gt(e)) : (Le = t, i)) : (Le = t, i)
                        } else Le = t, t = i;
                        if (t === i)
                            if (t = Le, 39 === a.charCodeAt(Le) ? (n = yt, Le++) : (n = i, 0 === Fe && Pe(xt)), n !== i) {
                                if (e = [], (r = sr()) !== i)
                                    for (; r !== i;) e.push(r), r = sr();
                                else e = i;
                                t = e !== i ? (39 === a.charCodeAt(Le) ? (r = yt, Le++) : (r = i, 0 === Fe && Pe(xt)), r !== i ? (ze = t, n = gt(e)) : (Le = t, i)) : (Le = t, i)
                            } else Le = t, t = i
                    }
                    return t
                }

                function lr() { var t; return (t = fr()) === i && (Ot.test(a.charAt(Le)) ? (t = a.charAt(Le), Le++) : (t = i, 0 === Fe && Pe(wt))), t }

                function sr() { var t; return (t = fr()) === i && (At.test(a.charAt(Le)) ? (t = a.charAt(Le), Le++) : (t = i, 0 === Fe && Pe(jt))), t }

                function fr() { var t, n; return t = Le, a.substr(Le, 2) === Ct ? (n = Ct, Le += 2) : (n = i, 0 === Fe && Pe(Et)), n !== i && (ze = t, n = St()), (t = n) === i && (t = Le, a.substr(Le, 2) === $t ? (n = $t, Le += 2) : (n = i, 0 === Fe && Pe(Mt)), n !== i && (ze = t, n = Rt()), (t = n) === i && (t = Le, a.substr(Le, 2) === Dt ? (n = Dt, Le += 2) : (n = i, 0 === Fe && Pe(kt)), n !== i && (ze = t, n = Lt()), t = n)), t }

                function pr() { var t, n; return t = Le, 49 === a.charCodeAt(Le) ? (n = L, Le++) : (n = i, 0 === Fe && Pe(z)), n !== i && (ze = t, n = zt()), (t = n) === i && (t = Le, 48 === a.charCodeAt(Le) ? (n = P, Le++) : (n = i, 0 === Fe && Pe(Z)), n !== i && (ze = t, n = Tt()), (t = n) === i && (t = Le, 42 === a.charCodeAt(Le) ? (n = _t, Le++) : (n = i, 0 === Fe && Pe(Nt)), n !== i && (ze = t, n = Xt()), t = n)), t }

                function dr() {
                    var t, n, e, r;
                    return t = Le, t = rr() !== i && br() !== i && (n = function() {
                        var t, n, e, r, o, a, u;
                        if (t = Le, (n = Ar()) !== i)
                            if (br() !== i) {
                                if (e = [], r = Le, (r = (o = vr()) !== i && (a = br()) !== i && (u = Ar()) !== i ? o = [o, a, u] : (Le = r, i)) !== i)
                                    for (; r !== i;) e.push(r), r = Le, r = (o = vr()) !== i && (a = br()) !== i && (u = Ar()) !== i ? o = [o, a, u] : (Le = r, i);
                                else e = i;
                                t = e !== i ? (ze = t, n = Bt(n, e)) : (Le = t, i)
                            } else Le = t, t = i;
                        else Le = t, t = i;
                        return t === i && (t = Le, (n = Ar()) !== i && (ze = t, n = Ft(n)), t = n), t
                    }()) !== i && br() !== i ? (58 === a.charCodeAt(Le) ? (e = It, Le++) : (e = i, 0 === Fe && Pe(Vt)), e !== i && br() !== i && (r = function() { var t, n; for (Fe++, t = [], n = pr(); n !== i;) t.push(n), n = pr(); return Fe--, t === i && (n = i, 0 === Fe && Pe(Yt)), t }()) !== i && br() !== i && or() !== i ? (ze = t, Ut(n, r)) : (Le = t, i)) : (Le = t, i)
                }

                function hr() {
                    var t;
                    return (t = function() {
                        var t, n, e, r, o;
                        t = Le, 40 === a.charCodeAt(Le) ? (n = Pt, Le++) : (n = i, 0 === Fe && Pe(Zt));
                        t = n !== i ? (e = br(), e !== i ? (r = yr()) !== i ? br() !== i ? (41 === a.charCodeAt(Le) ? (o = Wt, Le++) : (o = i, 0 === Fe && Pe(Gt)), o !== i ? (ze = t, n = Qt(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i)) : (Le = t, i);
                        t === i && (t = Le, a.substr(Le, 6) === qt ? (n = qt, Le += 6) : (n = i, 0 === Fe && Pe(Ht)), (t = n !== i ? (e = br()) !== i ? (r = yr()) !== i ? br() !== i ? (a.substr(Le, 6) === Jt ? (o = Jt, Le += 6) : (o = i, 0 === Fe && Pe(Kt)), o !== i ? (ze = t, n = tn(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i) : (Le = t, i)) === i && (t = Le, a.substr(Le, 6) === nn ? (n = nn, Le += 6) : (n = i, 0 === Fe && Pe(en)), (t = n !== i ? (e = br()) !== i ? (r = yr()) !== i ? br() !== i ? (a.substr(Le, 6) === rn ? (o = rn, Le += 6) : (o = i, 0 === Fe && Pe(on)), o !== i ? (ze = t, n = an(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i) : (Le = t, i)) === i && (t = Le, a.substr(Le, 7) === un ? (n = un, Le += 7) : (n = i, 0 === Fe && Pe(cn)), (t = n !== i ? (e = br()) !== i ? (r = yr()) !== i ? br() !== i ? (a.substr(Le, 7) === ln ? (o = ln, Le += 7) : (o = i, 0 === Fe && Pe(sn)), o !== i ? (ze = t, n = fn(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i) : (Le = t, i)) === i && (t = Le, a.substr(Le, 7) === pn ? (n = pn, Le += 7) : (n = i, 0 === Fe && Pe(dn)), t = n !== i ? (e = br()) !== i ? (r = yr()) !== i ? br() !== i ? (a.substr(Le, 7) === hn ? (o = hn, Le += 7) : (o = i, 0 === Fe && Pe(vn)), o !== i ? (ze = t, n = mn(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i) : (Le = t, i)))));
                        return t
                    }()) === i && (t = function() {
                        var t, n, e, r, o;
                        t = Le, 91 === a.charCodeAt(Le) ? (n = bn, Le++) : (n = i, 0 === Fe && Pe(gn));
                        t = n !== i ? (e = br(), e !== i ? (r = yr()) !== i ? br() !== i ? (93 === a.charCodeAt(Le) ? (o = yn, Le++) : (o = i, 0 === Fe && Pe(xn)), o !== i ? (ze = t, n = On(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i)) : (Le = t, i);
                        t === i && (t = Le, a.substr(Le, 6) === wn ? (n = wn, Le += 6) : (n = i, 0 === Fe && Pe(An)), (t = n !== i ? (e = br()) !== i ? (r = yr()) !== i ? br() !== i ? (a.substr(Le, 6) === jn ? (o = jn, Le += 6) : (o = i, 0 === Fe && Pe(Cn)), o !== i ? (ze = t, n = En(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i) : (Le = t, i)) === i && (t = Le, a.substr(Le, 6) === Sn ? (n = Sn, Le += 6) : (n = i, 0 === Fe && Pe($n)), (t = n !== i ? (e = br()) !== i ? (r = yr()) !== i ? br() !== i ? (a.substr(Le, 6) === Mn ? (o = Mn, Le += 6) : (o = i, 0 === Fe && Pe(Rn)), o !== i ? (ze = t, n = Dn(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i) : (Le = t, i)) === i && (t = Le, a.substr(Le, 7) === kn ? (n = kn, Le += 7) : (n = i, 0 === Fe && Pe(Ln)), (t = n !== i ? (e = br()) !== i ? (r = yr()) !== i ? br() !== i ? (a.substr(Le, 7) === zn ? (o = zn, Le += 7) : (o = i, 0 === Fe && Pe(Tn)), o !== i ? (ze = t, n = Xn(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i) : (Le = t, i)) === i && (t = Le, a.substr(Le, 7) === Bn ? (n = Bn, Le += 7) : (n = i, 0 === Fe && Pe(Fn)), (t = n !== i ? (e = br()) !== i ? (r = yr()) !== i ? br() !== i ? (a.substr(Le, 7) === _n ? (o = _n, Le += 7) : (o = i, 0 === Fe && Pe(Nn)), o !== i ? (ze = t, n = Yn(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i) : (Le = t, i)) === i && (t = Le, a.substr(Le, 7) === In ? (n = In, Le += 7) : (n = i, 0 === Fe && Pe(Vn)), (t = n !== i ? (e = br()) !== i ? (r = yr()) !== i ? br() !== i ? (a.substr(Le, 7) === Un ? (o = Un, Le += 7) : (o = i, 0 === Fe && Pe(Pn)), o !== i ? (ze = t, n = On(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i) : (Le = t, i)) === i && (t = Le, a.substr(Le, 12) === Zn ? (n = Zn, Le += 12) : (n = i, 0 === Fe && Pe(Wn)), (t = n !== i ? (e = br()) !== i ? (r = yr()) !== i ? br() !== i ? (a.substr(Le, 12) === Gn ? (o = Gn, Le += 12) : (o = i, 0 === Fe && Pe(Qn)), o !== i ? (ze = t, n = En(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i) : (Le = t, i)) === i && (t = Le, a.substr(Le, 12) === qn ? (n = qn, Le += 12) : (n = i, 0 === Fe && Pe(Hn)), (t = n !== i ? (e = br()) !== i ? (r = yr()) !== i ? br() !== i ? (a.substr(Le, 12) === Jn ? (o = Jn, Le += 12) : (o = i, 0 === Fe && Pe(Kn)), o !== i ? (ze = t, n = Dn(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i) : (Le = t, i)) === i && (t = Le, a.substr(Le, 13) === te ? (n = te, Le += 13) : (n = i, 0 === Fe && Pe(ne)), (t = n !== i ? (e = br()) !== i ? (r = yr()) !== i ? br() !== i ? (a.substr(Le, 13) === ee ? (o = ee, Le += 13) : (o = i, 0 === Fe && Pe(re)), o !== i ? (ze = t, n = Xn(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i) : (Le = t, i)) === i && (t = Le, a.substr(Le, 13) === oe ? (n = oe, Le += 13) : (n = i, 0 === Fe && Pe(ae)), t = n !== i ? (e = br()) !== i ? (r = yr()) !== i ? br() !== i ? (a.substr(Le, 13) === ue ? (o = ue, Le += 13) : (o = i, 0 === Fe && Pe(ie)), o !== i ? (ze = t, n = Yn(r)) : (Le = t, i)) : (Le = t, i) : (Le = t, i) : (Le = t, i) : (Le = t, i))))))))));
                        return t
                    }()), t
                }

                function vr() { var t; return Fe++, 44 === a.charCodeAt(Le) ? (t = le, Le++) : (t = i, 0 === Fe && Pe(se)), Fe--, t === i && (i, 0 === Fe && Pe(ce)), t }

                function mr() { var t, n; return Fe++, t = Le, Fe++, a.length > Le ? (n = a.charAt(Le), Le++) : (n = i, 0 === Fe && Pe(pe)), Fe--, t = n === i ? void 0 : (Le = t, i), Fe--, t === i && (n = i, 0 === Fe && Pe(fe)), t }

                function br() { var t, n; for (Fe++, t = [], he.test(a.charAt(Le)) ? (n = a.charAt(Le), Le++) : (n = i, 0 === Fe && Pe(ve)); n !== i;) t.push(n), he.test(a.charAt(Le)) ? (n = a.charAt(Le), Le++) : (n = i, 0 === Fe && Pe(ve)); return Fe--, t === i && (n = i, 0 === Fe && Pe(de)), t }

                function gr() { var t, n, e; return t = Le, (t = (n = function() { var t, n; return Fe++, t = Le, t = br() !== i && (n = cr()) !== i && br() !== i ? (ze = t, be(n)) : (Le = t, i), Fe--, t === i && (i, 0 === Fe && Pe(me)), t }()) !== i && br() !== i && Ge() !== i && br() !== i && (e = yr()) !== i ? (ze = t, n = ge(n, e)) : (Le = t, i)) === i && (t = Le, (n = yr()) !== i && (ze = t, n = ye(n)), t = n), t }

                function yr() {
                    var t, n, e, r, o, a, u;
                    if (t = Le, (n = xr()) !== i)
                        if (br() !== i) {
                            if (e = [], r = Le, (r = (o = ir()) !== i && (a = br()) !== i && (u = xr()) !== i ? o = [o, a, u] : (Le = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = Le, r = (o = ir()) !== i && (a = br()) !== i && (u = xr()) !== i ? o = [o, a, u] : (Le = r, i);
                            else e = i;
                            t = e !== i ? (ze = t, n = xe(n, e)) : (Le = t, i)
                        } else Le = t, t = i;
                    else Le = t, t = i;
                    return t === i && (t = xr()), t
                }

                function xr() {
                    var t, n, e, r, o, a, u;
                    if (t = Le, (n = Or()) !== i)
                        if (br() !== i) {
                            if (e = [], r = Le, (r = (o = ur()) !== i && (a = br()) !== i && (u = Or()) !== i ? o = [o, a, u] : (Le = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = Le, r = (o = ur()) !== i && (a = br()) !== i && (u = Or()) !== i ? o = [o, a, u] : (Le = r, i);
                            else e = i;
                            t = e !== i ? (ze = t, n = xe(n, e)) : (Le = t, i)
                        } else Le = t, t = i;
                    else Le = t, t = i;
                    return t === i && (t = Or()), t
                }

                function Or() {
                    var t, n, e, r, o, a, u;
                    if (t = Le, (n = wr()) !== i)
                        if (br() !== i) {
                            if (e = [], r = Le, (o = ar()) === i && (o = null), (r = o !== i && (a = br()) !== i && (u = wr()) !== i ? o = [o, a, u] : (Le = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = Le, (o = ar()) === i && (o = null), r = o !== i && (a = br()) !== i && (u = wr()) !== i ? o = [o, a, u] : (Le = r, i);
                            else e = i;
                            t = e !== i ? (ze = t, n = Oe(n, e)) : (Le = t, i)
                        } else Le = t, t = i;
                    else Le = t, t = i;
                    return t === i && (t = wr()), t
                }

                function wr() {
                    var t, n;
                    return t = Le, (t = br() !== i && (n = function() {
                        var t, n;
                        Fe++, t = Le, (n = function() { var t, n; return t = Le, (n = tr()) !== i && (ze = t, n = zt()), (t = n) === i && (t = Le, (n = nr()) !== i && (ze = t, n = Tt()), (t = n) === i && (t = Le, (n = er()) !== i && (ze = t, n = Xt()), t = n)), t }()) !== i && (ze = t, n = De(n));
                        (t = n) === i && (t = Le, (n = dr()) !== i && (ze = t, n = ke(n)), t = n);
                        Fe--, t === i && (n = i, 0 === Fe && Pe(Re));
                        return t
                    }()) !== i && br() !== i ? (ze = t, we(n)) : (Le = t, i)) === i && (t = Le, (t = br() !== i && (n = Ar()) !== i && br() !== i ? (ze = t, Ae(n)) : (Le = t, i)) === i && (t = Le, (t = br() !== i && (n = function() {
                        var t, n;
                        t = Le, (n = hr()) !== i && (ze = t, n = Ee(n));
                        return t = n
                    }()) !== i && br() !== i ? (ze = t, je(n)) : (Le = t, i)) === i && (t = Le, t = br() !== i && (n = function() {
                        var t, n, e, r;
                        t = Le, t = (n = function() { var t, n; return Fe++, t = Le, (n = Ke()) !== i && (ze = t, n = st()), Fe--, (t = n) === i && (n = i, 0 === Fe && Pe(lt)), t }()) !== i ? (e = br(), e !== i ? (r = wr()) !== i ? (ze = t, n = Se(n, r)) : (Le = t, i) : (Le = t, i)) : (Le = t, i);
                        return t
                    }()) !== i ? (ze = t, Ce(n)) : (Le = t, i)))), t
                }

                function Ar() { var t, n; return Fe++, t = Le, (n = cr()) !== i && (ze = t, n = Me(n)), Fe--, (t = n) === i && (n = i, 0 === Fe && Pe($e)), t }
                if ((n = r()) !== i && Le === a.length) return n;
                throw n !== i && Le < a.length && Pe({ type: "end" }), Ze(Be, Xe < a.length ? a.charAt(Xe) : null, Xe < a.length ? Ue(Xe, Xe + 1) : Ue(Xe, Xe))
            }
        }
    },
    29:
    /*!**********************************************************!*\
      !*** ./app/components/logic/lib/syntax/logic-math.pegjs ***!
      \**********************************************************/
    /*! no static exports found */
    /*! exports used: default */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(t, n, e) {
        "use strict";

        function oe(t) { return function(t) { if (Array.isArray(t)) { for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n]; return e } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

        function ae(t, n, e, r) { this.message = t, this.expected = n, this.found = e, this.location = r, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, ae) }

        function r() { this.constructor = o }
        var o, a;
        o = ae, a = Error, r.prototype = a.prototype, o.prototype = new r, ae.buildMessage = function(t, n) {
            var e, a = { literal: function(t) { return '"' + o(t.text) + '"' }, class: function(t) { var n, e = ""; for (n = 0; n < t.parts.length; n++) e += t.parts[n] instanceof Array ? u(t.parts[n][0]) + "-" + u(t.parts[n][1]) : u(t.parts[n]); return "[" + (t.inverted ? "^" : "") + e + "]" }, any: function() { return "any character" }, end: function() { return "end of input" }, other: function(t) { return t.description } };

            function r(t) { return t.charCodeAt(0).toString(16).toUpperCase() }

            function o(t) { return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) { return "\\x0" + r(t) }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) { return "\\x" + r(t) }) }

            function u(t) { return t.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) { return "\\x0" + r(t) }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) { return "\\x" + r(t) }) }
            return "Expected " + function(t) {
                var n, e, r, o = new Array(t.length);
                for (n = 0; n < t.length; n++) o[n] = (r = t[n], a[r.type](r));
                if (o.sort(), 0 < o.length) {
                    for (e = n = 1; n < o.length; n++) o[n - 1] !== o[n] && (o[e] = o[n], e++);
                    o.length = e
                }
                switch (o.length) {
                    case 1:
                        return o[0];
                    case 2:
                        return o[0] + " or " + o[1];
                    default:
                        return o.slice(0, -1).join(", ") + ", or " + o[o.length - 1]
                }
            }(t) + " but " + ((e = n) ? '"' + o(e) + '"' : "end of input") + " found."
        }, t.exports = {
            SyntaxError: ae,
            parse: function(a, t) {
                t = void 0 !== t ? t : {};
                var n, i = {},
                    e = { start: $n },
                    r = $n,
                    o = function(t) { return t },
                    u = function() { return [] },
                    c = An("labelOperator"),
                    l = "=",
                    s = On("=", !1),
                    f = /^[^0-9A-Za-z_\-]/,
                    p = wn([
                        ["0", "9"],
                        ["A", "Z"],
                        ["a", "z"], "_", "-"
                    ], !0, !1),
                    d = "*",
                    h = On("*", !1),
                    v = "∧",
                    m = On("∧", !1),
                    b = "+",
                    g = On("+", !1),
                    y = "∨",
                    x = On("∨", !1),
                    O = "⊕",
                    w = On("⊕", !1),
                    A = "-",
                    j = On("-", !1),
                    C = "¬",
                    E = On("¬", !1),
                    S = "true",
                    $ = On("true", !1),
                    M = "1",
                    R = On("1", !1),
                    D = "T",
                    k = On("T", !1),
                    L = "W",
                    z = On("W", !1),
                    T = "⊤",
                    X = On("⊤", !1),
                    B = "false",
                    F = On("false", !1),
                    _ = "0",
                    N = On("0", !1),
                    Y = "F",
                    I = On("F", !1),
                    V = "⊥",
                    U = On("⊥", !1),
                    P = "undefined",
                    Z = On("undefined", !1),
                    W = "Ø",
                    G = On("Ø", !1),
                    Q = "<",
                    q = On("<", !1),
                    H = ">",
                    J = On(">", !1),
                    K = An("binary operator"),
                    tt = function() { return "AND" },
                    nt = function() { return "XOR" },
                    et = function() { return "OR" },
                    rt = An("unary operator"),
                    ot = function() { return "NOT" },
                    at = /^[A-Za-z_]/,
                    ut = wn([
                        ["A", "Z"],
                        ["a", "z"], "_"
                    ], !1, !1),
                    it = /^[\-_a-zA-Z0-9{}]/,
                    ct = wn(["-", "_", ["a", "z"],
                        ["A", "Z"],
                        ["0", "9"], "{", "}"
                    ], !1, !1),
                    lt = function(t, n) { return t + n.join("") },
                    st = '"',
                    ft = On('"', !1),
                    pt = function(t) { return t.join("") },
                    dt = "'",
                    ht = On("'", !1),
                    vt = /^[^"]/,
                    mt = wn(['"'], !0, !1),
                    bt = /^[^']/,
                    gt = wn(["'"], !0, !1),
                    yt = "\\\\",
                    xt = On("\\\\", !1),
                    Ot = function() { return "\\" },
                    wt = "\\'",
                    At = On("\\'", !1),
                    jt = function() { return "'" },
                    Ct = '\\"',
                    Et = On('\\"', !1),
                    St = function() { return '"' },
                    $t = function() { return !0 },
                    Mt = function() { return !1 },
                    Rt = function() { return null },
                    Dt = function(t, n) { return [t].concat(oe(n.map(function(t) { return t[2] }))) },
                    kt = function(t) { return [t] },
                    Lt = An("vectorBody"),
                    zt = ":",
                    Tt = On(":", !1),
                    Xt = function(t, n) {
                        var e = t.length,
                            r = Math.pow(2, e);
                        return r !== n.length && function(t, n) { throw n = void 0 !== n ? n : Cn(vn, hn), Sn([An(t)], a.substring(vn, hn), n) }("Vector with " + e + " identifers to have " + r + " values.", "x"), { identifiers: t, values: n }
                    },
                    Bt = "(",
                    Ft = On("(", !1),
                    _t = ")",
                    Nt = On(")", !1),
                    Yt = function(t) { return { body: t, style: 1 } },
                    It = An("expression separator"),
                    Vt = ",",
                    Ut = On(",", !1),
                    Pt = An("end of input"),
                    Zt = { type: "any" },
                    Wt = An("whitespace"),
                    Gt = /^[ \t\n\r]/,
                    Qt = wn([" ", "\t", "\n", "\r"], !1, !1),
                    qt = An("expressionLabel"),
                    Ht = function(t) { return t },
                    Jt = function(t, n) { return { location: xn(), node: "label", name: t, body: n } },
                    Kt = function(t) { return { location: xn(), node: "label", name: null, body: t } },
                    tn = function(t, n) { return n.reduce(function(t, n) { return { node: "binary", operator: n[0], lhs: t, rhs: n[2] } }, t) },
                    nn = function(t, n) { return n.reduce(function(t, n) { return { node: "binary", operator: n[0] || "AND", lhs: t, rhs: n[2] } }, t) },
                    en = function(t) { return t },
                    rn = function(t) { return t },
                    on = function(t) { return t },
                    an = function(t) { return t },
                    un = function(t) { return { node: "group", body: t.body, style: t.style } },
                    cn = function(t, n) { return { node: "unary", operator: t, operand: n } },
                    ln = An("identifier"),
                    sn = function(t) { return { node: "identifier", name: t } },
                    fn = An("literal"),
                    pn = function(t) { return { node: "constant", value: t } },
                    dn = function(t) { return { node: "vector", vector: t } },
                    hn = 0,
                    vn = 0,
                    mn = [{ line: 1, column: 1 }],
                    bn = 0,
                    gn = [],
                    yn = 0;
                if ("startRule" in t) {
                    if (!(t.startRule in e)) throw new Error("Can't start parsing from rule \"" + t.startRule + '".');
                    r = e[t.startRule]
                }

                function xn() { return Cn(vn, hn) }

                function On(t, n) { return { type: "literal", text: t, ignoreCase: n } }

                function wn(t, n, e) { return { type: "class", parts: t, inverted: n, ignoreCase: e } }

                function An(t) { return { type: "other", description: t } }

                function jn(t) { var n, e = mn[t]; if (e) return e; for (n = t - 1; !mn[n];) n--; for (e = { line: (e = mn[n]).line, column: e.column }; n < t;) 10 === a.charCodeAt(n) ? (e.line++, e.column = 1) : e.column++, n++; return mn[t] = e }

                function Cn(t, n) {
                    var e = jn(t),
                        r = jn(n);
                    return { start: { offset: t, line: e.line, column: e.column }, end: { offset: n, line: r.line, column: r.column } }
                }

                function En(t) { hn < bn || (bn < hn && (bn = hn, gn = []), gn.push(t)) }

                function Sn(t, n, e) { return new ae(ae.buildMessage(t, n), t, n, e) }

                function $n() {
                    var t, n;
                    return t = hn, (t = (n = function() {
                        var t, n, e, r, o, a, u;
                        if (t = hn, (n = Jn()) !== i)
                            if (Hn() !== i) {
                                if (e = [], r = hn, o = Qn(), (r = o !== i ? (a = Hn()) !== i ? (u = Jn()) !== i ? o = [o, a, u] : (hn = r, i) : (hn = r, i) : (hn = r, i)) !== i)
                                    for (; r !== i;) e.push(r), r = hn, o = Qn(), r = o !== i ? (a = Hn()) !== i ? (u = Jn()) !== i ? o = [o, a, u] : (hn = r, i) : (hn = r, i) : (hn = r, i);
                                else e = i;
                                t = e !== i ? (vn = t, n = Dt(n, e)) : (hn = t, i)
                            } else hn = t, t = i;
                        else hn = t, t = i;
                        t === i && (t = hn, (n = Jn()) !== i && (vn = t, n = kt(n)), t = n);
                        return t
                    }()) !== i && qn() !== i ? (vn = t, n = o(n)) : (hn = t, i)) === i && (t = hn, t = (n = Hn()) !== i && qn() !== i ? (vn = t, n = u()) : (hn = t, i)), t
                }

                function Mn() { var t; return yn++, 61 === a.charCodeAt(hn) ? (t = l, hn++) : (t = i, 0 === yn && En(s)), yn--, t === i && (i, 0 === yn && En(c)), t }

                function Rn() { var t; return f.test(a.charAt(hn)) ? (t = a.charAt(hn), hn++) : (t = i, 0 === yn && En(p)), t === i && (t = qn()), t }

                function Dn() { var t; return 42 === a.charCodeAt(hn) ? (t = d, hn++) : (t = i, 0 === yn && En(h)), t === i && (8743 === a.charCodeAt(hn) ? (t = v, hn++) : (t = i, 0 === yn && En(m))), t }

                function kn() { var t; return 43 === a.charCodeAt(hn) ? (t = b, hn++) : (t = i, 0 === yn && En(g)), t === i && (8744 === a.charCodeAt(hn) ? (t = y, hn++) : (t = i, 0 === yn && En(x))), t }

                function Ln() { var t; return 8853 === a.charCodeAt(hn) ? (t = O, hn++) : (t = i, 0 === yn && En(w)), t }

                function zn() { var t; return 45 === a.charCodeAt(hn) ? (t = A, hn++) : (t = i, 0 === yn && En(j)), t === i && (172 === a.charCodeAt(hn) ? (t = C, hn++) : (t = i, 0 === yn && En(E))), t }

                function Tn() { var t, n, e, r; return t = hn, a.substr(hn, 4) === S ? (n = S, hn += 4) : (n = i, 0 === yn && En($)), (t = n !== i ? (e = hn, yn++, r = Rn(), yn--, (e = r !== i ? void(hn = e) : i) !== i ? n = [n, e] : (hn = t, i)) : (hn = t, i)) === i && (49 === a.charCodeAt(hn) ? (t = M, hn++) : (t = i, 0 === yn && En(R)), t === i && (t = hn, 84 === a.charCodeAt(hn) ? (n = D, hn++) : (n = i, 0 === yn && En(k)), (t = n !== i ? (e = hn, yn++, r = Rn(), yn--, (e = r !== i ? void(hn = e) : i) !== i ? n = [n, e] : (hn = t, i)) : (hn = t, i)) === i && (t = hn, 87 === a.charCodeAt(hn) ? (n = L, hn++) : (n = i, 0 === yn && En(z)), (t = n !== i ? (e = hn, yn++, r = Rn(), yn--, (e = r !== i ? void(hn = e) : i) !== i ? n = [n, e] : (hn = t, i)) : (hn = t, i)) === i && (8868 === a.charCodeAt(hn) ? (t = T, hn++) : (t = i, 0 === yn && En(X)))))), t }

                function Xn() { var t, n, e, r; return t = hn, a.substr(hn, 5) === B ? (n = B, hn += 5) : (n = i, 0 === yn && En(F)), (t = n !== i ? (e = hn, yn++, r = Rn(), yn--, (e = r !== i ? void(hn = e) : i) !== i ? n = [n, e] : (hn = t, i)) : (hn = t, i)) === i && (48 === a.charCodeAt(hn) ? (t = _, hn++) : (t = i, 0 === yn && En(N)), t === i && (t = hn, 70 === a.charCodeAt(hn) ? (n = Y, hn++) : (n = i, 0 === yn && En(I)), (t = n !== i ? (e = hn, yn++, r = Rn(), yn--, (e = r !== i ? void(hn = e) : i) !== i ? n = [n, e] : (hn = t, i)) : (hn = t, i)) === i && (8869 === a.charCodeAt(hn) ? (t = V, hn++) : (t = i, 0 === yn && En(U))))), t }

                function Bn() { var t, n, e, r; return t = hn, a.substr(hn, 9) === P ? (n = P, hn += 9) : (n = i, 0 === yn && En(Z)), (t = n !== i ? (e = hn, yn++, r = Rn(), yn--, (e = r !== i ? void(hn = e) : i) !== i ? n = [n, e] : (hn = t, i)) : (hn = t, i)) === i && (216 === a.charCodeAt(hn) ? (t = W, hn++) : (t = i, 0 === yn && En(G))), t }

                function Fn() { var t; return 60 === a.charCodeAt(hn) ? (t = Q, hn++) : (t = i, 0 === yn && En(q)), t }

                function _n() { var t; return 62 === a.charCodeAt(hn) ? (t = H, hn++) : (t = i, 0 === yn && En(J)), t }

                function Nn() { var t, n; return yn++, t = hn, (n = Dn()) !== i && (vn = t, n = tt()), yn--, (t = n) === i && (n = i, 0 === yn && En(K)), t }

                function Yn() { var t, n; return t = hn, (n = Ln()) !== i && (vn = t, n = nt()), t = n }

                function In() { var t, n; return yn++, t = hn, (n = kn()) !== i && (vn = t, n = et()), yn--, (t = n) === i && (n = i, 0 === yn && En(K)), t }

                function Vn() {
                    var t, n, e, r, o;
                    if (n = t = hn, yn++, e = function() { var t; return (t = Mn()) === i && (t = Dn()) === i && (t = kn()) === i && (t = Ln()) === i && (t = zn()) === i && (t = Tn()) === i && (t = Xn()) === i && (t = Bn()) === i && (t = Fn()) === i && (t = _n()), t }(), yn--, (n = e === i ? void 0 : (hn = n, i)) !== i)
                        if (at.test(a.charAt(hn)) ? (e = a.charAt(hn), hn++) : (e = i, 0 === yn && En(ut)), e !== i) {
                            for (r = [], it.test(a.charAt(hn)) ? (o = a.charAt(hn), hn++) : (o = i, 0 === yn && En(ct)); o !== i;) r.push(o), it.test(a.charAt(hn)) ? (o = a.charAt(hn), hn++) : (o = i, 0 === yn && En(ct));
                            t = r !== i ? (vn = t, n = lt(e, r)) : (hn = t, i)
                        } else hn = t, t = i;
                    else hn = t, t = i;
                    if (t === i) {
                        if (t = hn, 34 === a.charCodeAt(hn) ? (n = st, hn++) : (n = i, 0 === yn && En(ft)), n !== i) {
                            if (e = [], (r = Un()) !== i)
                                for (; r !== i;) e.push(r), r = Un();
                            else e = i;
                            t = e !== i ? (34 === a.charCodeAt(hn) ? (r = st, hn++) : (r = i, 0 === yn && En(ft)), r !== i ? (vn = t, n = pt(e)) : (hn = t, i)) : (hn = t, i)
                        } else hn = t, t = i;
                        if (t === i)
                            if (t = hn, 39 === a.charCodeAt(hn) ? (n = dt, hn++) : (n = i, 0 === yn && En(ht)), n !== i) {
                                if (e = [], (r = Pn()) !== i)
                                    for (; r !== i;) e.push(r), r = Pn();
                                else e = i;
                                t = e !== i ? (39 === a.charCodeAt(hn) ? (r = dt, hn++) : (r = i, 0 === yn && En(ht)), r !== i ? (vn = t, n = pt(e)) : (hn = t, i)) : (hn = t, i)
                            } else hn = t, t = i
                    }
                    return t
                }

                function Un() { var t; return (t = Zn()) === i && (vt.test(a.charAt(hn)) ? (t = a.charAt(hn), hn++) : (t = i, 0 === yn && En(mt))), t }

                function Pn() { var t; return (t = Zn()) === i && (bt.test(a.charAt(hn)) ? (t = a.charAt(hn), hn++) : (t = i, 0 === yn && En(gt))), t }

                function Zn() { var t, n; return t = hn, a.substr(hn, 2) === yt ? (n = yt, hn += 2) : (n = i, 0 === yn && En(xt)), n !== i && (vn = t, n = Ot()), (t = n) === i && (t = hn, a.substr(hn, 2) === wt ? (n = wt, hn += 2) : (n = i, 0 === yn && En(At)), n !== i && (vn = t, n = jt()), (t = n) === i && (t = hn, a.substr(hn, 2) === Ct ? (n = Ct, hn += 2) : (n = i, 0 === yn && En(Et)), n !== i && (vn = t, n = St()), t = n)), t }

                function Wn() { var t, n; return t = hn, 49 === a.charCodeAt(hn) ? (n = M, hn++) : (n = i, 0 === yn && En(R)), n !== i && (vn = t, n = $t()), (t = n) === i && (t = hn, 48 === a.charCodeAt(hn) ? (n = _, hn++) : (n = i, 0 === yn && En(N)), n !== i && (vn = t, n = Mt()), (t = n) === i && (t = hn, 42 === a.charCodeAt(hn) ? (n = d, hn++) : (n = i, 0 === yn && En(h)), n !== i && (vn = t, n = Rt()), t = n)), t }

                function Gn() {
                    var t, n, e, r;
                    return t = hn, t = Fn() !== i && Hn() !== i && (n = function() {
                        var t, n, e, r, o, a, u;
                        if (t = hn, (n = re()) !== i)
                            if (Hn() !== i) {
                                if (e = [], r = hn, (r = (o = Qn()) !== i && (a = Hn()) !== i && (u = re()) !== i ? o = [o, a, u] : (hn = r, i)) !== i)
                                    for (; r !== i;) e.push(r), r = hn, r = (o = Qn()) !== i && (a = Hn()) !== i && (u = re()) !== i ? o = [o, a, u] : (hn = r, i);
                                else e = i;
                                t = e !== i ? (vn = t, n = Dt(n, e)) : (hn = t, i)
                            } else hn = t, t = i;
                        else hn = t, t = i;
                        return t === i && (t = hn, (n = re()) !== i && (vn = t, n = kt(n)), t = n), t
                    }()) !== i && Hn() !== i ? (58 === a.charCodeAt(hn) ? (e = zt, hn++) : (e = i, 0 === yn && En(Tt)), e !== i && Hn() !== i && (r = function() { var t, n; for (yn++, t = [], n = Wn(); n !== i;) t.push(n), n = Wn(); return yn--, t === i && (n = i, 0 === yn && En(Lt)), t }()) !== i && Hn() !== i && _n() !== i ? (vn = t, Xt(n, r)) : (hn = t, i)) : (hn = t, i)
                }

                function Qn() { var t; return yn++, 44 === a.charCodeAt(hn) ? (t = Vt, hn++) : (t = i, 0 === yn && En(Ut)), yn--, t === i && (i, 0 === yn && En(It)), t }

                function qn() { var t, n; return yn++, t = hn, yn++, a.length > hn ? (n = a.charAt(hn), hn++) : (n = i, 0 === yn && En(Zt)), yn--, t = n === i ? void 0 : (hn = t, i), yn--, t === i && (n = i, 0 === yn && En(Pt)), t }

                function Hn() { var t, n; for (yn++, t = [], Gt.test(a.charAt(hn)) ? (n = a.charAt(hn), hn++) : (n = i, 0 === yn && En(Qt)); n !== i;) t.push(n), Gt.test(a.charAt(hn)) ? (n = a.charAt(hn), hn++) : (n = i, 0 === yn && En(Qt)); return yn--, t === i && (n = i, 0 === yn && En(Wt)), t }

                function Jn() { var t, n, e; return t = hn, (t = (n = function() { var t, n; return yn++, t = hn, t = Hn() !== i && (n = Vn()) !== i && Hn() !== i ? (vn = t, Ht(n)) : (hn = t, i), yn--, t === i && (i, 0 === yn && En(qt)), t }()) !== i && Hn() !== i && Mn() !== i && Hn() !== i && (e = Kn()) !== i ? (vn = t, n = Jt(n, e)) : (hn = t, i)) === i && (t = hn, (n = Kn()) !== i && (vn = t, n = Kt(n)), t = n), t }

                function Kn() {
                    var t, n, e, r, o, a, u;
                    if (t = hn, (n = te()) !== i)
                        if (Hn() !== i) {
                            if (e = [], r = hn, (r = (o = In()) !== i && (a = Hn()) !== i && (u = te()) !== i ? o = [o, a, u] : (hn = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = hn, r = (o = In()) !== i && (a = Hn()) !== i && (u = te()) !== i ? o = [o, a, u] : (hn = r, i);
                            else e = i;
                            t = e !== i ? (vn = t, n = tn(n, e)) : (hn = t, i)
                        } else hn = t, t = i;
                    else hn = t, t = i;
                    return t === i && (t = te()), t
                }

                function te() {
                    var t, n, e, r, o, a, u;
                    if (t = hn, (n = ne()) !== i)
                        if (Hn() !== i) {
                            if (e = [], r = hn, (r = (o = Yn()) !== i && (a = Hn()) !== i && (u = ne()) !== i ? o = [o, a, u] : (hn = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = hn, r = (o = Yn()) !== i && (a = Hn()) !== i && (u = ne()) !== i ? o = [o, a, u] : (hn = r, i);
                            else e = i;
                            t = e !== i ? (vn = t, n = tn(n, e)) : (hn = t, i)
                        } else hn = t, t = i;
                    else hn = t, t = i;
                    return t === i && (t = ne()), t
                }

                function ne() {
                    var t, n, e, r, o, a, u;
                    if (t = hn, (n = ee()) !== i)
                        if (Hn() !== i) {
                            if (e = [], r = hn, (o = Nn()) === i && (o = null), (r = o !== i && (a = Hn()) !== i && (u = ee()) !== i ? o = [o, a, u] : (hn = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = hn, (o = Nn()) === i && (o = null), r = o !== i && (a = Hn()) !== i && (u = ee()) !== i ? o = [o, a, u] : (hn = r, i);
                            else e = i;
                            t = e !== i ? (vn = t, n = nn(n, e)) : (hn = t, i)
                        } else hn = t, t = i;
                    else hn = t, t = i;
                    return t === i && (t = ee()), t
                }

                function ee() {
                    var t, n;
                    return t = hn, (t = Hn() !== i && (n = function() {
                        var t, n;
                        yn++, t = hn, (n = function() { var t, n; return t = hn, (n = Tn()) !== i && (vn = t, n = $t()), (t = n) === i && (t = hn, (n = Xn()) !== i && (vn = t, n = Mt()), (t = n) === i && (t = hn, (n = Bn()) !== i && (vn = t, n = Rt()), t = n)), t }()) !== i && (vn = t, n = pn(n));
                        (t = n) === i && (t = hn, (n = Gn()) !== i && (vn = t, n = dn(n)), t = n);
                        yn--, t === i && (n = i, 0 === yn && En(fn));
                        return t
                    }()) !== i && Hn() !== i ? (vn = t, en(n)) : (hn = t, i)) === i && (t = hn, (t = Hn() !== i && (n = re()) !== i && Hn() !== i ? (vn = t, rn(n)) : (hn = t, i)) === i && (t = hn, (t = Hn() !== i && (n = function() {
                        var t, n;
                        t = hn, (n = function() { var t, n, e, r; return t = hn, 40 === a.charCodeAt(hn) ? (n = Bt, hn++) : (n = i, 0 === yn && En(Ft)), t = n !== i && Hn() !== i && (e = Kn()) !== i && Hn() !== i ? (41 === a.charCodeAt(hn) ? (r = _t, hn++) : (r = i, 0 === yn && En(Nt)), r !== i ? (vn = t, n = Yt(e)) : (hn = t, i)) : (hn = t, i) }()) !== i && (vn = t, n = un(n));
                        return t = n
                    }()) !== i && Hn() !== i ? (vn = t, on(n)) : (hn = t, i)) === i && (t = hn, t = Hn() !== i && (n = function() {
                        var t, n, e, r;
                        t = hn, t = (n = function() { var t, n; return yn++, t = hn, (n = zn()) !== i && (vn = t, n = ot()), yn--, (t = n) === i && (n = i, 0 === yn && En(rt)), t }()) !== i ? (e = Hn(), e !== i ? (r = ee()) !== i ? (vn = t, n = cn(n, r)) : (hn = t, i) : (hn = t, i)) : (hn = t, i);
                        return t
                    }()) !== i ? (vn = t, an(n)) : (hn = t, i)))), t
                }

                function re() { var t, n; return yn++, t = hn, (n = Vn()) !== i && (vn = t, n = sn(n)), yn--, (t = n) === i && (n = i, 0 === yn && En(ln)), t }
                if ((n = r()) !== i && hn === a.length) return n;
                throw n !== i && hn < a.length && En({ type: "end" }), Sn(gn, bn < a.length ? a.charAt(bn) : null, bn < a.length ? Cn(bn, bn + 1) : Cn(bn, bn))
            }
        }
    },
    3:
    /*!**************************!*\
      !*** ./app/lib/utils.js ***!
      \**************************/
    /*! exports provided: memoize, pluck, clamp, padLeft, compose */
    /*! exports used: clamp, compose, memoize, padLeft, pluck */
        function(t, n, e) {
        "use strict";
        e.d(n, "c", function() { return r }), e.d(n, "e", function() { return o }), e.d(n, "a", function() { return a }), e.d(n, "d", function() { return u }), e.d(n, "b", function() { return i });
        var r = function(o) { var a = {}; return function(t) { for (var n = arguments.length, e = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r]; return 0 < e.length || "string" != typeof t && "number" != typeof t ? o.apply(void 0, [t].concat(e)) : a.hasOwnProperty() ? a[t] : a[t] = o(t) } },
            o = function(n) { return function(t) { return t[n] } },
            a = function(t, n, e) { return Math.min(Math.max(t, n), e) },
            u = function(t, n, e) { return Array(n - String(t).length + 1).join(e) + t },
            i = function() { for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e]; return function(t) { return n.reduce(function(t, n) { return n(t) }, t) } }
    },
    30:
    /*!************************************************************!*\
      !*** ./app/components/logic/lib/syntax/logic-python.pegjs ***!
      \************************************************************/
    /*! no static exports found */
    /*! exports used: default */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(t, n, e) {
        "use strict";

        function On(t) { return function(t) { if (Array.isArray(t)) { for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n]; return e } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

        function wn(t, n, e, r) { this.message = t, this.expected = n, this.found = e, this.location = r, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, wn) }

        function r() { this.constructor = o }
        var o, a;
        o = wn, a = Error, r.prototype = a.prototype, o.prototype = new r, wn.buildMessage = function(t, n) {
            var e, a = { literal: function(t) { return '"' + o(t.text) + '"' }, class: function(t) { var n, e = ""; for (n = 0; n < t.parts.length; n++) e += t.parts[n] instanceof Array ? u(t.parts[n][0]) + "-" + u(t.parts[n][1]) : u(t.parts[n]); return "[" + (t.inverted ? "^" : "") + e + "]" }, any: function() { return "any character" }, end: function() { return "end of input" }, other: function(t) { return t.description } };

            function r(t) { return t.charCodeAt(0).toString(16).toUpperCase() }

            function o(t) { return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) { return "\\x0" + r(t) }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) { return "\\x" + r(t) }) }

            function u(t) { return t.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) { return "\\x0" + r(t) }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) { return "\\x" + r(t) }) }
            return "Expected " + function(t) {
                var n, e, r, o = new Array(t.length);
                for (n = 0; n < t.length; n++) o[n] = (r = t[n], a[r.type](r));
                if (o.sort(), 0 < o.length) {
                    for (e = n = 1; n < o.length; n++) o[n - 1] !== o[n] && (o[e] = o[n], e++);
                    o.length = e
                }
                switch (o.length) {
                    case 1:
                        return o[0];
                    case 2:
                        return o[0] + " or " + o[1];
                    default:
                        return o.slice(0, -1).join(", ") + ", or " + o[o.length - 1]
                }
            }(t) + " but " + ((e = n) ? '"' + o(e) + '"' : "end of input") + " found."
        }, t.exports = {
            SyntaxError: wn,
            parse: function(u, t) {
                t = void 0 !== t ? t : {};
                var n, i = {},
                    e = { start: Wt },
                    r = Wt,
                    o = function(t) { return t },
                    a = function() { return [] },
                    c = It("labelOperator"),
                    l = "=",
                    s = Nt("=", !1),
                    f = /^[^0-9A-Za-z_\-]/,
                    p = Yt([
                        ["0", "9"],
                        ["A", "Z"],
                        ["a", "z"], "_", "-"
                    ], !0, !1),
                    d = "and",
                    h = Nt("and", !1),
                    v = "or",
                    m = Nt("or", !1),
                    b = "xor",
                    g = Nt("xor", !1),
                    y = "not",
                    x = Nt("not", !1),
                    O = "True",
                    w = Nt("True", !1),
                    A = "1",
                    j = Nt("1", !1),
                    C = "False",
                    E = Nt("False", !1),
                    S = "0",
                    $ = Nt("0", !1),
                    M = "None",
                    R = Nt("None", !1),
                    D = "<",
                    k = Nt("<", !1),
                    L = ">",
                    z = Nt(">", !1),
                    T = It("binary operator"),
                    X = function() { return "AND" },
                    B = function() { return "XOR" },
                    F = function() { return "OR" },
                    _ = It("unary operator"),
                    N = function() { return "NOT" },
                    Y = /^[A-Za-z_]/,
                    I = Yt([
                        ["A", "Z"],
                        ["a", "z"], "_"
                    ], !1, !1),
                    V = /^[_a-zA-Z0-9]/,
                    U = Yt(["_", ["a", "z"],
                        ["A", "Z"],
                        ["0", "9"]
                    ], !1, !1),
                    P = function(t) { return t[0] + t[1].reduce(function(t, n) { return t + n }, "") },
                    Z = function() { return !0 },
                    W = function() { return !1 },
                    G = function() { return null },
                    Q = function(t, n) { return [t].concat(On(n.map(function(t) { return t[2] }))) },
                    q = function(t) { return [t] },
                    H = "*",
                    J = Nt("*", !1),
                    K = It("vectorBody"),
                    tt = ":",
                    nt = Nt(":", !1),
                    et = function(t, n) {
                        var e = t.length,
                            r = Math.pow(2, e);
                        return r !== n.length && function(t, n) { throw n = void 0 !== n ? n : Ut(zt, Lt), Zt([It(t)], u.substring(zt, Lt), n) }("Vector with " + e + " identifers to have " + r + " values.", "x"), { identifiers: t, values: n }
                    },
                    rt = "(",
                    ot = Nt("(", !1),
                    at = ")",
                    ut = Nt(")", !1),
                    it = function(t) { return { body: t, style: 1 } },
                    ct = It("expression separator"),
                    lt = ",",
                    st = Nt(",", !1),
                    ft = It("end of input"),
                    pt = { type: "any" },
                    dt = It("whitespace"),
                    ht = /^[ \t\n\r]/,
                    vt = Yt([" ", "\t", "\n", "\r"], !1, !1),
                    mt = It("expressionLabel"),
                    bt = function(t) { return t },
                    gt = function(t, n) { return { location: _t(), node: "label", name: t, body: n } },
                    yt = function(t) { return { location: _t(), node: "label", name: null, body: t } },
                    xt = function(t, n) { return n.reduce(function(t, n) { return { node: "binary", operator: n[0], lhs: t, rhs: n[2] } }, t) },
                    Ot = function(t, n) { return n.reduce(function(t, n) { return { node: "binary", operator: n[0] || "AND", lhs: t, rhs: n[2] } }, t) },
                    wt = function(t) { return t },
                    At = function(t) { return t },
                    jt = function(t) { return t },
                    Ct = function(t) { return t },
                    Et = function(t) { return { node: "group", body: t.body, style: t.style } },
                    St = function(t, n) { return { node: "unary", operator: t, operand: n } },
                    $t = It("identifier"),
                    Mt = function(t) { return { node: "identifier", name: t } },
                    Rt = It("literal"),
                    Dt = function(t) { return { node: "constant", value: t } },
                    kt = function(t) { return { node: "vector", vector: t } },
                    Lt = 0,
                    zt = 0,
                    Tt = [{ line: 1, column: 1 }],
                    Xt = 0,
                    Bt = [],
                    Ft = 0;
                if ("startRule" in t) {
                    if (!(t.startRule in e)) throw new Error("Can't start parsing from rule \"" + t.startRule + '".');
                    r = e[t.startRule]
                }

                function _t() { return Ut(zt, Lt) }

                function Nt(t, n) { return { type: "literal", text: t, ignoreCase: n } }

                function Yt(t, n, e) { return { type: "class", parts: t, inverted: n, ignoreCase: e } }

                function It(t) { return { type: "other", description: t } }

                function Vt(t) { var n, e = Tt[t]; if (e) return e; for (n = t - 1; !Tt[n];) n--; for (e = { line: (e = Tt[n]).line, column: e.column }; n < t;) 10 === u.charCodeAt(n) ? (e.line++, e.column = 1) : e.column++, n++; return Tt[t] = e }

                function Ut(t, n) {
                    var e = Vt(t),
                        r = Vt(n);
                    return { start: { offset: t, line: e.line, column: e.column }, end: { offset: n, line: r.line, column: r.column } }
                }

                function Pt(t) { Lt < Xt || (Xt < Lt && (Xt = Lt, Bt = []), Bt.push(t)) }

                function Zt(t, n, e) { return new wn(wn.buildMessage(t, n), t, n, e) }

                function Wt() {
                    var t, n;
                    return t = Lt, (t = (n = function() {
                        var t, n, e, r, o, a, u;
                        if (t = Lt, (n = vn()) !== i)
                            if (hn() !== i) {
                                if (e = [], r = Lt, o = pn(), (r = o !== i ? (a = hn()) !== i ? (u = vn()) !== i ? o = [o, a, u] : (Lt = r, i) : (Lt = r, i) : (Lt = r, i)) !== i)
                                    for (; r !== i;) e.push(r), r = Lt, o = pn(), r = o !== i ? (a = hn()) !== i ? (u = vn()) !== i ? o = [o, a, u] : (Lt = r, i) : (Lt = r, i) : (Lt = r, i);
                                else e = i;
                                t = e !== i ? (zt = t, n = Q(n, e)) : (Lt = t, i)
                            } else Lt = t, t = i;
                        else Lt = t, t = i;
                        t === i && (t = Lt, (n = vn()) !== i && (zt = t, n = q(n)), t = n);
                        return t
                    }()) !== i && dn() !== i ? (zt = t, n = o(n)) : (Lt = t, i)) === i && (t = Lt, t = (n = hn()) !== i && dn() !== i ? (zt = t, n = a()) : (Lt = t, i)), t
                }

                function Gt() { var t; return Ft++, 61 === u.charCodeAt(Lt) ? (t = l, Lt++) : (t = i, 0 === Ft && Pt(s)), Ft--, t === i && (i, 0 === Ft && Pt(c)), t }

                function Qt() { var t; return f.test(u.charAt(Lt)) ? (t = u.charAt(Lt), Lt++) : (t = i, 0 === Ft && Pt(p)), t === i && (t = dn()), t }

                function qt() { var t, n, e, r; return t = Lt, u.substr(Lt, 3) === d ? (n = d, Lt += 3) : (n = i, 0 === Ft && Pt(h)), t = n !== i ? (e = Lt, Ft++, r = Qt(), Ft--, (e = r !== i ? void(Lt = e) : i) !== i ? n = [n, e] : (Lt = t, i)) : (Lt = t, i) }

                function Ht() { var t, n, e, r; return t = Lt, u.substr(Lt, 2) === v ? (n = v, Lt += 2) : (n = i, 0 === Ft && Pt(m)), t = n !== i ? (e = Lt, Ft++, r = Qt(), Ft--, (e = r !== i ? void(Lt = e) : i) !== i ? n = [n, e] : (Lt = t, i)) : (Lt = t, i) }

                function Jt() { var t, n, e, r; return t = Lt, u.substr(Lt, 3) === b ? (n = b, Lt += 3) : (n = i, 0 === Ft && Pt(g)), t = n !== i ? (e = Lt, Ft++, r = Qt(), Ft--, (e = r !== i ? void(Lt = e) : i) !== i ? n = [n, e] : (Lt = t, i)) : (Lt = t, i) }

                function Kt() { var t, n, e, r; return t = Lt, u.substr(Lt, 3) === y ? (n = y, Lt += 3) : (n = i, 0 === Ft && Pt(x)), t = n !== i ? (e = Lt, Ft++, r = Qt(), Ft--, (e = r !== i ? void(Lt = e) : i) !== i ? n = [n, e] : (Lt = t, i)) : (Lt = t, i) }

                function tn() { var t, n, e, r; return t = Lt, u.substr(Lt, 4) === O ? (n = O, Lt += 4) : (n = i, 0 === Ft && Pt(w)), (t = n !== i ? (e = Lt, Ft++, r = Qt(), Ft--, (e = r !== i ? void(Lt = e) : i) !== i ? n = [n, e] : (Lt = t, i)) : (Lt = t, i)) === i && (49 === u.charCodeAt(Lt) ? (t = A, Lt++) : (t = i, 0 === Ft && Pt(j))), t }

                function nn() { var t, n, e, r; return t = Lt, u.substr(Lt, 5) === C ? (n = C, Lt += 5) : (n = i, 0 === Ft && Pt(E)), (t = n !== i ? (e = Lt, Ft++, r = Qt(), Ft--, (e = r !== i ? void(Lt = e) : i) !== i ? n = [n, e] : (Lt = t, i)) : (Lt = t, i)) === i && (48 === u.charCodeAt(Lt) ? (t = S, Lt++) : (t = i, 0 === Ft && Pt($))), t }

                function en() { var t, n, e, r; return t = Lt, u.substr(Lt, 4) === M ? (n = M, Lt += 4) : (n = i, 0 === Ft && Pt(R)), t = n !== i ? (e = Lt, Ft++, r = Qt(), Ft--, (e = r !== i ? void(Lt = e) : i) !== i ? n = [n, e] : (Lt = t, i)) : (Lt = t, i) }

                function rn() { var t; return 60 === u.charCodeAt(Lt) ? (t = D, Lt++) : (t = i, 0 === Ft && Pt(k)), t }

                function on() { var t; return 62 === u.charCodeAt(Lt) ? (t = L, Lt++) : (t = i, 0 === Ft && Pt(z)), t }

                function an() { var t, n; return Ft++, t = Lt, (n = qt()) !== i && (zt = t, n = X()), Ft--, (t = n) === i && (n = i, 0 === Ft && Pt(T)), t }

                function un() { var t, n; return t = Lt, (n = Jt()) !== i && (zt = t, n = B()), t = n }

                function cn() { var t, n; return Ft++, t = Lt, (n = Ht()) !== i && (zt = t, n = F()), Ft--, (t = n) === i && (n = i, 0 === Ft && Pt(T)), t }

                function ln() {
                    var t, n, e, r, o, a;
                    if (n = t = Lt, Ft++, e = function() { var t; return (t = Gt()) === i && (t = qt()) === i && (t = Ht()) === i && (t = Jt()) === i && (t = Kt()) === i && (t = tn()) === i && (t = nn()) === i && (t = en()) === i && (t = rn()) === i && (t = on()), t }(), Ft--, (n = e === i ? void 0 : (Lt = n, i)) !== i) {
                        if (e = Lt, Y.test(u.charAt(Lt)) ? (r = u.charAt(Lt), Lt++) : (r = i, 0 === Ft && Pt(I)), r !== i) {
                            for (o = [], V.test(u.charAt(Lt)) ? (a = u.charAt(Lt), Lt++) : (a = i, 0 === Ft && Pt(U)); a !== i;) o.push(a), V.test(u.charAt(Lt)) ? (a = u.charAt(Lt), Lt++) : (a = i, 0 === Ft && Pt(U));
                            e = o !== i ? r = [r, o] : (Lt = e, i)
                        } else Lt = e, e = i;
                        t = e !== i ? (zt = t, n = P(e)) : (Lt = t, i)
                    } else Lt = t, t = i;
                    return t
                }

                function sn() { var t, n; return t = Lt, 49 === u.charCodeAt(Lt) ? (n = A, Lt++) : (n = i, 0 === Ft && Pt(j)), n !== i && (zt = t, n = Z()), (t = n) === i && (t = Lt, 48 === u.charCodeAt(Lt) ? (n = S, Lt++) : (n = i, 0 === Ft && Pt($)), n !== i && (zt = t, n = W()), (t = n) === i && (t = Lt, 42 === u.charCodeAt(Lt) ? (n = H, Lt++) : (n = i, 0 === Ft && Pt(J)), n !== i && (zt = t, n = G()), t = n)), t }

                function fn() {
                    var t, n, e, r;
                    return t = Lt, t = rn() !== i && hn() !== i && (n = function() {
                        var t, n, e, r, o, a, u;
                        if (t = Lt, (n = xn()) !== i)
                            if (hn() !== i) {
                                if (e = [], r = Lt, (r = (o = pn()) !== i && (a = hn()) !== i && (u = xn()) !== i ? o = [o, a, u] : (Lt = r, i)) !== i)
                                    for (; r !== i;) e.push(r), r = Lt, r = (o = pn()) !== i && (a = hn()) !== i && (u = xn()) !== i ? o = [o, a, u] : (Lt = r, i);
                                else e = i;
                                t = e !== i ? (zt = t, n = Q(n, e)) : (Lt = t, i)
                            } else Lt = t, t = i;
                        else Lt = t, t = i;
                        return t === i && (t = Lt, (n = xn()) !== i && (zt = t, n = q(n)), t = n), t
                    }()) !== i && hn() !== i ? (58 === u.charCodeAt(Lt) ? (e = tt, Lt++) : (e = i, 0 === Ft && Pt(nt)), e !== i && hn() !== i && (r = function() { var t, n; for (Ft++, t = [], n = sn(); n !== i;) t.push(n), n = sn(); return Ft--, t === i && (n = i, 0 === Ft && Pt(K)), t }()) !== i && hn() !== i && on() !== i ? (zt = t, et(n, r)) : (Lt = t, i)) : (Lt = t, i)
                }

                function pn() { var t; return Ft++, 44 === u.charCodeAt(Lt) ? (t = lt, Lt++) : (t = i, 0 === Ft && Pt(st)), Ft--, t === i && (i, 0 === Ft && Pt(ct)), t }

                function dn() { var t, n; return Ft++, t = Lt, Ft++, u.length > Lt ? (n = u.charAt(Lt), Lt++) : (n = i, 0 === Ft && Pt(pt)), Ft--, t = n === i ? void 0 : (Lt = t, i), Ft--, t === i && (n = i, 0 === Ft && Pt(ft)), t }

                function hn() { var t, n; for (Ft++, t = [], ht.test(u.charAt(Lt)) ? (n = u.charAt(Lt), Lt++) : (n = i, 0 === Ft && Pt(vt)); n !== i;) t.push(n), ht.test(u.charAt(Lt)) ? (n = u.charAt(Lt), Lt++) : (n = i, 0 === Ft && Pt(vt)); return Ft--, t === i && (n = i, 0 === Ft && Pt(dt)), t }

                function vn() { var t, n, e; return t = Lt, (t = (n = function() { var t, n; return Ft++, t = Lt, t = hn() !== i && (n = ln()) !== i && hn() !== i ? (zt = t, bt(n)) : (Lt = t, i), Ft--, t === i && (i, 0 === Ft && Pt(mt)), t }()) !== i && hn() !== i && Gt() !== i && hn() !== i && (e = mn()) !== i ? (zt = t, n = gt(n, e)) : (Lt = t, i)) === i && (t = Lt, (n = mn()) !== i && (zt = t, n = yt(n)), t = n), t }

                function mn() {
                    var t, n, e, r, o, a, u;
                    if (t = Lt, (n = bn()) !== i)
                        if (hn() !== i) {
                            if (e = [], r = Lt, (r = (o = cn()) !== i && (a = hn()) !== i && (u = bn()) !== i ? o = [o, a, u] : (Lt = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = Lt, r = (o = cn()) !== i && (a = hn()) !== i && (u = bn()) !== i ? o = [o, a, u] : (Lt = r, i);
                            else e = i;
                            t = e !== i ? (zt = t, n = xt(n, e)) : (Lt = t, i)
                        } else Lt = t, t = i;
                    else Lt = t, t = i;
                    return t === i && (t = bn()), t
                }

                function bn() {
                    var t, n, e, r, o, a, u;
                    if (t = Lt, (n = gn()) !== i)
                        if (hn() !== i) {
                            if (e = [], r = Lt, (r = (o = un()) !== i && (a = hn()) !== i && (u = gn()) !== i ? o = [o, a, u] : (Lt = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = Lt, r = (o = un()) !== i && (a = hn()) !== i && (u = gn()) !== i ? o = [o, a, u] : (Lt = r, i);
                            else e = i;
                            t = e !== i ? (zt = t, n = xt(n, e)) : (Lt = t, i)
                        } else Lt = t, t = i;
                    else Lt = t, t = i;
                    return t === i && (t = gn()), t
                }

                function gn() {
                    var t, n, e, r, o, a, u;
                    if (t = Lt, (n = yn()) !== i)
                        if (hn() !== i) {
                            if (e = [], r = Lt, (o = an()) === i && (o = null), (r = o !== i && (a = hn()) !== i && (u = yn()) !== i ? o = [o, a, u] : (Lt = r, i)) !== i)
                                for (; r !== i;) e.push(r), r = Lt, (o = an()) === i && (o = null), r = o !== i && (a = hn()) !== i && (u = yn()) !== i ? o = [o, a, u] : (Lt = r, i);
                            else e = i;
                            t = e !== i ? (zt = t, n = Ot(n, e)) : (Lt = t, i)
                        } else Lt = t, t = i;
                    else Lt = t, t = i;
                    return t === i && (t = yn()), t
                }

                function yn() {
                    var t, n;
                    return t = Lt, (t = hn() !== i && (n = function() {
                        var t, n;
                        Ft++, t = Lt, (n = function() { var t, n; return t = Lt, (n = tn()) !== i && (zt = t, n = Z()), (t = n) === i && (t = Lt, (n = nn()) !== i && (zt = t, n = W()), (t = n) === i && (t = Lt, (n = en()) !== i && (zt = t, n = G()), t = n)), t }()) !== i && (zt = t, n = Dt(n));
                        (t = n) === i && (t = Lt, (n = fn()) !== i && (zt = t, n = kt(n)), t = n);
                        Ft--, t === i && (n = i, 0 === Ft && Pt(Rt));
                        return t
                    }()) !== i && hn() !== i ? (zt = t, wt(n)) : (Lt = t, i)) === i && (t = Lt, (t = hn() !== i && (n = function() {
                        var t, n;
                        t = Lt, (n = function() { var t, n, e, r; return t = Lt, 40 === u.charCodeAt(Lt) ? (n = rt, Lt++) : (n = i, 0 === Ft && Pt(ot)), t = n !== i && hn() !== i && (e = mn()) !== i && hn() !== i ? (41 === u.charCodeAt(Lt) ? (r = at, Lt++) : (r = i, 0 === Ft && Pt(ut)), r !== i ? (zt = t, n = it(e)) : (Lt = t, i)) : (Lt = t, i) }()) !== i && (zt = t, n = Et(n));
                        return t = n
                    }()) !== i && hn() !== i ? (zt = t, At(n)) : (Lt = t, i)) === i && (t = Lt, (t = hn() !== i && (n = function() {
                        var t, n, e, r;
                        t = Lt, t = (n = function() { var t, n; return Ft++, t = Lt, (n = Kt()) !== i && (zt = t, n = N()), Ft--, (t = n) === i && (n = i, 0 === Ft && Pt(_)), t }()) !== i ? (e = hn(), e !== i ? (r = yn()) !== i ? (zt = t, n = St(n, r)) : (Lt = t, i) : (Lt = t, i)) : (Lt = t, i);
                        return t
                    }()) !== i ? (zt = t, jt(n)) : (Lt = t, i)) === i && (t = Lt, t = hn() !== i && (n = xn()) !== i && hn() !== i ? (zt = t, Ct(n)) : (Lt = t, i)))), t
                }

                function xn() { var t, n; return Ft++, t = Lt, (n = ln()) !== i && (zt = t, n = Mt(n)), Ft--, (t = n) === i && (n = i, 0 === Ft && Pt($t)), t }
                if ((n = r()) !== i && Lt === u.length) return n;
                throw n !== i && Lt < u.length && Pt({ type: "end" }), Zt(Bt, Xt < u.length ? u.charAt(Xt) : null, Xt < u.length ? Ut(Xt, Xt + 1) : Ut(Xt, Xt))
            }
        }
    },
    31:
    /*!*******************************************************!*\
      !*** ./app/components/splitpane/index.js + 3 modules ***!
      \*******************************************************/
    /*! exports provided: default */
    /*! exports used: default */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@cycle/dom/lib/cycle-dom.js (<- Module is not an ECMAScript module) */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/lib/utils.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rx/dist/rx.all.js (<- Module is not an ECMAScript module) */
        function(t, n, e) {
        "use strict";

        function c(t) { return Object(r.div)(".splitpane-container", [Object(r.div)(".splitpane-body.splitpane-body-left", { key: "left-pane", style: { width: "".concat(100 * t.proportion, "%") } }, t.firstChild), Object(r.div)(".splitpane-body.splitpane-body-right", { key: "right-pane", style: { width: "".concat(100 - 100 * t.proportion, "%") } }, t.secondChild), Object(r.div)(".splitpane-handle.splitpane-handle-horizontal", { key: "handle", style: { left: "".concat(100 * t.proportion, "%") } }, "Handle")]) }

        function l(t, n) {
            var e = t.select(".splitpane-handle"),
                r = s.Observable.amb(e.events("mousedown"), e.events("touchstart")),
                o = s.Observable.amb(n.events("mousemove").map(function(t) { return { x: t.pageX, y: t.pageY, event: t } }), n.events("touchmove").withLatestFrom(e.observable, function(t, n) { var e = function(n, t) { var e = Array.prototype.filter.call(t.touches, function(t) { return t.target === n }); return { x: Array.prototype.reduce.call(e, function(t, n) { return t + n.pageX }, 0) / (e.length || 1), y: Array.prototype.reduce.call(e, function(t, n) { return t + n.pageY }, 0) / (e.length || 1) } }(n[0], t); return { x: e.x, y: e.y, event: t } })),
                a = s.Observable.amb(n.events("mouseup"), s.Observable.merge(n.events("touchend"), n.events("touchcancel")));
            return { resize$: r.map(function(n) { return o.map(function(t) { return t.x / n.ownerTarget.parentNode.clientWidth }).takeUntil(a) }).switch(), preventDefault: r.map(function(t) { return o.map(function(t) { return t.event }).startWith(t).takeUntil(a) }).switch().share() }
        }
        var s = e(1),
            f = e(3),
            r = e(0);
        e(42), n.a = function(t) {
            var n = t.DOM,
                e = t.globalEvents,
                r = t.props$,
                o = void 0 === r ? s.Observable.just({ proportion: .5 }) : r,
                a = t.firstChild$,
                u = t.secondChild$,
                i = l(n, e);
            return {
                DOM: function(t) { return t.map(c) }(function(t, n) {
                    var e = t.props$,
                        r = t.firstChild$,
                        o = t.secondChild$,
                        a = r.shareReplay(1),
                        u = o.shareReplay(1);
                    return e.map(function(t) { return s.Observable.combineLatest(n.resize$.startWith(t.proportion), a.startWith(null), u.startWith(null), function(t, n, e) { return { proportion: Object(f.a)(t, .1, .9), firstChild: n, secondChild: e } }) }).switch().shareReplay(1)
                }({ props$: o, firstChild$: a, secondChild$: u }, i)),
                preventDefault: i.preventDefault
            }
        }
    },
    32:
    /*!******************************************!*\
      !*** ./app/drivers/rangy.js + 1 modules ***!
      \******************************************/
    /*! exports provided: insertStringDriver */
    /*! exports used: insertStringDriver */
        function(t, n, e) {
        "use strict";

        function a(t) { return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }
        var u, c;

        function r(t, n) { var e = a(t[n]); return "function" === e || !("object" !== e || !t[n]) || "unknown" === e }

        function o(t, n) { return "undefined" !== a(t[n]) }

        function i(t, n) { return !("object" !== a(t[n]) || !t[n]) }

        function l(t, n, e) {
            var r = n,
                o = e;
            return n < 0 && (r += t.value.length), "undefined" === a(e) && (o = n), e < 0 && (o += t.value.length), { start: r, end: o }
        }

        function s(t, n, e) { return { start: n, end: e, length: e - n, text: t.value.slice(n, e) } }

        function f() { return i(document, "body") ? document.body : document.getElementsByTagName("body")[0] }
        var p, d = document.createElement("textarea");
        if (f().appendChild(d), o(d, "selectionStart") && o(d, "selectionEnd")) u = function(t) { return s(t, t.selectionStart, t.selectionEnd) }, c = function(t, n, e) {
            var r = l(t, n, e);
            t.selectionStart = r.start, t.selectionEnd = r.end
        };
        else if (r(d, "createTextRange") && i(document, "selection") && r(document.selection, "createRange")) {
            u = function(t) {
                var n, e, r, o, a = 0,
                    u = 0,
                    i = document.selection.createRange();
                return i && i.parentElement() === t && (r = t.value.length, n = t.value.replace(/\r\n/g, "\n"), (e = t.createTextRange()).moveToBookmark(i.getBookmark()), (o = t.createTextRange()).collapse(!1), -1 < e.compareEndPoints("StartToEnd", o) ? a = u = r : (a = -e.moveStart("character", -r), a += n.slice(0, a).split("\n").length - 1, -1 < e.compareEndPoints("EndToEnd", o) ? u = r : (u = -e.moveEnd("character", -r), u += n.slice(0, u).split("\n").length - 1))), s(t, a, u)
            };
            var h = function(t, n) { return n - (t.value.slice(0, n).split("\r\n").length - 1) };
            c = function(t, n, e) {
                var r = l(t, n, e),
                    o = t.createTextRange(),
                    a = h(t, r.start);
                o.collapse(!0), r.start === r.end ? o.move("character", a) : (o.moveEnd("character", h(t, r.end)), o.moveStart("character", a)), o.select()
            }
        } else f().removeChild(d), p = "No means of finding text input caret position", window.console && window.console.log && window.console.log("RangyInputs not supported in your browser. Reason: " + p);
        f().removeChild(d);

        function v(t, n) {
            var e = t.value,
                r = u(t),
                o = r.start;
            return { value: e.slice(0, o) + n + e.slice(r.end), index: o, replaced: r.text }
        }

        function m(t, n) { t.focus(); var e = u(t); return c(t, e.start, e.end), "" === n ? document.execCommand("delete", !1, null) : document.execCommand("insertText", !1, n), { replaced: e.text, index: e.start } }

        function b(t, n) { t.focus(); var e = v(t, n); return t.value = e.value, e }

        function g(t, n, e) {
            ! function(t, n, e, r) {
                var o = n + e.length,
                    a = "string" == typeof r ? r.toLowerCase() : "";
                if (("collapsetoend" === a || "select" === a) && /[\r\n]/.test(e)) {
                    var u = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                    o = n + u.length;
                    var i = n + u.indexOf("\n");
                    "\r\n" === t.value.slice(i, i + 2) && (o += u.match(/\n/g).length)
                }
                switch (a) {
                    case "collapsetostart":
                        c(t, n, n);
                        break;
                    case "collapsetoend":
                        c(t, o, o);
                        break;
                    case "select":
                        c(t, n, o);
                        break;
                    default:
                        ;
                }
            }(t, y(t, n).index, n, e || "collapseToEnd")
        }
        var y = function(t, n) { var e = v(t, n); try { var r = m(t, n); if (t.value === e.value) return y = m, r } catch (t) {} return y = b, t.value = e.value, e };
        e.d(n, "a", function() { return x });
        var x = function(t) {
            return t.subscribe(function(t) {
                var n = t.element;
                g(n, t.string, "collapseToEnd"),
                    function(t) {
                        if ("createEvent" in document) {
                            var n = document.createEvent("MutationEvents");
                            n.initEvent("input", !0, !0), t.dispatchEvent(n)
                        } else t.fireEvent("oninput")
                    }(n)
            }), Object.create(null)
        }
    },
    33:
    /*!******************************!*\
      !*** min-document (ignored) ***!
      \******************************/
    /*! no static exports found */
    /*! all exports used */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(t, n) {},
    34:
    /*!**********************************************!*\
      !*** ./app/components/modal/view/index.styl ***!
      \**********************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(t, n, e) {},
    35:
    /*!*************************************************!*\
      !*** ./app/components/graphics/view/index.styl ***!
      \*************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(t, n, e) {},
    41:
    /*!**********************************************************!*\
      !*** ./app/components/logic/input-field/view/index.styl ***!
      \**********************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(t, n, e) {},
    42:
    /*!**************************************************!*\
      !*** ./app/components/splitpane/view/index.styl ***!
      \**************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(t, n, e) {},
    43:
    /*!****************************************************!*\
      !*** ./app/components/logic/lib/formatter/math.js ***!
      \****************************************************/
    /*! exports provided: default */
    /*! exports used: default */
        function(t, n, e) {
        "use strict";

        function o(t, n) { return t[n] || n }
        var a = { AND: "∧", OR: "∨", XOR: "⊕", NOT: "¬" },
            r = new RegExp("[^a-z0-9]", "i"),
            u = { name: "Math", formatBinary: function(t, n, e) { return u.formatBinaryChain(t, n, e) }, formatBinaryChain: function(t) { for (var n = arguments.length, e = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r]; return "(".concat(e.join(" ".concat(o(a, t), " ")), ")") }, formatUnary: function(t, n) { return "(".concat(u.formatUnarySimple(t, n), ")") }, formatUnarySimple: function(t, n) { return "".concat(o(a, t)).concat(n) }, formatGroup: function(t) { return t }, formatName: function(t) { return function(t) { return r.test(t) ? '"'.concat(t, '"') : t }(t) }, formatValue: function(t) { return !0 === t ? "⊤" : !1 === t ? "⊥" : "Ø" }, formatVector: function(t, n) { return "<".concat(t.map(function(t) { return t.name }).join(","), ":").concat(n.map(u.formatVectorValue).join(""), ">") }, formatVectorValue: function(t) { return !0 === t ? "1" : !1 === t ? "0" : "*" }, formatLabel: function(t, n) { var e = 1 < arguments.length && void 0 !== n ? n : ""; return "".concat(t, "=").concat(e) }, formatExpressions: function(t) { return t.join(", ") }, binaryOperator: function(t) { return o(a, t) }, unaryOperator: function(t) { return o(a, t) } };
        n.a = u
    },
    44:
    /*!**************************************************!*\
      !*** ./app/components/table/lib/format-ascii.js ***!
      \**************************************************/
    /*! exports provided: default */
    /*! exports used: default */
        function(t, n, e) {
        "use strict";
        n.a = function(t) {
            if (null === t) return "";
            var n = function(t) { return t.columnGroups.map(function(t) { return t.columns.map(function(t) { return t.name.length }) }) }(t);
            return function(t) { return t.columnGroups.map(function(t) { return "|" + t.columns.map(function(t) { return " ".concat(t.name, " ") }).join("|") + "|" }).join("") }(t) + "\n" + function(t) { return t.map(function(t) { return "|" + t.map(function(t) { return new Array(t + 1 + 2).join("=") }).join("|") + "|" }).join("") }(n) + "\n" + t.rows.map(function(t) {
                return function(u, t) {
                    return t.reduce(function(t, n) {
                        var a = t.baseIndex,
                            e = t.acc;
                        return {
                            baseIndex: a + n.length,
                            acc: e + "|" + n.map(function(t, n) {
                                var e = t + 2,
                                    r = u[a + n].toString(),
                                    o = (e - r.length) / 2;
                                return new Array(Math.ceil(o) + 1).join(" ") + r + new Array(Math.floor(o) + 1).join(" ")
                            }).join("|") + "|"
                        }
                    }, { baseIndex: 0, acc: "" }).acc
                }(t.values, n)
            }).join("\n")
        }
    },
    46:
    /*!***************************************************!*\
      !*** ./app/components/table/index.js + 4 modules ***!
      \***************************************************/
    /*! exports provided: default */
    /*! exports used: default */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@cycle/dom/lib/cycle-dom.js (<- Module is not an ECMAScript module) */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/lib/h-helper.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/immutable/dist/immutable.es.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rx/dist/rx.all.js (<- Module is not an ECMAScript module) */
        function(t, n, e) {
        "use strict";

        function o(t) { var n = t && void 0 !== t.selectedRow ? t.selectedRow : null; return t ? s({ columnGroups: r.a.List(t.columnGroups).map(function(t) { return c({ name: t.name.toString(), columns: r.a.List(t.columns).map(i) }) }), rows: r.a.List(t.rows).map(l), selectedRow: n, error: t.error }) : null }

        function a(t) {
            var n = t.table,
                e = t.selectedIndex;
            return Object(f.div)(".table-scroller", [Object(f.div)(".table-scroller-body", [null === n ? null : function(t, e) { return Object(f.table)(".table", [t.columnGroups.map(function(t) { return Object(f.colgroup)(".table-colgroup", t.columns.map(function() { return Object(f.col)(".table-col") }).toArray()) }).toArray(), Object(f.tr)(".table-head-row", t.columnGroups.map(function(t) { return Object(f.th)(".table-head-cell-small", { colSpan: t.columns.size }, t.name.toString()) }).toArray()), Object(f.tr)(".table-head-row", t.columnGroups.flatMap(function(t) { return t.columns.map(function(t) { return Object(f.th)(".table-head-cell", t.name.toString()) }) }).toArray()), Object(p.a)(t.error, function() { return Object(f.tr)(".table-error-row", [Object(f.td)(".table-error-cell", { colSpan: function(t) { return t.columnGroups.reduce(function(t, n) { return t + n.columns.size }, 0) }(t) }, t.error)]) }), t.rows.map(function(t, n) { return Object(f.tr)(".table-body-row", { className: Object(p.a)(e === n, function() { return "state-selected" }), attributes: { "data-index": n } }, t.values.map(function(t) { return Object(f.td)(".table-body-cell", t.toString()) })) }).toArray()]) }(n, e)])])
        }
        var u = e(1),
            r = e(2),
            i = r.a.Record({ name: null }, "column"),
            c = r.a.Record({ name: null, columns: r.a.List() }, "columnGroup"),
            l = r.a.Record({ values: r.a.List() }, "row"),
            s = r.a.Record({ columnGroups: r.a.List(), rows: r.a.List(), selectedRow: null, error: null }, "table"),
            f = e(0),
            p = e(5);
        e(53), n.a = function(t) {
            var n = t.DOM,
                e = t.table$,
                r = function(t, e) { return t.map(o).map(function(n) { return e.selectRow$.startWith(n ? n.selectedRow : null).scan(function(t, n) { return t === n ? null : n }).map(function(t) { return { table: n, selectedIndex: t } }) }).switch().shareReplay(1) }(void 0 === e ? u.Observable.just({ columnGroups: [{ name: "Column Group 1", columns: [{ name: "First Column" }, { name: "Second Column" }] }], rows: [{ values: ["First value", "the first row"] }, { values: ["second", "row"] }], selectedRow: null, error: null }) : e, function(t) { return { selectRow$: t.select("tr[data-index]").events("mousedown").map(function(t) { return parseInt(t.ownerTarget.dataset.index, 10) }).share(), preventDefault: u.Observable.empty() } }(n));
            return { DOM: function(t) { return t.map(a) }(r), selectedRow$: r.map(function(t) { return t.selectedIndex }) }
        }
    },
    5:
    /*!*****************************!*\
      !*** ./app/lib/h-helper.js ***!
      \*****************************/
    /*! exports provided: IF, attrBool */
    /*! exports used: IF, attrBool */
        function(t, n, e) {
        "use strict";
        e.d(n, "a", function() { return r }), e.d(n, "b", function() { return o });
        var r = function(t, n) { return t ? n() : void 0 },
            o = function(t) { return t || void 0 }
    },
    53:
    /*!**********************************************!*\
      !*** ./app/components/table/view/index.styl ***!
      \**********************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
        function(t, n, e) {},
    6:
    /*!*******************************!*\
      !*** ./app/lib/dom-helper.js ***!
      \*******************************/
    /*! exports provided: wrapInDiv */
    /*! exports used: wrapInDiv */
        function(t, n, e) {
        "use strict";
        e.d(n, "a", function() { return o });
        var r = e( /*! @cycle/dom */ 0),
            o = function(t) { return Object(r.div)(t) }
    },
    7:
    /*!***************************************************!*\
      !*** ./app/components/modal/index.js + 4 modules ***!
      \***************************************************/
    /*! exports provided: default */
    /*! exports used: default */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@cycle/dom/lib/cycle-dom.js (<- Module is not an ECMAScript module) */
    /*! ModuleConcatenation bailout: Cannot concat with ./app/lib/utils.js */
    /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/rx/dist/rx.all.js (<- Module is not an ECMAScript module) */
        function(t, n, e) {
        "use strict";

        function l(t) {
            var n = t.visible,
                e = t.content;
            return Object(r.div)(".modal-container", { "aria-hidden": !!n || void 0, className: n ? "state-visible" : "state-hidden" }, [Object(r.div)(".modal-background"), Object(r.div)(".modal-scroll", [Object(r.div)(".modal-box", [Object(r.button)(".modal-box-close", { attributes: { "data-modal-close": !0 } }, function(t) { return Object(r.svg)("svg", { attributes: { preserveAspectRatio: "xMidYMid meet", "aria-hidden": !0, class: "svg-icon", viewBox: "-100 -100 712 712", width: t, height: t } }, [Object(r.svg)("polygon", { class: "icon-shape", points: "512,120.859 391.141,0 255.997,135.146 120.855,0\n    0,120.859 135.132,256.006 0,391.146 120.855,512\n    255.997,376.872 391.141,512 512,391.146 376.862,256.006" })]) }(24)), Object(r.div)(".modal-box-body", n ? [e] : null)])])])
        }
        var s = e(1),
            r = e(0),
            f = (e(34), e(3));
        n.a = function(t) {
            var n = t.DOM,
                e = t.globalEvents,
                r = t.props$,
                o = void 0 === r ? s.Observable.just({ visible: !1 }) : r,
                a = t.content$,
                u = o.map(Object(f.e)("visible")),
                i = function(t, n) { var e = s.Observable.merge([t.select("[data-modal-close]").events("click"), n.events("keydown").filter(function(t) { return 27 === t.keyCode })]); return { close$: e.map(function() { return !0 }), preventDefault: e } }(n, e),
                c = function(t, n, e) { return s.Observable.merge([t.startWith(!1), e.close$.map(function() { return !1 })]).combineLatest(n, function(t, n) { return { visible: t, content: n } }).shareReplay(1) }(u, a, i);
            return { DOM: function(t) { return t.map(l) }(c), visible$: c.map(Object(f.e)("visible")), preventDefault: i.preventDefault }
        }
    },
    8:
    /*!*********************************************************!*\
      !*** ./app/components/logic/lib/formatter/c-bitwise.js ***!
      \*********************************************************/
    /*! exports provided: default */
    /*! exports used: default */
        function(t, n, e) {
        "use strict";

        function a(t, n) { return t[n] || n }
        var u = { AND: "&", OR: "|", NOT: "~", XOR: "^" },
            r = new RegExp("s+", "g"),
            o = { name: "C Bitwise", formatBinary: function(t, n, e) { return o.formatBinaryChain(t, n, e) }, formatBinaryChain: function(t) { for (var n = arguments.length, e = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r]; var o = e.join(" ".concat(a(u, t), " ")); return "(".concat(o, ")") }, formatUnary: function(t, n) { return "(".concat(o.formatUnarySimple(t, n), ")") }, formatUnarySimple: function(t, n) { return "".concat(a(u, t)).concat(n) }, formatGroup: function(t) { return t }, formatName: function(t) { return function(t) { return t.replace(r, "_") }(t) }, formatValue: function(t) { return !0 === t ? "1" : !1 === t ? "0" : "void" }, formatVector: function(t, n) { return "<".concat(t.map(function(t) { return t.name }).join(","), ":").concat(n.map(o.formatVectorValue).join(""), ">") }, formatVectorValue: function(t) { return !0 === t ? "1" : !1 === t ? "0" : "*" }, formatLabel: function(t, n) { var e = 1 < arguments.length && void 0 !== n ? n : ""; return "".concat(t, "=").concat(e) }, formatExpressions: function(t) { return t.join(", ") }, binaryOperator: function(t) { return a(u, t) }, unaryOperator: function(t) { return a(u, t) } };
        n.a = o
    }
});