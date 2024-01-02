import { FC } from 'react';

import { LucideProps } from 'lucide-react';

interface LogoProps extends LucideProps {}

const Logo: FC<LogoProps> = (props) => {
  return (
    <svg
      width="646"
      height="484"
      viewBox="0 0 646 484"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_22_30)">
        <path
          d="M376 317L305.5 172.5L213.5 302.5L175.5 261.5L33 484H446L376 317Z"
          fill="url(#paint0_linear_22_30)"
        />
        <path
          d="M335.5 304L300.5 173.5L324 172.5L293.5 24L626 487H454.5L335.5 304Z"
          fill="url(#paint1_linear_22_30)"
        />
        <g filter="url(#filter0_d_22_30)">
          <path
            d="M16 496.5L179.394 255.371C180.173 254.22 181.861 254.196 182.673 255.324L219.5 306.5L264 237.5L307.693 169.751C308.078 169.154 308.946 169.138 309.353 169.72L438.5 354.5M196.5 505.5L334.684 307.669C335.081 307.1 335.922 307.099 336.321 307.666L472.5 501M308.5 22L638.5 495.5"
            stroke="url(#paint2_linear_22_30)"
            strokeWidth="30"
            strokeLinecap="round"
          />
        </g>
        <path
          d="M530.767 183.371C527.282 203.585 517.018 221.897 501.824 235.384L469.308 189.316C472.775 184.871 475.134 179.602 476.109 173.945C477.666 164.919 475.573 155.644 470.291 148.161C465.009 140.678 456.971 135.6 447.945 134.044C442.288 133.068 436.534 133.526 431.184 135.304L398.668 89.2364C416.465 79.4373 437.157 75.8999 457.371 79.3856C480.893 83.4419 501.84 96.6762 515.605 116.177C529.37 135.678 534.824 159.848 530.767 183.371Z"
          fill="#F5E127"
          stroke="#DEB318"
          strokeWidth="20"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_22_30"
          x="-3.00146"
          y="6.99869"
          width="660.503"
          height="521.503"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_22_30"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_22_30"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_22_30"
          x1="304"
          y1="239.5"
          x2="178.5"
          y2="465.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0C6F2D" />
          <stop offset="1" stopColor="#0A3318" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_22_30"
          x1="306.5"
          y1="244.5"
          x2="416.5"
          y2="181"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0C6F2D" />
          <stop offset="1" stopColor="#26DA63" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_22_30"
          x1="39.5"
          y1="481.5"
          x2="441.5"
          y2="176"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#41322B" />
          <stop offset="1" stopColor="#BB927F" />
        </linearGradient>
        <clipPath id="clip0_22_30">
          <rect width="646" height="484" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
