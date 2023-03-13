## Responsive Design

### Screen Ranges
- Screen Sizes (It may be provided by client)
    - Guided Range
        - 1 - 576px - Portrait Mode of Mobile
        - 576 - 768px - Landscape Mode of Mobile
        - 768 - 992px - Portrait & Landscape mode of Tablet and some basic laptops
        - 992 - 1200px - Most Laptops
        - 1200 - 1400px - Wide Desktop Screens
    - Custom Range
        - 600px, 900px, 1200px, 1400px or 1500px
- Breakpoints - xs (< 576), sm (> 576), md (> 768), lg (> 992), xl (> 1200), xxl (> 1400)
- Measurement
    - `<` - `max-width`
    - `>` - `min-width`


### Media Queries
```css
/* This only affects the screen */
@media only screen and (max-width: 576px){

}
/* To change style while printing use only print */
/* To apply changes to both screen and print remove only filter */
```
- If `max-width` is used then put the code in descending order of screen sizes from top to bottom.


## Positioning
- `static` (default) - Positioning is all about moving the container. It can be moved by margin properties but not with direction properties.
    - Margin properties modify the container size while the direction properties will keep the container size intact.

Move to other properties when we need to layer or need to use direction properties.
- `relative` - It will keep the container in flow of parent container and the size of the container will fill its parent and it can be moved by margin and direction properties.
    - When a container is set to relative then it will move behind the following static container.

Both static and relative resize container will take margin of container.

- `absolute` - Absolute will take the size of the content and will not set size relative to its parent. 
    - 
    - It will stack all the absolute containers from start of the parent container and size of the container will be set to its content size. It can be moved using margin and direction properties.
    - Absolute container will stack above relative and static, whereas if multiple absolute are available they will be stacked on each other.

### z-index
- 0 is the default index of all elements.


### Static Observations
- Layer is not possible with absolute hence z-index do not work.
- The container can be moved to any position but only with margin properties.
- The size of the container changes when the margin property is given.


### Relative 
- If margin property is used to move the container then it is 
### Absolute






### Explore
- What happens if min-width is used and what is the problem.

