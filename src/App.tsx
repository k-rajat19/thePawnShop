import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
      return setCount(count + 1);
  }

  const renderSkeleton = () => {

  }

  
  const render = () => {
    
  return (
      <div>
          <button onClick={onClickHandler}>Increment Count</button>
          <div> {count} </div>
      </div>
    )
  }


  return render();
}



export default App
