import css from './TableItem.module.css';

export const TableItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
