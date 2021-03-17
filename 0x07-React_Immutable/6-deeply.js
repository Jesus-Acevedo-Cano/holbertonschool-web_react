import Immutable from 'immutable';

const mergeDeeplyElements = (page1, page2) => Immutable.Map(page1).mergeDeep(Immutable.Map(page2));

export default mergeDeeplyElements;
