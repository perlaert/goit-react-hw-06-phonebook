import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ items, onDeleteContact }) => {
  return (
    <section>
      <ul className={style.contactsList}>
        {items.map(({ id, name, number }) => (
          <li key={id} className={style.contactItem}>
            <p>{name}: </p>
            <p>{number}</p>
            <button
              className={style.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

ContactList.protTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  items: getVisibleContacts(items, filter),
});

const mapDispatchtoProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ContactList);
