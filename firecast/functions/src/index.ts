import * as functions from "firebase-functions";
import axios from "axios";

export const consultaCNPJ = functions.https.onRequest((request, response) => {
  if (!request.query.cnpj) {
    response.status(400).json({ error: "Parameter CNPJ not found" });
  }
  if (request.method !== "GET") {
    response.status(400).json({ error: "methods avaliable: [GET]" });
  }
  axios
    .get(`https://www.receitaws.com.br/v1/cnpj/${request.query.cnpj}`)
    .then(res => {
      response.status(200).json(res.data);
    })
    .catch(() => {
      response.status(400).json({ error: "CNPJ not found" });
    });
});
