
/**
 * Quasar QTable component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/table|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTable',
  props: {
    /**
     * Emitted when user clicks/taps on a row; Is not emitted when using body/row/item scoped slots
     * @param {Event} evt JS event object 
     * @param {Object} row The row upon which user has clicked/tapped 
     * @param {Number} index Index of the row in the current page 
     */      
    '@row-click': function (evt,row,index) {},

    /**
     * Emitted when user quickly double clicks/taps on a row; Is not emitted when using body/row/item scoped slots; Please check JS dblclick event support before using
     * @param {Event} evt JS event object 
     * @param {Object} row The row upon which user has double clicked/tapped 
     * @param {Number} index Index of the row in the current page 
     */      
    '@row-dblclick': function (evt,row,index) {},

    /**
     * Emitted when user right clicks/long taps on a row; Is not emitted when using body/row/item scoped slots
     * @param {Event} evt JS event object 
     * @param {Object} row The row upon which user has right clicked/long tapped 
     * @param {Number} index Index of the row in the current page 
     */      
    '@row-contextmenu': function (evt,row,index) {},

    /**
     * Emitted when a server request is triggered
     * @param {{pagination : {sortBy : String, descending : Boolean, page : Number, rowsPerPage : Number}, filter : Function, getCellValue : Function}} requestProp Props of the request 
     */      
    '@request': function (requestProp) {},

    /**
     * Emitted when user selects/unselects row(s)
     * @param {{rows : Array, keys : Array, added : Boolean, evt : Event}} details Selection details 
     */      
    '@selection': function (details) {},

    /**
     * Used by Vue on 'v-model:pagination' for updating its value
     * @param {{sortBy : String, descending : Boolean, page : Number, rowsPerPage : Number, rowsNumber : Number}} newPagination The updated pagination object 
     */      
    '@update:pagination': function (newPagination) {},

    /**
     * Used by Vue on 'v-model:selected' prop for updating its value
     * @param {Array} newSelected The updated selected array 
     */      
    '@update:selected': function (newSelected) {},

    /**
     * Used by Vue on 'v-model:expanded' prop for updating its value
     * @param {Array} newExpanded The updated expanded array 
     */      
    '@update:expanded': function (newExpanded) {},

    /**
     * Emitted when the virtual scroll occurs, if using virtual scroll
     * @param {{index : Number, from : Number, to : Number, direction : 'increase'|'decrease'}} details Object of properties on the new scroll position 
     */      
    '@virtual-scroll': function (details) {},
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
     * Rows of data to display
     * @type {Array}
     */
    rows: {
      type: Array,
    },
    /**
     * Property of each row that defines the unique key of each row (the result must be a primitive, not Object, Array, etc); The value of property must be string or a function taking a row and returning the desired (nested) key in the row; If supplying a function then for best performance, reference it from your scope and do not define it inline
     * @type {String|Function}
     */
    rowKey: {
      type: [String,Function],
    },
    /**
     * Display data using QVirtualScroll (for non-grid mode only)
     * @type {Boolean}
     */
    virtualScroll: {
      type: Boolean,
    },
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     * @type {Element|String}
     */
    virtualScrollTarget: {
      type: [Element,String],
    },
    /**
     * Minimum number of rows to render in the virtual list
     * @type {Number|String}
     */
    virtualScrollSliceSize: {
      type: [Number,String],
    },
    /**
     * Ratio of number of rows in visible zone to render before it
     * @type {Number|String}
     */
    virtualScrollSliceRatioBefore: {
      type: [Number,String],
    },
    /**
     * Ratio of number of rows in visible zone to render after it
     * @type {Number|String}
     */
    virtualScrollSliceRatioAfter: {
      type: [Number,String],
    },
    /**
     * Default size in pixels of a row; This value is used for rendering the initial table; Try to use a value close to the minimum size of a row
     * @type {Number|String}
     */
    virtualScrollItemSize: {
      type: [Number,String],
    },
    /**
     * Size in pixels of the sticky header (if using one); A correct value will improve scroll precision
     * @type {Number|String}
     */
    virtualScrollStickySizeStart: {
      type: [Number,String],
    },
    /**
     * Size in pixels of the sticky footer part (if using one); A correct value will improve scroll precision
     * @type {Number|String}
     */
    virtualScrollStickySizeEnd: {
      type: [Number,String],
    },
    /**
     * The number of columns in the table (you need this if you use table-layout: fixed)
     * @type {Number|String}
     */
    tableColspan: {
      type: [Number,String],
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Icon name following Quasar convention for stepping to first page; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    iconFirstPage: {
      type: String,
    },
    /**
     * Icon name following Quasar convention for stepping to previous page; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    iconPrevPage: {
      type: String,
    },
    /**
     * Icon name following Quasar convention for stepping to next page; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    iconNextPage: {
      type: String,
    },
    /**
     * Icon name following Quasar convention for stepping to last page; Make sure you have the icon library installed unless you are using 'img:' prefix
     * @type {String}
     */
    iconLastPage: {
      type: String,
    },
    /**
     * Display data as a grid instead of the default table
     * @type {Boolean}
     */
    grid: {
      type: Boolean,
    },
    /**
     * Display header for grid-mode also
     * @type {Boolean}
     */
    gridHeader: {
      type: Boolean,
    },
    /**
     * Dense mode; Connect with $q.screen for responsive behavior
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
    },
    /**
     * The column definitions (Array of Objects)
     * @type {Array}
     */
    columns: {
      type: Array,
    },
    /**
     * Array of Strings defining column names ('name' property of each column from 'columns' prop definitions); Columns marked as 'required' are not affected by this property
     * @type {Array}
     */
    visibleColumns: {
      type: Array,
    },
    /**
     * Put Table into 'loading' state; Notify the user something is happening behind the scenes
     * @type {Boolean}
     */
    loading: {
      type: Boolean,
    },
    /**
     * Table title
     * @type {String}
     */
    title: {
      type: String,
    },
    /**
     * Hide table header layer
     * @type {Boolean}
     */
    hideHeader: {
      type: Boolean,
    },
    /**
     * Hide table bottom layer regardless of what it has to display
     * @type {Boolean}
     */
    hideBottom: {
      type: Boolean,
    },
    /**
     * Hide the selected rows banner (if any)
     * @type {Boolean}
     */
    hideSelectedBanner: {
      type: Boolean,
    },
    /**
     * Hide the default no data bottom layer
     * @type {Boolean}
     */
    hideNoData: {
      type: Boolean,
    },
    /**
     * Hide the pagination controls at the bottom
     * @type {Boolean}
     */
    hidePagination: {
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
     * Applies a 'flat' design (no default shadow)
     * @type {Boolean}
     */
    flat: {
      type: Boolean,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    bordered: {
      type: Boolean,
    },
    /**
     * Removes border-radius so borders are squared
     * @type {Boolean}
     */
    square: {
      type: Boolean,
    },
    /**
     * Use a separator/border between rows, columns or all cells
     * @type {'horizontal'|'vertical'|'cell'|'none'}
     */
    separator: {
      type: String,
    },
    /**
     * Use a separator/border between rows, columns or all cells
     * @type {'horizontal'|'vertical'|'cell'|'none'}
     */
    'separator="horizontal"': {
      type: Boolean,
    },
    /**
     * Use a separator/border between rows, columns or all cells
     * @type {'horizontal'|'vertical'|'cell'|'none'}
     */
    'separator="vertical"': {
      type: Boolean,
    },
    /**
     * Use a separator/border between rows, columns or all cells
     * @type {'horizontal'|'vertical'|'cell'|'none'}
     */
    'separator="cell"': {
      type: Boolean,
    },
    /**
     * Use a separator/border between rows, columns or all cells
     * @type {'horizontal'|'vertical'|'cell'|'none'}
     */
    'separator="none"': {
      type: Boolean,
    },
    /**
     * Wrap text within table cells
     * @type {Boolean}
     */
    wrapCells: {
      type: Boolean,
    },
    /**
     * Skip the third state (unsorted) when user toggles column sort direction
     * @type {Boolean}
     */
    binaryStateSort: {
      type: Boolean,
    },
    /**
     * Set column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending); It gets applied to all columns unless a column has its own sortOrder specified in the 'columns' definition prop
     * @type {'ad'|'da'}
     */
    columnSortOrder: {
      type: String,
    },
    /**
     * Set column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending); It gets applied to all columns unless a column has its own sortOrder specified in the 'columns' definition prop
     * @type {'ad'|'da'}
     */
    'columnSortOrder="ad"': {
      type: Boolean,
    },
    /**
     * Set column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending); It gets applied to all columns unless a column has its own sortOrder specified in the 'columns' definition prop
     * @type {'ad'|'da'}
     */
    'columnSortOrder="da"': {
      type: Boolean,
    },
    /**
     * Override default text to display when no data is available
     * @type {String}
     */
    noDataLabel: {
      type: String,
    },
    /**
     * Override default text to display when user filters the table and no matched results are found
     * @type {String}
     */
    noResultsLabel: {
      type: String,
    },
    /**
     * Override default text to display when table is in loading state (see 'loading' prop)
     * @type {String}
     */
    loadingLabel: {
      type: String,
    },
    /**
     * Text to display when user selected at least one row; For best performance, reference it from your scope and do not define it inline
     * @type {Function}
     */
    selectedRowsLabel: {
      type: Function,
    },
    /**
     * Text to override default rows per page label at bottom of table
     * @type {String}
     */
    rowsPerPageLabel: {
      type: String,
    },
    /**
     * Text to override default pagination label at bottom of table (unless 'pagination' scoped slot is used); For best performance, reference it from your scope and do not define it inline
     * @type {Function}
     */
    paginationLabel: {
      type: Function,
    },
    /**
     * CSS style to apply to native HTML <table> element's wrapper (which is a DIV)
     * @type {String|Array|Object}
     */
    tableStyle: {
      type: [String,Array,Object],
    },
    /**
     * CSS classes to apply to native HTML <table> element's wrapper (which is a DIV)
     * @type {String|Array|Object}
     */
    tableClass: {
      type: [String,Array,Object],
    },
    /**
     * CSS style to apply to header of native HTML <table> (which is a TR)
     * @type {String|Array|Object}
     */
    tableHeaderStyle: {
      type: [String,Array,Object],
    },
    /**
     * CSS classes to apply to header of native HTML <table> (which is a TR)
     * @type {String|Array|Object}
     */
    tableHeaderClass: {
      type: [String,Array,Object],
    },
    /**
     * CSS style to apply to the cards container (when in grid mode)
     * @type {String|Array|Object}
     */
    cardContainerStyle: {
      type: [String,Array,Object],
    },
    /**
     * CSS classes to apply to the cards container (when in grid mode)
     * @type {String|Array|Object}
     */
    cardContainerClass: {
      type: [String,Array,Object],
    },
    /**
     * CSS style to apply to the card (when in grid mode) or container card (when not in grid mode)
     * @type {String|Array|Object}
     */
    cardStyle: {
      type: [String,Array,Object],
    },
    /**
     * CSS classes to apply to the card (when in grid mode) or container card (when not in grid mode)
     * @type {String|Array|Object}
     */
    cardClass: {
      type: [String,Array,Object],
    },
    /**
     * CSS classes to apply to the title (if using 'title' prop)
     * @type {String|Array|Object}
     */
    titleClass: {
      type: [String,Array,Object],
    },
    /**
     * String/Object to filter table with; When using an Object it requires 'filter-method' to also be specified since it will be a custom filtering
     * @type {String|Object}
     */
    filter: {
      type: [String,Object],
    },
    /**
     * The actual filtering mechanism; For best performance, reference it from your scope and do not define it inline
     * @type {Function}
     */
    filterMethod: {
      type: Function,
    },
    /**
     * Pagination object; You can also use the 'v-model:pagination' for synching; When not synching it simply initializes the pagination on first render
     * @type {{sortBy : String, descending : Boolean, page : Number, rowsPerPage : Number, rowsNumber : Number}}
     */
    pagination: {
      type: Object,
    },
    /**
     * Options for user to pick (Numbers); Number 0 means 'Show all rows in one page'
     * @type {Array}
     */
    rowsPerPageOptions: {
      type: Array,
    },
    /**
     * Selection type
     * @type {'single'|'multiple'|'none'}
     */
    selection: {
      type: String,
    },
    /**
     * Selection type
     * @type {'single'|'multiple'|'none'}
     */
    'selection="single"': {
      type: Boolean,
    },
    /**
     * Selection type
     * @type {'single'|'multiple'|'none'}
     */
    'selection="multiple"': {
      type: Boolean,
    },
    /**
     * Selection type
     * @type {'single'|'multiple'|'none'}
     */
    'selection="none"': {
      type: Boolean,
    },
    /**
     * Keeps the user selection array
     * @type {Array}
     */
    selected: {
      type: Array,
    },
    /**
     * Keeps the array with expanded rows keys
     * @type {Array}
     */
    expanded: {
      type: Array,
    },
    /**
     * The actual sort mechanism. Function (rows, sortBy, descending) => sorted rows; For best performance, reference it from your scope and do not define it inline
     * @type {Function}
     */
    sortMethod: {
      type: Function,
    }
  }
}
