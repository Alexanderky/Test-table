import React, { useEffect, useState } from 'react';

import './App.css';
import { useDispatch } from 'react-redux';
import WorkList from '../components/WorkList';
import { Navigation } from '../components/navigator/Navigation';
import { NameProject } from '../components/navigator/NameProject';
import { Entity, List } from '../type';


function App() {
  const dispatch = useDispatch();
  const [entity, setEntity] = useState(0);
  

  const createEntity = async ()=>{
    const ress = await fetch('http://185.244.172.108:8081/v1/outlay-rows/entity/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const dataa = await ress.json()
    const newEntity: Entity ={
      id: dataa.id,
      rowName: dataa.name
    }
    console.log(dataa.id)
      setEntity(newEntity.id)
  }

  const initFeatch = async () => {
   
    const res = await fetch(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${entity}/row/list`
    );
    const data = await res.json();
     console.log(data)
    return data;
   
  };
  useEffect(() => {
    createEntity();
  }, []);
  

    

  //  useEffect(() => {
  //    initFeatch().then((data) => dispatch({ type: 'work/init', payload: data }));
  //  }, []);
  
    

 

  return (
    <div>
      <Navigation />
      <NameProject />
      <WorkList eID={entity} key={entity}/>
    </div>
  );
}

export default App;
