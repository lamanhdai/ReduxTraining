import { combineReducers } from 'redux';
import { CHANGE_JOB } from '../actions';

const photoReducer = (state =  {
  url: './coat.jpg',
  text: 'coat'
}) => state;

const detailReducer = (state = {
  name: 'Anh Dai',
  location: 'VN'
}, action) => {
  switch (action.type) {
    case CHANGE_JOB:
      return {
          ...state,
          name: state.name + ' Updated!',
      }
  }
  return state;
};

const introductionReducer =  (state = {
  job: 'a Frontend Developer, Dreamer, Single Guy',
  hobby: 'Selfie, Chat and Exercise'
}, action) => {
  switch (action.type) {
    case CHANGE_JOB:
      return {
          ...state,
          job: action.payload,
      }
  }
  return state;
}

export const CardReducer = combineReducers({ 
  photo: photoReducer,
  detail: detailReducer ,
  introduction: introductionReducer
})
