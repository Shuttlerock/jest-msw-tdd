import {GraphQLClient} from "graphql-request";
import {getSdk, MakeReservationMutationVariables} from "../generated/graphql";

describe('some test ', () => {
    it('some test', async () => {
        const sdk = getSdk(new GraphQLClient('http://localhost'));
        const input: MakeReservationMutationVariables = {
            reservationInput: {
                id: "12"
            }
        }
        const reservationResponse = await sdk.makeReservation(input)
        expect(reservationResponse).toEqual({id: "12"});
    })
})