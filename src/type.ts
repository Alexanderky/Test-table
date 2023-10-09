export type List ={
    
        child: [
          null
        ],
        equipmentCosts: number,
        estimatedProfit: number,
        id: 0,
        machineOperatorSalary: number,
        mainCosts: number,
        materials: number,
        mimExploitation: number,
        overheads: number,
        rowName: string,
        salary: number,
        supportCosts: number,
        total: number
  
}
export type Entity = {
  id: number;
  rowName: string;
  
};
export type EID ={
    id: number;
    rowName: string
}

export type ObjAdd={
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
   
}
export type ObjChange={
  id: number,
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
   
}


export type ListId = List['id'];

export type State = {
  lists: List[];
};
