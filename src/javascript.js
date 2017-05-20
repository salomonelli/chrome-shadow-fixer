import $ from 'jquery';

const fixShadowsOfElements = elements => {
  if (elements.length < 1) throw new Error('fixShadowsOfElements(): Passed array does not contain any elements.');
};

const fixShadowsOfAllElements = elements => {
  const allElements = $('*').get();
  const elementsWithShadows = allElements.filter(el => $(el).css('box-shadow') !== 'none');
  console.dir(elementsWithShadows);
};

export const fixShadows = elements => {
  if (elements) fixShadowsOfElements(elements);
  else fixShadowsOfAllElements();
};

fixShadows();
