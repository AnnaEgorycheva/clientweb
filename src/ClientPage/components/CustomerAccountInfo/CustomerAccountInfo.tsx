import React, { useCallback, useEffect, useState } from 'react';

const CustomerAccountInfo = () => {
    const [jk, kl] = useState<string>('hh');
    console.log(jk);

    return (
        <blockquote style={{ background: '#98FB98', border: 'solid' }}>
            Информация о счете № ...
        </blockquote>
    );
}

export default CustomerAccountInfo;