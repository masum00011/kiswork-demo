import React from "react";

export default function Hovercontaner({number,textcon}) {
  return (
    <div>
      <div className="containermain">
        <div className="card">
          <div className="image bg-[blue] py-12  text-center text-white ">
            <div>

            <b className="text-5xl">{number}</b>
            </div>
            <b className="text-4xl">{textcon}</b>
          </div>
          <div className="content">
            <h3>This is content</h3>
            <p>
            Successfully commissioned the installation of Oritech Solutions induction furnace 2 sets of double track furnace (4 numbers with capacity 3.5 MT each) and two sets of single track furnace (2 numbers with capacity 2 MT each). The annual capacity of melting is 100800 MT.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
