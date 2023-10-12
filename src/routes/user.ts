import express from 'express';
import createUser from '../controller/users/createUser';
import fetchUsers from '../controller/users/getUsers';
import deleteUser from '../controller/users/deleteUser';
import updateUser from '../controller/users/updateUser';
const routing = express.Router();


routing.get('/', fetchUsers);
routing.post('/', createUser);
routing.put('/', updateUser);
routing.delete('/:id', deleteUser);


export default routing;