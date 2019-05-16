import React from 'react'
function TopNav(props){
  console.log('this is', props)
  function handleClick(e){
    e.preventDefault();
    props.changeCategory(e.target.id)
  }
  return(
    <div className="top-nav">
      <ul>
        <li><a href="#" id="headlights" onClick={handleClick}>car lights</a></li>
        <li><a href="#" id="tires" onClick={handleClick}>Car wheels</a></li>
        <li><a href="#" id="bumpers" onClick={handleClick}>car bumpers</a></li>
        <li><a href="#" id="audio" onClick={handleClick}>car audiosystem</a></li>
        <li><a href="#" id="bumpers" onClick={handleClick}>Truck bumpers</a></li>
        <li><a href="#" id="engine" onClick={handleClick}>Feedback</a></li>
        <div className="clear"> </div>
      </ul>
    </div>
  )
}
export default TopNav;