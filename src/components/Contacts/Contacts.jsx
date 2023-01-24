import PropTypes from 'prop-types';
import style from './Contacts.module.css';

function Contacts({ filterName, onClick }) {
  return (
    <ul>
      {filterName.map(({ name, number, id }) => {
        return (
          <li className={style.item} key={id}>
            <span>{name}: </span>
            <span>{number}</span>
            <button
              onClick={() => onClick(id)}
              className={style.button_delete}
              type="button"
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;

Contacts.propTypes = {
  onClick: PropTypes.func.isRequired,
  filterName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
