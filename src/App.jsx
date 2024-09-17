import React, { useEffect } from 'react'
import { useState } from 'react';
import { getDatabase, ref, set, push, onValue, remove  } from "firebase/database";
import { RotatingLines } from 'react-loader-spinner';
const App = () => {
  
  const db = getDatabase();
  let [input,setInput]=useState("")
  let [allData,setAllData]=useState([])
  let [loader,setLoader]=useState(false)
  let [edit,setEdit]=useState(false)
  let [index,setIndex]=useState("")

  let handleAddTodo=()=>{
    setLoader(true)
    set(push(ref(db, 'allUser/' )), {
     name:input
    }).then(()=>{
      setInput('')
      setLoader(false)
    });
  }
  useEffect(()=>{
    const starCountRef = ref(db, 'allUser/');
        onValue(starCountRef, (snapshot) => {
          let arr=[]
          snapshot.forEach(item=>{
            arr.push({...item.val(),id:item.key})
          })
          setAllData(arr);
          
});
  },[])

  let handleDelete=(item)=>{
    

    remove(ref(db, 'allUser/' +item.id))
    
  }
  
  let handleEdit=(item)=>{
    setInput(item.name)
 
    setIndex(item.id)
    setEdit(true)
  }
  let handleUpdate=()=>{
    setLoader(true)
    set(ref(db, 'allUser/' +index), {
      name:input
     }).then(()=>{
       setInput('')
       setLoader(false)
       setEdit(false)
       
     });
    
  }
 
  
  
  return (
    <>
    
    <input style={{display:"block"}} value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
    {
      edit?
      <button style={{display:"block"}} onClick={handleUpdate}>Update</button>
      :
      <button style={{display:"block"}} onClick={handleAddTodo}>Add Todo</button>

    }
    
    {
      loader && <RotatingLines
      visible={true}
      height="96"
      width="96"
      color="red"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{
        backgroundColor:"rad"
      }}
      wrapperClass=""
      />
    }
    {
      allData.map((item,index)=>(
        <li>{item.name}--<button onClick={()=>handleEdit(item)}>Edit</button><button onClick={()=>handleDelete(item)}>delete</button></li>
      ))
    }
    </>
  )
}

export default App