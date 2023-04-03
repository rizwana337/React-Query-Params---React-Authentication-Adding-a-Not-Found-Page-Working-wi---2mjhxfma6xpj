import React from 'react';
import '../styles/App.css';

const App = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');
  const name = queryParams.get('name');
  const designation = queryParams.get('designation');

  return (
    <div className="details">
      Employee {id} named {name} works as {designation}.
    </div>
  );
};

export default App;



// import React from 'react'
// import '../styles/App.css';

// const App = () => {
//   //Write your code here
// }

// export default App;
