import { OModal } from '../OModal';
import { OFormCredit } from '../OFormCredit';
import { OCreditMessage } from '../OCreditMessage';
import { createCredit } from '@/services/credit';
import { CreditForm } from '@/schemas/credit-schema';
import { useState } from 'react';
import { Credit } from '@/models/credit';

type CreditModalProps = {
  open: boolean;
  handleClose: () => void;
};

export function OCreditModal({ open, handleClose }: CreditModalProps) {
  const [credit, setCredit] = useState<Credit | null>(null);

  const onSubmit = (data: CreditForm) => {
    createCredit(data).then((credit) => {
      setCredit(credit);
    });
  };

  const onClose = () => {
    setCredit(null);
    handleClose();
  };

  return (
    <OModal title="Solicitar Análise de Crédito" open={open} handleClose={onClose}>
      {!credit ? (
        <OFormCredit onSubmit={onSubmit} />
      ) : (
        <OCreditMessage onClick={onClose} score={credit.score} message={credit.credit} />
      )}
    </OModal>
  );
}
