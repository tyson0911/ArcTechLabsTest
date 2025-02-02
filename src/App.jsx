import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from './components/DataTable';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>JSONPlaceholder Data</h1>
      <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Table</Link>
        <Link to="/mindmap">MindMap</Link>
      </nav>
      <DataTable />
    </div>
  );
}

export default App;