import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import TaskList from './components/pages/TaskList';
import NotFound from './components/pages/NotFound';
import UserState from './context/user/UserState';
import About from './components/pages/About';

function App() {
  return (
    <UserState>
      <Router>
        <Navbar></Navbar>
        <div className="main-page">
          <Routes>
            <Route
              exact
              path="/"
              element={<Home></Home>}>
            </Route>

            <Route
              exact
              path="/task/list"
              element={<TaskList></TaskList>}>
            </Route>

            <Route
              exact
              path="/about"
              element={<About></About>}>
            </Route>

            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </div>
      </Router>
    </UserState>
  );
}

export default App;
