// // src/components/HomePage.js
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const PageContainer = styled.div`
//   background-color: ${(props) => props.theme.backgroundColor};
//   color: ${(props) => props.theme.textColor};
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const ThemeSwitcherContainer = styled.div`
//   margin: 20px;
// `;

// const HomePage = () => {
//   const [currentTheme, setCurrentTheme] = useState('light');

//   const themeOptions = ['light', 'dark'];

//   const changeTheme = (e) => {
//     setCurrentTheme(e.target.value);
//   };

//   return (
//     <PageContainer theme={{ backgroundColor: currentTheme === 'dark' ? '#333' : '#fff', textColor: currentTheme === 'dark' ? '#fff' : '#333' }}>
//       <h1>Welcome to the Home Page</h1>

//       <ThemeSwitcherContainer>
//         <label htmlFor="themeSelect">Select Theme:</label>
//         <select id="themeSelect" value={currentTheme} onChange={changeTheme}>
//           {themeOptions.map((theme) => (
//             <option key={theme} value={theme}>
//               {theme}
//             </option>
//           ))}
//         </select>
//       </ThemeSwitcherContainer>
//     </PageContainer>
//   );
// };

// export default HomePage;


import React, { useState } from 'react';

const Homepage = () => {
  const [themeColor, setThemeColor] = useState('blue');

  const changeThemeColor = (color) => {
    setThemeColor(color);
  };

  return (
    <div style={{ backgroundColor: themeColor === 'dark' ? '#333' : '#fff', color: themeColor === 'dark' ? '#fff' : '#000', minHeight: '100vh', padding: '20px' }}>
      <h1>Welcome to our Website</h1>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: 0 }}>
          <li style={{ margin: '0 10px' }}><button onClick={() => changeThemeColor('dark')}>Home</button></li>
          <li style={{ margin: '0 10px' }}><button onClick={() => changeThemeColor('dark')}>About Us</button></li>
          <li style={{ margin: '0 10px' }}><button onClick={() => changeThemeColor('dark')}>Contact Us</button></li>
        </ul>
      </nav>
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="theme-color">Change Theme Color:</label>
        <select id="theme-color" onChange={(e) => changeThemeColor(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>

  );
};

export default Homepage;
