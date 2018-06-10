function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    if (state.count != 0) {
      render();
    }
  }

  function getState() {
    return state;
  };

  dispatch({ type: '@@INIT' });

  return {
    dispatch,
    getState
  };
};

function changeCount(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
}

let store = createStore(changeCount);
let button = document.getElementById('button');

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

button.addEventListener('click', function () {
  store.dispatch({ type: 'INCREASE_COUNT' });
});
