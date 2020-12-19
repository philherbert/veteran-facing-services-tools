export default function setup() {
  const onThisPageContainer = document.getElementById('table-of-contents');
  if (!onThisPageContainer) return;

  const h2s = document.querySelectorAll('article > h2');
  const list = onThisPageContainer.querySelector('ul');

  console.log(h2s);
  h2s.forEach(node => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');

    anchor.href = `#${node.id}`;
    anchor.innerText = node.innerText;

    listItem.appendChild(anchor);
    list.appendChild(listItem);
  });
}
