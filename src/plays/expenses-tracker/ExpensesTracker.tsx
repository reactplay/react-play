/* eslint-disable react/jsx-sort-props */
import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import PlayHeader from 'common/playlists/PlayHeader';
import useLocalStorage from 'common/hooks/useLocalStorage';
import Modal from './components/modal';

function ExpensesTracker(props: any) {
  const [localStoreExpenses, setLocalStoreExpenses] = useLocalStorage('et-expenses', []);
  const [localStoreTotal, setLocalStoreTotal] = useLocalStorage('et-total', 0);

  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleData = (e: { target: { name: string; value: string } }) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleNewExpense = () => {
    const expense = localStoreExpenses[localStoreExpenses.length - 1];
    data['id'] = expense !== undefined ? parseInt(expense.id) + 1 : 1;
    setLocalStoreExpenses([...localStoreExpenses, data]);
    setLocalStoreTotal(parseFloat(localStoreTotal) + parseFloat(data.amount));
    setOpen(false);
    setData(null);
  };

  const openEditModal = (expenseEdit: any) => {
    setIsEdit(true);
    setData(expenseEdit);
    setOpen(true);
  };

  const handleEdit = () => {
    const index = localStoreExpenses.findIndex((expense: any) => expense.id === data.id);
    const oldAmount: number = parseFloat(localStoreExpenses[index].amount);
    const newAmount: number = parseFloat(data.amount);
    setLocalStoreTotal(localStoreTotal - oldAmount + newAmount);
    localStoreExpenses[index] = data;
    setLocalStoreExpenses(localStoreExpenses);
    setOpen(false);
    setData(null);
  };

  const handleDelete = (expenseObj: any) => {
    const filterd = localStoreExpenses.filter((expense: any) => expense.id !== expenseObj.id);
    setLocalStoreExpenses(filterd);
    setLocalStoreTotal(localStoreTotal - parseFloat(expenseObj.amount));
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="grow p-4 overflow-y-auto">
          <div className="w-9/10 lg:w-2/3 mx-auto bg-blue-200 shadow-sm">
            <div className="bg-blue-800 text-white flex items-center p-3 justify-between">
              <p className="text-lg font-bold">Expense Tracker</p>
              {localStoreExpenses.length >= 1 ? (
                <div className="flex justify-center">
                  <button
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    type="button"
                    onClick={() => {
                      setOpen(true);
                      setIsEdit(false);
                    }}
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
                <>
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
                                  onClick={() => handleDelete(expense)}
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="font-bold text-2xl">{`Total: ${localStoreTotal}`}</div>
                </>
              ) : (
                <div className="flex justify-center">
                  <button
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    type="button"
                    onClick={() => {
                      setOpen(true);
                      setIsEdit(false);
                    }}
                  >
                    Add Expense
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        data={data}
        open={open}
        handleData={handleData}
        handleNewExpense={handleNewExpense}
        handleEdit={handleEdit}
        onClose={() => setOpen(false)}
        isEdit={isEdit}
      />
    </>
  );
}

export default ExpensesTracker;
