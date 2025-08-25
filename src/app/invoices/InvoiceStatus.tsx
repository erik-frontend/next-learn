import clsx from 'clsx';
import { Invoice } from "../invoices/definitions";

export default function InvoiceStatus({ status }: { status: Invoice['status'] }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status}
    </span>
  );
}
