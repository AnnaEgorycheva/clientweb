import React, { useCallback, useEffect, useMemo, useState } from 'react';
import API from '../../api/api';
import { ICredit } from '../../api/types';
import { userInfo } from '../../constData/constData';

const data = [
    {
        title: '123',
        isActive: 0,
    },
    {
        title: '134',
        isActive: 0,
    },
    {
        title: '245',
        isActive: 0,
    }
]

const Credit: React.FC = () => {
    const [numberAccount, setNumberAccount] = useState<string>();
    const [creditRates, setCreditRates] = useState<ICredit[]>();
    const [credit, setCredit] = useState<string>();

    const onChange = useCallback((value: string) => {
        console.log(value);
        setCredit(value);
    }, []);


    const createAccount = async () => {
        //const result = await API.createAccount(userInfo.userId, 1);
        //setNumberAccount(result.date.accountNumber);
        //const credit = await API.getCreditRates();
        //setCreditRates(credit.date);
        setCreditRates(data);
        setNumberAccount('12');
    };
    
    const takeCredit = async () => {
        //const result = await API.createAccount(userInfo.userId, 1);
        //setNumberAccount(result.date.accountNumber);
        setNumberAccount(undefined);
    };

    return (
        <blockquote style={{ background: '#FFFFFF', border: 'solid', borderColor: '#000080', padding: '10px', marginTop: '10px' }}>
            <p style={{ margin: '0px' }}>Взять кредит</p>
            {!numberAccount && (<button
                onClick={createAccount} 
                title='Открыть кредитный счет'
                style={{ background: '#87CEFA', borderWidth: 2, marginRight: '10px', marginBlock: '10px', padding: '5px', borderRadius: 5 }}
            >Открыть кредитный счет</button>)}
            {numberAccount && 
                (<select 
                    name="select" 
                    onChange={(event) => {
                        onChange(event.target.value);
                    }}
                    style={{ marginBlock: '10px', padding: '5px', marginRight: '10px' }}>
                    {creditRates?.map(item => {
                        return (<option value={item.title}>{item.title}</option>);
                    })}
                </select>)}
            {numberAccount && (<button
                onClick={takeCredit} 
                title='Взять кредит'
                style={{ background: '#87CEFA', borderWidth: 2, marginRight: '10px', marginBlock: '10px', padding: '5px', borderRadius: 5 }}
            >Взять кредит</button>)}
        </blockquote>
    );
}

export default Credit;