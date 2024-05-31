'use client';
import styled from 'styled-components';

const FontSizeByType = (type: string) => {
  switch (type) {
    case 'body-caption':
      return '11px';

    case 'body-xsmall':
    case 'paragraph-xsmall':
    case 'heading-xsmall':
      return '12px';

    case 'paragraph-small':
    case 'heading-small':
    case 'body-small':
      return '13px';

    case 'paragraph-regular':
    case 'heading-regular':
    case 'body-regular':
      return '14px';

    case 'navigation-active':
    case 'navigation-default':
      return '15px';

    case 'paragraph-text-editor':
    case 'paragraph-medium':
    case 'heading-medium':
    case 'body-medium':
      return '16px';

    case 'heading-large':
      return '18px';

    case 'headline-small':
    case 'heading-xlarge':
      return '20px';

    case 'headline-regular':
      return '24px';

    default:
      return '16px';
  }
};

const FontWeightByType = (type: string) => {
  switch (type) {
    case 'paragraph-xsmall':
    case 'paragraph-small':
    case 'paragraph-regular':
    case 'paragraph-medium':
    case 'paragraph-text-editor':
    case 'body-caption':
    case 'body-xsmall':
    case 'body-small':
    case 'body-regular':
    case 'body-medium':
      return '400';

    case 'heading-xsmall':
    case 'headline-small':
    case 'headline-regular':
    case 'heading-small':
    case 'heading-regular':
    case 'heading-medium':
    case 'heading-large':
    case 'heading-xlarge':
    case 'navigation-default':
      return '600';

    case 'navigation-active':
      return '700';

    default:
      return '400';
  }
};

const LineHeightByType = (type: string) => {
  switch (type) {
    case 'body-caption':
      return '14.3px';

    case 'body-xsmall':
    case 'heading-xsmall':
      return '15.6px';

    case 'body-small':
    case 'heading-small':
      return '16.9px';

    case 'paragraph-xsmall':
      return '18px';

    case 'body-regular':
    case 'heading-regular':
      return '18.2px';

    case 'paragraph-small':
    case 'navigation-default':
    case 'navigation-active':
      return '19.5px';

    case 'body-medium':
    case 'heading-medium':
      return '20.8px';

    case 'paragraph-regular':
      return '21px';

    case 'heading-large':
      return '23.4px';

    case 'paragraph-medium':
      return '24px';

    case 'paragraph-text-editor':
      return '27.2px';

    case 'headline-small':
    case 'heading-xlarge':
      return '26px';

    case 'headline-regular':
      return '31.2px';

    default:
      return '16';
  }
};

const NavigationColorText = (type: string, color: string) => {
  switch (type) {
    case 'navigation-default':
      return 'var(--text-secondary)';

    case 'navigation-active':
      return 'var(--green-default)';

    default:
      return color;
  }
};

export const TextComponent = styled.p<{
  $type: string;
  $color: string;
}>`
  color: ${(props) => NavigationColorText(props.$type, props.$color)};
  font-weight: ${(props) => FontWeightByType(props.$type)};
  line-height: ${(props) => LineHeightByType(props.$type)};
  font-size: ${(props) => FontSizeByType(props.$type)};
`;
