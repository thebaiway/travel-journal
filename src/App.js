import './App.css';
import Header from './Components/Header.js'
import Card from './Components/Card.js'
import Data from './Data.js'

function App() {

  const cardData = Data.map(x => {
    return (
      <Card 
      key = {x.id}
      x = {x}
      />
    )
  })

  return (
    <div className="App">
        <Header />
        {cardData}
    </div>
  );
}

export default App;
