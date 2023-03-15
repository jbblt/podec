import { Box, Card, FormGroup, Input, InputLabel, Stack, Switch, TextareaAutosize, Typography } from '@mui/material';

const switches = [
  { label: 'Anti-glissoire' },
  { label: 'Bout' },
  { label: 'Bourrelet mousse' },
  { label: 'Simulé' },
  { label: 'Rapporté' },
];
export const SectionForm = () => (
  <>
    <Card variant="elevation" elevation={5} sx={{ padding: 3, mb: 3 }}>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap={'wrap'}
        justifyContent={'space-around'}
        mb={2}
        sx={{ gap: '5px' }}
      >
        <img src={'./picture/pied.avif'} alt={'Coupe Pied'} loading="lazy" width={'400px'} />
        <Box width="400px" display="flex" flexDirection="column" gap="5px">
          <Typography sx={{ border: '1px solid black' }} borderRadius="5px" textAlign="center">
            Dessus
          </Typography>
          <TextareaAutosize defaultValue="Try to put text longer than 4 lines." minRows={4} />
        </Box>
        <Box width="400px" display="flex" flexDirection="column" gap="5px">
          <Typography borderRadius="5px" sx={{ border: '1px solid black' }} textAlign="center">
            Doublure
          </Typography>
          <Box display={'flex'} justifyContent={'space-evenly'} flexDirection={'row'} gap="5px">
            <Box textAlign={'center'} sx={{ width: '100%', gap: '5px' }}>
              <Typography sx={{ border: '1px solid black', borderRadius: '5px' }}>Avant</Typography>
            </Box>
            <Box textAlign="center" width="100%" gap="5px">
              <Typography sx={{ border: '1px solid black', borderRadius: '5px' }}>Arrière</Typography>
            </Box>
          </Box>
          <TextareaAutosize size={'sm'} placeholder="Observations" minRows={2} />
        </Box>
        <Box width="400px" display="flex" flexDirection="column" gap="5px">
          <Typography textAlign="center" sx={{ border: '1px solid black', borderRadius: '5px' }}>
            Perforations
          </Typography>
          <Box display="flex" justifyContent="space-around" flexDirection="row" flexWrap="wrap" gap="5px">
            <Box width="195px" sx={{ border: '1px solid black', borderRadius: '5px' }}>
              Dessus
            </Box>
            <Box width="195px" sx={{ border: '1px solid black', borderRadius: '5px' }}>
              À travers Tout
            </Box>
            <Box width="195px" sx={{ border: '1px solid black', borderRadius: '5px' }}>
              Plateau
            </Box>
            <Box width="195px" sx={{ border: '1px solid black', borderRadius: '5px' }}>
              Empeigne
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
    <Card variant="elevation" elevation={5} sx={{ padding: 3, mb: 3 }}>
      <Box display="flex" flexDirection="row" flexWrap={'wrap'} justifyContent={'space-around'} mb={2} gap={'5px'}>
        <Box
          width="400px"
          display="flex"
          flexDirection="row"
          justifyContent={'space-around'}
          flexWrap={'wrap'}
          gap="5px"
        >
          {switches.map((item) => (
            <FormGroup
              sx={{
                border: '1px solid black',
                borderRadius: '5px',
                padding: '2px',
                display: 'flex',
                alignItems: 'center',
                width: '130px',
              }}
              key={item.label}
            >
              <InputLabel>{item.label}</InputLabel>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Non</Typography>
                <Switch size="small" />
                <Typography>Oui</Typography>
              </Stack>
            </FormGroup>
          ))}
        </Box>
        <Box width="400px" display="flex" flexDirection="column" gap="5px">
          <Typography textAlign="center" sx={{ border: '1px solid black', borderRadius: '5px' }}>
            Piquage
          </Typography>
          <Box display="flex" justifyContent="space-around" flexDirection="row" flexWrap="wrap" gap="5px">
            <Box
              width="195px"
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              sx={{ border: '1px solid black', borderRadius: '5px' }}
            ></Box>
            <Box
              width="195px"
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              sx={{ border: '1px solid black', borderRadius: '5px' }}
            >
              <InputLabel>Couleur Fil : </InputLabel>
              <Input type={'color'} sx={{ width: 100, height: 20 }} />
            </Box>
            <Box
              alignItems={'center'}
              width="195px"
              display={'flex'}
              justifyContent={'center'}
              sx={{ border: '1px solid black', borderRadius: '5px' }}
            >
              Autre
            </Box>
            <Box width="195px" sx={{ border: '1px solid black', borderRadius: '5px' }}>
              <InputLabel>Autre : </InputLabel>
              <TextareaAutosize size={'sm'} placeholder="Observations" minRows={2} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
    <Card
      variant="elevation"
      elevation={5}
      sx={{
        padding: 3,
        mb: 3,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 33%)',
        gridColumnGap: '10px',
      }}
    >
      <Box display="flex" flexDirection="column" gap="5px" borderRadius="5px" border={'solid 1px'}>
        <Box sx={{ height: '17px' }}></Box>
        <Typography>Baleinage</Typography>
        <Typography>Capiton Quartier</Typography>
        <Typography>Capiton Languette</Typography>
        <Typography>Languette Podiaflex</Typography>
        <Typography>RM</Typography>
        <Typography>Tuteur acier post.</Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap="5px" borderRadius="5px" border={'solid 1px'} mr={1} ml={1}>
        <Typography>Gauche</Typography>
        <Box display="flex" justifyContent="space-between">
          <Box>Ext.</Box>
          <Box>Int.</Box>
          <Box></Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mr={1} ml={1}>
          <Box>Ext.</Box>
          <Box>Int.</Box>
          <Box>Total</Box>
        </Box>
        <Box display="flex">
          <Input></Input>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" borderRadius="5px" gap="5px" border={'solid 1px'}>
        <Typography>Droite</Typography>
      </Box>
    </Card>
  </>
);
