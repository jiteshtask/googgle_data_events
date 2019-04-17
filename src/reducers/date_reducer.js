import { fromJS } from 'immutable';

import { DATE_VALUE } from '../actions/date_action_types';

const INITIAL_STATE= fromJS({
  dateObj: {}
});

export default function(state= INITIAL_STATE, action) {
  switch(action.type) {
    case DATE_VALUE: {
      return state.set('dateObj', action.payload);
    }
  }
  return state;
}