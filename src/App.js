import React from 'react'
import QuestionField from './components/QuestionField';

function App() {

  const style = {
    app: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000'
    }
  }

  return (
    <div className="App" style={style.app}>
      <QuestionField />
    </div>
  );
}

export default App;
