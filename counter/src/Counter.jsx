import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [error,setError]=useState("")

  const handleIncrease=()=>{
    setCount(count+1)
  }
  const handleDecrease=()=>{
    setCount(count-1)
  }

  const handleReset=()=>{
    setCount(0)
    setMinValue(0)
    setMaxValue(10)
  }

  const handleMinChange=(e)=>{
    const value= Number(e.target.value)

    setMinValue(value)

    if(value>maxValue){
      setError('Min value should be less than Max value')
    }
    else{
      setError('')
    }
  }

  const handleMaxChange=(e)=>{
    const value= Number(e.target.value)

    setMaxValue(value)

    if(minValue>value){
      setError('Min value should be less than Max value')
    }
    else{
      setError('')
    }
  }
  return (
    <div className=" bg-gray-100 min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <h1 class="text-2xl font-bold text-center mb-6 text-gray-800">
          Counter
        </h1>

        <div class="flex items-center justify-between mb-6">
          <div class="w-1/3">
            <label
              for="minValue"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Min Value
            </label>
            <input
              
              id="minValue"
              value={minValue}
              onChange={handleMinChange}
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="w-1/3 px-4">
            <div
              class="text-5xl font-bold text-center text-gray-800"
              id="counterValue"
            >
              {count}
            </div>
          </div>

          <div class="w-1/3">
            <label
              for="maxValue"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Max Value
            </label>
            <input
             
              id="maxValue"
              value={maxValue}
              onChange={handleMaxChange}
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div class="flex space-x-4">
          <button
            id="decreaseBtn"
            
            class="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-md disabled:bg-red-300 disabled:cursor-not-allowed transition-colors cursor-pointer"
            onClick={handleDecrease}
            disabled={count<=minValue}
          >
            Decrease
          </button>

          <button
            id="resetBtn"
            onClick={handleReset}
            class="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            Reset
          </button>

          <button
            id="increaseBtn"
            onClick={handleIncrease}
            disabled={count>=maxValue}
            class="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md disabled:bg-green-300 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
