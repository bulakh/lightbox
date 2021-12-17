import React from 'react';

function App() {
  const colors = ['green', 'black', 'yellow', 'grey', 'blue', 'tomato', 'plum', 'orange', 'purple', 'wheat'];


  return (
    <>
      <h1>Images</h1>
      <ul style={{listStyle: 'none', padding: '0', display: 'flex', gap: '19px', flexWrap: 'wrap'}}>
        {colors.map(color => (
          <li key={color} style={{height: '137px', width: '137px', background: color, borderRadius: '5px'}}></li>
        ))}
      </ul>
      <section>

      </section>
    </>
  );
}

export default App;
