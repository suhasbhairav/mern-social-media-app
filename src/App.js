
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import { getPosts } from './actions/posts';
import Posts from './components/Posts';
function App() {

  const dispatch = useDispatch();  
  const posts = useSelector(state => state.posts);
  const [count, setCount] = useState(posts.length);
  useEffect(() => {
    console.log('app.js');
    dispatch(getPosts()); 
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Social Media App</h1>
      <div>
        {count}
        <Posts/>
      </div>
    </div>
  );
}

export default App;
