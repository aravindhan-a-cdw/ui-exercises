## CSS
- Float
    - Float must be `clear`ed in the same parent to apply or let the childs inherit the parent styling like background-color.
    - When a container is floated then it must be cleared before before ending of the parent container. 
        ```html
        <div>
            <div class="float"></div>
            <div class="float"></div>
            <div class="clear"></div>
        </div>
        ```


### Background Image
- `background-position` 
    - It splits the image or container into 9 box grid (TL, TC, TR, CL, CC, CR, BL, BC, BR). If size of image is 
    greater than the container size then the grid is applied on the image (Overflow will occur) so that we can decide the content on the image we are trying to focus, else the container has the grid and decides where to start the rendering (No overflow and complete image is displayed).
    - It can also take measurements.

- `background-size`
    - `cover` - This will fit the image to the container by zooming in or zooming out.


### Fonts 
Font file types - ttf, otf, woff, svg, eot
- `font-family`

    Major categories are 5
    - Serif - It will have some curves or entensions in the ends or corners of letters.
    - Sans serif - It will not have extra extendings on the ends
    - Cursive - It is like hand writing
    - Monospace - All characters will take same or almost same space.
    - Fantasy - All other which cannot be categorized in the above.
- `font-style`
    - Normal, Italic, Oblique
    - Italic and Oblique are similar but it is claimed that oblique is more slanting but it is harding identifiable.
- `font-variant`
    - `small-caps` - Convert to small caps
- `font-weight`
    - normal(400), bold(600) and bolder(700 or 900) are named weights.
    - Normal and bold is supported by all fonts.
    - All other font weights depends on the font that is used.

```css
/* Shorthand for font is */
font: italic small-caps bold 20px/20px 'Courier New';
/* 20px/20px is font-size/line-height */
/* There is a required property in this */
```    
- `line-height`
    - When given without measurement (1.5) then it means that the line height is 1.5 * size of font.

### Text Formatting
- `text-transform, text-decoration, text-shadow, letter-spacing, word-spacing, text-indent, text-overflow, white-space, word-break `


### CSS Selectors
- `id, class, universal (*), tag`

    Advanced CSS Selectors
    - Descendant Selector (`div p`) - All descendants which are either immediate or nested will get selected.
    - Child Hierechy Selector (`div > li > p`) - div must have a immediate li and li must have a immediate p. 
    - Sibling Selector (`div ~ p`) - p tags which are in same level as div and appear after the div.
    - Adjacent Selector (`div + p`) - Next immediately available p tag to div(next immediate sibling)

    Attribute Selector  
    `[width]` - Any element with width attribute.  
    `[width="100"]` - Any element with width set to 100.
    `li[width="300"]` - li element with width set to 300.


#### Pseudo Class
It affects all the element or total container.
`a:hover` is a pseudo class which will affect the style to whole element.

#### Pseudo Element
It affects the part of the container.
`p::first-letter` is a pseudo element which will select the first letter.

#### Background Sprites
- Using a single image which is a collection of multiple image can be used to display icons using background-image and background-position property to change the part of the image to render in the container.


Explore 
- em, rem 
- initial inherit
- hex 3 digit vs 6 digit
- font required argument in shorthand
- how to align left and right in block level element
    - A inline element can be aligned using align (html) or text-align (css - aligns the content)
    - A block level element can be centered using margin auto.
- Pseudo Element - before, after
- type-of, nth-type-of selectors.
- css-diner
