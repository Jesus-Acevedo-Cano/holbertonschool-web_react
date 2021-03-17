import Immutable from 'immutable';

export const concatElements = (page1, page2) => Immutable.List(page1).concat(immutable.List(page2));

export const mergeElements = (page1, page2) => Immutable.Map(page1).merge(immutable.Map(page2));
