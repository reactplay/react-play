import { AiFillCloseSquare } from 'react-icons/ai';

function Form({ toggleForm, setToggleForm, handleSubmit, handleChange, note }) {
  return (
    <div
      className={
        !toggleForm
          ? 'w-full h-screen mx-auto flex justify-center items-center absolute top-[-200%] left-0 right-0 bg-[#5756564f] z-10'
          : 'w-full h-screen mx-auto flex justify-center items-center absolute top-0 bg-[#5756564f] z-10'
      }
    >
      <form
        className="flex justify-start flex-col bg-gray-50 px-5 py-10 rounded-md relative"
        onSubmit={handleSubmit}
      >
        <label className="pb-2" htmlFor="body">
          Write note:
        </label>
        <textarea
          required
          className="border-2 border-gray-300 p-2 rounded block"
          cols="25"
          id=""
          name="body"
          placeholder="Note"
          rows="5"
          value={note}
          onChange={handleChange}
        />

        <label className="pt-4 pb-2" htmlFor="bg">
          Choose a color:
        </label>
        <select className="p-2" name="bg" onChange={handleChange}>
          <option value="bg-yellow-300">Yellow</option>
          <option value="bg-blue-300">Blue</option>
          <option value="bg-red-300">Red</option>
          <option value="bg-purple-400">Purple</option>
        </select>
        <button className="p-4 bg-blue-600 text-white mt-3 rounded" type="submit">
          Save
        </button>

        <div
          className="absolute top-2 right-5 text-xl font-bold text-red-400 cursor-pointer"
          onClick={() => setToggleForm(!toggleForm)}
        >
          <AiFillCloseSquare size={30} />
        </div>
      </form>
    </div>
  );
}

export default Form;
