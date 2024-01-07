import { SVGProps } from "react";

export const Icons = {
  LogoIcon: ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={props.width ?? "37"}
        height={props.height ?? "38"}
        viewBox={props.viewBox ?? "0 0 37 38"}
        {...props}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.335 37.0461C31.492 34.2654 36.5652 27.3104 36.5652 19.1705C36.5652 8.58292 27.9823 0 17.3947 0C9.68964 0 3.0462 4.54572 0 11.1017C2.59131 9.33377 6.03668 8.26401 10.4772 8.26401C21.9012 8.26401 26.4132 12.824 27.0852 21.992H18.3972C18.0132 17.672 16.1892 15.176 10.6212 15.176C4.8132 15.176 2.31723 18.488 2.31723 25.064C2.31723 31.544 4.62122 34.904 10.3812 34.904C16.0932 34.904 18.1572 32.504 18.4932 27.848H27.2772C26.9668 31.8053 26.0685 34.8376 24.335 37.0461Z"
          fill={props.color ? props.color : "white"}
        />
      </svg>
    );
  },
};
