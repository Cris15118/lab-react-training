
function Random() {
    const randomNumber = Math.floor(Math.random()*(6 -1)+ 1)
    const randomNumber2 = Math.floor(Math.random()*(100 -1)+ 1)
    
  return (

    
    <div >
      <p className="random">Random value between 1 and 6 = {randomNumber}</p>
      <p className="random">Random value between 1 and 100 = {randomNumber2}</p>
    </div>
  )
}

export default Random