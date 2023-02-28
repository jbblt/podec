import { Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import { type ClientInfoForm } from 'models/clientInfoForm';
import { Gender } from 'models/enum/commonEnum';
import React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

export const ClientForm = () => {
  const { register, handleSubmit, formState } = useForm<ClientInfoForm>();
  const onSubmit: SubmitHandler<ClientInfoForm> = (data) => {
    console.warn(data);
  };

  return (
    <>
      <Typography component="h2" variant="h4" align="center">
        Patient
      </Typography>
      <Paper variant="elevation" elevation={3} sx={{ my: { xs: 1, md: 12 }, p: { xs: 5 } }}>
        <Grid container spacing={4} display="flex" justifyContent={'center'}>
          <Grid item xl={12} xs={8} md={12}>
            <TextField
              error={!!formState.errors.firstname}
              fullWidth
              required
              variant="standard"
              type="text"
              label="Nom du Patient"
              autoComplete="firstname"
              placeholder="Nom"
              id="firstname"
              {...register('firstname')}
            />
          </Grid>
          <Grid item xl={8} xs={8} md={6}>
            <TextField
              error={!!formState.errors.lastname}
              fullWidth
              required
              variant="standard"
              type="text"
              label="Prénom"
              autoComplete="lastname"
              id="lastname"
              placeholder="Prénom"
              {...register('lastname')}
            />
          </Grid>
          <Grid item xl={8} xs={8} md={6}>
            <TextField
              error={!!formState.errors.number}
              fullWidth
              required
              variant="standard"
              type="number"
              label="Numéro"
              id="number"
              placeholder="Numéro de patient"
              {...register('formNumber')}
            />
          </Grid>
          <Grid item xl={8} xs={8} md={6}>
            <TextField
              error={!!formState.errors.applicator}
              required
              fullWidth
              label="Applicateur"
              type="text"
              id="applicator"
              variant="standard"
              autoComplete="applicator"
              placeholder="Nom de l'Applicateur"
              {...register('applicator')}
            />
          </Grid>
          <Grid item xl={8} xs={8} md={6}>
            <TextField
              required
              error={!!formState.errors.gender}
              fullWidth
              label="Genre"
              id="gender"
              select
              variant="standard"
              {...register('gender', {
                required: {
                  value: true,
                  message: 'Sélectionner le Genre',
                },
              })}
            >
              {Object.entries(Gender).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                  {value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
