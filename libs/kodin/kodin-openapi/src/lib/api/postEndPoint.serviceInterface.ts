/**
 * Kodin.Services
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { ChallengeDefinitionReaderModelContract } from '../model/models';
import { ChallengeDefinitionWriterModelContract } from '../model/models';
import { ChallengeReaderModelContract } from '../model/models';
import { ChallengeWriterModelContract } from '../model/models';
import { QuestionReaderModelContract } from '../model/models';
import { QuestionWriterModelContract } from '../model/models';
import { QuizDefinitionReaderModelContract } from '../model/models';
import { QuizDefinitionWriterModelContract } from '../model/models';
import { QuizItemReaderModelContract } from '../model/models';
import { QuizItemWriterModelContract } from '../model/models';
import { QuizReaderModelContract } from '../model/models';
import { QuizWriterModelContract } from '../model/models';
import { RepositoryReaderModelContract } from '../model/models';
import { RepositoryWriterModelContract } from '../model/models';
import { ReviewReaderModelContract } from '../model/models';
import { ReviewWriterModelContract } from '../model/models';
import { SessionReaderModelContract } from '../model/models';
import { SessionWriterModelContract } from '../model/models';


import { KodinApiConfiguration }                                     from '../kodin.api.configuration';



export interface PostEndPointServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: KodinApiConfiguration;

    /**
     *
     *
     * @param challengeDefinitionWriterModelContract
     */
    challengeDefinitionsPost(challengeDefinitionWriterModelContract?: ChallengeDefinitionWriterModelContract, extraHttpRequestParams?: any): Observable<ChallengeDefinitionReaderModelContract>;

    /**
     *
     *
     * @param challengeWriterModelContract
     */
    challengesPost(challengeWriterModelContract?: ChallengeWriterModelContract, extraHttpRequestParams?: any): Observable<ChallengeReaderModelContract>;

    /**
     *
     *
     * @param questionWriterModelContract
     */
    questionsPost(questionWriterModelContract?: QuestionWriterModelContract, extraHttpRequestParams?: any): Observable<QuestionReaderModelContract>;

    /**
     *
     *
     * @param quizDefinitionWriterModelContract
     */
    quizDefinitionsPost(quizDefinitionWriterModelContract?: QuizDefinitionWriterModelContract, extraHttpRequestParams?: any): Observable<QuizDefinitionReaderModelContract>;

    /**
     *
     *
     * @param quizWriterModelContract
     */
    quizzesPost(quizWriterModelContract?: QuizWriterModelContract, extraHttpRequestParams?: any): Observable<QuizReaderModelContract>;

    /**
     *
     *
     * @param quizId
     * @param quizItemWriterModelContract
     */
    quizzesQuizIdQuizItemsPost(quizId: string, quizItemWriterModelContract?: QuizItemWriterModelContract, extraHttpRequestParams?: any): Observable<QuizItemReaderModelContract>;

    /**
     *
     *
     * @param repositoryWriterModelContract
     */
    repositoriesPost(repositoryWriterModelContract?: RepositoryWriterModelContract, extraHttpRequestParams?: any): Observable<RepositoryReaderModelContract>;

    /**
     *
     *
     * @param reviewWriterModelContract
     */
    reviewsPost(reviewWriterModelContract?: ReviewWriterModelContract, extraHttpRequestParams?: any): Observable<ReviewReaderModelContract>;

    /**
     *
     *
     * @param sessionWriterModelContract
     */
    sessionsPost(sessionWriterModelContract?: SessionWriterModelContract, extraHttpRequestParams?: any): Observable<SessionReaderModelContract>;

}
