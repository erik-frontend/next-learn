import { invoices } from './placeholder-data';
import InvoiceStatus from './InvoiceStatus';

export default function InvoicesList() {
  return (
    <ul>
      {invoices.map((inv) => (
        <li key={inv.id}>
          {inv.customer_id} — {inv.amount}₽ — <InvoiceStatus status={inv.status} />
        </li>
      ))}
    </ul>
  );
}

