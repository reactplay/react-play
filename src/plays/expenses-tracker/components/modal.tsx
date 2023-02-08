import React from 'react';
import { GrClose } from 'react-icons/gr';

interface ModalProps {
  data: any;
  open: boolean;
  isEdit: boolean;
  onClose: (e: any) => void;
  handleData: (e: any) => void;
  handleNewExpense: (e: any) => void;
  handleEdit: (e: any) => void;
}

function Modal({
  data,
  open,
  isEdit,
  onClose,
  handleData,
  handleNewExpense,
  handleEdit
}: ModalProps) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ${
        open ? 'flex' : 'hidden'
      } justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add new Expense</h3>
            <button
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="extralarge-modal"
              type="button"
              onClick={onClose}
            >
              <GrClose />
            </button>
          </div>
          <div className="p-6 space-y-6">
            <form className="flex flex-col">
              <div className="flex space-x-2">
                <div className="mb-6 w-2/4">
                  <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="name">
                    Name of the expense
                  </label>
                  <input
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-[9px]"
                    id="name"
                    name="name"
                    placeholder="Ex: Travelling expense"
                    type="text"
                    value={data ? data.name : ''}
                    onChange={handleData}
                  />
                </div>
                <div className="mb-6 w-1/4">
                  <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="date">
                    Date
                  </label>
                  <input
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    id="date"
                    name="date"
                    placeholder="1000.00"
                    type="date"
                    value={data ? data.date : 0}
                    onChange={handleData}
                  />
                </div>
                <div className="mb-6 w-1/4">
                  <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="amount">
                    Amount
                  </label>
                  <input
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    id="amount"
                    name="amount"
                    placeholder="1000.00"
                    type="number"
                    value={data ? data.amount : 0}
                    onChange={handleData}
                  />
                </div>
              </div>
              <div>
                {isEdit ? (
                  <button
                    className="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    type="button"
                    onClick={handleEdit}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    type="button"
                    onClick={handleNewExpense}
                  >
                    Save
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
