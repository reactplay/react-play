export default function Header() {
  return (
    <div className="header">
      <div className="nav">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <h1>Pathfinding Visualizer</h1>
          <select>
            <option selected value="1">
              Depth First Search
            </option>
            <option value="2">Dijkstra</option>
          </select>
        </div>
        <button className="visualise">Visualize</button>
      </div>
      <div className="info-header">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: 'green',
              marginRight: '20px'
            }}
          />
          Start Node
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: 'red',
              marginRight: '20px'
            }}
          />
          End Node
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: 'var(--grid)',
              marginRight: '20px'
            }}
          />
          Block/Wall Node
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: 'var(--bg)',
              marginRight: '20px'
            }}
          />
          Visited Node
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: 'var(--path)',
              marginRight: '20px'
            }}
          />
          Shortest path Node
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p className="note">Click on 'Visualize' to see the algorithm come alive!</p>
      </div>
    </div>
  );
}
