import React from 'react'

function Pallete({setColor}) {

    // - all colors
    const colors = [
        {
            name : 'Black',
            color : 'black'
        },
        {
            name : 'Blue',
            color : 'blue'
        },
        {
            name : 'Red',
            color : 'red'
        },
        {
            name : 'Green',
            color : 'green'
        },
    ]
  return (
    <div>
        {colors.map((item) => {
            return <button 
                        className='text-white rounded-xl px-2 justify-center my-2 mx-2'
                        style={{backgroundColor : item.color}} 
                        key={item.name}
                        onClick={() => setColor(item.color)}
                    >{item.name}</button>
        })}
    </div>
  )
}

export default Pallete