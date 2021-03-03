import React, { useCallback, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Barcode from '../../utils/barcodeParser';

import { useAuth } from '../../hooks/Auth';

import Header from '../../components/Header';
import TextArea from '../../components/TextArea';

import { Container, Form } from './styles';
import api from '../../services/api';

function Home() {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const { token } = useAuth();

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        setLoading(true);
        const schema = Yup.object().shape({
          alloy: Yup.string(),
          along: Yup.string(),
          application_type: Yup.string().required(),
          client_code: Yup.string(),
          earing: Yup.string(),
          estimated_length: Yup.string(),
          external_varnish: Yup.string(),
          gross_weight: Yup.string(),
          identifier: Yup.string(),
          internal_varnish: Yup.string(),
          le: Yup.string(),
          lot_bobine: Yup.string().required(),
          lot_factory: Yup.string(),
          lr: Yup.string(),
          net_weight: Yup.string().required(),
          nominal_thickness: Yup.string(),
          order: Yup.string(),
          post_lube: Yup.string(),
          product: Yup.string().required(),
          quenching: Yup.string(),
          real_thickness: Yup.string(),
          sigma: Yup.string(),
          spread: Yup.string(),
          tare: Yup.string(),
          thickness_rating: Yup.string().required(),
          tolling: Yup.string(),
          water_mark: Yup.string(),
        });

        const formdata = new FormData(e.target as HTMLFormElement);
        const barcodeString = String(formdata.get('barcode'));

        const barcode = Barcode.parser(`${barcodeString}`);

        await schema.validate(barcode, {
          abortEarly: false,
        });

        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.post('/barcode', barcode);

        if (data.status === 'ok') {
          toast.success('Barcode cadastrado com sucesso!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }

        setValue('');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          toast.warn('Codebar com formato inválido!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }

        toast.error(
          'Erro ao salvar os dados, verifique sua conexão, ou contate o administrador',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      } finally {
        setLoading(false);
      }
    },
    [token]
  );

  const handleChange = useCallback((e) => {
    e.target.setCustomValidity('');
    setValue(e.target.value);
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <Form onSubmit={handleSubmit}>
          <TextArea
            name="barcode"
            placeholder="Informe o código"
            label="Barcode"
            rows={8}
            value={value}
            onChange={handleChange}
          />
          <button type="submit">{loading ? 'Salvando...' : 'Salvar'}</button>
        </Form>
      </main>
    </Container>
  );
}

export default Home;
