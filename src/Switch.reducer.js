

function reducer(state = false, action) {
  if (action.type === 'toggle') {
    return !state;
  } else {
    return state;
  }
}

export default reducer;
