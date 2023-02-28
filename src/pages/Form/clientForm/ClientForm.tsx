import { Box, Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import { type ClientInfoForm } from 'models/clientInfoForm';
import { Gender } from 'models/enum/commonEnum';
import React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

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
    <>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        component="form"
        height="100%"
        gap="10px"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/*<StyledBox>*/}
        <FormControl>
          <TextField
            size="small"
            required
            id="outlined-required"
            label="Prénom"
            placeholder="Prénom"
            {...register('firstname')}
          />
          <TextField
            size="small"
            required
            id="outlined-required"
            label="Nom"
            placeholder="Nom"
            {...register('lastname')}
          />
          <Select
            style={{ height: '40px' }}
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            value="defaultValue"
            {...register('gender')}
          >
            <MenuItem disabled key="defaultValue" value="defaultValue">
              <em>Genre</em>
            </MenuItem>
            {Object.entries(Gender).map(([key, value]) => (
              <MenuItem key={key} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          size="small"
          required
          label="Numéro"
          id="outlined-required"
          placeholder="Numéro de patient"
          {...register('formNumber')}
        />
        <TextField
          required
          size="small"
          type="text"
          id="outlined-required"
          label="Applicateur"
          placeholder="Nom de l'Applicateur"
          {...register('applicator')}
        />
        {/*</StyledBox>*/}
        <Box display={'flex'} justifyContent={'center'} mt={5}>
          <Button type="submit" variant="contained">
            Sauvegarder
          </Button>
        </Box>
        {errors.gender && <span>This field is required</span>}
      </Box>
    </>
  );
};

const StyledBox = styled(Box)<typeof Box>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
