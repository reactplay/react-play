import React, { useState } from 'react';

export default function PrioritySearch({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(users);

  const handleChange = ({ target: { value } }) => {
    // Set the search term on the textbox
    setSearchTerm(value);

    // Filter the user list based on the search term
    setFiltered(users.filter((item) => item?.name.includes(value)));
  };

  return (
    <div className="user-container">
      <h1>User Finder - Priority</h1>
      <div>{users.length !== filtered.length ? `${filtered.length} matches` : null}</div>
      <input placeholder="Type a name" type="text" value={searchTerm} onChange={handleChange} />
      <div className="user-cards">
        {filtered.length > 0 ? (
          filtered.map((user) => (
            <div class="card">
              <div>
                <img alt={`Avatar image of ${user?.name}`} src={user?.avatar} />
              </div>
              <div>
                <strong>{user?.name}</strong>
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
