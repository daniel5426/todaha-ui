import { AppMessage } from "./appMessage.model";

export interface ComponentState<PR,SI,RM,WM,QM>
{
  pagedResult:PR|null,
  selectedItems:SI[]|null,
  readerModel: RM|null,
  writerModel:WM|null,
  currentId:string|null,
  query:QM,
  loading:boolean;
  editMode:string|null;
  message:AppMessage|null;
  title:string|null;
}


export interface ReferenceItem {
  id:string;
  value:string;
}





