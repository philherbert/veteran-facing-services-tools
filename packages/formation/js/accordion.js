const toBoolean = value => value === 'true';

const isElementInViewport = (
  el,
  win = window,
  docEl = document.documentElement,
) => {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (win.innerHeight || docEl.clientHeight) &&
    rect.right <= (win.innerWidth || docEl.clientWidth)
  );
};

const addAriasExpandedAttr = () => {
  Array.from(document.querySelectorAll('.usa-accordion-button')).forEach(
    element => {
      const hasAriasExpandedAttr = element.getAttribute('aria-expanded');

      if (!hasAriasExpandedAttr) {
        element.setAttribute('aria-expanded', false);
      }
    },
  );
};

const addAriaHiddenAttr = () => {
  Array.from(document.querySelectorAll('.usa-accordion-content')).forEach(
    el => {
      const buttonElement = document.querySelector(
        `[aria-controls="${el.id}"]`,
      );

      if (buttonElement) {
        const hiddenValue = !toBoolean(
          buttonElement.getAttribute('aria-expanded'),
        );

        el.setAttribute('aria-hidden', hiddenValue);
      }
    },
  );
};

const getAccordionParents = elem => {
  // Setup parents array
  const parents = [];

  // Get matching parent elements
  // eslint-disable-next-line
  for (let i = 0; elem && elem !== document; elem = elem.parentNode) {
    // Add matching parents to array
    if (i !== 0) {
      if (elem.classList.contains('usa-accordion')) {
        parents.push(elem);
      }
    }
    i++;
  }

  return parents;
};

const getOtherButtons = (element, target) =>
  Array.from(element.getElementsByClassName('usa-accordion-button')).filter(
    item => item !== target,
  );

const addAccordionClickHandler = () => {
  Array.from(
    document.querySelectorAll('.usa-accordion, .usa-accordion-bordered'),
  ).forEach(element => {
    const parents = getAccordionParents(element);

    if (parents.length === 0) {
      element.addEventListener('click', e => {
        const accordionButton = e.target.closest('.usa-accordion-button');

        // Checks whether the button has a click event already assigned to it.
        // and if it is a .usa-accordion-button.
        // Specifically React Components.
        if (accordionButton && !accordionButton.onclick) {
          const multiSelectable =
            toBoolean(element.getAttribute('aria-multiselectable')) ||
            toBoolean(element.getAttribute('data-multiselectable'));

          const hasAriaControlsAttr = accordionButton.getAttribute(
            'aria-controls',
          );

          if (hasAriaControlsAttr && !multiSelectable) {
            getOtherButtons(element, accordionButton).forEach(el => {
              const contentEl = el.getAttribute('aria-controls');

              el.setAttribute('aria-expanded', 'false');

              document
                .getElementById(contentEl)
                .setAttribute('aria-hidden', 'true');
            });
          }

          if (hasAriaControlsAttr) {
            const dropDownElement = document.getElementById(
              accordionButton.getAttribute('aria-controls'),
            );
            const accordionButtonExpandedAttr = toBoolean(
              accordionButton.getAttribute('aria-expanded'),
            );

            dropDownElement.setAttribute(
              'aria-hidden',
              accordionButtonExpandedAttr,
            );

            accordionButton.setAttribute(
              'aria-expanded',
              !accordionButtonExpandedAttr,
            );

            if (!isElementInViewport(accordionButton)) {
              element.scrollIntoView();
            }
          }
        }
      });
    }
  });

  // Don't use aria-multiselectable, it's not a valid use of that attribute
  if (
    document.querySelectorAll(
      '.usa-accordion[aria-multiselectable], .usa-accordion-bordered[aria-multiselectable]',
    ).length
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      'Accordion elements are not a valid context for aria-multiselectable, use data-multiselectable instead',
    );
  }
};

const loadAccordionHandler = () => {
  addAriaHiddenAttr();
  addAriasExpandedAttr();
  addAccordionClickHandler();
};

export default loadAccordionHandler;
