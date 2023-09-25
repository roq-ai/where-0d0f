import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  location: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  organization_id: yup.string().nullable().required(),
});
