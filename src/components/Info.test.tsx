/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import { useInfos } from '../hooks';
import Info from './Info';

const mockedUseInfos = useInfos as jest.Mock<any>;

jest.mock('./hooks/useInfos');

describe('<Info />', () => {
  beforeEach(() => {
    mockedUseInfos.mockImplementation(() => ({ isFetching: true }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders without crashing', () => {
    render(<Info />);
  });

  it('Fetches the correct text', () => {
    const { rerender } = render(<Info />);

    // Fetches a default info when `text` isn't specified (text="")
    expect(useInfos).toHaveBeenCalledWith('');

    rerender(<Info text="758371536" />);

    setTimeout(() => {
      expect(useInfos).toHaveBeenCalledWith('758371536');
      expect(useInfos).toHaveBeenCalledTimes(2);
    }, 500);
  });

  it('Displays loading indicator', () => {
    const { getByText } = render(<Info />);

    expect(getByText(/fetching data.../i)).toBeVisible();
  });

  it('Displays error message', () => {
    mockedUseInfos.mockImplementation(() => ({
      isFetching: false,
      isError: true,
      error: { message: 'unable to fetch the info data' },
    }));
    const { getByText, queryByText } = render(<Info />);

    expect(queryByText(/fetching data/i)).toBeFalsy();
    getByText(/unable to fetch the info data/i);
  });

  it('Displays data', () => {
    const mockedInfosData = {
      code: 1,
      name: 'Shervin Chen',
      qlogo: 'https://q2.qlogo.cn/headimg_dl?spec=100&dst_uin=758371536',
      qq: '758371536',
    };
    mockedUseInfos.mockImplementation(() => ({
      isFetching: false,
      data: mockedInfosData,
    }));

    const { getByText, queryByText, getByRole } = render(<Info />);

    expect(queryByText(/fetching data/i)).toBeFalsy();
    getByText(mockedInfosData.name);
    getByText(mockedInfosData.qq);

    const avatar = getByRole('img');
    expect(avatar).toHaveAttribute('src', mockedInfosData.qlogo);
    expect(avatar).toHaveAttribute('alt', mockedInfosData.name);
  });
});
