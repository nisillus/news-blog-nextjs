import styled from 'styled-components';
import Slider from 'react-slick';

import {
  medias,
  pixelsToRem
} from 'styles/mixins.style';

export const Container = styled(Slider)`
  .slick-track {
    display: flex;
    flex-direction: row;
  }

  .slick-slide {
    width: calc(100vmin - ${ pixelsToRem(40) });
    padding-right: ${ pixelsToRem(24) };
  }

  ${medias.SMALL_SCREEN`
    .slick-slide {
      width: calc(100vmin - ${ pixelsToRem(72) });
    }
  `}

  ${medias.MEDIUM_SCREEN`
    .slick-slide {
      width: 100%;
      padding: 0;
    }
  `}
`;
