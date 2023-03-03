import React, { useCallback, useEffect, useMemo, useState } from 'react';

const data = [
    '1234',
    '1356',
    '9883',
    '2434',
];

const CustomerAccounts = () => {
    const [jk, kl] = useState<string>('hh');
    console.log(data);

    //const list = useMemo(() => )
    return (
        <blockquote style={{ background: '#98FB98', border: 'solid' }}>
            Информация о счетах клиента ...
            <ul >
                {data.map(todo => (<p >{todo}</p>))}
            </ul>
        </blockquote>
    );
}

export default CustomerAccounts;