// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");
import { FOOD_API_URL } from '@constants';
import type { NextApiRequest, NextApiResponse } from 'next'
import { resolve } from 'path';

const parseResponse = (apiResponse: IResponseFoodAPI) => {
  return apiResponse.data.hints.map((hint) => {
    return hint.food
  })
}

const getFood = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { foodName } = req.query
  const options = {
    method: 'GET',
    url: FOOD_API_URL,
    params: {ingr: foodName},
    headers: {
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.FOOD_API_KEY
    }
  }

  axios.request(options)
    .then((apiResponse: IResponseFoodAPI) => {
      const parsedResponse = parseResponse(apiResponse)
      res.status(200).json({ statusCode: 200, foods: parsedResponse })
    }).catch((err: any) => {
      res.status(500).json({ statusCode: 500, message: err.message})
    });
}

export default getFood




