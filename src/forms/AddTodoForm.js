import React from 'react';
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
class AddTodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: '', errors: {value: ''}};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    event.preventDefault();
    const value = event.target.value;
    let errors = this.state.errors;
    errors.value = value.length < 5 ? 'Title must be 5 character long' : '';
    this.setState({errors, value: value})
  }

  handleSubmit(event){
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
      this.props.addTodo && this.props.addTodo(this.state.value);
      this.setState({value: ''});
    }else{
      console.error('Invalid Form')
    }
  }

  componentWillReceiveProps(nextProps){
    if (!this.props.editMode && nextProps.editMode || (nextProps.editMode && nextProps.editData.title != this.props.editData.title)) {
      this.setState({value: nextProps.editData.title})
    }
  }

  render()  {
    const {errors} = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Todo Title:
            <input type='text' value={this.state.value} onChange={this.handleChange}/>
            {errors.value.length > 0 && 
              <span className='error'>{errors.value}</span>}
        </label>
        <input type='submit' value='submit' />
      </form>
    )
  }
};

export default AddTodoForm;
