import './CategoryModal.css';
import { GiLaptop, GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { SiFacepunch } from 'react-icons/si';

const CategoryModal = ({ categoryModalToggle, fetchJokes, setCategoryModalToggle, setLoading }) => {
  return (
    <>
      {/* -------------------------------------------Category Modal Container------------------------------------------------------*/}
      <div
        className={categoryModalToggle ? 'category-modal-container' : 'hidden'}
        onClick={() => setCategoryModalToggle(false)}
      >
        {/* -------------------------------------------Category Modal------------------------------------------------------*/}
        <div className="category-modal">
          {/* -------------------------------------------Single Category (Coding)------------------------------------------------------*/}
          <div
            className="single-category"
            onClick={() => {
              setLoading(true);
              fetchJokes('Programming');
              setCategoryModalToggle(false);
            }}
          >
            <p>Coding</p>
            <GiLaptop />
          </div>
          {/* -------------------------------------------Single Category (Miscellaneous)------------------------------------------------------*/}
          <div
            className="single-category"
            onClick={() => {
              setLoading(true);
              fetchJokes('Misc');
              setCategoryModalToggle(false);
            }}
          >
            <p>Miscellaneous</p>
            <MdOutlineMiscellaneousServices />
          </div>
          {/* -------------------------------------------Single Category (Pun)------------------------------------------------------*/}
          <div
            className="single-category"
            onClick={() => {
              setLoading(true);
              fetchJokes('Pun');
              setCategoryModalToggle(false);
            }}
          >
            <p>Pun</p>
            <SiFacepunch />
          </div>
          {/* -------------------------------------------Single Category (Random)------------------------------------------------------*/}
          <div
            className="single-category"
            onClick={() => {
              setLoading(true);
              fetchJokes('Any');
              setCategoryModalToggle(false);
            }}
          >
            <p>Random</p>
            <GiPerspectiveDiceSixFacesRandom />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryModal;
