import { api } from "../util/requester.js";
const endpoints = {
  // Change the url depanding on the task.
  baseURL : "http://localhost:3030/data/cars",
  baseCatalog: "http://localhost:3030/data/cars?sortBy=_createdOn%20desc",
  baseDetails: "http://localhost:3030/data/cars/",
  baseSearch: (query) =>`http://localhost:3030/data/cars?where=model%20LIKE%20%22${query}%22`,
  // remove or add it depanding on the task
};

// modify the function if the task is asking (GET) 
// but the function is (PUT) just change it to api.get(...).
async function create(data) {
    return await api.post(endpoints.baseURL, data);
}
async function getAll() {
    return await api.get(endpoints.baseCatalog);
}
async function Details(id){
    return await api.get(endpoints.baseDetails + id);
}
async function update(id,data){
    return await api.put(endpoints.baseDetails + id,data);
}
async function del(id){
    return await api.del(endpoints.baseDetails + id);
}
async function search(query){
    return await api.get(endpoints.baseSearch(query));
}

export const dataService = {
    create,
    getAll,
    Details,
    update,
    del,
    search
}

