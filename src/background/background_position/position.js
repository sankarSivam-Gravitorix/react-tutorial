import React from 'react';

const Position = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://tse1.mm.bing.net/th?id=OIP.wws10HjvIjgxftCQSJ5c9AHaDt&pid=Api&P=0&h=180')",
        backgroundPosition: 'top ',      // 50% from left, 50% from top (centered)
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '600px',
        width: '60%',
        marginLeft:'20px'
      }}
    >
      <h2 style={{ color: 'black', padding: '20px' }}>background-position</h2>
    </div>
  );
};

export default Position;

// background-position: 
//  percentage | length | left | center | right 
