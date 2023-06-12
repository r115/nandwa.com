import { Arango } from '@nandwa/utils/data/arangodb';
import { aql } from 'arangojs';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        let data;

        const db = Arango('harambee_stars');

        const people = db.collection("people");

        const q = await db.query(aql`
        FOR p IN ${people}
        FILTER p.alias == ${req.query.slug}
        RETURN p
        `);

        for await (const person of q) {
            data = person;
        }

        res.status(200).json(data)
    } catch (error) {
        // send to sentry
        res.status(200).json({ message: 'Nothing Here' })
    }
}