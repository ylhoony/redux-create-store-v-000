const createStore = (reducer) => {
  let state;

  const dispatch = (action) => {
    state = reducer(state, action);
    render();
  }

  const getState = () => {
    return state;
  }

  dispatch({type: '@@INIT'})

  return {
    dispatch,
    getState
  };
};

const changeCount = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
}


let buttton = document.getElementById('button');

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState.count;
};

button.addEventListener("click", () => {
  store.dispatch({ type: "INCREASE_COUNT" })
});