import Immutable from 'immutable';

const accessImmutableObject = (object, array) => {
  const nestData = Immutable.fromJS(object);
  return nestData.getIn(array, undefined);
}

export default accessImmutableObject;
