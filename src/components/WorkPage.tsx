import { useState } from 'react';
import { EID, List, ListId } from '../type';

import { useDispatch } from 'react-redux';

function WorkPage({ list, eID }: { list: List; eID: number }): JSX.Element {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [rowName, setRowName] = useState('name');
  const [salary, setSalary] = useState(0);
  const [equipmentCosts, setEquipmentCosts] = useState(0);
  const [overheads, setOverheads] = useState(0);
  const [estimatedProfit, setEstimatedProfit] = useState(0);
  const [edit, setEdit] = useState(true);

  const initFeatch = async () => {
    const res = await fetch(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/list`
    );
    const data = await res.json();
    dispatch({ type: 'work/init', payload: data });
  };

  const ObjectChange = {
    equipmentCosts: equipmentCosts,
    estimatedProfit: estimatedProfit,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: overheads,
    rowName: rowName,
    salary: salary,
    supportCosts: 0,
  };

  const fetchUpdate = async (): Promise<List> => {
    const res = await fetch(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/${list.id}/update`,
      {
        
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(ObjectChange),
      }
    );
    initFeatch();
    const data = await res.json();
    console.log(data);

    return data;
  };
  const update = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchUpdate().then((data) =>
      dispatch({ type: 'work/update', payload: data })
    );
    setEdit(true);
    
  };

  const fetchDelete = async (): Promise<void> => {
    const res = await fetch(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/${list.id}/delete`,
      {
        method: 'DELETE',
      }
    );
    dispatch({ type: 'work/delete', payload: list.id });

    initFeatch();
    console.log('удаленно');
  };
  function editopen() {
    if (edit === false) {
      setEdit(true);
    } else setEdit(false);
    console.log(edit);
  }

  return (
    <>
      {edit && (
        <div className="first-string" onDoubleClick={editopen}>
          <div className="folder">
            
            <div>
             
              <button onClick={() => fetchDelete()} type="button">
                🗑
              </button>
            </div>
          </div>
          <div className="rowname">{list.rowName}</div>
          <div className="colum3">{list.salary}</div>
          <div className="colum4">{list.equipmentCosts}</div>
          <div className="colum5">{list.overheads}</div>
          <div className="colum6">{list.estimatedProfit}</div>
        </div>
      )}
      {!edit && (
        <div className="inp-div">
          <form onSubmit={update} className="addform">
            <div className="folder"></div>
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
      )}
    </>
  );
}

export default WorkPage;
