import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import WorkPage from './WorkPage';
import './table-info.css';
import { Entity, ListId } from '../type';
import { useEffect, useState } from 'react';
import CreateAdd from './Create-add';

function WorkList({eID}:{eID: number }): JSX.Element {
   
    
  
  
  return (
    <div className="table-info">
      <div className="menu">
        <div className="nav-textt">По проекту</div>
        <div className="nav-textt">Обьекты</div>
        <div className="nav-textt">РД</div>
        <div className="nav-textt">MTO</div>
        <div className="nav-textt">График</div>
        <div className="nav-textt">МиМ</div>
      </div>
      <div className="infoo">
        <div className="nn">
          <div className="lvl">Уровень</div>
          <div className="rowname">Наименование работ</div>
          <div className="colum3">Основная з.п</div>
          <div className="colum4">Оборудование</div>
          <div className="colum5">Накладные расходы</div>
          <div className="colum6">Сметная прибыль</div>
        </div>
        <div className=''>
        
      </div>
        
        <CreateAdd eID ={eID} />
      </div>
    </div>
  );
}

export default WorkList;
