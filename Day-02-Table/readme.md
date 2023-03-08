## Table
- A *tabular column* will have same number of columns in each row whereas a *table* can have unequal number of rows and columns using `colspan` or `rowspan`.
- When size is not specified in a table it will take:
    - Row: Height is the max height of the column in the row. Height of each row maybe different.
    - Column: Width - It is decided by the width of the maximum column and it is set as the table width hence will be same in all columns.
- To set a fixed size we can use `width` attribute in `table` and `td`.
```html
<table>
    <tr>
        <td width="50%">Hello</td>
        <td width="25%">Hello....</td>
        <td width="25%">Hello</td>
    </tr>
</table>
```
- If width is set on `td` without setting width on its parent `tr` or `table`, then the column with the max content is taken for the comparision, here column 2 is taken as 25% and column 1 is 2 * width of column 2 and column 3 will have same width as column 2.

Table is the basic of flexbox and grid layout.

## Types of Layout
- Fluid Layout - Takes 100% of the window and fills the window when size changes.
- Box Layout - Takes a fixed width and will not change above the fixed width.


### Forms
 - A get request can only send max of 1024 characters.
 - Get request can only be used to submit text data and file data cannot be sent.
 - `action` - file path to process the data.
 - `method` - how to process the data.
 - `enctype` - can be used to send file data of any size and it cannot be seen from browser (network tab)