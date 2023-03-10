import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import Card from './Card';

const Users = () => {
  const { isLoading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (isLoading) return;
    setUsers(data[page]);
  }, [page, isLoading, data]);

  const handlePage = (page) => {
    setPage(page);
  };

  // Previous page method
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;

      if (prevPage < 0) {
        prevPage = data.length - 1;
      }

      return prevPage;
    });
  };
  // Next page method
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;

      if (nextPage > data.length - 1) {
        nextPage = 0;
      }

      return nextPage;
    });
  };

  if (isLoading) {
    return (
      <div className="app-github-users">
        <div className="container mx-auto">
          <div className="h-[70vh] flex justify-center items-center">
            <h3 className="text-center text-4xl font-semibold text-teal-800">Loading...</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-center text-4xl font-semibold text-teal-800">Pagination</h3>
          <span className="w-28 h-[3px] bg-teal-500 inline-block" />
        </div>
        <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-6 py-4 mt-3">
          {users.map((user) => {
            return <Card key={user.id} {...user} />;
          })}
        </div>

        <div className="mt-4 text-center">
          <button
            className="bg-teal-500 hover:bg-teal-600 px-3 py-1 rounded text-gray-50"
            onClick={prevPage}
          >
            Prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                className={`${
                  index === page ? 'bg-teal-500 text-gray-50' : 'bg-teal-200 text-teal-600'
                } hover:bg-teal-500 hover:text-gray-50 mx-1 px-4 py-1 rounded`}
                key={index}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button
            className="bg-teal-500 hover:bg-teal-600 px-3 py-1 rounded text-gray-50"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Users;
