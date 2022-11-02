

import React from "react";
import {
	Edit,
	SimpleForm,
	TextInput,
	Create,
	List,
	Datagrid,
	TextField,
	EmailField,
	EditButton,
	DeleteButton,
} from "react-admin";

export const TrendCreate = (props) => {
	return (
		<Create title="Create User" {...props}>
			<SimpleForm>
				<TextInput type="number" source="id" />
				<TextInput source="title" />
				<TextInput source="subtitle" />
				<TextInput source="category" />
				<TextInput source="description" />
				<TextInput type="calendar" source="published" />
			</SimpleForm>
		</Create>
	);
};

export const TrendEdit = (props) => {
	return (
		<Edit title="Edit User" {...props}>
			<SimpleForm>
                <TextInput disabled type="number" source="id" />
				<TextInput source="title" />
				<TextInput source="subtitle" />
				<TextInput source="category" />
				<TextInput source="description" />
				<TextInput type="calendar" source="published" />
			</SimpleForm>
		</Edit>
	);
};

export const TrendList = (props) => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source="id" />
				<TextField source="title" />
				<TextField source="subtitle" />
				<EmailField source="category" />
				<TextField source="description" />
				<TextField source="published" label="published" />
				<EditButton basePath="/trendings" />
				<DeleteButton basePath="/trendings" />
			</Datagrid>
		</List>
	);
};
