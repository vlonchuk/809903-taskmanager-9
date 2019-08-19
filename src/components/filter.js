export let generateFilter = (idName, count, disabled = false, checked = false) => `
<input
  type="radio"
  id="filter__${idName}"
  class="filter__input visually-hidden"
  name="filter"
  ${checked ? `checked` : ``}
  ${disabled ? `disabled` : ``}
/>
<label for="filter__${idName}" class="filter__label">
  ${idName} <span class="filter__${idName}-count">${count}</span></label
>    
`;
