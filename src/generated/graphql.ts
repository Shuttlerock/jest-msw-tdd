import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  MakeReservation: Reservation;
};


export type MutationMakeReservationArgs = {
  input: ReservationInput;
};

export type Query = {
  __typename?: 'Query';
  Reservations: Reservation;
};

export type Reservation = {
  __typename?: 'Reservation';
  id: Scalars['String'];
};

export type ReservationInput = {
  id: Scalars['String'];
};

export type MakeReservationMutationVariables = Exact<{
  reservationInput: ReservationInput;
}>;


export type MakeReservationMutation = { __typename?: 'Mutation', MakeReservation: { __typename?: 'Reservation', id: string } };


export const MakeReservationDocument = gql`
    mutation makeReservation($reservationInput: ReservationInput!) {
  MakeReservation(input: $reservationInput) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    makeReservation(variables: MakeReservationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MakeReservationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MakeReservationMutation>(MakeReservationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'makeReservation', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;