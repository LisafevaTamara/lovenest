import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={37} height={36} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M22.084 19.462 37 18l-14.916-1.462 9.482-11.25-11.563 9.224L18.5 0l-1.503 14.512L5.434 5.287l9.482 11.25L0 18l14.916 1.462-9.482 11.25 11.563-9.224L18.5 36l1.503-14.512 11.563 9.224-9.482-11.25Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h37v36H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
