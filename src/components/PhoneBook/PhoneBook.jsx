import { Component } from 'react';
// import Contacts from 'components/Contacts/Contacts';
import style from './PhoneBook.module.css';
import { nanoid } from 'nanoid';

class PhoneBook extends Component {
  static propTypes = {};
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  loginInputId = nanoid();

  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const { contacts, name, number } = this.state;
    this.setState({
      contacts: [{ name: name, number: number, id: id }, ...contacts],
    });
  };

  handleChangeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleChangeFilter = e => {
    console.log(e.currentTarget.value);
    this.setState({ filter: e.currentTarget.value });
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        el => el.name === e.currentTarget.value
      ),
    }));
  };

  findName = () => {
    const { contacts, filter } = this.state;
    const normalizeRegistr = filter.toLowerCase();
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeRegistr)
    );
  };

  deleteNumber = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== contactId),
    }));
  };

  render() {
    const { contacts, name } = this.state;
    console.log(contacts);

    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>PhoneBook</h1>
        <form onSubmit={this.handleSubmit} className={style.form} action="">
          <label name="Name">
            <input
              className={style.input}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter name"
              onChange={this.handleChangeInput}
            />
            <input
              className={style.input}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter number"
              onChange={this.handleChangeInput}
            />
          </label>
          <button className={style.button} type="submit">
            Add contact
          </button>
        </form>
        <label htmlFor="">
          <input
            className={style.input}
            type="text"
            placeholder="Find name"
            onChange={this.handleChangeFilter}
          />
        </label>
        <p className={style.text}>Contacts</p>
        <div>
          <ul>
            {contacts.map(({ name, number, id }) => {
              return (
                <li className={style.item} key={id}>
                  <span>{name}: </span>
                  <span>{number}</span>
                  <button
                    onClick={() => this.deleteNumber(id)}
                    className={style.button_delete}
                    type="button"
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default PhoneBook;
