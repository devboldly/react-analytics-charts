import { render, RenderResult, wait } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useAnalyticsApi } from 'react-use-analytics-api';
import { ViewSelector, ViewSelectorProps } from '../components/ViewSelector';

function renderComponent(props: ViewSelectorProps, children: React.ReactNode = undefined): RenderResult {
  return render(<ViewSelector {...props}>{children}</ViewSelector>);
}

describe('ViewSelector', () => {
  test('should render without crashing', async () => {
    const { result } = renderHook(() => useAnalyticsApi());
    // await wait(() => expect(result?.current?.ready).toBeTruthy(), { timeout: 5000 });
    const props: ViewSelectorProps = { gapi: result.current.gapi };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
