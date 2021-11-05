import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 225 225" {...props}>
      <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)">
        <path d="M1045 2194 c-60 -137 -110 -226 -163 -289 -31 -37 -67 -82 -80 -99
        -24 -33 -62 -143 -62 -181 0 -18 -27 -44 -112 -111 -167 -129 -315 -263 -481
        -433 l-148 -151 53 -52 c41 -41 62 -74 90 -142 94 -220 276 -417 598 -645
        l115 -81 6 142 c7 161 12 190 45 266 35 79 78 127 140 158 52 26 60 27 157 21
        117 -7 235 -37 387 -97 125 -49 209 -61 261 -36 58 28 176 133 241 214 33 42
        76 87 94 100 82 55 70 133 -28 183 -15 8 -53 39 -85 70 -64 61 -183 153 -280
        214 -55 35 -65 46 -79 90 -34 102 -84 148 -223 206 -42 17 -78 33 -80 35 -1 1
        6 31 18 66 43 131 51 305 20 446 -15 71 -25 82 -49 53 -49 -58 -121 -192 -126
        -233 -6 -57 -45 -230 -50 -225 -2 2 -9 67 -14 143 -5 76 -16 166 -25 199 -20
        76 -72 189 -96 211 -18 16 -20 14 -44 -42z m544 -905 c86 -30 59 -159 -34
        -159 -86 0 -113 118 -35 157 31 16 30 16 69 2z"/>
        </g>
    </Svg>
  );
};

export default Icon;
