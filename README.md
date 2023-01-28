# Js-CopyField - [Demo](https://prefect9.github.io/Js-CopyField/demo/)
## Documentation
You need to initialize a container \<div\> that contains input[type="text"] (or textarea) and a button that copies the text.

For automatic initialization, add the `data-copy-field` attribute for the container with the field whose value you want to copy.

After copying the text, the attribute `data-copied="true"` will be added to the container for 2 seconds. The button that should be copied when clicked must contain the attribute `data-copy-field-btn`.



## Examples
```html
<div data-copy-field>
    <input type="text" value="Copied value">
    <div data-copy-field-btn>Copy</div>
    <div class="copied">Copied</div>
</div>
```
```css
.copied{ display: none }
[data-copied] > [data-copy-field-btn]{ display: none }
[data-copied] .copied{ display: none }
```