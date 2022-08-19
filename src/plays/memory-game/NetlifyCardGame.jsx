import PlayHeader from "common/playlists/PlayHeader";
import { useState, useEffect, useRef } from "react";

// css
import "./NetlifyCardGame.scss";

// components
import Modal from "./modal";

import q1 from "./icons/q1.png";
import q2 from "./icons/q2.png";
import q3 from "./icons/q3.png";
import q4 from "./icons/q4.png";
import q5 from "./icons/q5.png";
import q6 from "./icons/q6.png";
import q7 from "./icons/q7.png";
import q8 from "./icons/q8.png";

const imgArr = [q1, q2, q3, q4, q5, q6, q7, q8];

const initialState = {
  moves: 0,
  time: 0,
  elapsedTime: 0,
};

function NetlifyCardGame(props) {

  // Your Code Start below.
  // static 16 images with 2 duplicate image
  const imgArray = useRef(imgArr.concat(imgArr));

  // dynamic 16 images after shuffling
  const [newImgArray, setNewImgArray] = useState([]);

  // board staticstics
  const [boardStats, setBoardStats] = useState({ ...initialState });

  // duplicate array without matched images
  const duplicateImgArray = useRef([]);

  // disabled click while updating state if taking time
  const disableClick = useRef(false);

  // show guidence modal
  const [showModal, setShowModal] = useState(false);

  const toggle = (e) => {
    setShowModal(!showModal);
  };

  // timer ref
  const timer = useRef(null);

  // matched objects on the board
  const [matchedItems, setMatchedItems] = useState([]);

  // shuffling actuall work is done by this function
  const shufflingArray = () => {
    const shuffledArray = imgArray.current.sort(() => Math.random() - 0.5);
    return shuffledArray.map((item, index) => ({
      img: item,
      id: index,
      show: false,
    }));
  };

  // shuffling function exteranally to manage "Play Again Button Click"
  const shuffle = () => {
    const shuffledArray = shufflingArray();
    duplicateImgArray.current = shuffledArray;
    setNewImgArray(shuffledArray);
  };

  const shuffling = useRef(shuffle);

  useEffect(() => {
    shuffling.current(); // shuffle at first reload
  }, [shuffling]);

  useEffect(() => {
    if (boardStats.time !== 0 && matchedItems.length < 8) {
      // starts timer when user clicks
      const secondCalculations = setInterval(() => {
        const calcSeconds = new Date().getTime() - boardStats.time.getTime();
        setBoardStats((pre) => ({ ...pre, elapsedTime: calcSeconds / 1000 }));
      }, 1000);

      return () => clearInterval(secondCalculations); // after upateing every second we have to clean the event listener
    }
  }, [boardStats.time, matchedItems.length]);

  const boxClickHandler =
    ({ id, img }) =>
    () => {
      const currentlyShownItem = duplicateImgArray.current.find(
        (i) => i.show === true
      ); // if false means no active item
      if (currentlyShownItem?.id === id) return; // if same item clicked again
      if (matchedItems.some((i) => i.img === img)) return;

      // count the moves and set current time of the first move is done
      setBoardStats({
        ...boardStats,
        time: boardStats?.moves === 0 ? new Date() : boardStats.time,
        moves: boardStats.moves + 1,
      });

      // clicked item image pair
      const imageItems = newImgArray.filter((i) => i.img === img);
      if (currentlyShownItem) {
        // checking if clicked item img is same as active item img
        const findPair = imageItems.find(
          (i) => i.img === currentlyShownItem.img
        );
        if (!findPair) {
          // if not same, then find the item from the main array
          const findClickedItem = imageItems.find((i) => i.id === id);
          findClickedItem.show = true; // need to display it for sometime
          const updatedItemList = newImgArray.map((i) =>
            i.id === findClickedItem.id ? findClickedItem : i
          );
          setNewImgArray(updatedItemList); // updating the main array coz we need to show a glimpse of the clicked item
          disableClick.current = true; // while rage clicking state update taking time so we need to disable click
          return timeOutCall(findClickedItem, currentlyShownItem); // timeout will hide the item after 1 second
        } else {
          // if user clicks the same imgage of the active image then we find which one is clicked specefically by id this time
          disableClick.current = true; // disable the click
          const otherPair = imageItems.find(
            (i) => i.id !== currentlyShownItem.id
          ); // searching for same image other object
          otherPair.show = true; // have to render it
          const updatedItemList = newImgArray.map((i) =>
            i.id === otherPair.id ? otherPair : i
          ); // updated array maintaining the index
          duplicateImgArray.current = updatedItemList.filter(
            (i) => i.show === false
          ); // updating the duplicate array
          setNewImgArray(updatedItemList); // updating the main object
          setMatchedItems([...matchedItems, findPair]);
          disableClick.current = false;
        }
      } else {
        const findClickedItem = newImgArray.find((i) => i.id === id);
        findClickedItem.show = true;
        const updatedArray = newImgArray.map((i) =>
          i.id === findClickedItem.id ? findClickedItem : i
        );
        setNewImgArray(updatedArray);
      }
    };

  const timeOutCall = (clickedItem, activeItem) => {
    return (timer.current = setTimeout(() => {
      clickedItem.show = false;
      if (activeItem) {
        activeItem.show = false; // for the first time when user clicks the current object can be undefined so have to check it
      }
      const updatedArray = newImgArray.map((i) => {
        if (i.id === clickedItem.id) {
          return clickedItem;
        } else if (activeItem && i.id === activeItem?.id) {
          return activeItem;
        } else {
          return i;
        }
      });
      disableClick.current = false;
      setNewImgArray(updatedArray);
      clearTimeout(timer.current);
    }, 1500));
  };

  const resetHandler = () => {
    // resetting the entire game
    setBoardStats({ ...initialState });
    setMatchedItems([]);
    shuffle();
  };

  const calculateMerit = () => {
    const time = Math.floor(boardStats?.elapsedTime);
    if (time <= 40) {
      return "Execelent";
    } else if (time > 40 && time <= 60) {
      return "Good";
    } else {
      return "Average";
    }
  };

  return (
    <>
      <div className='play-details'>
        <PlayHeader play={props} />
        <div className='play-details-body memory-game'>
          {/* Your Code Starts Here */}
          <h2 className='guide' onClick={toggle}>
            How to Play?
          </h2>
          <div className='container'>
            <div className='game-body'>
              {newImgArray.map((item, idx) => {
                return (
                  <div
                    onClick={
                      !disableClick.current
                        ? boxClickHandler({ ...item, id: idx })
                        : null
                    }
                    key={item?.img + idx}
                    className='item'
                  >
                    <div
                      className={`img-container ${
                        item?.show ? "shown" : "hidden"
                      }`}
                    >
                      <img src={item?.img} className='item-img' alt='img' />
                    </div>
                  </div>
                );
              })}
              <div className='footer'>
                <p>Moves: {boardStats.moves}</p>
                <p>
                  Elapsed Time: {Math.floor(boardStats.elapsedTime)} Seconds
                </p>
                {matchedItems.length === 8 && (
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    Congrats! {calculateMerit()} Performance
                  </p>
                )}
                <button className='reset' onClick={resetHandler}>
                  Reset
                </button>
              </div>
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
      <Modal toggle={toggle} showModal={showModal} />
    </>
  );
}

export default NetlifyCardGame;
