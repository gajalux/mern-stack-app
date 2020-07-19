import React, { Component } from "react";
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import authProvider from "./authProvider";
import  { UserList, UserEdit, UserCreate }  from './users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import jsonServerProvider from "ra-data-json-server";
const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");
class App extends Component {
  render() {
    return (
      <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
         <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
      </Admin>
    );
  }
}
export default App;