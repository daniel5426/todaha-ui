import { ChallengeDefinitionState } from "@guppy/kodin/openapi";

export interface ChallengeDefinitionQueryModel {
  id?: string,
  title?:string,
  state?:ChallengeDefinitionState,
  withLimit?: boolean,
  levelId?: string,
  skillsId?: string[],
  topicsId?: string[],
  page: number,
  limit: number,
  q: string,
  orders: string[]
}



export type ChallengeDefinitionStateModel =
  {label:'Pending', value:0} |
  {label:'Started', value:1} |
  {label:'Validated', value:2} |
  {label:'Canceled', value:3};

export const ChallengeDefinitionStateModel = {
  Pending: {label:'Pending', value:0} as ChallengeDefinitionStateModel,
  Started: {label:'Started', value:1} as ChallengeDefinitionStateModel,
  Validated: {label:'Validated', value:2} as ChallengeDefinitionStateModel,
  Canceled: {label:'Canceled', value:3} as ChallengeDefinitionStateModel
};

export const ChallengeDefinitionStateModelValues = [
  ChallengeDefinitionStateModel.Pending,
  ChallengeDefinitionStateModel.Started,
  ChallengeDefinitionStateModel.Validated,
  ChallengeDefinitionStateModel.Canceled
];

export const convertToChallengeDefinitionState = (state:ChallengeDefinitionStateModel):ChallengeDefinitionState => {
  return state.value;
}
