import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import Todo from './component/Todo';

// WARNING: Do not change the entry componenet name
function TodoApp(props) {
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <Todo /> 
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TodoApp;
