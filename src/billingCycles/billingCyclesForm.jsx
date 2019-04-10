import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class BillingCyclesForm extends Component {
  render() {
    return (
      <form role='form'>
        <div className='box-body'>
          <Field name='name' component='input' type='text' />
          <Field name='month' component='input' type='month'/>
          <Field name='year' component='input' type='year'/>
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'billingCyclesForm' })(BillingCyclesForm);
