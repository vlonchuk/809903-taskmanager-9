import {generateMenuItem as menuItem} from './components/menu-item';
import {generateSearch as search} from './components/search';
import {generateFilter as filter} from './components/filter';
import {generateSort as sort} from './components/sort';
import {generateCardForm as cardForm} from './components/card-form';
import {generateCard as card} from './components/card';
import {generateLoadMore as loadMore} from './components/load-more';

let renderComponent = (container, content) => {
  container.innerHTML += content;
};

let main = document.querySelector(`.main`)
let menu = main.querySelector(`.control__btn-wrap`);
let searchContainer = main.querySelector(`.main__search`);
let filterContainer = main.querySelector(`.main__filter`);
let boardContainer = main.querySelector(`.board`);
let boardSort = boardContainer.querySelector(`.board__filter-list`);
let boardTasks = boardContainer.querySelector(`.board__tasks`);

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

renderComponent(boardSort, sort(`SORT BY DEFAULT`));
renderComponent(boardSort, sort(`SORT BY DATE up`));
renderComponent(boardSort, sort(`SORT BY DATE down`));

renderComponent(boardTasks, cardForm());
renderComponent(boardTasks, card());
renderComponent(boardTasks, card(`blue`));
renderComponent(boardTasks, card(`yellow`, null));

renderComponent(boardContainer, loadMore());
