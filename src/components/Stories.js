import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "https://source.unsplash.com/random/200x200?sig=1", name: "1" },
    { id: 2, image: "https://source.unsplash.com/random/200x200?sig=2", name: "2" },
    { id: 3, image: "https://source.unsplash.com/random/200x200?sig=3", name: "3" },
    { id: 4, image: "https://source.unsplash.com/random/200x200?sig=4", name: "4" },
    { id: 5, image: "https://source.unsplash.com/random/200x200?sig=5", name: "5" },
    { id: 6, image: "https://source.unsplash.com/random/200x200?sig=6", name: "6" },
    { id: 7, image: "https://source.unsplash.com/random/200x200?sig=7", name: "7" },
    { id: 8, image: "https://source.unsplash.com/random/200x200?sig=8", name: "8" },
    // { id: 9, image: "https://source.unsplash.com/random/200x200?sig=9", name: "9" },
    // { id: 10, image: "https://source.unsplash.com/random/200x200?sig=10", name: "10" },
    // { id: 11, image: "https://source.unsplash.com/random/200x200?sig=11", name: "11" },
    // { id: 12, image: "https://source.unsplash.com/random/200x200?sig=12", name: "12" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
