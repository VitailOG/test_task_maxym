
/**
 * Quasar QCarousel component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/carousel|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QCarousel',
  props: {
    /**
     * Emitted when the component changes the model; This event _isn't_ fired if the model is changed externally; Is also used by v-model
     * @param {String|Number} value New current panel name 
     */      
    '@update:model-value': function (value) {},

    /**
     * Emitted before transitioning to a new panel
     * @param {String|Number} newVal Panel name towards transition is going 
     * @param {String|Number} oldVal Panel name from which transition is happening 
     */      
    '@before-transition': function (newVal,oldVal) {},

    /**
     * Emitted after component transitioned to a new panel
     * @param {String|Number} newVal Panel name towards transition has occurred 
     * @param {String|Number} oldVal Panel name from which transition has happened 
     */      
    '@transition': function (newVal,oldVal) {},
    /**
     * Fullscreen mode
     * @type {Boolean}
     */
    fullscreen: {
      type: Boolean,
    },
    /**
     * Changing route app won't exit fullscreen
     * @type {Boolean}
     */
    noRouteFullscreenExit: {
      type: Boolean,
    },
    /**
     * Model of the component defining the current panel's name; If a Number is used, it does not define the panel's index, but rather the panel's name which can also be an Integer; Either use this property (along with a listener for 'update:model-value' event) OR use the v-model directive.
     * @type {*}
     */
    modelValue: {
    },
    /**
     * Equivalent to using Vue's native <keep-alive> component on the content
     * @type {Boolean}
     */
    keepAlive: {
      type: Boolean,
    },
    /**
     * Equivalent to using Vue's native include prop for <keep-alive>; Values must be valid Vue component names
     * @type {String|Array|RegExp}
     */
    keepAliveInclude: {
      type: [String,Array,RegExp],
    },
    /**
     * Equivalent to using Vue's native exclude prop for <keep-alive>; Values must be valid Vue component names
     * @type {String|Array|RegExp}
     */
    keepAliveExclude: {
      type: [String,Array,RegExp],
    },
    /**
     * Equivalent to using Vue's native max prop for <keep-alive>
     * @type {Number}
     */
    keepAliveMax: {
      type: Number,
    },
    /**
     * Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)
     * @type {Boolean}
     */
    animated: {
      type: Boolean,
    },
    /**
     * Makes component appear as infinite (when reaching last panel, next one will become the first one)
     * @type {Boolean}
     */
    infinite: {
      type: Boolean,
    },
    /**
     * Enable swipe events (may interfere with content's touch/mouse events)
     * @type {Boolean}
     */
    swipeable: {
      type: Boolean,
    },
    /**
     * Default transitions and swipe actions will be on the vertical axis
     * @type {Boolean}
     */
    vertical: {
      type: Boolean,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    transitionPrev: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    transitionNext: {
      type: String,
    },
    /**
     * Transition duration (in milliseconds, without unit)
     * @type {String|Number}
     */
    transitionDuration: {
      type: [String,Number],
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Height of Carousel in CSS units, including unit name
     * @type {String}
     */
    height: {
      type: String,
    },
    /**
     * Applies a default padding to each slide, according to the usage of 'arrows' and 'navigation' props
     * @type {Boolean}
     */
    padding: {
      type: Boolean,
    },
    /**
     * Color name for QCarousel button controls (arrows, navigation) from the Quasar Color Palette
     * @type {String}
     */
    controlColor: {
      type: String,
    },
    /**
     * Color name for text color of QCarousel button controls (arrows, navigation) from the Quasar Color Palette
     * @type {String}
     */
    controlTextColor: {
      type: String,
    },
    /**
     * Type of button to use for controls (arrows, navigation)
     * @type {'regular'|'flat'|'outline'|'push'|'unelevated'}
     */
    controlType: {
      type: String,
    },
    /**
     * Type of button to use for controls (arrows, navigation)
     * @type {'regular'|'flat'|'outline'|'push'|'unelevated'}
     */
    'controlType="regular"': {
      type: Boolean,
    },
    /**
     * Type of button to use for controls (arrows, navigation)
     * @type {'regular'|'flat'|'outline'|'push'|'unelevated'}
     */
    'controlType="flat"': {
      type: Boolean,
    },
    /**
     * Type of button to use for controls (arrows, navigation)
     * @type {'regular'|'flat'|'outline'|'push'|'unelevated'}
     */
    'controlType="outline"': {
      type: Boolean,
    },
    /**
     * Type of button to use for controls (arrows, navigation)
     * @type {'regular'|'flat'|'outline'|'push'|'unelevated'}
     */
    'controlType="push"': {
      type: Boolean,
    },
    /**
     * Type of button to use for controls (arrows, navigation)
     * @type {'regular'|'flat'|'outline'|'push'|'unelevated'}
     */
    'controlType="unelevated"': {
      type: Boolean,
    },
    /**
     * Jump to next slide (if 'true' or val > 0) or previous slide (if val < 0) at fixed time intervals (in milliseconds); 'false' disables autoplay, 'true' enables it for 5000ms intervals
     * @type {Number|Boolean}
     */
    autoplay: {
      type: [Number,Boolean],
    },
    /**
     * Show navigation arrow buttons
     * @type {Boolean}
     */
    arrows: {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)
     * @type {String}
     */
    prevIcon: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)
     * @type {String}
     */
    nextIcon: {
      type: String,
    },
    /**
     * Show navigation dots
     * @type {Boolean}
     */
    navigation: {
      type: Boolean,
    },
    /**
     * Side to stick navigation to
     * @type {'top'|'right'|'bottom'|'left'}
     */
    navigationPosition: {
      type: String,
    },
    /**
     * Side to stick navigation to
     * @type {'top'|'right'|'bottom'|'left'}
     */
    'navigationPosition="top"': {
      type: Boolean,
    },
    /**
     * Side to stick navigation to
     * @type {'top'|'right'|'bottom'|'left'}
     */
    'navigationPosition="right"': {
      type: Boolean,
    },
    /**
     * Side to stick navigation to
     * @type {'top'|'right'|'bottom'|'left'}
     */
    'navigationPosition="bottom"': {
      type: Boolean,
    },
    /**
     * Side to stick navigation to
     * @type {'top'|'right'|'bottom'|'left'}
     */
    'navigationPosition="left"': {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)
     * @type {String}
     */
    navigationIcon: {
      type: String,
    },
    /**
     * Icon name following Quasar convention for the active (current slide) navigation icon; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    navigationActiveIcon: {
      type: String,
    },
    /**
     * Show thumbnails
     * @type {Boolean}
     */
    thumbnails: {
      type: Boolean,
    }
  }
}
