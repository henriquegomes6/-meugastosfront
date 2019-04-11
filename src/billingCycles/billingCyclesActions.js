import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';

const BASE_URL = 'http://localhost:3003/api';

export function getList() {
  const request = axios.get(`${BASE_URL}/billingcycles`);

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  return dispatch => {
    axios.post(`${BASE_URL}/billingcycles`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operaçao Realizada com sucesso');
        dispatch([
          resetForm('billingCyclesForm'),
          getList(),
          showTabs('tabList', 'tabCreate'),
          selectTab('tabList'),
        ]);
      }).catch(error => {
        toastr.warning('Erro', 'Erro ao salvar os dados');
        error.response.data.errors.forEach(e => toastr.error('Erro', e));
      });
  };

}
