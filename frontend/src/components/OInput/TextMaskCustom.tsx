import React from 'react';
import { IMaskInput } from 'react-imask';

type TextMaskCustomProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  mask: string;
};

export const TextMaskCustom = React.forwardRef<HTMLInputElement, TextMaskCustomProps>(function TextMaskCustom(
  props,
  ref,
) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask={props.mask}
      inputRef={ref}
      onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
