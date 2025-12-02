import React from 'react';

export interface BaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface BenefitItem extends BaseItem {
  icon?: React.ReactNode;
}

export interface SectionData {
  title: string;
  subtitle?: string;
  items: BenefitItem[];
}

export enum SectionType {
  TRAFFIC = 'traffic',
  MONETIZATION = 'monetization',
  SOCIAL = 'social',
  HONOR = 'honor'
}