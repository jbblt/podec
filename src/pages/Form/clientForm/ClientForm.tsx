import {Button, FormControl, FormLabel, Input, MenuItem, Select} from '@mui/material';
import {type SubmitHandler, useForm} from 'react-hook-form';
import {type ClientInfoForm} from '../../../models/clientInfoForm';
import {Gender} from '../../../models/enum/commonEnum';

export const ClientForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: {errors},
	} = useForm<ClientInfoForm>();
	const onSubmit: SubmitHandler<ClientInfoForm> = data => {
		console.log(data);
	};

	return (
		<FormControl onSubmit={handleSubmit(onSubmit)}>
			<ul>
				<li>
					<FormLabel>Prénom</FormLabel>
					<Input {...register('firstname')} />
				</li>
				<li>
					<FormLabel>Nom</FormLabel>
					<Input {...register('lastname')} />
				</li>
				<li>
					<FormLabel>Numéro patient</FormLabel>
					<Input {...register('formNumber')} />
				</li>
				<li>
					<FormLabel>Nom Applicateur</FormLabel>
					<Input {...register('applicator')} />
				</li>
				<li>
					<FormLabel>Genre</FormLabel>
					<Select {...register('gender')}>
						{Object.entries(Gender).map(([key, value]) => (
							<MenuItem key={key} value={value}>
								{value}
							</MenuItem>
						))}
					</Select>
				</li>
				<Button type='submit' variant='contained'>
          Sauvegarder
				</Button>
				{errors.gender && <span>This field is required</span>}
			</ul>
		</FormControl>
	);
};
