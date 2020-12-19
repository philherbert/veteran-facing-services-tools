import loadAccordionHandler from './accordion';
import createAdditionalInfoWidget from './additional-info';
import addSidenavListeners from './sidenav';
import onThisPageListener from './on-this-page';
import domready from 'domready';
import elementClosest from 'element-closest';

elementClosest(window);

if (
  document.readyState === 'complete' &&
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  addSidenavListeners();
  createAdditionalInfoWidget();
  loadAccordionHandler();
  onThisPageListener();
} else {
  domready(() => {
    addSidenavListeners();
    createAdditionalInfoWidget();
    loadAccordionHandler();
    onThisPageListener();
  });
}
