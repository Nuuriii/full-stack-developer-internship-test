'use client';
import styled from 'styled-components';

const FontSizeByType = (type: string) => {
  switch (type) {
    case 'paragraph-xsmall':
    case 'heading-xsmall':
      return '12px';

    case 'paragraph-small':
    case 'heading-small':
      return '13px';

    case 'paragraph-regular':
    case 'heading-regular':
      return '14';

    case 'paragraph-text-editor':
    case 'paragraph-medium':
    case 'heading-medium':
      return '16px';

    case 'heading-large':
      return '18px';

    case 'heading-xlarge':
      return '20px';

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
      return '400';

    case 'heading-xsmall':
    case 'heading-small':
    case 'heading-regular':
    case 'heading-medium':
    case 'heading-large':
    case 'heading-xlarge':
      return '600';

    default:
      return '400';
  }
};

const LineHeightByType = (type: string) => {
  switch (type) {
    case 'heading-xsmall':
      return '15.6px';

    case 'heading-small':
      return '16.9px';

    case 'paragraph-xsmall':
      return '18px';

    case 'heading-regular':
      return '18.2px';

    case 'paragraph-small':
      return '19.5px';

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

    case 'heading-xlarge':
      return '26px';

    default:
      return '16';
  }
};

export const TextComponent = styled.p<{
  $type: string;
  $color: string;
}>`
  color: ${(props) => props.$color};
  font-weight: ${(props) => FontWeightByType(props.$type)};
  line-height: ${(props) => LineHeightByType(props.$type)};
  font-size: ${(props) => FontSizeByType(props.$type)};
`;
