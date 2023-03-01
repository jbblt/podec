import { Button, TextField } from '@mui/material';
import ReactPDF from '@react-pdf/renderer';
import { MyDocument } from 'components/pdf/MyDocument';
import { saveAs } from 'file-saver';
import { type ClientInfoForm } from 'models/clientInfoForm';
import { Gender } from 'models/enum/commonEnum';
import { ModelForm } from 'models/modelForm';
import React, { useMemo, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import pdf = ReactPDF.pdf;

export const ModelFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModelForm>();

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
      />
    ).toBlob();

    saveAs(blob, './fiche-prod.pdf');
  };

  const onSubmit: SubmitHandler<ClientInfoForm> = () => {
    generatePdfDocument()
      .then(() => {
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
      .catch((e) => {
        console.error(e);
        console.warn('Probleme a la génération');
      });
  };

  const emptyModelForm: ModelForm = useMemo(() => ({ comment: '', leftCirc: 0, rightCirc: 0, tigeHeight: 0 }), []);

  const [formCirc, setFormCirc] = useState<ModelForm[]>([emptyModelForm]);

  return (
    <form>
      <table>
        <thead>
          <th>Circ. G</th>
          <th>Haut. Tige</th>
          <th>Circ. G</th>
        </thead>
        <tbody>
          {formCirc.map((line, key) => (
            <tr key={key}>
              <td>
                <TextField id="outlined-basic" variant="outlined" value={line.leftCirc} />
              </td>
              <td>
                <TextField id="outlined-basic" variant="outlined" value={line.tigeHeight} />
              </td>
              <td>
                <TextField id="outlined-basic" variant="outlined" value={line.rightCirc} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        name="addARow"
        variant="contained"
        size="small"
        onClick={() => setFormCirc((prevState) => [...prevState, emptyModelForm])}
      >
        Ajouter une mesure
      </Button>
    </form>
  );
};
