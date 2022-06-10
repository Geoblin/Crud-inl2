import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { TodoList } from './TodoList'
import { CreateTodo } from './CreateTodo'
import { EditTodo } from './EditTodo'

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to="/" className="nav-link">Todos</Link>
          </li>
          <li className='navbar-item'>
            <Link to="/create" className="nav-link">Create Todo</Link>
          </li>
          
        </ul>
      </nav>
    <Routes>
      <Route exact path="/" element={<TodoList />}/>
      <Route exact path="/edit/:id" element={<EditTodo />}/>
      <Route exact path="/create" element={<CreateTodo />}/>
    </Routes>
    </div>
  );
}

export default App;
