import { combineReducers } from 'redux'
import todos from './todos'
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={ store() }>
      <App />
    </Provider>,
    document.getElementById('root')
  );

export default combineReducers({
  todos
})