

import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './components/Reducer'
import TodosList from './components/TodosList';
import AddList from './components/Add';
import TaskDone from './TaskDone'

const store=createStore(Reducer)





function App() {
  return (
    <div className="App">
      <Provider store={store} >
       <AddList />
       <TodosList />
       <TaskDone />
      </Provider>
    </div>
  );
}

export default App;
