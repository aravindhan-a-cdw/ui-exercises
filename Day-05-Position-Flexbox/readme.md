## Position
- `fixed`
    - If fixed is set to an element, its height can be controlled using % while without fixed, it maynot work.
    - If % is used then it needs a definite measurement. Either the parent element should be set a definite size so that % can be calculated.
    - vh is viewport height and if % is not working then vh can be used so that the height can be calculated using the height of the screen.
    - When fixed is applied the element will always be in the screen and hence its height can be calculated w.r.t the screen size.
    - The element with fixed will be fit to the screen and doesn't depend on the parent.
    - The absolute property is dependent on the parent and scrolls.
    - If content overflows then the overflowed content is clipped and no scroll bar is produced.
- `sticky`
    - This is used to stick the element at some position.
    - A menubar is initially at the bottom of the screen, as the user scroll down, the menubar can be fixed at the top using sticky.
    - Only top and bottom property is useful.
    - Top or bottom property needs to be set to see the difference from static.


## Flexbox
- A flex container will shrink its child container till it can accomodate as many containers as it can. The space inside child containers is also used by putting the content to next line without breaking it. Only when there is no space left to accomodate a container, the container is overflown and scroll bar will be visible.
- The container can be said to use next row only if `flex-wrap` is used which default is `no-wrap`.
- `flex-direction` specifies how to adjust the content whether row or column. Other values are row-reverse, column-reverse.
- `flex-flow` - flex-direction + flex-wrap
- `justify-content` (horizontal alignment) - The values are start, end, space-around, space-evenly, space-between.
- `align-items` - The content can be aligned vertically. The property aligns the content in each row instead of aligning the whole content.
- `align-content` - All the child is considered as a single row and vertically aligned. It has additional properties like space-around, space-evenly & space-between.
    - align-items and align-content are similar in a single row container. The difference is visible in multiple rows.

Flex containers can have attributes `row-gap` and `column-gap` to set some space between the child elements.


## Animation
### Transform

### Animation


### Explore
- Flex
    - In child container of flexbox we use - flex-grow, flex-shrink, flex-basis. Why are these used? what are its properties and significance?
    - What is baseline in align-items

