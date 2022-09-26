import React from "react";

const BucketList = (props) => {
  const my_lists = props.list;

  return (
    <div>
      {
        my_lists.map((list, index) => {
          console.log("a");
          return (
            <div className="list-item" key={index}>
              {list}
            </div>
          );
        })
      }
    </div>
  );
};


export default BucketList;
