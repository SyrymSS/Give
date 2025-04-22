import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to Give From and To</h1>
      <p>
        This website is all about sharing and giving. Whether you're looking to give something
        meaningful or receive something special, you're in the right place.
      </p>
      <form style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Your Name:
            <input type="text" placeholder="Enter your name" style={{ marginLeft: '10px' }} />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            What would you like to give or receive?
            <input type="text" placeholder="Describe here" style={{ marginLeft: '10px' }} />
          </label>
        </div>
        <button type="submit" style={{ padding: '5px 15px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));