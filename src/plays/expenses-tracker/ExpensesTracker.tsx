/* eslint-disable react/jsx-sort-props */
import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { AiOutlineDelete } from 'react-icons/ai';
import PlayHeader from 'common/playlists/PlayHeader';
import useLocalStorage from 'common/hooks/useLocalStorage';
import './styles.css';

function ExpensesTracker(props: any) {
  const [localStoreExpenses, setLocalStoreExpenses] = useLocalStorage('expenses', []);

  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const handleData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleNewExpense = () => {
    const expense = localStoreExpenses[localStoreExpenses.length - 1];
    data['id'] = expense !== undefined ? parseInt(expense.id) + 1 : 1;
    setLocalStoreExpenses([...localStoreExpenses, data]);
    setOpen(false);
    setData(null);
  };

  const openEditModal = (expenseEdit: any) => {
    setData(expenseEdit);
    setOpen(true);
  };

  const handleEdit = () => {
    const index = localStoreExpenses.findIndex((expense: any) => expense.id === data.id);
    localStoreExpenses[index] = data;
    setLocalStoreExpenses(localStoreExpenses);
    setOpen(false);
  };

  const handleDelete = (id: any) => {
    const filterd = localStoreExpenses.filter((expense: any) => expense.id !== id);
    setLocalStoreExpenses(filterd);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="grow p-4 overflow-y-auto">
          {/* Your Code Starts Here */}
          <div className="w-9/10 lg:w-2/3 mx-auto bg-blue-200 shadow-sm">
            <div className="bg-blue-800 text-white flex items-center p-3 justify-between">
              <p className="text-lg font-bold">Expense Tracker</p>
              {localStoreExpenses.length >= 1 ? (
                <div className="flex justify-center">
                  <button
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    type="button"
                    onClick={() => setOpen(true)}
                  >
                    Add Expense
                  </button>
                </div>
              ) : (
                ''
              )}
            </div>
            <div className="p-3">
              {localStoreExpenses.length >= 1 ? (
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Expense</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {localStoreExpenses.map((expense: any) => {
                      return (
                        <tr key={expense.id}>
                          <td className="p-1 text-center">{expense.id}</td>
                          <td className="p-1 text-center">{expense.name}</td>
                          <td className="p-1 text-center">{expense.date}</td>
                          <td className="p-1 text-center">{expense.amount}</td>
                          <td className="p-1 flex justify-center space-x-2">
                            <div className="bg-green-500 rounded-full p-[6px]">
                              <FiEdit
                                className="text-white"
                                size={16}
                                onClick={() => openEditModal(expense)}
                              />
                            </div>
                            <div className="bg-red-500 rounded-full p-[6px]">
                              <AiOutlineDelete
                                className="text-white"
                                size={16}
                                onClick={() => handleDelete(expense.id)}
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div className="flex justify-center">
                  <button
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    type="button"
                    onClick={() => setOpen(true)}
                  >
                    Add Expense
                  </button>
                </div>
              )}
            </div>
          </div>

          <div
            className={`fixed top-0 left-0 right-0 z-50 ${
              open ? 'flex' : 'hidden'
            } justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
          >
            <div className="relative w-full h-full max-w-2xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Add new Expense
                  </h3>
                  <button
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="extralarge-modal"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    <GrClose />
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  <form className="flex flex-col">
                    <div className="flex space-x-2">
                      <div className="mb-6 w-2/4">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-900"
                          htmlFor="name"
                        >
                          Name of the expense
                        </label>
                        <input
                          required
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-[9px]"
                          id="name"
                          name="name"
                          placeholder="Ex: Travelling expense"
                          type="text"
                          onChange={handleData}
                          value={data ? data.name : ''}
                        />
                      </div>
                      <div className="mb-6 w-1/4">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-900"
                          htmlFor="date"
                        >
                          Date
                        </label>
                        <input
                          required
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          id="date"
                          name="date"
                          placeholder="1000.00"
                          type="date"
                          onChange={handleData}
                          value={data ? data.date : 0}
                        />
                      </div>
                      <div className="mb-6 w-1/4">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-900"
                          htmlFor="amount"
                        >
                          Amount
                        </label>
                        <input
                          required
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          id="amount"
                          name="amount"
                          placeholder="1000.00"
                          type="number"
                          onChange={handleData}
                          value={data ? data.amount : 0}
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        type="button"
                        onClick={handleNewExpense}
                      >
                        Save
                      </button>
                      <button
                        className="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        type="button"
                        onClick={handleEdit}
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default ExpensesTracker;
