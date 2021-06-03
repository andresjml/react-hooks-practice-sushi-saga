import React from "react";


function Table({ wallet, plates = [] }) {
  const displayPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">You have: ${wallet} remaining!</h1>
      <div className="table">
        <div className="stack">{displayPlates}</div>
        
      </div>
    </>
  );
}

export default Table;