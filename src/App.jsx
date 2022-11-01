import React from "react";
import { Admin, Resource, EditGuesser } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { UserEdit, UserList, UserCreate } from "./components/User";
import { authProvider } from "./components/authProvider";

const dataProvider = restProvider("http://localhost:3000");

function App() {
	return (
		<Admin dataProvider={dataProvider} authProvider={authProvider} >
			<Resource 
				name="users" 
				list={UserList} 
				edit={UserEdit}
				create={UserCreate}
			/>
			<Resource 
				name="trendings" 
				list={UserList} 
				edit={UserEdit}
				create={UserCreate}
			/>
			<Resource 
				name="posts" 
				list={UserList} 
				edit={UserEdit}
				create={UserCreate}
			/>
			<Resource 
				name="popular" 
				list={UserList} 
				edit={UserEdit}
				create={UserCreate}
			/>
		</Admin>
	);
}
export default App;
