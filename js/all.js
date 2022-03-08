const url = 'https://hexschool.github.io/js-filter-data/data.json';

let data = [];
let showData = [];
let category = '';

const table = document.querySelector('.table-content');
const filter = document.querySelector('.filter');

function renderData(filterData) {
  let str = '';
  filterData.forEach((b) => {
    const content = `
    <tr>
    <td>${b.作物名稱}</td>
    <td>${b.市場名稱}</td>
    <td>${b.上價}</td>
    <td>${b.中價}</td>
    <td>${b.下價}</td>
    <td>${b.平均價}</td>
    <td>${b.交易量}</td>
    </tr>
    `;
    str += content;
  });
  table.innerHTML = str;
}

// eslint-disable-next-line no-undef
axios.get(url).then((res) => {
  data = res.data.filter((a) => a.作物名稱);
  renderData(data);
});

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category;
    showData = data.filter(({ 種類代碼 }) => 種類代碼 === category);
    renderData(showData);
  }
}

filter.addEventListener('click', filterCategory);
