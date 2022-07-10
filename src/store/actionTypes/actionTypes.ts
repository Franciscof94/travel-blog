export enum ActionType {
    SHOW_MODAL = "SHOW_MODAL",
    GET_ID = "GET_ID",
  }
  
  interface showModal {
    type: ActionType.SHOW_MODAL;
    payload: boolean;
  }

  interface getId{
    type: ActionType.GET_ID;
    payload: number;
  }
  
  export type Action = showModal | getId; 