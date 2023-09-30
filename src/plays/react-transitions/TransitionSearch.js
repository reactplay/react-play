import React, { useState, useTransition } from 'react';

export default function TrainsitionSearch({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(users);

  // A Standard Hook to mark things non-urgent
  const [isPending, startTransition] = useTransition();

  const handleChange = ({ target: { value } }) => {
    // Set the search term on the textbox
    setSearchTerm(value);

    // Execute Non-Urgent Code
    startTransition(() => {
      // Filter the user list based on the search term
      setFiltered(users.filter((item) => item?.name.includes(value)));
    });
  };

  return (
    <div className="user-container">
      <h1>User Finder - Transition</h1>
      <div>
        {isPending ? (
          <div>Loading...</div>
        ) : (
          <p>{users.length !== filtered.length ? `${filtered.length} matches` : null}</p>
        )}
      </div>

      <input placeholder="Type a name" type="text" value={searchTerm} onChange={handleChange} />

      {isPending ? (
        <div>Loading...</div>
      ) : (
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
      )}
    </div>
  );
}
