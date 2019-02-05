import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='DashBoard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#/billingcycles' label='Pagamentos' icon='usd' />
        </MenuTree>
    </ul>
);
