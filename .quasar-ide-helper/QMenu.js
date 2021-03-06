
/**
 * Quasar QMenu component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/menu|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QMenu',
  props: {
    /**
     * Emitted when showing/hidden state changes; Is also used by v-model
     * @param {Boolean} value New state (showing/hidden) 
     */      
    '@update:model-value': function (value) {},

    /**
     * Emitted after component has triggered show()
     * @param {Event} evt JS event object 
     */      
    '@show': function (evt) {},

    /**
     * Emitted when component triggers show() but before it finishes doing it
     * @param {Event} evt JS event object 
     */      
    '@before-show': function (evt) {},

    /**
     * Emitted after component has triggered hide()
     * @param {Event} evt JS event object 
     */      
    '@hide': function (evt) {},

    /**
     * Emitted when component triggers hide() but before it finishes doing it
     * @param {Event} evt JS event object 
     */      
    '@before-hide': function (evt) {},

    /**
     * Emitted when ESC key is pressed; Does not get emitted if Menu is 'persistent'

     */      
    '@escape-key': function () {},
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionShow: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionHide: {
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
     * Configure a target element to trigger component toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) or a DOM element it attaches the events to the specified DOM element (if it exists)
     * @type {'(Boolean) true'|'(Boolean) false'|'(CSS selector)'|'(DOM Element)'}
     */
    target: {
      type: [Boolean,String,Element],
    },
    /**
     * Skips attaching events to the target DOM element (that trigger the element to get shown)
     * @type {Boolean}
     */
    noParentEvent: {
      type: Boolean,
    },
    /**
     * Allows the component to behave like a context menu, which opens with a right mouse click (or long tap on mobile)
     * @type {Boolean}
     */
    contextMenu: {
      type: Boolean,
    },
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     * @type {Boolean}
     */
    modelValue: {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Allows the menu to match at least the full width of its target
     * @type {Boolean}
     */
    fit: {
      type: Boolean,
    },
    /**
     * Allows the menu to cover its target. When used, the 'self' and 'fit' props are no longer effective
     * @type {Boolean}
     */
    cover: {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    anchor: {
      type: String,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="top left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="top middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="top right"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="top start"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="top end"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="center left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="center middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="center right"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="center start"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="center end"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="bottom left"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="bottom middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="bottom right"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="bottom start"': {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'anchor="bottom end"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    self: {
      type: String,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="top left"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="top middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="top right"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="top start"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="top end"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="center left"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="center middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="center right"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="center start"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="center end"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="bottom left"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="bottom middle"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="bottom right"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="bottom start"': {
      type: Boolean,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {'top left'|'top middle'|'top right'|'top start'|'top end'|'center left'|'center middle'|'center right'|'center start'|'center end'|'bottom left'|'bottom middle'|'bottom right'|'bottom start'|'bottom end'}
     */
    'self="bottom end"': {
      type: Boolean,
    },
    /**
     * An array of two numbers to offset the menu horizontally and vertically in pixels
     * @type {Array}
     */
    offset: {
      type: Array,
    },
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     * @type {Element|String}
     */
    scrollTarget: {
      type: [Element,String],
    },
    /**
     * Allows for the target position to be set by the mouse position, when the target of the menu is either clicked or touched
     * @type {Boolean}
     */
    touchPosition: {
      type: Boolean,
    },
    /**
     * Allows the menu to not be dismissed by a click/tap outside of the menu or by hitting the ESC key
     * @type {Boolean}
     */
    persistent: {
      type: Boolean,
    },
    /**
     * Changing route app won't dismiss the popup; No need to set it if 'persistent' prop is also set
     * @type {Boolean}
     */
    noRouteDismiss: {
      type: Boolean,
    },
    /**
     * Allows any click/tap in the menu to close it; Useful instead of attaching events to each menu item that should close the menu on click/tap
     * @type {Boolean}
     */
    autoClose: {
      type: Boolean,
    },
    /**
     * Separate from parent menu, marking it as a separate closing point for v-close-popup (without this, chained menus close all together)
     * @type {Boolean}
     */
    separateClosePopup: {
      type: Boolean,
    },
    /**
     * Forces content to have squared borders
     * @type {Boolean}
     */
    square: {
      type: Boolean,
    },
    /**
     * (Accessibility) When Menu gets hidden, do not refocus on the DOM element that previously had focus
     * @type {Boolean}
     */
    noRefocus: {
      type: Boolean,
    },
    /**
     * (Accessibility) When Menu gets shown, do not switch focus on it
     * @type {Boolean}
     */
    noFocus: {
      type: Boolean,
    },
    /**
     * The maximum height of the menu; Size in CSS units, including unit name
     * @type {String}
     */
    maxHeight: {
      type: String,
    },
    /**
     * The maximum width of the menu; Size in CSS units, including unit name
     * @type {String}
     */
    maxWidth: {
      type: String,
    }
  }
}
