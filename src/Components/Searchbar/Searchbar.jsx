import { Component } from 'react';
// import PropTypes from 'prop-types';

export class Searchbar extends Component {
  // static propTypes = {
  //   onSubmit: PropTypes.func,
  // };

    state = {
        name: '',
    };

    handleChange = e => {
        const value = e.target.value.trim();
      this.setState({ name: value, });
      // this.setState({ name: e.currentTarget.value.trim(), });
    };

  handleSubmitForm = e => {
    // const { onSabmit } = this.props;
    // const { name } = this.state;
    e.preventDefault();
    // onSabmit(name);
        if (this.state.name !== '') {
            const queryValue = this.state.name;
            this.props.onSubmit(queryValue);
        }
    };

    render() {
        const { handleChange, handleSubmitForm, state} = this;
      return (
        <>
          <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmitForm}>
              <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
              </button>

              <input
                value={state.name}
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={handleChange}
              />
            </form>
          </header>
        </>
            
      );
    }
}





// {/* <header className="Searchbar">
//   <form className="SearchForm">
//     <button type="submit" className="SearchForm-button">
//       <span className="SearchForm-button-label">Search</span>
//     </button>

//     <input
//       className="SearchForm-input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header> */}
