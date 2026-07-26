'use client';

import { useEffect } from 'react';
import { datadogLogs } from '@datadog/browser-logs';

export default function DatadogInit() {
    useEffect(() => {
        datadogLogs.init({
            clientToken: 'pub267280b6b6893273ccb1c54500562269',
            site: 'datadoghq.eu',
            forwardErrorsToLogs: true,
            sessionSampleRate: 100
        });
        datadogLogs.logger.info('App loaded', { name: 'goamaken', env: 'production' });

    }, []);

    return null;
}