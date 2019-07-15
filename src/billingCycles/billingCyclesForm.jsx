import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import labelAndInput from '../common/form/labelAndInput';

class BillingCyclesForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={labelAndInput}
            label='Nome' cols='12 4' placeholder='Informe o nome' type='text'/>
          <Field name='month' component={labelAndInput}
            label='Mes' cols='12 4' placeholder='Informe o mes' type='month'/>
          <Field name='year' component={labelAndInput}
          label='Ano' cols='12 4' placeholder='Informe o ano' type='number' min='2000' max='3000' maxLength='4'/>
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'billingCyclesForm' })(BillingCyclesForm);
