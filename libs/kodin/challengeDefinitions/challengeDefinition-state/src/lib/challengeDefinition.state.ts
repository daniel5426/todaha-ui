
import { ChallengeDefinitionQueryModel } from "@guppy/kodin/challengeDefinitions/domain";
import {  ComponentState } from "@guppy/tiveriad/ui";
import { ChallengeDefinitionReaderModelContract, ChallengeDefinitionReaderModelContractPagedResult,ChallengeDefinitionState,ChallengeDefinitionWriterModelContract } from "@guppy/kodin/openapi";

export type ChallengeDefinitionComponentState = ComponentState<
  ChallengeDefinitionReaderModelContractPagedResult,
  ChallengeDefinitionReaderModelContract,
  ChallengeDefinitionReaderModelContract,
  ChallengeDefinitionWriterModelContract,
  ChallengeDefinitionQueryModel
>;

export const INITIAL_QUERY: ChallengeDefinitionQueryModel = {
  id: "",
  title: "",
  state: ChallengeDefinitionState.NUMBER_0,
  withLimit: false,
  levelId: "",
  skillsId: [],
  topicsId: [],
  page: 0,
  limit: 0,
  q: "",
  orders: []
};

