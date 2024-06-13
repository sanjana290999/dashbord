import logo from './logo.svg';
import './App.css';
//import TodoForm from './components/todo/Todo';
//import TodoList from './components/todo/Todo';
import RouterComponents from './routes/Routes';
import AddEmployeeForm from './components/employee/AddEmployeeForm';

function App() {
  return (
    <div>
      <RouterComponents/>
      {/* <AddEmployeeForm/> */}
    </div>
  );
}

export default App;
