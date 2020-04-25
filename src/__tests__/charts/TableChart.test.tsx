import { render, RenderResult, wait } from '@testing-library/react';
import React from 'react';
import { TableChart, TableChartProps } from '../../components/charts/TableChart';
import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from 'react-use-analytics-api';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(props: TableChartProps, children: React.ReactNode = undefined): RenderResult {
  return render(<TableChart {...props}>{children}</TableChart>);
}

describe('TableChart', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: TableChartProps = {
      gapi: result.current.gapi,
      container: 'test-container',
      query: {
        metrics: 'ga:sessions',
        dimensions: 'ga:date',
        'start-date': '28daysAgo',
        'end-date': 'today',
        ids: 'ga:123456789',
      },
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
