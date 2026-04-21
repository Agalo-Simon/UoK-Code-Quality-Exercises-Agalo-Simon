const getArrayDepth = (elements) => {
  if (!Array.isArray(elements)) return 0;

  if (elements.length === 0) return 1;

  return 1 + Math.max(...elements.map(item => getArrayDepth(item)));


}

const flattenEverything = (elements) => elements.flat(getArrayDepth(elements));


// const nestedData = [1, [2, [3, [4, 5]]], 6];


