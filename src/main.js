'use strict';

(function () {
  const DEFAULT_COLOR = `black`;
  let menuItem = (idName, caption) => {
    return `
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
  };

  let search = () => {
    return `
  <input
    type="text"
    id="search__input"
    class="search__input"
    placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE"
  />
  <label class="visually-hidden" for="search__input">Search</label>
    `;
  };

  let filter = (idName, count, disabled = false, checked = false) => {
    return `
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
  };

  let cardDate = (date) => {
    return `
    <div class="card__dates">
    <div class="card__date-deadline">
      <p class="card__input-deadline-wrap">
        <span class="card__date">${date.toLocaleString(`en-GB`, {day: `2-digit`, month: `long`}).toUpperCase()}</span>
        <span class="card__time">${date.toLocaleTimeString(`en`, {hour12: true})}</span>
      </p>
    </div>
  </div>
    `;
  };

  let cardForm = () => {
    return `
    <article class="card card--edit card--black">
    <form class="card__form" method="get">
    <div class="card__inner">
      <div class="card__control">
        <button type="button" class="card__btn card__btn--archive">
          archive
        </button>
        <button
          type="button"
          class="card__btn card__btn--favorites card__btn--disabled"
        >
          favorites
        </button>
      </div>

      <div class="card__color-bar">
        <svg width="100%" height="10">
          <use xlink:href="#wave"></use>
        </svg>
      </div>

      <div class="card__textarea-wrap">
        <label>
          <textarea
            class="card__text"
            placeholder="Start typing your text here..."
            name="text"
          >This is example of new task, you can add picture, set date and time, add tags.</textarea>
        </label>
      </div>

      <div class="card__settings">
        <div class="card__details">
          <div class="card__dates">
            <button class="card__date-deadline-toggle" type="button">
              date: <span class="card__date-status">no</span>
            </button>

            <fieldset class="card__date-deadline" disabled>
              <label class="card__input-deadline-wrap">
                <input
                  class="card__date"
                  type="text"
                  placeholder="23 September"
                  name="date"
                />
              </label>
            </fieldset>

            <button class="card__repeat-toggle" type="button">
              repeat:<span class="card__repeat-status">no</span>
            </button>

            <fieldset class="card__repeat-days" disabled>
              <div class="card__repeat-days-inner">
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-mo-1"
                  name="repeat"
                  value="mo"
                />
                <label class="card__repeat-day" for="repeat-mo-1"
                  >mo</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-tu-1"
                  name="repeat"
                  value="tu"
                  checked
                />
                <label class="card__repeat-day" for="repeat-tu-1"
                  >tu</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-we-1"
                  name="repeat"
                  value="we"
                />
                <label class="card__repeat-day" for="repeat-we-1"
                  >we</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-th-1"
                  name="repeat"
                  value="th"
                />
                <label class="card__repeat-day" for="repeat-th-1"
                  >th</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-fr-1"
                  name="repeat"
                  value="fr"
                  checked
                />
                <label class="card__repeat-day" for="repeat-fr-1"
                  >fr</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  name="repeat"
                  value="sa"
                  id="repeat-sa-1"
                />
                <label class="card__repeat-day" for="repeat-sa-1"
                  >sa</label
                >
                <input
                  class="visually-hidden card__repeat-day-input"
                  type="checkbox"
                  id="repeat-su-1"
                  name="repeat"
                  value="su"
                  checked
                />
                <label class="card__repeat-day" for="repeat-su-1"
                  >su</label
                >
              </div>
            </fieldset>
          </div>

          <div class="card__hashtag">
            <div class="card__hashtag-list"></div>

            <label>
              <input
                type="text"
                class="card__hashtag-input"
                name="hashtag-input"
                placeholder="Type new hashtag here"
              />
            </label>
          </div>
        </div>

        <div class="card__colors-inner">
          <h3 class="card__colors-title">Color</h3>
          <div class="card__colors-wrap">
            <input
              type="radio"
              id="color-black-1"
              class="card__color-input card__color-input--black visually-hidden"
              name="color"
              value="black"
              checked
            />
            <label
              for="color-black-1"
              class="card__color card__color--black"
              >black</label
            >
            <input
              type="radio"
              id="color-yellow-1"
              class="card__color-input card__color-input--yellow visually-hidden"
              name="color"
              value="yellow"
            />
            <label
              for="color-yellow-1"
              class="card__color card__color--yellow"
              >yellow</label
            >
            <input
              type="radio"
              id="color-blue-1"
              class="card__color-input card__color-input--blue visually-hidden"
              name="color"
              value="blue"
            />
            <label
              for="color-blue-1"
              class="card__color card__color--blue"
              >blue</label
            >
            <input
              type="radio"
              id="color-green-1"
              class="card__color-input card__color-input--green visually-hidden"
              name="color"
              value="green"
            />
            <label
              for="color-green-1"
              class="card__color card__color--green"
              >green</label
            >
            <input
              type="radio"
              id="color-pink-1"
              class="card__color-input card__color-input--pink visually-hidden"
              name="color"
              value="pink"
            />
            <label
              for="color-pink-1"
              class="card__color card__color--pink"
              >pink</label
            >
          </div>
        </div>
      </div>

      <div class="card__status-btns">
        <button class="card__save" type="submit">save</button>
        <button class="card__delete" type="button">delete</button>
      </div>
    </div>
  </form>
  </article>
    `;
  };

  let card = (color = DEFAULT_COLOR, date = new Date()) => {
    let text = `Example default task with ${color && color !== DEFAULT_COLOR ? `custom color` : `default color`}`;
    if (!date) {
      text += ` and without date`;
    }
    return `
    <article class="card card--${color}">
    <div class="card__form">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites card__btn--disabled"
          >
            favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <p class="card__text">${text}</p>
        </div>

        <div class="card__settings">
          <div class="card__details">
            ${date ? cardDate(date) : ``}

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #todo
                  </span>
                </span>

                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #personal
                  </span>
                </span>

                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #important
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
    `;
  };

  let loadMore = () => {
    return `
    <button class="load-more" type="button">load more</button>    
    `;
  };

  let renderComponent = (container, content) => {
    container.innerHTML += content;
  };

  let menu = document.querySelector(`.control__btn-wrap`);
  let searchContainer = document.querySelector(`.main__search`);
  let filterContainer = document.querySelector(`.main__filter`);
  let boardContainer = document.querySelector(`.board`);
  let boardTasks = document.querySelector(`.board__tasks`);

  renderComponent(menu, menuItem(`new-task`, `+ ADD NEW TASK`));
  renderComponent(menu, menuItem(`task`, `TASKS`));
  renderComponent(menu, menuItem(`statistic`, `STATISTICS`));

  renderComponent(searchContainer, search());

  renderComponent(filterContainer, filter(`all`, 13, undefined, true));
  renderComponent(filterContainer, filter(`overdue`, 0, true));
  renderComponent(filterContainer, filter(`today`, 0, true));
  renderComponent(filterContainer, filter(`favorites`, 1));
  renderComponent(filterContainer, filter(`repeating`, 1));
  renderComponent(filterContainer, filter(`tags`, 1));
  renderComponent(filterContainer, filter(`archive`, 115));

  renderComponent(boardTasks, cardForm());
  renderComponent(boardTasks, card());
  renderComponent(boardTasks, card(`blue`));
  renderComponent(boardTasks, card(`yellow`, null));

  renderComponent(boardContainer, loadMore());
})();
