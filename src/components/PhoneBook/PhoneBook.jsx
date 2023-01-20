import { Component } from 'react';
import style from './PhoneBook.module.css';

class PhoneBook extends Component {
  static propTypes = {};
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { contacts, name } = this.state;
    contacts.push(name);
    console.log(this.state);
  };

  handleChangeInput = e => {
    this.setState({ name: e.currentTarget.value });
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>PhoneBook</h1>
        <form onSubmit={this.handleSubmit} className={style.form} action="">
          <label htmlFor="" name="Name">
            <input
              className={style.input}
              type="text"
              name={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter name"
              onChange={this.handleChangeInput}
            />
          </label>
          <button className={style.button} type="submit">
            Add contact {name}
          </button>
        </form>
        <p className={style.text}>Contacts</p>
        <div>{this.qwe}</div>
      </div>
    );
  }
}

export default PhoneBook;
