import React from 'react';

import GlobalStyles from './styles/Globalstyles';
import Section from './components/Section';
import Data from './data/index';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';

function App() {
  return (
    <>
      <Section 
        variant='blue'
        title={Data[0].title}
        description={Data[0].description}
      />
      
      <Section 
        variant='beige'
        title={Data[1].title}
        description={Data[1].description}
      />
      
      <Section 
        variant='blue'
        title={Data[2].title}
        description={Data[2].description}
      />
      
      <Section 
        variant='white'
        title={Data[3].title}
        description={Data[3].description}
      />

      <Section 
        variant='black'
        title={Data[0].title}
        description={Data[0].description}
      />

      <SideMenu>
        <MenuForm />
      </SideMenu>

      <GlobalStyles />
      
    </>
  );
}

export default App;
