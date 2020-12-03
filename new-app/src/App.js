

import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './components/Reducer'

import AddList from './components/Add';
import TodosCard from './components/TodosCard';


const store=createStore(Reducer)





function App() {
  return (
    <div className="App">
      <Provider store={store} >
       <AddList />
       <TodosCard />
       
      </Provider>
    </div>
  );
}

export default App;
