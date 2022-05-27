import {graphql} from 'msw'
import {MakeReservationMutationVariables, Reservation} from "../src/generated/graphql";

export const handlers = [
    graphql.mutation('makeReservation', (req, res, ctx) => {
        const input: MakeReservationMutationVariables = req.variables as MakeReservationMutationVariables;
        const makeReservationResponse: Reservation = {
            id: input.reservationInput?.id
        }
        return res(ctx.data(makeReservationResponse));
    }),
]
