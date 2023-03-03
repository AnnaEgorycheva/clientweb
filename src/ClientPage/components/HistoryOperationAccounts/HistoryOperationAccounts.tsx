import React, { useCallback, useEffect, useState } from 'react';

const HistoryOperationAccounts = () => {
    const [jk, kl] = useState<string>('hh');
    console.log(jk);

    return (
        <blockquote style={{ background: '#98FB98', border: 'solid' }}>
            История операция по счету № ...
        </blockquote>
    );
}

export default HistoryOperationAccounts;