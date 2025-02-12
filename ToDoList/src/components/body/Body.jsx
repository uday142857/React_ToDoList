import { useState } from 'react';
import React from 'react'
import "./Body.css"
import List from '../list/List';
import App from '../../App';

function Body() {
     var [add, setAdd] = useState("");
     var [list, setList] = useState([]);
     var [edit, setEdit] = useState(null);
     var updatedata = () => {
       const newList = [...list];
       newList[edit] = add;
       console.log(edit);
       setList(newList);
       setAdd("");
       setEdit(null);
       // console.log(edit.index)
     };

     var addData = () => {
       //   console.log(add)
       if (!edit) {
         setList([...list, add]);
         
       } else {
         updatedata();
       }
       setAdd('');
       console.log(add);
     };
     var getData = (e) => {
       setAdd(e.target.value);
       // if(e.key==="Enter"){
       //     addData()
       // }
     };
  return (
    <div className="body1">
      <div className="inn">
        <div className="in">
          <input
            value={add}
            onChange={(e) => {
              getData(e);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addData();
              }
            }}
            type="text"
            placeholder="Enter Your List"
          />
          <button onClick={addData}>Add</button>
        </div>
      </div>
      <div>
        <List
          data={list}
          setlist={setList}
          setedit={(index, value) => {
            setEdit(index);
            setAdd(value);
          }}
        />
      </div>
    </div>
  );
}

export default Body





 // var updatedata = (data)=>{
     //     var newdata = add.map((element)=>{
     //         element===data ? data : element
     //     })
     //     setList(newdata)
     //     setEdit([])
     // }