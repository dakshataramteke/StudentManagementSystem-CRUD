import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './components/Admin.js';
import Dashboard from './components/Dashboard.js';
import Home from './components/Home.jsx';
import AddStudent from './components/AddStudent.jsx';
// import MultipleFile from './components/MultipleFile.jsx';

function App() {
  return (
    <div className="App" style={{backgroundColor:'pink'}}>
      <BrowserRouter future={{ v7_relativeSplatPath: true ,  v7_startTransition: true }}>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<Dashboard />}>
          
            <Route path="addStudent" element={<AddStudent/>} />
            {/* <Route path="addStudent" element={<MultipleFile/>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;