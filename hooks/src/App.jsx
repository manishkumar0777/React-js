import { useState, useCallback , useEffect , useRef } from 'react'

import './App.css'

function App() {

  //states -
  const [length , setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //useRef - hook

  const passwordRef = useRef(null);

  //password generator
  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numAllowed) str += '1234567890';
    if(charAllowed) str += '@#$%^&*+_-=';

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length, numAllowed, charAllowed, setPassword]);

  //copying the password
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    generatePassword();
  },[length , numAllowed , charAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
                      rounded-lg px-4 my-8 text-orange-500
                      bg-gray-700'
      >
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='shadow rounded-lg overflow-hidden my-4 flex'>
          <input 
          type='text'
          value={password}
          placeholder='password'
          readOnly
          ref={passwordRef}
          className='outline-none border border-gray-300 w-full py-1 px-3'
          />
          <button
           className='outline-none bg-blue-500 text-white 
                      px-3 py-1 shrink-0 cursor-pointer
                      hover:bg-blue-700 transition duration-200'
           onClick={copyPasswordToClipboard}
           >copy</button>

        </div>
          <div className='flex text-sm gap-x-2 mb-3'>
            <div className="flex items-center gap-x-1">
              <input 
              type='range'
              min={6}
              max={16}
              value={length}
              className='cursor-poniter'
              onChange={(e) => {setLength(e.target.value)}}
              />
              <lable> Length : {length}</lable>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={numAllowed}
                id="numberInput"
                onChange={() => {
                  setNumAllowed((prev) => !prev)
                }}
              />
              <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor='characterInput'>Special Character</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
