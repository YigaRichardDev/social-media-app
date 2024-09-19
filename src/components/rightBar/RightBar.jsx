import React from 'react'
import './rightBar.scss'

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        {/* Ssugestions for you  */}
        <div className="item">
          <span>Ssugestions For You</span>
          <div className="user">
            <div className="userInfo">
            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Jane Doe</span>
            </div>
         <div className="buttons">
          <button>Follow</button>
          <button>Dismiss</button>
         </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Jane Doe</span>
            </div>
         <div className="buttons">
          <button>Follow</button>
          <button>Dismiss</button>
         </div>
          </div>
        </div>
        {/* latest activities  */}
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            
            <p>
            <span>Jane Doe</span> posted
            </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            
            <p>
            <span>Jane Doe</span> posted
            </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            
            <p>
            <span>Jane Doe</span> posted
            </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        {/* online friends  */}
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="online" />
            <span>Jane Doe</span>
            </div>
     
          </div>
          <div className="user">
            <div className="userInfo">
            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="online" />
            <span>Jane Doe</span>
            </div>
     
          </div>
          <div className="user">
            <div className="userInfo">
            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="online" />
            <span>Jane Doe</span>
            </div>
     
          </div>
          <div className="user">
            <div className="userInfo">
            <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="online" />
            <span>Jane Doe</span>
            </div>
     
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
