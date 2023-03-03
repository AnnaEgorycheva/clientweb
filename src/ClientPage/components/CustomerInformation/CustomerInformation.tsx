import React, { useCallback, useEffect, useState } from 'react';

const CustomerInformation = () => {
    const [jk, kl] = useState<string>('hh');
    console.log(jk);

    return (
        <blockquote style={{ background: '#98FB98', border: 'solid' }}>
            Информация о клиенте
        </blockquote>
    );
}

export default CustomerInformation;