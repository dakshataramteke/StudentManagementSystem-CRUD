import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './components/Admin.js';
import Dashboard from './components/Dashboard.js';
import Home from './components/Home.jsx';
import AddStudent from './components/AddStudent.jsx';
import ShowStudent from './components/ShowStudent.jsx';
import DashboardPage from './components/DashboardPage.jsx';
import Gallery from './components/Gallery.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter future={{ v7_relativeSplatPath: true ,  v7_startTransition: true }}>
        <Routes>
        <Route path="/" element={<Home />} >
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/admin" element={<Admin />} />
        </Route>
       
          <Route path="/admin/dashboard" element={<Dashboard />}>
            <Route path="dashboardpage" element={<DashboardPage/>} />
            <Route path="addStudent" element={<AddStudent/>} />
            <Route path="show_Student" element={<ShowStudent/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;