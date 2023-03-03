import React, { useCallback, useEffect, useState } from 'react';
import Credit from './components/Credit/Credit';
import CustomerAccountInfo from './components/CustomerAccountInfo/CustomerAccountInfo';
import CustomerAccounts from './components/CustomerAccounts/CustomerAccounts';
import CustomerInformation from './components/CustomerInformation/CustomerInformation';
import HistoryOperationAccounts from './components/HistoryOperationAccounts/HistoryOperationAccounts';

const ClientPage = () => {
    const [jk, kl] = useState<string>('hh');
    console.log(jk);

    return (
        <>
            <CustomerInformation/>
            <CustomerAccounts/>
            <CustomerAccountInfo/>
            <HistoryOperationAccounts/>
            <Credit/>

            <blockquote style={{ background: '#98FB98', border: 'solid' }}>
                Внести деньги<br/>
                <button>Внести деньги</button>
            </blockquote>

            <blockquote style={{ background: '#98FB98', border: 'solid' }}>
                Снять деньги<br/>
                <button>снять деньги</button>
            </blockquote>
        </>
    );
}

export default ClientPage;