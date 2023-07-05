import React, { useState } from 'react';

export default function PrioritySearch({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(users);

  const handleChange = ({ target: { value } }) => {
    // Set the search term on the textbox
    setSearchTerm(value);

    // Filter the user list based on the search term
    setFiltered(users.filter((item) => item.name.includes(value)));
  };

  return (
    <div className="user-container">
      <h1>User Finder - Priority</h1>
      <div>{users.length !== filtered.length ? `${filtered.length} matches` : null}</div>
      <input onChange={handleChange} value={searchTerm} type="text" placeholder="Type a name" />
      <div className="user-cards">
        {filtered.length > 0 ? (
          filtered.map((user) => (
            <div class="card">
              <div>
                <img src={user.avatar} alt={`Avatar image of ${user.name}`} />
              </div>
              <div>
                <strong>{user.name}</strong>
              </div>
            </div>
          ))
        ) : (
          <h4 className="nomatch">No Match Found...</h4>
        )}
      </div>
    </div>
  );
}
