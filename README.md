# Flexboxgrid helper classes

## About

* Helper classes for [awesome flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid)

* Last minified version could be found in `dist/flexboxgrid-helpers.min.css`

* About classnames: i tried to follow BEM(block-element__modifier),
but for compability with bootstrap classnames-style i changed visible/hidden classnames

## Classes:

### Visible & Hidden

&nbsp;          | Phones (< 48em) | Tablets (≥ 48em) | Desktops (≥ 64em) | Desktops (≥ 75em)
------------    | -------------   | ------------     | -------------      | ------------
`.visible-xs-*` | `Visible`       | Hidden           | Hidden             | Hidden
`.visible-sm-*` | Hidden          | `Visible`        | Hidden             | Hidden
`.visible-md-*` | Hidden          | Hidden           | `Visible`          | Hidden
`.visible-lg-*` | Hidden          | Hidden           | Hidden             | `Visible`
&nbsp;          | &nbsp;          | &nbsp;           | &nbsp;             | &nbsp;
`.hidden-xs`    | `Hidden`        | Visible          | Visible            | Visible
`.hidden-sm`    | Visible         | `Hidden`         | Visible            | Visible
`.hidden-md`    | Visible         | Visible          | `Hidden`           | Visible
`.hidden-lg`    | Visible         | Visible          | Visible            | `Hidden`

---

Group of classes          | CSS display
------------              | -------------
`.visible-*`              | `display: flex;`
`.visible-*-block`        | `display: block;`
`.visible-*-inline`       | `display: inline;`
`.visible-*-inline-block` | `display: inline-block;`

### flex-column

Set block's `flex-direction` to `column`

Group of classes          | Screen size
------------              | -------------
`.flex-column`            | always
`.flex-column__xs`        | Phones (< 48em)
`.flex-column__sm`        | Tablets (≥ 48em)
`.flex-column__md`        | Desktops (≥ 64em)
`.flex-column__lg`        | Desktops (≥ 75em)

### flex-center

Set block's content align to center

Group of classes          | Behaviour
------------              | -------------
`.flex-center`            | Center on horizontal and vertical axes
`.flex-center__x`         | Center on horizontal axe
`.flex-center__y`         | Center on vertical axe

## Installation

`npm i -S flexboxgrid-helpers`

[npm page](https://www.npmjs.com/package/flexboxgrid-helpers)

## License
MIT