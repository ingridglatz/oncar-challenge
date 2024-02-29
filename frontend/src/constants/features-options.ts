import { Features } from '@/models/features';

export const featuresOptions = [
  {
    value: Features.Airbags,
    label: 'Airbags',
  },
  {
    value: Features.PowerWindows,
    label: 'Vidros Elétricos',
  },
  {
    value: Features.AirConditioning,
    label: 'Ar Condicionado',
  },
  {
    value: Features.AutomaticTransmission,
    label: 'Automático',
  },
  {
    value: Features.ManualTransmission,
    label: 'Manual',
  },
];

export const featuresLabels = {
  [Features.Airbags]: 'Airbags',
  [Features.PowerWindows]: 'Vidros Elétricos',
  [Features.AirConditioning]: 'Ar Condicionado',
  [Features.AutomaticTransmission]: 'Automático',
  [Features.ManualTransmission]: 'Manual',
};
