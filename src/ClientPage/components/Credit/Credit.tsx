import React, { useCallback, useEffect, useState } from 'react';

const Credit = () => {
    const [jk, kl] = useState<string>('');
    console.log(jk);

    const onClick = useCallback(() => {
        kl('кредит 2');
    }, []);

    return (
        <blockquote style={{ background: '#98FB98', border: 'solid' }}>
            Кредит {jk}<br/>
            <button onClick={onClick}>взять кредит</button><br/>
            <button>погасить кредит</button>
        </blockquote>
    );
}

export default Credit;