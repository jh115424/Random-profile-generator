import "./profileCard.css";

import { useState } from "react";
import Jenny from "../assets/Jenny.jpg";

export default function ProfileCard() {
  const [count, setCount] = useState(0);

  const [followers, setFollowers] = useState(23.2);
  const [following, setFollowing] = useState(322);
  const [posts, setPosts] = useState(877);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="profileCardContainer">
        <div className="profileCard">
          <img src={Jenny} className="mainCardImage" />
          <div className="profileNameAndBio">
            <p className="profileName">@FitnessLife</p>
          </div>
          <div className="bio">
            Full Stack Web Dev. Bird mom. Fitness gal and whole foods. <br />
            Traveling and coffee shops.
          </div>
          <div className="followersFollowingAndPosts">
            <div className="followerNumber">
              23.2k
              <span>
                <p>FOLLOWERS</p>
              </span>
            </div>
            <div className="followingNumber">
              322
              <span>
                <p>FOLLOWING</p>
              </span>
            </div>
            <div className="postNumber">
              877
              <span>
                <p>POSTS</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
