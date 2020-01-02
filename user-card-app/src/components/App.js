import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { ReactReduxContext } from 'react-redux';
import './App.css';
import { Introduction } from './Introduction';
import { UserDetail } from './UserDetail';
import { changeJob } from '../actions';
// import { store } from '../store';

// function useSelector(selector) {
//   const { store } = useContext(ReactReduxContext);
//   const [result, setResult] = useState(selector(store.getState()));
//   useEffect(() => {
//     const unsubscribe = store.subscribe(() => {
//       const newResult = selector(store.getState());
//       if (newResult !== result) {
//         setResult(newResult);
//       }
//     })
//     return unsubscribe;
//   }, []);
//   return result;
// }

// function useDispatch() {
//   const { store } = useContext(ReactReduxContext);
//   return store.dispatch;
// }

function App() {
    const [newJob, setNewJob] = useState('');
    const { url, text } = useSelector(state => state.photo);
    const { job, hobby } = useSelector(state => state.introduction);
    const { name, location } = useSelector(state => state.detail);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <div className="Card">
                <div className="Photo">
                    <img src={url} alt={text} />
                </div>
                <div className="Detail">
                    <Introduction label="I am" text={job} />
                    <Introduction label="I like" text={hobby} />
                    <hr className="Divider" />
                    <UserDetail label="Name:" text={name} />
                    <UserDetail label="Location:" text={location} />
                </div>
            </div>
            <input type="text" onChange={e => setNewJob(e.target.value)} value={newJob} />
            <button
                onClick={() => {
                    dispatch(changeJob(newJob))
                }}
            >
                Change Job
            </button>
        </div>
    );
}

// HOC
// function App(props) {
//   const {
//       photo: { url, text },
//       introduction: { job, hobby },
//       detail: { name, location },
//       changeJob
//   } = props;
//   return (
//       <div className="App">
//           <div className="Card">
//               <div className="Photo">
//                   <img src={url} alt={text} />
//               </div>
//               <div className="Detail">
//                   <Introduction label="I am" text={job} />
//                   <Introduction label="I like" text={hobby} />
//                   <hr className="Divider" />
//                   <UserDetail label="Name:" text={name} />
//                   <UserDetail label="Location:" text={location} />
//               </div>
//           </div>
//           <button onClick={changeJob}>Change Job</button>
//       </div>
//   );
// }
// const mapStateToProps = state => {
//     return {
//         photo: state.photo,
//         introduction: state.introduction,
//         detail: state.detail
//     };
// };

// const mapDispatchToProps = {
//   changeJob
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
