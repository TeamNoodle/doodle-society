import React, { useState } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
const moment = require('moment');

const LikeButton = () => {
  const [toggleState, setToggleState] = useState("off");

  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }
  return <div className={`switch ${toggleState}`} onClick={toggle} />;
}

const Home = ({user, doods, friends }) => {

const orderDoods = () => {
  const allDoods = [];
  Object.values(doods).forEach(doodColl => {
    doodColl.forEach(dood => allDoods.push(dood));
  });
  allDoods.sort((a, b) => a.created_at > b.created_at ? -1 : 1);
  return allDoods;
}

  return (
  <div className="Home">
<<<<<<< HEAD
    <div class="header">
        <a href="#default" className="logo">Doodle Society</a>
          <div class="header-right">
            <a className="active" href="/Home">Home</a>
            {/* need to add user image somehow */}
            <a href="#signout">Sign Out</a> 
            <img class="example" src={user.imageurl} />
          </div>
      </div>
      <h2>Feed</h2>
      <div class="row">
        <div class="side">
=======
    <div className="header">
        <div className="logo">Feed</div>
          <div className="header-right">
            <img className="example" src={user.imageurl} alt="" />
          </div>
      </div>
      <div className="row">
        <div className="side">
>>>>>>> 80f2c5b41b9770bc0c5f08b90e31ba0b8eb54a2d
      </div>
      <div className="main">
      {orderDoods().map(dood => {
          const doodler = dood.username === user.name ? user : 
          friends.filter(friend => friend.name === dood.username)[0];
          return (
            <div className="feed-doodle-container" key={dood.username + dood.id}>
              <img className="feed-doodle" src={dood.url} alt="" />
              <img className="feed-bg-image" src={dood.original_url} alt="" />
              <LikeButton />
              <p align="justify">
                <Link className="userName" to={{
                  pathname: '/profile',
                  user: doodler,
                }}>
                  {dood.username + ':'}
                </Link>
              </p>
             <p align="justify"><font className="caption">{dood.caption}</font></p>
             <p align="justify"><font className="createdAt">{moment(dood.created_at).startOf('minute').fromNow()}</font></p>
            </div>
          )
        })}  
      </div>
    </div>
  </div>

)};
export default Home;