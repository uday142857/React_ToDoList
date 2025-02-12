import React from 'react'
import "./List.css"

function List({ data = [], setlist, setedit }) {
  var delit = (index) => {
    data.splice(index, 1);
    setlist([...data]);
  };
  var editit = (index, value) => {
    // var find = data.find((data)=>{
    //     data===dd
    // })
    // setedit(find)
    // console.log(find)
    setedit(index, value);
  };
  return (
    <div>
      <div>
        {data.map((element, index) => {
          return (
            <div className="list">
              <div>
                <input type="checkbox" />
              </div>
              <div className="l1">
                <h2>{data.length > 0 && element}</h2>
              </div>
              <div>
                <button
                  onClick={() => {
                    editit(index, element);
                  }}
                >
                  <i class="bi bi-pencil-square"></i>
                </button>
              </div>
              <div>
                <button
                  className="bt"
                  onClick={() => {
                    delit(index);
                  }}
                >
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List