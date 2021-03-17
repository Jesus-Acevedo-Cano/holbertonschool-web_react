import Immutable from 'immutable';

export const getListObject = (array) => Immutable.List(array);

export const addElementToList = (list, element) => list.push(element);
