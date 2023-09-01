import { defineComponent, useAttrs, computed, inject, openBlock, createElementBlock, normalizeClass, normalizeStyle, unref, renderSlot, toRefs, provide, Fragment, renderList, ref, onMounted, createElementVNode, withModifiers, createTextVNode, toDisplayString, watch, nextTick, createBlock, Teleport, createVNode, Transition, withCtx, createCommentVNode, resolveComponent, reactive } from 'vue';

var tabsKey = Symbol();
var panelsKey = Symbol();
var skeletonKey = Symbol();
var expansionKey = Symbol();
var checkboxGroupKey = Symbol();

var script$o = /*#__PURE__*/ defineComponent({
    __name: 'index',
    setup: function (__props) {
        var name = useAttrs().name;
        var actived = computed(function () { return name === modelValue.value; });
        // TODO: declare better type
        var _a = inject(tabsKey), tabStyle = _a.tabStyle, tabClass = _a.tabClass, modelValue = _a.modelValue, updateModel = _a.updateModel, activeTabClass = _a.activeTabClass;
        var updateActiveTab = function () {
            if (name === actived.value) {
                return;
            }
            updateModel(name);
        };
        var _tabClass = computed(function () {
            return "".concat(tabClass.value).concat(actived.value ? " ".concat(activeTabClass.value) : '');
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                tabindex: "-1",
                onClick: updateActiveTab,
                class: normalizeClass(["u-tab cursor-pointer", _tabClass.value]),
                style: normalizeStyle(unref(tabStyle))
            }, [
                renderSlot(_ctx.$slots, "default")
            ], 6 /* CLASS, STYLE */));
        };
    }
});

script$o.__file = "src/components/u-tab/index.vue";

var script$n = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        style: { type: Object, required: false, default: function () { return ({}); } },
        class: { type: String, required: false, default: '' },
        tabStyle: { type: Object, required: false, default: function () { return ({}); } },
        tabClass: { type: String, required: false, default: '' },
        modelValue: { type: String, required: true },
        activeTabClass: { type: String, required: false, default: '' }
    },
    emits: ["update:modelValue"],
    setup: function (__props, _a) {
        var emit = _a.emit;
        var props = __props;
        var _b = toRefs(props), style = _b.style, tabsClass = _b.class, tabStyle = _b.tabStyle, tabClass = _b.tabClass, modelValue = _b.modelValue, activeTabClass = _b.activeTabClass;
        var updateModel = function (name) { return emit('update:modelValue', name); };
        provide(tabsKey, {
            tabStyle: tabStyle,
            tabClass: tabClass,
            modelValue: modelValue,
            updateModel: updateModel,
            activeTabClass: activeTabClass
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: normalizeClass(["u-tabs", unref(tabsClass)]),
                style: normalizeStyle(unref(style))
            }, [
                renderSlot(_ctx.$slots, "default")
            ], 6 /* CLASS, STYLE */));
        };
    }
});

script$n.__file = "src/components/u-tabs/index.vue";

var _hoisted_1$b = ["width", "height", "fill"];
var _hoisted_2$4 = ["d", "transform"];
var script$m = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        def: { type: String, required: true },
        color: { type: String, required: false, default: '#000' },
        width: { type: [String, Number], required: false, default: 24 },
        height: { type: [String, Number], required: false, default: 24 }
    },
    setup: function (__props) {
        var props = __props;
        var _a = toRefs(props), def = _a.def, /* name, type, */ color = _a.color, width = _a.width, height = _a.height;
        // const prefixesMap = {
        //   filled: 'mat',
        //   sharp: 'sharp',
        //   rounded: 'round',
        //   outlined: 'outlined'
        // }
        // foo_bar -> FooBar
        // const formattedName = (name: string) => {
        //   let res = ''
        //   const segments = name.split('_')
        //   for (let i = 0, l = segments.length; i < l; i++) {
        //     const segment = segments[i]
        //     res += `${ segment[0].toUpperCase() }${ segment.slice(1) }`
        //   }
        //   return res
        // }
        // const getDef = (): string => {
        //   const _name = formattedName(name.value)
        //   const _type = type.value
        //   return icons[_type][`${ prefixesMap[_type] }${ _name }`] || ''
        // }
        var genPaths = function (def, res) {
            def.split('&&').forEach(function (path) {
                var _a = path.split('@@'), d = _a[0], style = _a[1], transform = _a[2];
                res.push({ style: style, d: d, transform: transform });
            });
        };
        var paths = computed(function () {
            var res = [];
            // const def = getDef()
            genPaths(def.value, res);
            return res;
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("svg", {
                class: "u-icon inline-block cursor-pointer",
                viewBox: "0 0 24 24",
                width: unref(width),
                height: unref(height),
                fill: unref(color)
            }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(paths.value, function (_a) {
                    var d = _a.d, style = _a.style, transform = _a.transform;
                    return (openBlock(), createElementBlock("path", {
                        d: d,
                        style: normalizeStyle(style),
                        transform: transform
                    }, null, 12 /* STYLE, PROPS */, _hoisted_2$4));
                }), 256 /* UNKEYED_FRAGMENT */))
            ], 8 /* PROPS */, _hoisted_1$b));
        };
    }
});

script$m.__file = "src/components/u-icon/index.vue";

var noop = function () { };

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var throttle = function (fn, wait, options) {
    if (wait === void 0) { wait = 200; }
    if (options === void 0) { options = { leading: true, trailing: false }; }
    var _a = options.leading, leading = _a === void 0 ? true : _a, _b = options.trailing, trailing = _b === void 0 ? false : _b;
    var context;
    var result;
    var parmas = [];
    var timer = 0;
    var prev = 0;
    var clear = function () {
        context = null;
        timer = 0;
        parmas = [];
    };
    var later = function () {
        prev = leading ? Date.now() : 0;
        result = fn.call.apply(fn, __spreadArray([context], parmas, false));
        clear();
    };
    var _throttle = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _now = Date.now();
        parmas = args;
        context = this;
        if (!prev && !leading) {
            prev = _now;
        }
        var remaining = wait - (_now - prev);
        if (remaining <= 0 || remaining > wait) {
            if (timer) {
                clearTimeout(timer);
                timer = 0;
            }
            prev = _now;
            result = fn.call.apply(fn, __spreadArray([context], parmas, false));
            clear();
            return result;
        }
        if (!timer && trailing) {
            timer = setTimeout(later, remaining);
            return result;
        }
    };
    _throttle.cancle = function () {
        clearTimeout(timer);
        timer = 0;
        prev = 0;
        clear();
    };
    return _throttle;
};

var debounce = function (fn, wait, immediate) {
    var prev = 0;
    var timer = 0;
    var params;
    var result;
    var context;
    var later = function () {
        var remaining = wait - (Date.now() - prev);
        if (remaining > 0) {
            timer = setTimeout(later, remaining);
        }
        else {
            if (!immediate) {
                result = fn.call.apply(fn, __spreadArray([context], params, false));
            }
            timer = 0;
        }
    };
    var _debounce = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        prev = Date.now();
        context = this;
        params = args;
        if (!timer) {
            timer = setTimeout(later, wait);
            if (immediate) {
                result = fn.call.apply(fn, __spreadArray([context], params, false));
            }
        }
        return result;
    };
    _debounce.cancel = function () {
        clearTimeout(timer);
        timer = 0;
        context = null;
        params = [];
    };
    return _debounce;
};

var _hoisted_1$a = ["autofocus", "readonly", "disabled", "placeholder", "value", "type"];
var script$l = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        type: { type: String, required: false, default: 'text' },
        class: { type: String, required: false, default: '' },
        debounce: { type: Number, required: false, default: 0 },
        readonly: { type: Boolean, required: false, default: false },
        disabled: { type: Boolean, required: false, default: false },
        autofocus: { type: Boolean, required: false, default: false },
        modelValue: { type: String, required: true },
        inputClass: { type: String, required: false, default: '' },
        placeholder: { type: String, required: false, default: '' },
        focusedBorderClass: { type: String, required: false, default: '' }
    },
    emits: ["blur", "focus", "clear", "update:modelValue"],
    setup: function (__props, _a) {
        var emit = _a.emit;
        var props = __props;
        var _b = toRefs(props), type = _b.type, className = _b.class, debounce$1 = _b.debounce, readonly = _b.readonly, disabled = _b.disabled, autofocus = _b.autofocus, modelValue = _b.modelValue, inputClass = _b.inputClass, placeholder = _b.placeholder, focusedBorderClass = _b.focusedBorderClass;
        var visible = ref(false);
        var inputRef = ref(null);
        var wrapperRef = ref(null);
        var focusedInput = ref(false);
        var focusedContainer = ref(false);
        var _type = computed(function () {
            return type.value === 'password' && visible.value
                ? 'text'
                : type.value;
        });
        var focused = computed(function () {
            return !readonly.value &&
                !disabled.value &&
                (focusedInput.value || focusedContainer.value);
        });
        var containerClass = computed(function () { return "".concat(className.value).concat(disabled.value ? ' cursor-not-allowed' : '').concat(focused.value ? " ".concat(focusedBorderClass.value) : ''); });
        var _inputClass = computed(function () { return "".concat(inputClass.value).concat(disabled.value ? ' cursor-not-allowed' : '').concat(readonly.value ? ' cursor-auto' : ''); });
        var foucsHelper = function () { return inputRef.value.focus(); };
        var onFocus = function () { return focusedContainer.value = true; };
        var onBlur = function () { return setTimeout(function () { return focusedContainer.value = false; }); };
        var onInputFocus = function (e) {
            focusedInput.value = true;
            emit('focus', e);
        };
        var onInputBlur = function (e) {
            setTimeout(function () {
                focusedInput.value = false;
                emit('blur', e);
            });
        };
        var onInput = function (e) { return emit('update:modelValue', e.target.value); };
        var _onInput = computed(function () {
            var _debounce = debounce$1.value;
            return readonly.value
                ? noop
                : _debounce
                    ? debounce(onInput, _debounce)
                    : onInput;
        });
        var initClearableBtns = function () {
            var onClear = function () {
                if (modelValue.value.length) {
                    var oldValue = modelValue.value;
                    emit('update:modelValue', '');
                    emit('clear', oldValue);
                }
            };
            var elms = wrapperRef.value.querySelectorAll('*[clearable]');
            for (var i = 0, l = elms.length; i < l; i++) {
                elms[i].addEventListener('click', onClear);
            }
        };
        var initVisibleBtns = function () {
            var updateVisibility = function () { return visible.value = !visible.value; };
            var elms = wrapperRef.value.querySelectorAll('*[password]');
            for (var i = 0, l = elms.length; i < l; i++) {
                elms[i].addEventListener('click', updateVisibility);
            }
        };
        onMounted(function () {
            initClearableBtns();
            initVisibleBtns();
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: "u-input-wrapper flex items-center",
                ref_key: "wrapperRef",
                ref: wrapperRef
            }, [
                renderSlot(_ctx.$slots, "before"),
                createElementVNode("div", {
                    tabindex: "-1",
                    class: normalizeClass(["u-input-container flex items-center relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:z-[-1] before:transition-colors before:duration-[--u-transition-duration]", containerClass.value]),
                    onClick: foucsHelper,
                    onFocus: onFocus,
                    onBlur: onBlur
                }, [
                    renderSlot(_ctx.$slots, "prepend"),
                    createElementVNode("input", {
                        autofocus: unref(autofocus) ? true : false,
                        readonly: unref(readonly) ? true : false,
                        disabled: unref(disabled) ? true : false,
                        placeholder: unref(placeholder),
                        value: unref(modelValue),
                        onInput: _cache[0] || (_cache[0] =
                            //@ts-ignore
                            function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return (_onInput.value && _onInput.value.apply(_onInput, args));
                            }),
                        onFocus: onInputFocus,
                        onBlur: onInputBlur,
                        onClick: _cache[1] || (_cache[1] = withModifiers(
                        //@ts-ignore
                        function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            return (unref(noop) && unref(noop).apply(void 0, args));
                        }, ["stop"])),
                        class: normalizeClass(["u-input h-full grow focus:outline-none bg-transparent", _inputClass.value]),
                        ref_key: "inputRef",
                        ref: inputRef,
                        type: _type.value
                    }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_1$a),
                    renderSlot(_ctx.$slots, "append", { visible: visible.value })
                ], 34 /* CLASS, HYDRATE_EVENTS */),
                renderSlot(_ctx.$slots, "after")
            ], 512 /* NEED_PATCH */));
        };
    }
});

script$l.__file = "src/components/u-input/index.vue";

var _hoisted_1$9 = ["onClick"];
var script$k = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        head: { type: Array, required: true },
        body: { type: Array, required: true },
        thClass: { type: String, required: false, default: '' },
        tdClass: { type: String, required: false, default: '' },
        tableClass: { type: String, required: false, default: '' },
        headTrClass: { type: String, required: false, default: '' },
        bodyTrClass: { type: String, required: false, default: '' }
    },
    setup: function (__props) {
        var props = __props;
        var _a = toRefs(props), head = _a.head, body = _a.body, thClass = _a.thClass, tdClass = _a.tdClass, tableClass = _a.tableClass, headTrClass = _a.headTrClass, bodyTrClass = _a.bodyTrClass;
        var _thClass = computed(function () { return "".concat(tdClass.value, " ").concat(thClass.value); });
        var fields = computed(function () { return head.value.map(function (item) { return item.field; }); });
        var onSort = function (field, sortable, sortOrder) {
            if (!sortable) {
                return;
            }
            if (sortOrder === 'asc') {
                body.value.sort(function (a, b) { return a[field] - b[field]; });
            }
            else {
                body.value.sort(function (a, b) { return b[field] - a[field]; });
            }
        };
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("table", {
                class: normalizeClass(unref(tableClass))
            }, [
                createElementVNode("thead", null, [
                    createElementVNode("tr", {
                        class: normalizeClass(unref(headTrClass))
                    }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(head), function (_a) {
                            var field = _a.field, label = _a.label; _a.thClass; var sortable = _a.sortable, sortOrder = _a.sortOrder;
                            return (openBlock(), createElementBlock("th", {
                                class: normalizeClass(_thClass.value),
                                key: field,
                                onClick: function ($event) { return (onSort(field, sortable, sortOrder)); }
                            }, [
                                createTextVNode(toDisplayString(label) + " ", 1 /* TEXT */),
                                renderSlot(_ctx.$slots, "th", {
                                    sortable: sortable,
                                    label: label
                                })
                            ], 10 /* CLASS, PROPS */, _hoisted_1$9));
                        }), 128 /* KEYED_FRAGMENT */))
                    ], 2 /* CLASS */)
                ]),
                createElementVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(body), function (item) {
                        return (openBlock(), createElementBlock("tr", {
                            class: normalizeClass(unref(bodyTrClass))
                        }, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(fields.value, function (field) {
                                return (openBlock(), createElementBlock("td", {
                                    class: normalizeClass(unref(tdClass))
                                }, toDisplayString(item[field]), 3 /* TEXT, CLASS */));
                            }), 256 /* UNKEYED_FRAGMENT */))
                        ], 2 /* CLASS */));
                    }), 256 /* UNKEYED_FRAGMENT */))
                ])
            ], 2 /* CLASS */));
        };
    }
});

script$k.__file = "src/components/u-table/index.vue";

var useGetSliderValue = function (value, step) {
    var mod = value % step;
    value -= mod;
    if (mod >= step / 2) {
        value += step;
    }
    return value;
};

var useIsScrollToOffsetPosition = function (target, offset) {
    var scrollTop = target.scrollTop, clientHeight = target.clientHeight, scrollHeight = target.scrollHeight;
    return scrollHeight - clientHeight <= scrollTop + offset;
};

var script$j = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        min: { type: Number, required: false, default: 0 },
        max: { type: Number, required: false, default: 100 },
        step: { type: Number, required: false, default: 1 },
        modelValue: { type: Object, required: true },
        trackClass: { type: String, required: false, default: '' },
        selectionClass: { type: String, required: false, default: '' }
    },
    emits: ["update:modelValue"],
    setup: function (__props, _a) {
        _a.emit;
        var props = __props;
        var _b = toRefs(props), min = _b.min, max = _b.max, step = _b.step, modelValue = _b.modelValue, trackClass = _b.trackClass, selectionClass = _b.selectionClass;
        var _c = modelValue.value, leftThumbValue = _c.min, rightThumbValue = _c.max;
        var v = max.value - min.value;
        var _leftThumbLeft = leftThumbValue / v * 100;
        var _rightThumbLeft = rightThumbValue / v * 100;
        var leftThumbLeft = ref("".concat(_leftThumbLeft, "%"));
        var rightThumbLeft = ref("".concat(_rightThumbLeft, "%"));
        var width = ref("".concat(_rightThumbLeft - _leftThumbLeft, "%"));
        var trackRef = ref(null);
        var selectionRef = ref(null);
        var leftThumbRef = ref(null);
        var rightThumbRef = ref(null);
        var body = document.body;
        var before = function () {
            body.classList.add('select-none');
            body.addEventListener('mousemove', onMousemove);
            body.addEventListener('mouseup', onMouseup);
            body.addEventListener('touchmove', onMousemove);
            body.addEventListener('touchend', onMouseup);
        };
        var after = function () {
            body.classList.remove('select-none');
            body.removeEventListener('mousemove', onMousemove);
            body.removeEventListener('mouseup', onMouseup);
            body.removeEventListener('touchmove', onMousemove);
            body.removeEventListener('touchend', onMouseup);
        };
        var x1 = 0;
        var x2 = 0;
        var dragging = false;
        var isLeftThumb = false;
        // boundary
        var flag = false;
        var onMousedown = function (e) {
            var type = e.type, currentTarget = e.currentTarget, target = e.target;
            var _leftThumbRef = leftThumbRef.value;
            e.stopPropagation();
            dragging = true;
            if (type === 'touchstart') {
                isLeftThumb = _leftThumbRef.contains(target);
            }
            else {
                isLeftThumb = currentTarget === _leftThumbRef ? true : false;
            }
            var pageX = e.pageX || e.touches[0].pageX;
            if (isLeftThumb) {
                x1 = pageX;
            }
            else {
                x2 = pageX;
            }
            before();
        };
        var updateModelValue = function (value) {
            modelValue.value[isLeftThumb ? 'min' : 'max'] = useGetSliderValue(value, step.value);
        };
        var addAnimation = function () {
            var _leftThumbRef = leftThumbRef.value;
            var _rightThumbRef = rightThumbRef.value;
            var thumbClassList = (isLeftThumb
                ? _leftThumbRef
                : _rightThumbRef).classList;
            var selectionClassList = selectionRef.value.classList;
            var thumbClassListTokens = [
                'transition-[left]',
                'duration-[--u-transition-duration]'
            ];
            var selectionClassListTokens = [
                'transition-[width]',
                'duration-[--u-transition-duration]'
            ];
            thumbClassList.add.apply(thumbClassList, thumbClassListTokens);
            selectionClassList.add.apply(selectionClassList, selectionClassListTokens);
            var v = max.value - min.value;
            var _a = modelValue.value, leftThumbValue = _a.min, rightThumbValue = _a.max;
            var _leftThumbLeft = leftThumbValue / v * 100;
            var _rightThumbLeft = rightThumbValue / v * 100;
            if (isLeftThumb) {
                leftThumbLeft.value = "".concat(_leftThumbLeft, "%");
            }
            else {
                rightThumbLeft.value = "".concat(_rightThumbLeft, "%");
            }
            width.value = "".concat(_rightThumbLeft - _leftThumbLeft, "%");
            setTimeout(function () {
                thumbClassList.remove.apply(thumbClassList, thumbClassListTokens);
                selectionClassList.remove.apply(selectionClassList, selectionClassListTokens);
                if (isLeftThumb) {
                    x1 = _leftThumbRef.getBoundingClientRect().x;
                }
                else {
                    x2 = _rightThumbRef.getBoundingClientRect().x;
                }
            }, 300);
        };
        var onUpdate = function (e, isClick) {
            if (isClick === void 0) { isClick = false; }
            var pageX = e.pageX || e.touches[0].pageX;
            if (isClick) {
                isLeftThumb = Math.abs(pageX - x1) < Math.abs(pageX - x2) ? true : false;
            }
            var offset = isLeftThumb ? pageX - x1 : pageX - x2;
            var flostLeftThumbLeft = parseFloat(leftThumbLeft.value);
            var floatRightThumbLeft = parseFloat(rightThumbLeft.value);
            var newValue = parseFloat("".concat(isLeftThumb ? flostLeftThumbLeft : floatRightThumbLeft)) +
                offset / trackRef.value.clientWidth * 100;
            if (newValue < 0 || newValue > 100) {
                return;
            }
            flag = flostLeftThumbLeft >= floatRightThumbLeft ? true : false;
            var value = Math.round(newValue / 100 * (max.value - min.value));
            updateModelValue(value);
            if (isLeftThumb) {
                leftThumbLeft.value = "".concat(newValue, "%");
                x1 = pageX;
                width.value = "".concat(Math.abs(floatRightThumbLeft - newValue), "%");
            }
            else {
                rightThumbLeft.value = "".concat(newValue, "%");
                x2 = pageX;
                width.value = "".concat(Math.abs(newValue - flostLeftThumbLeft), "%");
            }
        };
        var onMousemove = throttle(function (e) {
            if (!dragging) {
                return;
            }
            e.stopPropagation();
            onUpdate(e);
        }, 10, { trailing: true });
        var onMouseup = function (e) {
            e.stopPropagation();
            dragging = false;
            addAnimation();
            after();
        };
        var onClick = function (e) {
            dragging = true;
            onUpdate(e, true);
        };
        watch(modelValue, function () {
            if (dragging) {
                return;
            }
            addAnimation();
        });
        onMounted(function () {
            x1 = leftThumbRef.value.getBoundingClientRect().x;
            x2 = rightThumbRef.value.getBoundingClientRect().x;
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: "u-range cursor-pointer w-full flex items-center",
                onMousedown: onClick,
                onMouseup: onMouseup
            }, [
                createElementVNode("div", {
                    ref_key: "trackRef",
                    ref: trackRef,
                    class: normalizeClass(["u-range-track relative flex items-center w-full", unref(trackClass)])
                }, [
                    createElementVNode("div", {
                        ref_key: "selectionRef",
                        ref: selectionRef,
                        class: normalizeClass(["u-range-track-selection absolute h-full", unref(selectionClass)]),
                        style: normalizeStyle({ width: width.value, left: unref(flag) ? rightThumbLeft.value : leftThumbLeft.value })
                    }, null, 6 /* CLASS, STYLE */),
                    createElementVNode("div", {
                        ref_key: "leftThumbRef",
                        ref: leftThumbRef,
                        class: "u-range-track-thumb-left absolute -translate-x-1/2",
                        style: normalizeStyle({ left: leftThumbLeft.value }),
                        onMousedown: onMousedown,
                        onMousemove: _cache[0] || (_cache[0] =
                            //@ts-ignore
                            function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return (unref(onMousemove) && unref(onMousemove).apply(void 0, args));
                            }),
                        onMouseup: onMouseup,
                        onTouchstart: onMousedown,
                        onTouchmove: _cache[1] || (_cache[1] =
                            //@ts-ignore
                            function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return (unref(onMousemove) && unref(onMousemove).apply(void 0, args));
                            }),
                        onTouchend: onMouseup
                    }, [
                        renderSlot(_ctx.$slots, "left-thumb")
                    ], 36 /* STYLE, HYDRATE_EVENTS */),
                    createElementVNode("div", {
                        ref_key: "rightThumbRef",
                        ref: rightThumbRef,
                        class: "u-range-track-thumb-right absolute -translate-x-1/2",
                        style: normalizeStyle({ left: rightThumbLeft.value }),
                        onMousedown: onMousedown,
                        onMousemove: _cache[2] || (_cache[2] =
                            //@ts-ignore
                            function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return (unref(onMousemove) && unref(onMousemove).apply(void 0, args));
                            }),
                        onMouseup: onMouseup,
                        onTouchstart: onMousedown,
                        onTouchmove: _cache[3] || (_cache[3] =
                            //@ts-ignore
                            function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return (unref(onMousemove) && unref(onMousemove).apply(void 0, args));
                            }),
                        onTouchend: onMouseup
                    }, [
                        renderSlot(_ctx.$slots, "right-thumb")
                    ], 36 /* STYLE, HYDRATE_EVENTS */)
                ], 2 /* CLASS */)
            ], 32 /* HYDRATE_EVENTS */));
        };
    }
});

script$j.__file = "src/components/u-range/index.vue";

var dialogPositon = {
    top: 'top-0 left-0 right-0 justify-center',
    right: 'right-0 top-0 bottom-0 items-center',
    bottom: 'bottom-0 left-0 right-0 justify-center',
    left: 'left-0 top-0 bottom-0 items-center',
    center: 'top-0 right-0 bottom-0 left-0 justify-center items-center'
};

var dialogAnimation = {
    top: ['u-slide-down', 'u-slide-down-reverse'],
    right: ['u-slide-left', 'u-slide-left-reverse'],
    bottom: ['u-slide-up', 'u-slide-up-reverse'],
    left: ['u-slide-right', 'u-slide-right-reverse'],
    center: ['u-scale', 'u-scale-reverse']
};

var script$i = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        position: { type: String, required: false, default: 'center' },
        modelValue: { type: Boolean, required: true },
        persistent: { type: Boolean, required: false, default: false }
    },
    emits: ["update:modelValue"],
    setup: function (__props, _a) {
        var emit = _a.emit;
        var props = __props;
        var _b = toRefs(props), position = _b.position, modelValue = _b.modelValue, persistent = _b.persistent;
        var innerRef = ref(null);
        var backdropRef = ref(null);
        var backdropClass = computed(function () { return modelValue.value
            ? 'bg-[rgba(0,0,0,.4)]'
            : 'bg-transparent'; });
        var innerClass = computed(function () { return dialogPositon[position.value]; });
        var timeout = null;
        var slotContainerRef = ref(null);
        var onClose = function (e) {
            var _innerRef = innerRef.value;
            var _backdropRef = backdropRef.value;
            // dialog is closed by click container
            if (!_innerRef) {
                return;
            }
            var target = e.target;
            var outer = target === _innerRef || target === _backdropRef;
            if (!outer) {
                return;
            }
            if (persistent.value) {
                var classList_1 = slotContainerRef.value.classList;
                classList_1.remove('u-shake');
                classList_1.add('u-shake');
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(function () {
                    timeout = null;
                    classList_1.remove('u-shake');
                }, 150);
            }
            else {
                emit('update:modelValue', false);
            }
        };
        watch(modelValue, function (value) {
            var className = dialogAnimation[position.value][value ? 0 : 1];
            if (value) {
                nextTick(function () {
                    slotContainerRef.value.classList.add(className);
                    setTimeout(function () {
                        slotContainerRef.value.classList.remove(className);
                    }, 300);
                });
            }
            else {
                slotContainerRef.value.classList.add(className);
            }
        });
        return function (_ctx, _cache) {
            return (openBlock(), createBlock(Teleport, { to: "body" }, [
                createVNode(Transition, { name: "u-fade" }, {
                    default: withCtx(function () { return [
                        (unref(modelValue))
                            ? (openBlock(), createElementBlock("div", {
                                key: 0,
                                class: "u-dialog w-screen h-screen fixed top-0 z-50",
                                onClick: onClose
                            }, [
                                createElementVNode("div", {
                                    ref_key: "backdropRef",
                                    ref: backdropRef,
                                    class: normalizeClass(["u-dialog-backdrop h-full", backdropClass.value])
                                }, null, 2 /* CLASS */),
                                createElementVNode("div", {
                                    ref_key: "innerRef",
                                    ref: innerRef,
                                    class: normalizeClass(["u-dialog-inner absolute flex", innerClass.value])
                                }, [
                                    createCommentVNode(" add a container for persistent "),
                                    createElementVNode("div", {
                                        ref_key: "slotContainerRef",
                                        ref: slotContainerRef
                                    }, [
                                        renderSlot(_ctx.$slots, "default")
                                    ], 512 /* NEED_PATCH */)
                                ], 2 /* CLASS */)
                            ]))
                            : createCommentVNode("v-if", true)
                    ]; }),
                    _: 3 /* FORWARDED */
                })
            ]));
        };
    }
});

script$i.__file = "src/components/u-dialog/index.vue";

var script$h = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        min: { type: Number, required: false, default: 0 },
        max: { type: Number, required: false, default: 100 },
        step: { type: Number, required: false, default: 1 },
        modelValue: { type: Number, required: true },
        trackClass: { type: String, required: false, default: '' },
        selectionClass: { type: String, required: false, default: '' }
    },
    emits: ["update:modelValue"],
    setup: function (__props, _a) {
        var emit = _a.emit;
        var props = __props;
        var _b = toRefs(props), min = _b.min, max = _b.max, step = _b.step, modelValue = _b.modelValue, trackClass = _b.trackClass, selectionClass = _b.selectionClass;
        var left = ref("".concat(modelValue.value / (max.value - min.value) * 100, "%"));
        var thumbRef = ref(null);
        var trackRef = ref(null);
        var selectionRef = ref(null);
        var body = document.body;
        var before = function () {
            body.classList.add('select-none');
            body.addEventListener('mousemove', onMousemove);
            body.addEventListener('mouseup', onMouseup);
            body.addEventListener('touchmove', onMousemove);
            body.addEventListener('touchend', onMouseup);
        };
        var after = function () {
            body.classList.remove('select-none');
            body.removeEventListener('mousemove', onMousemove);
            body.removeEventListener('mouseup', onMouseup);
            body.removeEventListener('touchmove', onMousemove);
            body.removeEventListener('touchend', onMouseup);
        };
        var x = 0;
        var dragging = false;
        var onMousedown = function (e) {
            e.stopPropagation();
            x = e.pageX || e.touches[0].pageX;
            dragging = true;
            before();
        };
        var updateModelValue = function (value) {
            emit('update:modelValue', useGetSliderValue(value, step.value));
        };
        var addAnimation = function () {
            var thumbClassList = thumbRef.value.classList;
            var selectionClassList = selectionRef.value.classList;
            var thumbClassListTokens = [
                'transition-[left]',
                'duration-[--u-transition-duration]'
            ];
            var selectionClassListTokens = [
                'transition-[width]',
                'duration-[--u-transition-duration]'
            ];
            thumbClassList.add.apply(thumbClassList, thumbClassListTokens);
            selectionClassList.add.apply(selectionClassList, selectionClassListTokens);
            left.value = "".concat(modelValue.value / (max.value - min.value) * 100, "%");
            setTimeout(function () {
                thumbClassList.remove.apply(thumbClassList, thumbClassListTokens);
                selectionClassList.remove.apply(selectionClassList, selectionClassListTokens);
                // update last position
                x = thumbRef.value.getBoundingClientRect().x;
            }, 300);
        };
        var onUpdate = function (e) {
            var pageX = e.pageX || e.touches[0].pageX;
            var offset = pageX - x;
            var newLeft = parseFloat(left.value) +
                offset / trackRef.value.clientWidth * 100;
            if (newLeft < 0 || newLeft > 100) {
                return;
            }
            var value = Math.round(newLeft / 100 * (max.value - min.value));
            updateModelValue(value);
            left.value = "".concat(newLeft, "%");
            x = pageX;
        };
        var onMousemove = throttle(function (e) {
            if (!dragging) {
                return;
            }
            e.stopPropagation();
            onUpdate(e);
        }, 10, { trailing: true });
        var onMouseup = function (e) {
            e.stopPropagation();
            dragging = false;
            addAnimation();
            after();
        };
        var onClick = function (e) {
            dragging = true;
            onUpdate(e);
        };
        // modify value outside the component, such as reset slider.
        watch(modelValue, function () {
            if (dragging) {
                return;
            }
            addAnimation();
        });
        // for update slider by click
        onMounted(function () { return x = thumbRef.value.getBoundingClientRect().x; });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: "u-slider cursor-pointer w-full flex items-center",
                onMousedown: onClick,
                onMouseup: onMouseup,
                onTouchstart: onClick,
                onTouchend: onMouseup
            }, [
                createElementVNode("div", {
                    ref_key: "trackRef",
                    ref: trackRef,
                    class: normalizeClass(["u-slider-track relative flex items-center w-full", unref(trackClass)])
                }, [
                    createElementVNode("div", {
                        ref_key: "selectionRef",
                        ref: selectionRef,
                        class: normalizeClass(["u-slider-track-selection absolute h-full", unref(selectionClass)]),
                        style: normalizeStyle({ width: left.value })
                    }, null, 6 /* CLASS, STYLE */),
                    createElementVNode("div", {
                        ref_key: "thumbRef",
                        ref: thumbRef,
                        class: "u-slider-track-thumb absolute -translate-x-1/2",
                        style: normalizeStyle({ left: left.value }),
                        onMousedown: onMousedown,
                        onMousemove: _cache[0] || (_cache[0] =
                            //@ts-ignore
                            function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return (unref(onMousemove) && unref(onMousemove).apply(void 0, args));
                            }),
                        onMouseup: onMouseup,
                        onTouchstart: onMousedown,
                        onTouchmove: _cache[1] || (_cache[1] =
                            //@ts-ignore
                            function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return (unref(onMousemove) && unref(onMousemove).apply(void 0, args));
                            }),
                        onTouchend: onMouseup
                    }, [
                        renderSlot(_ctx.$slots, "default")
                    ], 36 /* STYLE, HYDRATE_EVENTS */)
                ], 2 /* CLASS */)
            ], 32 /* HYDRATE_EVENTS */));
        };
    }
});

script$h.__file = "src/components/u-slider/index.vue";

var _hoisted_1$8 = ["data-index"];
var script$g = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        max: { type: Number, required: true },
        color: { type: String, required: false, default: '#000' },
        modelValue: { type: Number, required: true },
        activeColor: { type: String, required: false, default: '#eab308' }
    },
    emits: ["update:modelValue"],
    setup: function (__props, _a) {
        var emit = _a.emit;
        var props = __props;
        var _b = toRefs(props), max = _b.max, color = _b.color, modelValue = _b.modelValue, activeColor = _b.activeColor;
        var ratingRef = ref(null);
        var fillIcons = function (endIndex) {
            var children = ratingRef.value.children;
            for (var i = 0; i <= endIndex; i++) {
                children[i].style.color = activeColor.value;
            }
            for (var i = endIndex + 1, l = children.length; i < l; i++) {
                children[i].style.color = color.value;
            }
        };
        var getIndex = function (target) {
            while (target.tagName !== 'DIV') {
                target = target.parentNode;
            }
            return Number(target.getAttribute('data-index'));
        };
        var clickHandler = function (e) {
            var _a = e, target = _a.target, currentTarget = _a.currentTarget;
            if (target === currentTarget) {
                return;
            }
            var index = getIndex(target);
            emit('update:modelValue', index + 1);
        };
        var mousemoveHandler = throttle(function (e) {
            var _a = e, target = _a.target, currentTarget = _a.currentTarget;
            if (target === currentTarget) {
                fillIcons(modelValue.value - 1);
                return;
            }
            var index = getIndex(target);
            fillIcons(index);
        }, 100);
        var mouseleaveHandler = function () { return fillIcons(modelValue.value - 1); };
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                ref_key: "ratingRef",
                ref: ratingRef,
                class: "u-rating flex",
                onClick: clickHandler,
                onMousemove: _cache[0] || (_cache[0] =
                    //@ts-ignore
                    function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return (unref(mousemoveHandler) && unref(mousemoveHandler).apply(void 0, args));
                    }),
                onMouseleave: mouseleaveHandler
            }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Number(unref(max)), function (i) {
                    return (openBlock(), createElementBlock("div", {
                        class: "u-rating-icon-container cursor-pointer",
                        key: i,
                        "data-index": i - 1,
                        style: normalizeStyle({ color: i <= unref(modelValue) ? unref(activeColor) : unref(color) })
                    }, [
                        renderSlot(_ctx.$slots, "default")
                    ], 12 /* STYLE, PROPS */, _hoisted_1$8));
                }), 128 /* KEYED_FRAGMENT */))
            ], 544 /* HYDRATE_EVENTS, NEED_PATCH */));
        };
    }
});

script$g.__file = "src/components/u-rating/index.vue";

var _hoisted_1$7 = ["readonly", "disabled", "placeholder", "value"];
var _hoisted_2$3 = ["onClick"];
var script$f = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        race: { type: Boolean, required: false, default: false },
        class: { type: String, required: false, default: '' },
        options: { type: Array, required: true },
        readonly: { type: Boolean, required: false, default: false },
        disabled: { type: Boolean, required: false, default: false },
        multiple: { type: Boolean, required: false, default: false },
        maxValues: { type: Number, required: false, default: Number.MAX_SAFE_INTEGER },
        persistent: { type: Boolean, required: false, default: true },
        modelValue: { type: [String, Array], required: true },
        inputClass: { type: String, required: false, default: '' },
        placeholder: { type: String, required: false, default: '' },
        focusedBorderClass: { type: String, required: false, default: '' }
    },
    emits: ["blur", "focus", "clear", "update:modelValue"],
    setup: function (__props, _a) {
        var emit = _a.emit;
        var props = __props;
        var _b = toRefs(props), race = _b.race, className = _b.class, options = _b.options, multiple = _b.multiple, readonly = _b.readonly, disabled = _b.disabled, maxValues = _b.maxValues, modelValue = _b.modelValue, persistent = _b.persistent, inputClass = _b.inputClass, placeholder = _b.placeholder, focusedBorderClass = _b.focusedBorderClass;
        var inputRef = ref(null);
        var selectListRef = ref(null);
        var wrapperRef = ref(null);
        var containerRef = ref(null);
        var focused = ref(false);
        var expanded = computed(function () { return !readonly.value &&
            !disabled.value &&
            focused.value; });
        var cursorClass = computed(function () { return "".concat(disabled.value
            ? ' cursor-not-allowed'
            : "".concat(readonly.value ? ' cursor-auto' : ' cursor-pointer')); });
        var containerClass = computed(function () { return "".concat(className.value).concat(cursorClass.value).concat(expanded.value ? " ".concat(focusedBorderClass.value) : ''); });
        var _inputClass = computed(function () { return "".concat(inputClass.value).concat(cursorClass.value); });
        // ------ keep mouse down ------
        // mousedown > focus > focus in > mouseup > click
        var onMousedown = function (e) {
            // prevent input focus
            e.preventDefault();
            containerRef.value.focus();
        };
        var onClick = function () { return focused.value = !focused.value; };
        var onBlur = function () { return focused.value = false; };
        var getIndex = function (target, parent) {
            var index = null;
            while (!(index = target.getAttribute('data-index')) && target !== parent) {
                target = target.parentNode;
            }
            return index;
        };
        var updateModelValue = function (e) {
            var target = e.target, currentTarget = e.currentTarget;
            var index = getIndex(target, currentTarget);
            var value = options.value[Number(index)];
            if (multiple.value) {
                var _modelValue = modelValue.value;
                var index_1 = _modelValue.indexOf(value);
                var _maxValues = maxValues.value;
                if (index_1 >= 0) {
                    _modelValue.splice(index_1, 1);
                }
                else if (_modelValue.length < _maxValues) {
                    _modelValue.push(value);
                }
                else if (race.value) {
                    _modelValue.shift();
                    _modelValue.push(value);
                }
                if (!persistent.value && _modelValue.length >= _maxValues) {
                    onBlur();
                }
            }
            else {
                emit('update:modelValue', value);
                onBlur();
            }
        };
        var initClearableBtns = function () {
            var onClear = function (e) {
                e.stopPropagation();
                if (Array.isArray(modelValue.value)) {
                    modelValue.value.splice(0);
                }
                else {
                    emit('update:modelValue', '');
                }
            };
            var elms = wrapperRef.value.querySelectorAll('*[clearable]');
            for (var i = 0, l = elms.length; i < l; i++) {
                elms[i].addEventListener('click', onClear);
            }
        };
        onMounted(function () {
            initClearableBtns();
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: "u-input-wrapper flex items-center",
                ref_key: "wrapperRef",
                ref: wrapperRef
            }, [
                renderSlot(_ctx.$slots, "before"),
                createElementVNode("div", {
                    tabindex: "-1",
                    ref_key: "containerRef",
                    ref: containerRef,
                    class: normalizeClass(["u-input-container focus:outline-none flex items-center relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:z-[-1] before:transition-colors before:duration-[--u-transition-duration]", containerClass.value]),
                    onClick: onClick,
                    onBlur: onBlur
                }, [
                    renderSlot(_ctx.$slots, "prepend"),
                    createElementVNode("input", {
                        readonly: unref(disabled) ? false : true,
                        disabled: unref(disabled) ? true : false,
                        placeholder: unref(placeholder),
                        value: unref(modelValue),
                        class: normalizeClass(["u-input h-full grow focus:outline-none bg-transparent", _inputClass.value]),
                        ref_key: "inputRef",
                        ref: inputRef,
                        type: "text",
                        onMousedown: onMousedown
                    }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_1$7),
                    renderSlot(_ctx.$slots, "append", { expanded: expanded.value }),
                    createVNode(Transition, { name: "u-fade" }, {
                        default: withCtx(function () { return [
                            (expanded.value)
                                ? (openBlock(), createElementBlock("div", {
                                    key: 0,
                                    onClick: withModifiers(updateModelValue, ["stop"]),
                                    onFocusout: _cache[0] || (_cache[0] = withModifiers(
                                    //@ts-ignore
                                    function () {
                                        var args = [];
                                        for (var _i = 0; _i < arguments.length; _i++) {
                                            args[_i] = arguments[_i];
                                        }
                                        return (unref(noop) && unref(noop).apply(void 0, args));
                                    }, ["stop"])),
                                    ref_key: "selectListRef",
                                    ref: selectListRef,
                                    class: "u-select-list absolute left-0 right-0 top-full z-10"
                                }, [
                                    renderSlot(_ctx.$slots, "select-list")
                                ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$3))
                                : createCommentVNode("v-if", true)
                        ]; }),
                        _: 3 /* FORWARDED */
                    })
                ], 34 /* CLASS, HYDRATE_EVENTS */),
                renderSlot(_ctx.$slots, "after", { expanded: expanded.value })
            ], 512 /* NEED_PATCH */));
        };
    }
});

script$f.__file = "src/components/u-select/index.vue";

var script$e = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        modelValue: { type: Boolean, required: true },
        trackStyle: { type: Object, required: false, default: function () { return ({}); } },
        trackClass: { type: String, required: false, default: '' },
        thumbStyle: { type: Object, required: false, default: function () { return ({}); } },
        thumbClass: { type: String, required: false, default: '' },
        activeTrackStyle: { type: Object, required: false, default: function () { return ({}); } },
        activeTrackClass: { type: String, required: false, default: '' },
        activeThumbStyle: { type: Object, required: false, default: function () { return ({}); } },
        activeThumbClass: { type: String, required: false, default: '' }
    },
    emits: ["update:modelValue"],
    setup: function (__props, _a) {
        var emit = _a.emit;
        var props = __props;
        var _b = toRefs(props), modelValue = _b.modelValue, trackStyle = _b.trackStyle, trackClass = _b.trackClass, thumbStyle = _b.thumbStyle, thumbClass = _b.thumbClass, activeTrackStyle = _b.activeTrackStyle, activeTrackClass = _b.activeTrackClass, activeThumbStyle = _b.activeThumbStyle, activeThumbClass = _b.activeThumbClass;
        var _thumbStyle = computed(function () {
            var _modelValue = modelValue.value;
            return __assign(__assign(__assign({}, thumbStyle.value), {
            // left: _modelValue ? '100%' : '0',
            // transform: `translateX(${ _modelValue ? '-100%' : '0' })`,
            }), (_modelValue ? activeThumbStyle.value : {}));
        });
        var _trackStyle = computed(function () { return (__assign(__assign({}, trackStyle.value), (modelValue.value ? activeTrackStyle.value : {}))); });
        var _thumbClass = computed(function () { return "\n  ".concat(thumbClass.value, " ").concat(modelValue.value ? activeThumbClass.value : '', "\n"); });
        var _trackClass = computed(function () { return "\n  ".concat(trackClass.value, " ").concat(modelValue.value ? activeTrackClass.value : '', "\n"); });
        var updateModel = function () { return emit('update:modelValue', !modelValue.value); };
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: "u-toggle relative flex items-center",
                onClick: updateModel
            }, [
                createElementVNode("div", {
                    class: normalizeClass(["u-toggle-track w-full h-full transition-[background-color] duration-[--u-transition-duration]", _trackClass.value]),
                    style: normalizeStyle(_trackStyle.value)
                }, null, 6 /* CLASS, STYLE */),
                createElementVNode("div", {
                    class: normalizeClass(["u-toggle-thumb absolute flex justify-center items-center transition-[left] duration-[--u-transition-duration]", _thumbClass.value]),
                    style: normalizeStyle(_thumbStyle.value)
                }, [
                    renderSlot(_ctx.$slots, "default")
                ], 6 /* CLASS, STYLE */)
            ]));
        };
    }
});

script$e.__file = "src/components/u-toggle/index.vue";

function render(_ctx, _cache) {
  const _component_u_dropdown = resolveComponent("u-dropdown");

  return (openBlock(), createBlock(_component_u_dropdown, { isTooltip: true }, {
    list: withCtx(() => [
      renderSlot(_ctx.$slots, "text")
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }))
}

const script$d = {};


script$d.render = render;
script$d.__file = "src/components/u-tooltip/index.vue";

var script$c = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        min: { type: Number, required: false, default: 20 },
        max: { type: Number, required: false, default: 80 },
        modelValue: { type: Number, required: true },
        horizontal: { type: Boolean, required: false, default: false },
        afterStyle: { type: Object, required: false, default: function () { return ({}); } },
        afterClass: { type: String, required: false, default: '' },
        beforeStyle: { type: Object, required: false, default: function () { return ({}); } },
        beforeClass: { type: String, required: false, default: '' }
    },
    emits: ["update:modelValue"],
    setup: function (__props, _a) {
        var emit = _a.emit;
        var props = __props;
        var _b = toRefs(props), min = _b.min, max = _b.max, modelValue = _b.modelValue, horizontal = _b.horizontal, afterStyle = _b.afterStyle, afterClass = _b.afterClass, beforeStyle = _b.beforeStyle, beforeClass = _b.beforeClass;
        var before = ref(null);
        var dragging = ref(false);
        var splitter = ref(null);
        var container = ref(null);
        var _beforeStyle = computed(function () {
            return __assign(__assign({}, beforeStyle), (horizontal.value
                ? { height: "".concat(modelValue.value, "%") }
                : { width: "".concat(modelValue.value, "%") }));
        });
        var prevOffset = 0;
        var updateDragState = function () { return dragging.value = !dragging.value; };
        var updateOffset = function (e) {
            var offset = 0;
            var _modelValue = modelValue.value;
            var _horizontal = horizontal.value;
            var clientX = e.clientX, clientY = e.clientY;
            var _a = container.value, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
            if (_horizontal) {
                offset = _modelValue + (clientY - prevOffset) / clientHeight * 100;
            }
            else {
                offset = _modelValue + (clientX - prevOffset) / clientWidth * 100;
            }
            if (offset > min.value && offset < max.value) {
                emit('update:modelValue', offset);
                prevOffset = _horizontal ? clientY : clientX;
            }
        };
        var addGlobalEventListener = function () {
            var body = document.body;
            body.addEventListener('mousemove', mousemoveHandler);
            body.addEventListener('mouseup', mouseupHandler);
        };
        var removeGlobalEventListener = function () {
            var body = document.body;
            body.removeEventListener('mousemove', mousemoveHandler);
            body.removeEventListener('mouseup', mouseupHandler);
        };
        var mousedownHandler = function (e) {
            var clientX = e.clientX, clientY = e.clientY;
            prevOffset = horizontal.value ? clientY : clientX;
            updateDragState();
            addGlobalEventListener();
        };
        var mousemoveHandler = throttle(function (e) {
            if (!dragging.value) {
                return;
            }
            updateOffset(e);
        }, 10);
        var mouseupHandler = function () {
            updateDragState();
            removeGlobalEventListener();
        };
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                ref_key: "container",
                ref: container,
                class: "u-splitter-container flex",
                style: normalizeStyle({ flexDirection: unref(horizontal) ? 'column' : 'row' })
            }, [
                createElementVNode("div", {
                    class: normalizeClass([unref(beforeClass), "u-splitter-before overflow-auto"]),
                    ref_key: "before",
                    ref: before,
                    style: normalizeStyle(_beforeStyle.value)
                }, [
                    renderSlot(_ctx.$slots, "before")
                ], 6 /* CLASS, STYLE */),
                createElementVNode("div", {
                    ref_key: "splitter",
                    ref: splitter,
                    class: "u-splitter cursor-move select-none",
                    style: normalizeStyle({ cursor: dragging.value ? 'pointer' : 'move' }),
                    onMousedown: _cache[0] || (_cache[0] = function ($event) { return (mousedownHandler($event)); }),
                    onMouseup: mouseupHandler
                }, [
                    renderSlot(_ctx.$slots, "splitter")
                ], 36 /* STYLE, HYDRATE_EVENTS */),
                createElementVNode("div", {
                    class: normalizeClass(["u-splitter-after overflow-auto basis-0 grow", unref(afterClass)]),
                    style: normalizeStyle(unref(afterStyle))
                }, [
                    renderSlot(_ctx.$slots, "after")
                ], 6 /* CLASS, STYLE */)
            ], 4 /* STYLE */));
        };
    }
});

script$c.__file = "src/components/u-splitter/index.vue";

var script$b = /*#__PURE__*/ defineComponent({
    __name: 'index',
    setup: function (__props) {
        var modelValue = inject(panelsKey);
        var name = useAttrs().name;
        var panelStyle = computed(function () { return ({
            display: name === modelValue.value ? 'block' : 'none'
        }); });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: "u-tab-panel",
                style: normalizeStyle(panelStyle.value)
            }, [
                renderSlot(_ctx.$slots, "default")
            ], 4 /* STYLE */));
        };
    }
});

script$b.__file = "src/components/u-tab-panel/index.vue";

var _hoisted_1$6 = { class: "u-skeleton" };
var _hoisted_2$2 = { key: 0 };
var _hoisted_3$1 = { key: 1 };
var script$a = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        animate: { type: Boolean, required: false, default: true },
        modelValue: { type: Boolean, required: true }
    },
    setup: function (__props) {
        var props = __props;
        var _a = toRefs(props), animate = _a.animate, modelValue = _a.modelValue;
        provide(skeletonKey, animate);
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", _hoisted_1$6, [
                (unref(modelValue))
                    ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
                        renderSlot(_ctx.$slots, "skeleton-items")
                    ]))
                    : (openBlock(), createElementBlock("div", _hoisted_3$1, [
                        renderSlot(_ctx.$slots, "default")
                    ]))
            ]));
        };
    }
});

script$a.__file = "src/components/u-skeleton/index.vue";

var script$9 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        trigger: { type: String, required: false, default: 'hover' },
        isTooltip: { type: Boolean, required: false, default: false }
    },
    setup: function (__props) {
        var props = __props;
        var visible = ref(false);
        var headerRef = ref(null);
        var dropdownRef = ref(null);
        var _a = toRefs(props), trigger = _a.trigger, isTooltip = _a.isTooltip;
        var onShow = function () { return visible.value = true; };
        var onHide = function () { return visible.value = false; };
        onMounted(function () {
            watch(trigger, function (value) {
                var _headerRef = headerRef.value;
                if (value === 'hover') {
                    if (isTooltip.value) {
                        _headerRef.addEventListener('mouseenter', onShow);
                        _headerRef.addEventListener('mouseleave', onHide);
                    }
                    else {
                        var _dropdownRef = dropdownRef.value;
                        _dropdownRef.addEventListener('mouseenter', onShow);
                        _dropdownRef.addEventListener('mouseleave', onHide);
                    }
                }
                else {
                    _headerRef.addEventListener('focusout', onHide);
                    _headerRef.addEventListener('click', function () { return visible.value
                        ? onHide()
                        : onShow(); });
                }
            }, { immediate: true });
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: "u-dropdown relative w-fit h-fit",
                ref_key: "dropdownRef",
                ref: dropdownRef
            }, [
                createElementVNode("div", {
                    class: "u-dropdown-header",
                    tabindex: "-1",
                    ref_key: "headerRef",
                    ref: headerRef
                }, [
                    renderSlot(_ctx.$slots, "default", { visible: visible.value })
                ], 512 /* NEED_PATCH */),
                createVNode(Transition, { name: "u-fade" }, {
                    default: withCtx(function () { return [
                        (visible.value)
                            ? (openBlock(), createElementBlock("div", {
                                key: 0,
                                class: "u-dropdown-list",
                                onClick: onHide
                            }, [
                                renderSlot(_ctx.$slots, "list", { visible: visible.value })
                            ]))
                            : createCommentVNode("v-if", true)
                    ]; }),
                    _: 3 /* FORWARDED */
                })
            ], 512 /* NEED_PATCH */));
        };
    }
});

script$9.__file = "src/components/u-dropdown/index.vue";

var script$8 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        to: { type: Number, required: false, default: 0 },
        duration: { type: Number, required: false, default: 300 },
        scrollOffset: { type: Number, required: false, default: 150 },
        scrollTarget: { type: String, required: false, default: '' }
    },
    setup: function (__props) {
        var props = __props;
        var scrollerRef = ref(null);
        var _scrollTarget = ref(null);
        var _a = toRefs(props), to = _a.to, duration = _a.duration, scrollOffset = _a.scrollOffset, scrollTarget = _a.scrollTarget;
        var getScrollTarget = function () {
            var scrollTarget = scrollerRef.value;
            while (!scrollTarget.classList.contains('u-scroll-area-container')) {
                scrollTarget = scrollTarget.parentNode;
            }
            return scrollTarget;
        };
        var scrollToTop = function () {
            var _to = to.value;
            var _duration = duration.value;
            var scrollTarget = _scrollTarget.value;
            if (_duration) {
                animateScroller(scrollTarget, _to, _duration);
            }
            else {
                scrollTarget.scrollTop = _to;
            }
            // TODO:
            // scrollTarget.scrollTo({
            //   top: _to,
            //   behavior: "smooth"
            // })
        };
        var animateScroller = function (el, to, duration) {
            var prevTime = performance.now();
            var pos = el.scrollTop;
            requestAnimationFrame(function (nowTime) {
                var frameTime = nowTime - prevTime;
                var newPos = pos - (pos - to) * frameTime / Math.max(frameTime, duration);
                el.scrollTop = newPos <= to ? to : newPos;
                if (newPos > to) {
                    animateScroller(el, to, duration - frameTime);
                }
            });
        };
        var updateVisibility = function () {
            var scrollTarget = _scrollTarget.value;
            var onScroll = function () {
                var _a, _b;
                if (scrollTarget.scrollTop >= scrollOffset.value) {
                    (_a = scrollerRef.value) === null || _a === void 0 ? void 0 : _a.classList.replace('opacity-0', 'opacity-100');
                }
                else {
                    (_b = scrollerRef.value) === null || _b === void 0 ? void 0 : _b.classList.replace('opacity-100', 'opacity-0');
                }
            };
            scrollTarget.addEventListener('scroll', throttle(onScroll, 300, { trailing: true }));
            onScroll();
        };
        onMounted(function () {
            watch(scrollTarget, function (v) {
                _scrollTarget.value = v
                    ? document.querySelector(v)
                    : getScrollTarget();
            }, { immediate: true });
            updateVisibility();
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                onClick: scrollToTop,
                ref_key: "scrollerRef",
                ref: scrollerRef,
                class: "u-scroller opacity-0 duration-[--u-transition-duration] transition-opacity"
            }, [
                renderSlot(_ctx.$slots, "default")
            ], 512 /* NEED_PATCH */));
        };
    }
});

script$8.__file = "src/components/u-scroller/index.vue";

var script$7 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        value: { type: null, required: false, default: false },
        disabled: { type: Boolean, required: false, default: false },
        modelValue: { type: Boolean, required: false }
    },
    emits: ["update:modelValue"],
    setup: function (__props, _a) {
        var emit = _a.emit;
        var props = __props;
        var _b = inject(checkboxGroupKey, {
            parentModel: null,
            updateParentModel: noop
        }), parentModel = _b.parentModel, updateParentModel = _b.updateParentModel;
        var _c = toRefs(props), value = _c.value, disabled = _c.disabled, modelValue = _c.modelValue;
        var checked = computed(function () {
            return parentModel
                ? parentModel.includes(value.value)
                : modelValue.value;
        });
        var updateModel = function () {
            if (disabled.value) {
                return;
            }
            if (parentModel) {
                updateParentModel(value.value);
            }
            else {
                emit('update:modelValue', !modelValue.value);
            }
        };
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: "u-checkbox cursor-pointer inline-flex items-center",
                onClick: updateModel
            }, [
                renderSlot(_ctx.$slots, "before", { checked: checked.value }),
                renderSlot(_ctx.$slots, "default", { checked: checked.value }),
                renderSlot(_ctx.$slots, "after", { checked: checked.value })
            ]));
        };
    }
});

script$7.__file = "src/components/u-checkbox/index.vue";

var _hoisted_1$5 = { class: "u-expansion" };
var script$6 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        min: { type: Number, required: false, default: Number.MIN_SAFE_INTEGER },
        max: { type: Number, required: false, default: Number.MAX_SAFE_INTEGER },
        modelValue: { type: Array, required: true }
    },
    setup: function (__props) {
        var props = __props;
        var _a = toRefs(props), min = _a.min, max = _a.max, modelValue = _a.modelValue;
        var updateModel = function (name) {
            var expanded = modelValue.value;
            var index = expanded.indexOf(name);
            var length = expanded.length;
            if (index >= 0 && length > min.value) {
                expanded.splice(index, 1);
            }
            else {
                if (length === max.value) {
                    expanded.shift();
                }
                expanded.push(name);
            }
        };
        provide(expansionKey, {
            modelValue: modelValue.value,
            updateModel: updateModel,
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", _hoisted_1$5, [
                renderSlot(_ctx.$slots, "default")
            ]));
        };
    }
});

script$6.__file = "src/components/u-expansion/index.vue";

var script$5 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        modelValue: { type: String, required: true },
        panelStyle: { type: Object, required: false, default: function () { return ({}); } },
        panelClass: { type: String, required: false, default: '' }
    },
    setup: function (__props) {
        var props = __props;
        var _a = toRefs(props), modelValue = _a.modelValue, panelStyle = _a.panelStyle, panelClass = _a.panelClass;
        provide(panelsKey, modelValue);
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: normalizeClass(["u-tab-panels", unref(panelClass)]),
                style: normalizeStyle(unref(panelStyle))
            }, [
                renderSlot(_ctx.$slots, "default")
            ], 6 /* CLASS, STYLE */));
        };
    }
});

script$5.__file = "src/components/u-tab-panels/index.vue";

var _hoisted_1$4 = ["onScroll"];
var _hoisted_2$1 = ["onClick"];
var _hoisted_3 = ["onMousemove"];
var _hoisted_4 = ["onClick"];
var _hoisted_5 = ["onMousemove"];
var script$4 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        width: { type: String, required: false, default: '100%' },
        height: { type: String, required: false, default: '100%' },
        resize: { type: Boolean, required: false, default: true },
        hidden: { type: Boolean, required: false, default: false },
        persistent: { type: Boolean, required: false, default: false }
    },
    setup: function (__props) {
        var props = __props;
        var _a = toRefs(props), width = _a.width, height = _a.height, resize = _a.resize, hidden = _a.hidden, persistent = _a.persistent;
        var scrollAreaStyle = computed(function () { return ({
            width: width.value,
            height: height.value
        }); });
        var barXRef = ref(null);
        var barYRef = ref(null);
        var thumbXRef = ref(null);
        var thumbYRef = ref(null);
        var containerRef = ref(null);
        var scrollAreaRef = ref(null);
        var onScroll = function (e) {
            var _a = e.target, scrollTop = _a.scrollTop, scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, scrollHeight = _a.scrollHeight, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
            var _b = thumbXRef.value, thumbXStyle = _b.style, thumbXWidth = _b.clientWidth;
            var _c = thumbYRef.value, thumbYStyle = _c.style, thumbYHeight = _c.clientHeight;
            var maxScrollTop = scrollHeight - clientHeight;
            var maxScrollLeft = scrollWidth - clientWidth;
            var maxLeft = clientWidth - thumbXWidth;
            var maxTop = clientHeight - thumbYHeight;
            var left = scrollLeft / maxScrollLeft * maxLeft;
            var top = scrollTop / maxScrollTop * maxTop;
            thumbXStyle.left = "".concat(left, "px");
            thumbYStyle.top = "".concat(top, "px");
        };
        var dragging = false;
        var prevOffset = 0;
        // body mousemove event callback
        var _onMousemove = function (e) {
            onMousemove(e);
            if (!persistent.value) {
                resetThumbBehavior();
                showThumbs();
            }
        };
        // body mouseup event callback
        var _onMouseup = function (e) {
            onMouseup();
            var body = document.body;
            body.removeEventListener('mousemove', _onMousemove);
            body.removeEventListener('mouseup', _onMouseup);
            if (!persistent.value) {
                resetThumbBehavior = initThumbBehavior();
                var pageX = e.pageX, pageY = e.pageY;
                // TODO: optimize
                var inner = document
                    .elementsFromPoint(pageX, pageY)
                    .includes(containerRef.value);
                if (!inner) {
                    hideThumbs();
                }
            }
        };
        var onMousedown = function (e) {
            var body = document.body;
            var target = e.target, clientX = e.clientX, clientY = e.clientY;
            dragging = true;
            prevOffset = target === thumbXRef.value ? clientX : clientY;
            body.addEventListener('mousemove', _onMousemove);
            body.addEventListener('mouseup', _onMouseup);
            containerRef.value.style.userSelect = 'none';
        };
        var onMousemove = function (e) {
            var _a;
            if (!dragging) {
                return;
            }
            // necessary
            e.preventDefault();
            var _thumbXRef = thumbXRef.value;
            var direction = e.target === _thumbXRef ? 'left' : 'top';
            var isHorizontal = direction === 'left';
            var clientX = e.clientX, clientY = e.clientY;
            var offset = isHorizontal
                ? clientX - prevOffset
                : clientY - prevOffset;
            var _b = isHorizontal
                ? thumbXRef.value
                : thumbYRef.value, thumbXWidth = _b.clientWidth, thumbYHeight = _b.clientHeight;
            var _c = isHorizontal
                ? barXRef.value
                : barYRef.value, barXWidth = _c.clientWidth, barYHeight = _c.clientHeight;
            var rate = isHorizontal
                ? offset / (barXWidth - thumbXWidth)
                : offset / (barYHeight - thumbYHeight);
            var _containerRef = containerRef.value;
            var scrollTop = _containerRef.scrollTop, scrollLeft = _containerRef.scrollLeft, scrollWidth = _containerRef.scrollWidth, scrollHeight = _containerRef.scrollHeight, containerWidth = _containerRef.clientWidth, containerHeight = _containerRef.clientHeight;
            var maxScrollOffset = isHorizontal
                ? scrollWidth - containerWidth
                : scrollHeight - containerHeight;
            var scrollOffset = isHorizontal
                ? scrollLeft + maxScrollOffset * rate
                : scrollTop + maxScrollOffset * rate;
            if (scrollOffset >= maxScrollOffset) {
                return;
            }
            prevOffset = isHorizontal ? clientX : clientY;
            _containerRef.scrollTo((_a = {},
                _a[isHorizontal ? 'left' : 'top'] = scrollOffset,
                // @ts-ignore
                _a.behavior = 'instant',
                _a));
        };
        var onMouseup = function () {
            dragging = false;
            containerRef.value.style.userSelect = 'auto';
        };
        var getNewThumbOffsetStrategies = {
            top: function (layerX, layerY, oldOffset, thumbWidth, thumbHeight, barWidth, barHeight) {
                var newOffset = 0;
                if (layerY > (oldOffset + thumbHeight)) {
                    // scroll down
                    newOffset = oldOffset + (layerY - oldOffset - thumbHeight / 2);
                    var maxTop = barHeight - thumbHeight;
                    // remaining space less than the thumb height
                    if (newOffset > maxTop) {
                        newOffset = maxTop;
                    }
                }
                else {
                    // scroll up
                    if (layerY > thumbHeight) {
                        // remaining space greater than the thumb height, keep the center of the 
                        // thumb on layerY
                        newOffset = (layerY - thumbHeight / 2);
                    }
                    else {
                        // remaining space less than the thumb height
                        newOffset = 0;
                    }
                }
                return newOffset;
            },
            left: function (layerX, layerY, oldOffset, thumbWidth, thumbHeight, barWidth, barHeight) {
                var newOffset = 0;
                if (layerX > (oldOffset + thumbWidth)) {
                    newOffset = oldOffset + (layerX - oldOffset - thumbWidth / 2);
                    var maxLeft = barWidth - thumbWidth;
                    if (newOffset > maxLeft) {
                        newOffset = maxLeft;
                    }
                }
                else {
                    if (layerX > thumbWidth) {
                        newOffset = (layerX - thumbWidth / 2);
                    }
                    else {
                        newOffset = 0;
                    }
                }
                return newOffset;
            }
        };
        var getNewScrollOffsetStrategies = {
            top: function (newOffset, thumbWidth, thumbHeight, barWidth, barHeight, scrollWidth, scrollHeight, containerWidth, containerHeight) {
                var rate = newOffset / (barHeight - thumbHeight);
                return (scrollHeight - containerHeight) * rate;
            },
            left: function (newOffset, thumbWidth, thumbHeight, barWidth, barHeight, scrollWidth, scrollHeight, containerWidth, containerHeight) {
                var rate = newOffset / (barWidth - thumbWidth);
                return (scrollWidth - containerWidth) * rate;
            },
        };
        var onClickBar = function (e) {
            var _a;
            var _b = e, target = _b.target, layerX = _b.layerX, layerY = _b.layerY;
            var _barXRef = barXRef.value;
            var direction = target === _barXRef ? 'left' : 'top';
            var isHorizontal = direction === 'left';
            var thumb = isHorizontal
                ? thumbXRef.value
                : thumbYRef.value;
            var bar = isHorizontal
                ? _barXRef
                : barYRef.value;
            var _c = thumb.style, top = _c.top, left = _c.left;
            var oldOffset = isHorizontal
                ? (parseInt(left) || 0)
                : (parseInt(top) || 0);
            // or thumbHeight
            var thumbWidth = thumb.clientWidth, thumbHeight = thumb.clientHeight;
            var barWidth = bar.clientWidth, barHeight = bar.clientHeight;
            var newOffset = getNewThumbOffsetStrategies[direction](layerX, layerY, oldOffset, thumbWidth, thumbHeight, barWidth, barHeight);
            var _containerRef = containerRef.value;
            var scrollWidth = _containerRef.scrollWidth, scrollHeight = _containerRef.scrollHeight, containerWidth = _containerRef.clientWidth, containerHeight = _containerRef.clientHeight;
            var newScrollOffset = getNewScrollOffsetStrategies[direction](newOffset, thumbWidth, thumbHeight, barWidth, barHeight, scrollWidth, scrollHeight, containerWidth, containerHeight);
            // don't update thumb offset, because when update container scroll offset,
            // it will execute onScroll function to update thumb offset.
            _containerRef.scrollTo((_a = {},
                _a[isHorizontal ? 'left' : 'top'] = newScrollOffset,
                _a.behavior = 'smooth',
                _a));
        };
        var showThumbs = function () {
            thumbXRef.value.style.opacity = '1';
            thumbYRef.value.style.opacity = '1';
        };
        var hideThumbX = function () { return thumbXRef.value.style.opacity = '0'; };
        var hideThumbY = function () { return thumbYRef.value.style.opacity = '0'; };
        var hideThumbs = function () {
            hideThumbX();
            hideThumbY();
        };
        var initThumbBehavior = function () {
            var timer = 0;
            var _setTimeout = function () { return setTimeout(function () {
                // hidden thumb can be visiable just by scroll, need to intercept 
                // hideThumbs because you can't know behavior is scroll or drag.
                if (!dragging) {
                    hideThumbs();
                }
                timer = 0;
            }, 2000); };
            var onScroll = function () {
                if (!timer) {
                    showThumbs();
                    timer = _setTimeout();
                }
                else {
                    clearTimeout(timer);
                    timer = _setTimeout();
                }
            };
            var _scrollAreaRef = scrollAreaRef.value;
            var _containerRef = containerRef.value;
            if (persistent.value) {
                showThumbs();
            }
            else if (hidden.value) {
                containerRef.value.addEventListener('scroll', onScroll);
            }
            else {
                _scrollAreaRef.addEventListener('mouseenter', showThumbs);
                _scrollAreaRef.addEventListener('mouseleave', hideThumbs);
            }
            return function () {
                _scrollAreaRef.removeEventListener('mouseenter', showThumbs);
                _scrollAreaRef.removeEventListener('mouseleave', hideThumbs);
                _containerRef.removeEventListener('scroll', onScroll);
            };
        };
        var contentRef = ref(null);
        var thumbXWidth = ref(0);
        var thumbYHeight = ref(0);
        var thumbXStyle = computed(function () { return ({ width: "".concat(thumbXWidth.value, "px") }); });
        var thumbYStyle = computed(function () { return ({ height: "".concat(thumbYHeight.value, "px") }); });
        var initResizeObserver = function () {
            var _contentRef = contentRef.value;
            var _containerRef = containerRef.value;
            var updateThumbSize = function () {
                var scrollWidth = _containerRef.scrollWidth, clientWidth = _containerRef.clientWidth, scrollHeight = _containerRef.scrollHeight, clientHeight = _containerRef.clientHeight;
                if (scrollHeight > clientHeight) {
                    thumbYHeight.value = clientHeight * (clientHeight / scrollHeight);
                }
                else {
                    hideThumbY();
                }
                if (scrollWidth > clientWidth) {
                    thumbXWidth.value = clientWidth * (clientWidth / scrollWidth);
                }
                else {
                    hideThumbX();
                }
            };
            var resizeObserver = new ResizeObserver(updateThumbSize);
            watch(resize, function (value) { return resizeObserver[value ? 'observe' : 'unobserve'](_contentRef); }, { immediate: true });
        };
        var resetThumbBehavior = function () { };
        onMounted(function () {
            resetThumbBehavior = initThumbBehavior();
            initResizeObserver();
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: "u-scroll-area relative",
                style: normalizeStyle(scrollAreaStyle.value),
                ref_key: "scrollAreaRef",
                ref: scrollAreaRef
            }, [
                createElementVNode("div", {
                    onScroll: withModifiers(onScroll, ["self"]),
                    ref_key: "containerRef",
                    ref: containerRef,
                    class: "u-scroll-area-container hide-scrollbar w-full h-full overflow-auto"
                }, [
                    createElementVNode("div", {
                        class: "u-scroll-area-content",
                        ref_key: "contentRef",
                        ref: contentRef
                    }, [
                        renderSlot(_ctx.$slots, "default")
                    ], 512 /* NEED_PATCH */)
                ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$4),
                createElementVNode("div", {
                    class: "u-scroll-area-bar-x absolute right-0 bottom-0 left-0 h-[6px]",
                    ref_key: "barXRef",
                    ref: barXRef,
                    onClick: withModifiers(onClickBar, ["self"])
                }, [
                    createElementVNode("div", {
                        ref_key: "thumbXRef",
                        ref: thumbXRef,
                        class: "u-scroll-area-thumb-x opacity-0 absolute cursor-pointer rounded-[4px] bg-[rgba(144,147,153,.3)] transition-[opacity,background-color] duration-[--u-transition-duration] hover:!opacity-100 hover:bg-[rgba(144,147,153,.5)] h-full left-0",
                        style: normalizeStyle(thumbXStyle.value),
                        onMousedown: onMousedown,
                        onMousemove: withModifiers(onMousemove, ["stop"]),
                        onMouseup: onMouseup
                    }, null, 44 /* STYLE, PROPS, HYDRATE_EVENTS */, _hoisted_3)
                ], 8 /* PROPS */, _hoisted_2$1),
                createElementVNode("div", {
                    class: "u-scroll-area-bar-y absolute right-0 bottom-0 top-0 w-[6px]",
                    ref_key: "barYRef",
                    ref: barYRef,
                    onClick: withModifiers(onClickBar, ["self"])
                }, [
                    createElementVNode("div", {
                        ref_key: "thumbYRef",
                        ref: thumbYRef,
                        class: "u-scroll-area-thumb-y opacity-0 absolute cursor-pointer rounded-[4px] bg-[rgba(144,147,153,.3)] transition-[opacity,background-color] duration-[--u-transition-duration] hover:!opacity-100 hover:bg-[rgba(144,147,153,.5)] w-full top-0",
                        style: normalizeStyle(thumbYStyle.value),
                        onMousedown: onMousedown,
                        onMousemove: withModifiers(onMousemove, ["stop"]),
                        onMouseup: onMouseup
                    }, null, 44 /* STYLE, PROPS, HYDRATE_EVENTS */, _hoisted_5)
                ], 8 /* PROPS */, _hoisted_4)
            ], 4 /* STYLE */));
        };
    }
});

script$4.__file = "src/components/u-scroll-area/index.vue";

var _hoisted_1$3 = {
    class: "u-skeleton-item relative before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:-left-full before:z-0 before:bg-gradient-to-r before:from-[rgba(255,255,255,0)] before:via-[rgba(255,255,255,.5)] before:to-[rgba(255,255,255,0)] before:animate-[u-animate-left_1.5s_linear_.5s_infinite]",
    style: {
        '--u-left-start': '-100%',
        '--u-left-end': '100%',
    }
};
var script$3 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    setup: function (__props) {
        inject(skeletonKey);
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", _hoisted_1$3));
        };
    }
});

script$3.__file = "src/components/u-skeleton-item/index.vue";

var _hoisted_1$2 = { class: "u-expansion-item" };
var script$2 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        name: { type: String, required: true }
    },
    setup: function (__props) {
        var props = __props;
        var name = toRefs(props).name;
        var _a = inject(expansionKey), modelValue = _a.modelValue, updateModel = _a.updateModel;
        var expanded = computed(function () { return modelValue.includes(name.value); });
        var contentRef = ref(null);
        var contentStyle = reactive({ height: expanded ? '100%' : '0px' });
        var onClick = function () { return updateModel(name.value); };
        onMounted(function () {
            watch(expanded, function (value) {
                contentStyle.height = value
                    ? "".concat(contentRef.value.scrollHeight, "px")
                    : '0px';
            }, { immediate: true });
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", _hoisted_1$2, [
                createElementVNode("div", {
                    onClick: onClick,
                    class: "u-expansion-item-header cursor-pointer"
                }, [
                    renderSlot(_ctx.$slots, "default", { expanded: expanded.value })
                ]),
                createElementVNode("div", {
                    ref_key: "contentRef",
                    ref: contentRef,
                    style: normalizeStyle(contentStyle),
                    class: "u-expansion-item-content overflow-y-hidden transition-[height] duration-[--u-transition-duration]"
                }, [
                    renderSlot(_ctx.$slots, "content", { expanded: expanded.value })
                ], 4 /* STYLE */)
            ]));
        };
    }
});

script$2.__file = "src/components/u-expansion-item/index.vue";

var _hoisted_1$1 = { class: "u-checkbox-group" };
var script$1 = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        min: { type: Number, required: false, default: Number.MIN_SAFE_INTEGER },
        max: { type: Number, required: false, default: Number.MAX_SAFE_INTEGER },
        race: { type: Boolean, required: false, default: false },
        modelValue: { type: Array, required: true }
    },
    setup: function (__props) {
        var props = __props;
        var _a = toRefs(props), min = _a.min, max = _a.max, race = _a.race, modelValue = _a.modelValue;
        var updateModel = function (value) {
            var _modelValue = modelValue.value;
            var index = _modelValue.indexOf(value);
            var length = _modelValue.length;
            if (index >= 0) {
                if (length > min.value) {
                    _modelValue.splice(index, 1);
                }
            }
            else if (length < max.value) {
                _modelValue.push(value);
            }
            else if (race.value) {
                _modelValue.shift();
                _modelValue.push(value);
            }
        };
        provide(checkboxGroupKey, {
            parentModel: modelValue.value,
            updateParentModel: updateModel,
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", _hoisted_1$1, [
                renderSlot(_ctx.$slots, "default")
            ]));
        };
    }
});

script$1.__file = "src/components/u-checkbox-group/index.vue";

var _hoisted_1 = { class: "u-infinite-scroll-content" };
var _hoisted_2 = { class: "u-infinite-scroll-loading" };
var script = /*#__PURE__*/ defineComponent({
    __name: 'index',
    props: {
        offset: { type: Number, required: false, default: 200 },
        scrollTarget: { type: String, required: false, default: '' }
    },
    emits: ["load"],
    setup: function (__props, _a) {
        var emit = _a.emit;
        var props = __props;
        var loading = ref(false);
        var containerRef = ref(null);
        var _b = toRefs(props), offset = _b.offset, scrollTarget = _b.scrollTarget;
        var done = function () { return loading.value = false; };
        var onScroll = debounce(function (e) {
            if (!loading.value &&
                useIsScrollToOffsetPosition(e.target, offset.value)) {
                loading.value = true;
                emit('load', done);
            }
        }, 300);
        onMounted(function () {
            watch(scrollTarget, function (v) {
                var target = v ? document.querySelector(v) : containerRef.value;
                target === null || target === void 0 ? void 0 : target.addEventListener('scroll', onScroll);
            }, { immediate: true });
        });
        return function (_ctx, _cache) {
            return (openBlock(), createElementBlock("div", {
                class: "u-infinite-scroll",
                ref_key: "containerRef",
                ref: containerRef
            }, [
                createElementVNode("div", _hoisted_1, [
                    renderSlot(_ctx.$slots, "default")
                ]),
                createVNode(Transition, { name: "u-fade" }, {
                    default: withCtx(function () { return [
                        createElementVNode("div", _hoisted_2, [
                            renderSlot(_ctx.$slots, "loading", { loading: loading.value })
                        ])
                    ]; }),
                    _: 3 /* FORWARDED */
                })
            ], 512 /* NEED_PATCH */));
        };
    }
});

script.__file = "src/components/u-infinite-scroll/index.vue";

var undefinedElement = {
    install: function (app) {
        app
            .component('UTab', script$o)
            .component('UTabs', script$n)
            .component('UIcon', script$m)
            .component('UInput', script$l)
            .component('UTable', script$k)
            .component('URange', script$j)
            .component('UDialog', script$i)
            .component('USlider', script$h)
            .component('URating', script$g)
            .component('USelect', script$f)
            .component('UToggle', script$e)
            .component('UTooltip', script$d)
            .component('USplitter', script$c)
            .component('UTabPanel', script$b)
            .component('USkeleton', script$a)
            .component('UDropdown', script$9)
            .component('UScroller', script$8)
            .component('UCheckbox', script$7)
            .component('UExpansion', script$6)
            .component('UTabPanels', script$5)
            .component('UScrollArea', script$4)
            .component('USkeletonItem', script$3)
            .component('UExpansionItem', script$2)
            .component('UCheckboxGroup', script$1)
            .component('UInfiniteScroll', script);
    }
};

export { undefinedElement as default };
