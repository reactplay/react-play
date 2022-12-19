import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { useEffect } from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";

// WARNING: Do not change the entry componenet name
function ShortestPathfindingVisualizer(props) {

  // Your Code Start below.
  useEffect(() => {
    const rows = document.getElementsByTagName("tr");
    let startRow; //row index for start node
    let startCol; //column index for start node
    let destRow; //row index for destination node
    let destCol; //column index for destination node

    //each table cell holds a button
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < rows[i].getElementsByTagName("td").length; j++) {
        rows[i].getElementsByTagName("td")[
          j
        ].innerHTML = `<button class="cell-btn" value = 500000></button>`;
      }
    }

    let count = 0; //to distinguish start, end and block nodes
    let path = new Array(); //holds the shortest path (all nodes falling in it)
    let min_heap = new Map(); //used in Dijkstra method to get nearest node(which has smallest value)
    //everytime, behaves like a min heap hence the name, implemented using a map

    const btn = document.getElementsByClassName("cell-btn"); //get all buttons/table cells

    //for each button event listener added so as to create start, end and block nodes
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", () => {
        if (count == 0) {
          //start node
          btn[i].style.backgroundColor = "green";
          btn[i].value = 0;

          for (let j = 0; j < rows.length; j++) {
            //get row and column index for this particular button
            for (
              let k = 0;
              k < rows[j].getElementsByTagName("td").length;
              k++
            ) {
              if (i == j * rows[j].getElementsByTagName("td").length + k) {
                startRow = j;
                startCol = k;
                path.push([startRow, startCol]);
                break;
              }
            }
          }
          count++;
        } else if (count == 1) {
          //end node
          btn[i].style.backgroundColor = "red";
          for (let j = 0; j < rows.length; j++) {
            for (
              let k = 0;
              k < rows[j].getElementsByTagName("td").length;
              k++
            ) {
              if (i == j * rows[j].getElementsByTagName("td").length + k) {
                destRow = j;
                destCol = k;
                break;
              }
            }
          }
          count++;
        } else {
          //block nodes
          btn[i].style.backgroundColor = "var(--grid)";
          btn[i].value = "-1";
        }
      });
    }

    function isArrayInArray(arr, item) {
      var item_as_string = JSON.stringify(item);

      var contains = arr.some(function (ele) {
        return JSON.stringify(ele) === item_as_string;
      });
      return contains;
    }

    //called for each visited node (delay of 10 ms between each consecutive animation)
    const colorizeFindingPath = (sr, sc, t) => {
      btn[
        sr * rows[0].getElementsByTagName("td").length + sc
      ].style.animation = `findColor 1s ease-in-out ${t}ms 1 forwards`;
    };

    //called for visualising the shortest path
    const colorizePath = (t = 0) => {
      if (document.getElementsByTagName("select")[0].value != 2) {
        for (let i = 0; i < path.length; i++) {
          let r = path[i][0];
          let c = path[i][1];
          btn[
            r * rows[0].getElementsByTagName("td").length + c
          ].style.animation = `pathColor 1s ease-in-out ${t}ms 1 forwards`;
          t += 10;
        }
      } else {
        for (let i = path.length - 1; i > -1; i--) {
          let r = path[i][0];
          let c = path[i][1];
          btn[
            r * rows[0].getElementsByTagName("td").length + c
          ].style.animation = `pathColor 1s ease-in-out ${t}ms 1 forwards`;
          t += 100;
        }
      }
    };

    let time = 10; //in ms

    const dfs = (sr, sc) => {
      if (sr == destRow && sc == destCol) {
        return true;
      }
      if (
        sr - 1 != -1 &&
        btn[(sr - 1) * rows[0].getElementsByTagName("td").length + sc].value !=
          "-1" &&
        isArrayInArray(path, [sr - 1, sc]) == false
      ) {
        path.push([sr - 1, sc]);
        colorizeFindingPath(sr - 1, sc, time);
        time += 10;
        let res = dfs(sr - 1, sc);
        if (res == true) {
          return true;
        }
      }
      if (
        sc + 1 != rows[0].getElementsByTagName("td").length &&
        btn[sr * rows[0].getElementsByTagName("td").length + (sc + 1)].value !=
          "-1" &&
        isArrayInArray(path, [sr, sc + 1]) == false
      ) {
        path.push([sr, sc + 1]);
        colorizeFindingPath(sr, sc + 1, time);
        time += 10;
        let res = dfs(sr, sc + 1);
        if (res == true) {
          return true;
        }
      }
      if (
        sr + 1 != rows.length &&
        btn[(sr + 1) * rows[0].getElementsByTagName("td").length + sc].value !=
          "-1" &&
        isArrayInArray(path, [sr + 1, sc]) == false
      ) {
        path.push([sr + 1, sc]);
        colorizeFindingPath(sr + 1, sc, time);
        time += 10;
        let res = dfs(sr + 1, sc);
        if (res == true) {
          return true;
        }
      }
      if (
        sc - 1 != -1 &&
        btn[sr * rows[0].getElementsByTagName("td").length + (sc - 1)].value !=
          "-1" &&
        isArrayInArray(path, [sr, sc - 1]) == false
      ) {
        path.push([sr, sc - 1]);
        colorizeFindingPath(sr, sc - 1, time);
        time += 10;
        let res = dfs(sr, sc - 1);
        if (res == true) {
          return true;
        }
      }

      path.pop(); //removes last element from array
      return false;
    };

    let parent = new Map(); //to hold parent node of a node(neighbor)
    //when its value gets updated with a smaller value according to dijkstra function

    //initialise min_heap with all nodes with their respective values except blocks
    function setMaps() {
      for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[0].getElementsByTagName("td").length; j++) {
          if (
            btn[i * rows[0].getElementsByTagName("td").length + j].value != "-1"
          ) {
            min_heap.set(
              `[${i}, ${j}]`,
              btn[i * rows[0].getElementsByTagName("td").length + j].value
            );
          }
        }
      }
    }

    //get key of the entry with smallest value
    function getByValue(searchValue) {
      for (let [key, value] of min_heap.entries()) {
        if (value == searchValue) return key;
      }
    }

    //push all shortest path nodes in path array by getting parents of each node starting from end node
    function findAllAncestors(arr) {
      let p = parent.get(arr);
      if (p != undefined) {
        path.push(p);
        findAllAncestors(`[${p[0]}, ${p[1]}]`);
      }
    }

    const dijkstra = () => {
      while (min_heap.size != 0) {
        let min = Math.min(...min_heap.values()); //min value
        let min_key = getByValue(min); //returns key of string type
        let min_key_parsed = JSON.parse(min_key); //parse to get object from string

        if (min_key !== `[${destRow}, ${destCol}]`) {
          colorizeFindingPath(min_key_parsed[0], min_key_parsed[1], time);
          time += 10;

          //updating values of neighbors

          if (min_key_parsed[0] - 1 != -1) {
            if (
              min_heap.get(min_key) + 1 <
              min_heap.get(`[${min_key_parsed[0] - 1}, ${min_key_parsed[1]}]`)
            ) {
              min_heap.set(
                `[${min_key_parsed[0] - 1}, ${min_key_parsed[1]}]`,
                parseInt(min_heap.get(min_key)) + 1
              );
              parent.set(
                `[${min_key_parsed[0] - 1}, ${min_key_parsed[1]}]`,
                min_key_parsed
              );
            }
          }

          if (min_key_parsed[0] + 1 != rows.length) {
            if (
              min_heap.get(min_key) + 1 <
              min_heap.get(`[${min_key_parsed[0] + 1}, ${min_key_parsed[1]}]`)
            ) {
              min_heap.set(
                `[${min_key_parsed[0] + 1}, ${min_key_parsed[1]}]`,
                parseInt(min_heap.get(min_key)) + 1
              );
              parent.set(
                `[${min_key_parsed[0] + 1}, ${min_key_parsed[1]}]`,
                min_key_parsed
              );
            }
          }

          if (min_key_parsed[1] - 1 != -1) {
            if (
              min_heap.get(min_key) + 1 <
              min_heap.get(`[${min_key_parsed[0]}, ${min_key_parsed[1] - 1}]`)
            ) {
              min_heap.set(
                `[${min_key_parsed[0]}, ${min_key_parsed[1] - 1}]`,
                parseInt(min_heap.get(min_key)) + 1
              );
              parent.set(
                `[${min_key_parsed[0]}, ${min_key_parsed[1] - 1}]`,
                min_key_parsed
              );
            }
          }

          if (
            min_key_parsed[1] + 1 !=
            rows[0].getElementsByTagName("td").length
          ) {
            if (
              min_heap.get(min_key) + 1 <
              min_heap.get(`[${min_key_parsed[0]}, ${min_key_parsed[1] + 1}]`)
            ) {
              min_heap.set(
                `[${min_key_parsed[0]}, ${min_key_parsed[1] + 1}]`,
                parseInt(min_heap.get(min_key)) + 1
              );
              parent.set(
                `[${min_key_parsed[0]}, ${min_key_parsed[1] + 1}]`,
                min_key_parsed
              );
            }
          }

          //delete current key since updated all its neighbors
          min_heap.delete(min_key);
        } else {
          //found end node, stop searching, push nodes to path array

          path.push([destRow, destCol]);
          findAllAncestors(`[${destRow}, ${destCol}]`);
          colorizePath(); //visualise it
          min_heap.clear(); //clear min_heap to end loop
        }
      }
    };

    //button that calls respective algorithms depending on select option chosen
    const visual_btn = document.getElementsByClassName("visualise")[0];

    visual_btn.addEventListener("click", function () {
      let opt = document.getElementsByTagName("select")[0].value;

      if (opt == 1) {
        //option 1
        //DFS
        dfs(startRow, startCol);
        colorizePath();
      } else if (opt == 2) {
        //option 2
        //Dijkstra
        setMaps();
        dijkstra();
      }
    });
  }, []);
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
        {/* Your Code Starts Here */}
        <div style={{ display: "flex", flexDirection: "column"}}>
          <Header />
          <Grid />
        </div>
        {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default ShortestPathfindingVisualizer;