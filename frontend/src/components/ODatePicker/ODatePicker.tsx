import { DatePicker } from '@mui/x-date-pickers';

type DatePickerProps = {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
};

export function ODatePicker({ label, name }: DatePickerProps) {
  return <DatePicker format="DD/MM/YYYY" label={label} sx={{ flex: 1 }} />;
}
