import Immutable from 'immutable';

export const concatElements = (page1, page2) => Immutable.List(page1).concat(Immutable.List(page2));

export const mergeElements = (page1, page2) => Immutable.Map(page1).merge(Immutable.Map(page2));
