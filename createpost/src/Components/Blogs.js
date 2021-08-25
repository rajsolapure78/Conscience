import React from 'react'
import ReactDataGrid from 'react-data-grid';
export const Blogs = () => {
    const columns = [
        { key: 'id', name: 'ID' },
        { key: 'title', name: 'Title' }
      ];
      
      const rows = [
        { id: 0, title: 'Example1' },
        { id: 1, title: 'Demo2' }
      ];
      
      function App() {
        return <ReactDataGrid columns={columns} rows={rows} />;
      }
      
    return (
        <div>
            <h3>My Blogs</h3>
            {App()}
        </div>
    )
}