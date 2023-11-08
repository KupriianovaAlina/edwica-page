const features = document.querySelector('.main__features')
const lists = features.querySelectorAll('.list');
const navs = document.querySelectorAll('.nav__item');

let currentActiveFeature = lists[0];
let currentActiveNav = navs[0];

lists.forEach((list) => {
  const button = list.querySelector('.list__panel-button');

  button.addEventListener('click', (event) => {
    let eventTargetList = event.target.closest('.list');
    if (currentActiveFeature !== eventTargetList) {
      eventTargetList.classList.remove('list_type_text-hidden');
      currentActiveFeature.classList.add('list_type_text-hidden');
      currentActiveFeature = list;
    } else {
      eventTargetList.classList.toggle('list_type_text-hidden');
    }
  });
});

navs.forEach((nav) => {
  nav.addEventListener('click', (event) => {
    const eventTargetNav = event.target.closest('.nav__item');

    if (eventTargetNav !== currentActiveNav) {
      currentActiveNav.classList.remove('nav__item_active');
      eventTargetNav.classList.add('nav__item_active');
      currentActiveNav = eventTargetNav;
    }
  })
});