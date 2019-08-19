export let generateMenuItem = (idName, caption) => `
<input
type="radio"
name="control"
id="control__${idName}"
class="control__input visually-hidden"
/>
<label for="control__${idName}" class="control__label control__label--${idName}"
>${caption}</label
>
`;
