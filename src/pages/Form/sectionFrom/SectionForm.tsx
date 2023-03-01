import '@fontsource/public-sans';

import { Checkbox, List, ListItem, Textarea } from '@mui/joy';
import Typography from '@mui/joy/Typography';
import { Box, Card, FormGroup } from '@mui/material';

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
          <Textarea defaultValue="Try to put text longer than 4 lines." minRows={4} />
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
          <Textarea size={'sm'} placeholder="Observations" minRows={2} />
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
    <Card variant="elevation" elevation={5} sx={{ padding: 3 }}>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap={'wrap'}
        justifyContent={'space-around'}
        mb={2}
        sx={{ gap: '5px' }}
      >
        <Box width="400px" display="flex" flexDirection="column" gap="5px">
          <Typography sx={{ border: '1px solid black' }} borderRadius="5px" textAlign="center">
            Anti-glissoire
          </Typography>
          <FormGroup>
            <List
              orientation="horizontal"
              wrap
              sx={{
                '--List-gap': '8px',
                '--List-item-radius': '20px',
              }}
            >
              {['Oui', 'Non'].map((item, index) => (
                <ListItem key={item}>
                  <Checkbox disabled={index === 0} overlay disableIcon variant="soft" label={item} />
                </ListItem>
              ))}
            </List>
          </FormGroup>
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
  </>
);
