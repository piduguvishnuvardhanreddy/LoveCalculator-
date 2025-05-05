import React from 'react';
import './index.css';
import { FaTrash } from 'react-icons/fa'; // Make sure to install react-icons

function History({ userList, setUserList }) {
  const handleDelete = (idToDelete) => {
    const updatedList = userList.filter(user => user.id !== idToDelete);
    setUserList(updatedList);
    localStorage.setItem('userList', JSON.stringify(updatedList));
  };

  return (
    <div className="history-container">
      <h2>User History</h2>
      <table>
        <thead>
          <tr>
            <th>Boy</th>
            <th>Girl</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.boy}</td>
              <td>{user.girl}</td>
              <td>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="delete-button"
                  title="Delete Entry"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;

