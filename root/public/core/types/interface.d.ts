import * as React from 'react';

export interface IBlokProps {
  label?: string;
  tint?: string;
  bgimg?: string;
  width?: string;
  height?: string;
  close?: string;
  component?: object;
}
export interface IFooterProps {
  copyright: string;
  symbol: string;
  year: number;
  company: string;
  rights: string;
}
export interface ISeoProps {
  defTitle?: string;
  siteDesc?: string;
}
