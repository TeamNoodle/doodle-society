import React from 'react';
import './Main.css';
// <Route path="/Home" component={Main} />
// <Link to="/Home">Home</Link>
const Home = () => (
  <div className="Home">
    <div class="header">
        <a href="#default" class="logo">Doodle Society</a>
          <div class="header-right">
            <a class="active" href="/Home">Home</a>
            {/* need to add user image somehow */}
            <a href="#signout">Sign Out</a> 
            <img class="example" src="https://i.postimg.cc/KjLrdMQ0/0896a34002fd272037c30d52d4736264.png" />
          </div>
      </div>
      <h2>Feed</h2>
      <div class="row">
        <div class="side">
      </div>
      <div class="main">
        <h6><font color="black">Doodle</font></h6>
        <div class="fakeimg" style={{height: 200}} >Image
        </div>
          <p align="justify"><font size="3" color="black">Username</font></p>
          <h6><font color="black">Doodle</font></h6>
        <div class="fakeimg" style={{height: 200}} >Image</div>
          <p align="justify"><font size="3" color="black">Username</font></p>
        </div>
    </div>
    <body>
    </body>
  </div>

);
export default Home;