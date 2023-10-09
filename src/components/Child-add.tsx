import { useEffect, useState } from 'react';
import { EID, Entity, List } from '../type';
import './table-info.css';
import { useDispatch } from 'react-redux';

function CreateAddchild({ eID, parId }: { eID: number, parId:number }): JSX.Element {
  const [rowName, setRowName] = useState('rowName');
  const [salary, setSalary] = useState(0);
  const [equipmentCosts, setEquipmentCosts] = useState(0);
  const [overheads, setOverheads] = useState(0);
  const [estimatedProfit, setEstimatedProfit] = useState(0);
  const dispatch = useDispatch();
  const [tr, set] = useState(0);
  const initFeatch = async () => {
    const res = await fetch(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/list`
    );
    const data = await res.json();
    dispatch({ type: 'work/init', payload: data })
  };
  const request = {
    equipmentCosts: equipmentCosts,
    estimatedProfit: estimatedProfit,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: overheads,
    parentId: parId,
    rowName: rowName,
    salary: salary,
    supportCosts: 0,
  };

  const fetchAdd = async (): Promise<List> => {
    const res = await fetch(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/create`,
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(request),
      }
    );
    const data = await res.json();
    console.log(data);
    initFeatch()
    return data;
  };
  const addFunc = (e: React.FormEvent<HTMLFormElement>): void => {
    
    e.preventDefault();
    fetchAdd().then((data) => dispatch({ type: 'work/add', payload: data }));
  };
  return (

    <div className="inp-div-child">
        
      <form onSubmit={addFunc} className="addform">
      <div className='folder'></div>
        <div className="rowname">
          <input
            className="input"
            type="name"
            name="rowName"
            placeholder="rowName"
            onChange={(e) => {
              setRowName(e.target.value);
            }}
            
          />
        </div>
        <div className="colum3">
          <input
            className="input"
            type="number"
            name="salary"
            placeholder="salary"
            onChange={(e) => {
              setSalary(parseInt(e.target.value));
            }}
            
          />
        </div>
        <div className="colum4">
          {' '}
          <input
            className="input"
            type="number"
            name="equipmentCosts"
            placeholder="equipmentCosts"
            onChange={(e) => {
              setEquipmentCosts(parseInt(e.target.value));
            }}
            
          />
        </div>
        <div className="colum5">
          {' '}
          <input
            className="input"
            type="number"
            name="overheads"
            placeholder="overheads"
            onChange={(e) => {
              setOverheads(parseInt(e.target.value));
            }}
            
          />
        </div>
        <div className="colum6">
          <input
            className="input"
            type="number"
            name="estimatedProfit"
            placeholder="estimatedProfit"
            onChange={(e) => {
              setEstimatedProfit(parseInt(e.target.value));
            }}
            
          />
        </div>

        <button type="submit">add</button>
      </form>
      
    </div>
  );
}

export default CreateAddchild;