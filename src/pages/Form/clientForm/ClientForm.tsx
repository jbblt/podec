import { Button, FormControl, FormLabel, Input, MenuItem, Select } from '@mui/material';
import { type ClientInfoForm } from 'models/clientInfoForm';
import { Gender } from 'models/enum/commonEnum';
import { type SubmitHandler, useForm } from 'react-hook-form';

export const ClientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientInfoForm>();
  const onSubmit: SubmitHandler<ClientInfoForm> = (data) => {
    console.warn(data);
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
        <Button type="submit" variant="contained">
          Sauvegarder
        </Button>
        {errors.gender && <span>This field is required</span>}
      </ul>
    </FormControl>
  );
};
