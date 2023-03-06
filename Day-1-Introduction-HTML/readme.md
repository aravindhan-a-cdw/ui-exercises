# Introduction
## Web Development, Full Stack, HTML, Folder Structure

### HTML Tags
- `h1 - h6, p, br, hr`
- `b, i, u, strike` - deprecated and `strong, em, ins, del` can be used instead.
- Types 
    - Paired & Unpaired (`br, hr`)
    - Block & Inline
- list - `ol`, `ul`
    - `ol` - has 5 types [1, a, A, I, i]
        - It has a `start` attribute which can be used to continue the sequence of ordered list.
    - `ul` - has 3 types [`disc`, `square`, `circle`]

Tags are either container(p, h1) or element (img).

### Classification of HTML Attributes
- Paired, Unpaired(self closing) Ex: required, checked
- Core, Generic, Custom.
    - Core - `id, class, style, title`
    - Generic - `width, height, align, border, bgcolor, cellspacing, cellpadding`. All tags donot support all these attributes. Ex: `<p>` donot support `bgcolor`.
    - Custome - `data-<attribute name>`


### Anchor Tag
- It creates a link between 2 pages with the help of href which can contain filename, path, website link, references(#id).
- Paths:
    - Relative - `../images/welcome.jpg`
    - Full Path - `https://mysite.com/images/thankyou.png`
    - Absolute Path - `/Users/myself/project/site/images/notallowed.jpg`
    When Absolute path is used 
- It has `target` attribute which can be used to open the linked resource in same page (`_parent` or `_self`) or open in new page using `_blank` value.
- `target` attribute also takes named iframe where the resource can be loaded in an iframe which has a name.

### Iframe
- Can be used to load resource on a window inside the same window.
- A name can be provided to the iframe and it can be specified in the target of an anchor tag and that will load the resource in the iframe.


### Float
- HTML cannot create layers only CSS can create layers.
- If align property is used on image element then the image will be floating and the next element will occupy the space. But if the next element contains text or image then the browser will not hide the content and hence will move the content away from the image.
- If any background color is given to the next element then it will be show the layers by filling the color behind the image.
- `hspace`, `vspace` can be used in html to give space around elements and containers.

### Image Resolution
- dpi - dots per inch is the measure of dots or pixels per inch and two images will same dimensions (height x width) but different dpi will differ in resolution.
- More dpi better resolution and higher will be the file size. It is recommended to use images with 70-80 dpi for websites.
