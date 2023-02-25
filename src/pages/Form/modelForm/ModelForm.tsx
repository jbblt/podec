import {Box, Button, MenuItem, Select, TextField} from '@mui/material';
import {type SubmitHandler, useForm} from 'react-hook-form';
import {type ClientInfoForm} from '../../../models/clientInfoForm';
import {Gender} from '../../../models/enum/commonEnum';
import ReactPDF from '@react-pdf/renderer';
import {MyDocument} from '../../../components/pdf/MyDocument';
import React from 'react';
import {saveAs} from 'file-saver';
import styled from 'styled-components';
import pdf = ReactPDF.pdf;

export const ModelForm = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<ClientInfoForm>();

	const generatePdfDocument = async () => {
		const blob = await pdf(
			<MyDocument
				form={{
					firstname: 'Prénom',
					lastname: 'Nom',
					number: 1235,
					formNumber: 19,
					gender: Gender.H,
				}}
			/>,
		).toBlob();

		saveAs(blob, './fiche-prod.pdf');
	};

	const onSubmit: SubmitHandler<ClientInfoForm> = data => {
		generatePdfDocument()
			.then(r => {
				// Send(
				// 	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				// 	import.meta.env.VITE_REACT_APP_SERVICE_ID,
				// 	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				// 	import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
				// 	{content: './example.pdf'},
				// 	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				// 	import.meta.env.VITE_REACT_APP_PUBLIC_KEY,
				// )
				// 	.then(response => {
				// 		console.log('SUCCESS!', response.status, response.text);
				// 	})
				// 	.catch(err => {
				// 		console.log('FAILED...', err);
				// 	});
			})
			.catch(e => {
				console.error(e);
				console.warn('Probleme a la génération');
			});
	};

	return (
		<Box
			width='100%'
			component='form'
			sx={{
				'& .MuiTextField-root': {
					m: 1,
					width: '25ch',
				},
			}}
			noValidate
			autoComplete='off'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Box>
				<TextField
					size='small'
					required
					id='outlined-required'
					label='Prénom'
					placeholder='Prénom'
					{...register('firstname')}
				/>
				<TextField
					size='small'
					required
					id='outlined-required'
					label='Nom'
					placeholder='Nom'
					{...register('lastname')}
				/>
				<TextField
					size='small'
					required
					label='Numéro'
					id='outlined-required'
					placeholder='Numéro de patient'
					{...register('formNumber')}
				/>
				<TextField
					required
					size='small'
					type='text'
					id='outlined-required'
					label='Applicateur'
					placeholder="Nom de l'Applicateur"
					{...register('applicator')}
				/>
				<Select
					required
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					size='small'
					value='defaultValue'
					{...register('gender')}
				>
					<MenuItem disabled key='defaultValue' value='defaultValue'>
						<em>Genre</em>
					</MenuItem>
					{Object.entries(Gender).map(([key, value]) => (
						<MenuItem key={key} value={value}>
							{value}
						</MenuItem>
					))}
				</Select>
			</Box>

			<Button type='submit' variant='contained'>
        Sauvegarder
			</Button>
			{errors.gender && <span>This field is required</span>}
		</Box>
	);
};

const StyledTable = styled.table`
  th,
  td {
    width: 100px;
    text-align: center;
    border: 1px solid black;
    color: black;
    padding: 1px;
  }
`;
