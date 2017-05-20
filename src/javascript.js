import $ from 'jquery';

const getElements = elements => {
  if(elements && elements.length > 0) return elements;
  return $('*').get().filter(el => $(el).css('box-shadow') !== 'none');
};

const getElementsStyling = elements => {
  return elements.map(el => {
    return {
      offset: $(el).offset(),
      height: $(el).outerHeight(),
      width: $(el).outerWidth(),
      shadow: $(el).css('box-shadow')
    };
  });
};

const generateElements = elements => {
  let ret = '<div id="chrome-shadow-fixer">';
  elements.forEach((el, i) => (ret += '<div id="chrome-shadow-fixer-'+i+'"></div>'));
  return ret += '</div>';
};

export const fixShadows = elements => {
  const elementsWithShadows = getElements(elements);
  if (elementsWithShadows.length < 1) {
    console.warn('fixShadows(): No elements to fix shadows.');
    return;
  }
  const generatedElements = generateElements(elementsWithShadows);
  $('body').append(generatedElements);
  const elementStylings = getElementsStyling(elementsWithShadows);
  elementStylings.forEach((el, i) => {
    $('#chrome-shadow-fixer-'+i).css('position', 'absolute');
    $('#chrome-shadow-fixer-'+i).css('display', 'inline-block');
    $('#chrome-shadow-fixer-'+i).css('top', el.offset.top);
    $('#chrome-shadow-fixer-'+i).css('left', el.offset.left);
    $('#chrome-shadow-fixer-'+i).css('height', el.height);
    $('#chrome-shadow-fixer-'+i).css('width', el.width);
    $('#chrome-shadow-fixer-'+i).css('box-shadow', el.shadow);
    $('#chrome-shadow-fixer-'+i).css('-webkit-print-color-adjust', 'exact');
    $('#chrome-shadow-fixer-'+i).css('-webkit-filter', 'opacity(1)');
  });
  elementsWithShadows.forEach(el => $(el).css('box-shadow', 'none'));
};

fixShadows();
