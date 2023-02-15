//Globals
import { useSelector } from "react-redux";

const Arm = ({ type = "opt1", isSelected }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);

  return {
    l1: (
      <svg
        width="233"
        height="241"
        viewBox="0 0 233 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M232 229.957C218.962 230.189 195.437 229.957 176.069 216.581C118.626 177.036 132.703 77.1268 76.3939 30.6032C62.3166 18.9723 40.1141 9.5513 1.00003 10.0165"
          stroke="url(#paint0_linear_1_341)"
          strokeOpacity={isSelected ? "1" : "0.5"}
          strokeWidth="20"
          strokeMiterlimit="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_341"
            x1="232"
            y1="230"
            x2="-32.513"
            y2="63.1196"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={primaryColor} />
            <stop
              offset="1"
              stopColor={primaryColor}
              stopOpacity={isSelected ? "1" : "0"}
            />
          </linearGradient>
        </defs>
      </svg>
    ),
    l2: (
      <svg
        width="234"
        height="120"
        viewBox="0 0 234 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M233 109.709C203.641 110.557 177.245 109.921 162.251 102.712C119.604 82.2518 119.783 45.3592 80.2786 21.7183C57.3839 8.04255 21.2012 10.0568 1.00001 10.1628"
          stroke="url(#paint0_linear_1_335)"
          strokeOpacity={isSelected ? "1" : "0.5"}
          strokeWidth="20"
          strokeMiterlimit="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_335"
            x1="222.735"
            y1="110"
            x2="-7.22182"
            y2="35.3152"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={primaryColor} />
            <stop
              offset="1"
              stopColor={primaryColor}
              stopOpacity={isSelected ? "1" : "0"}
            />
          </linearGradient>
        </defs>
      </svg>
    ),
    l3: (
      <svg
        width="234"
        height="120"
        viewBox="0 0 234 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 109.709C30.3591 110.557 56.7554 109.921 71.7492 102.712C114.396 82.2518 114.217 45.3592 153.721 21.7183C176.616 8.04255 212.799 10.0568 233 10.1628"
          stroke="url(#paint0_linear_1_337)"
          strokeOpacity={isSelected ? "1" : "0.5"}
          strokeWidth="20"
          strokeMiterlimit="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_337"
            x1="233"
            y1="10"
            x2="-8.1185"
            y2="90.8808"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={primaryColor} />
            <stop
              offset="1"
              stopColor={primaryColor}
              stopOpacity={isSelected ? "1" : "0"}
            />
          </linearGradient>
        </defs>
      </svg>
    ),
    l4: (
      <svg
        width="233"
        height="241"
        viewBox="0 0 233 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M232 11.0432C218.962 10.8106 195.437 11.0432 176.069 24.4188C118.626 63.9638 132.703 163.873 76.3939 210.397C62.3166 222.028 40.1141 231.449 1 230.983"
          stroke="url(#paint0_linear_1_339)"
          strokeOpacity={isSelected ? "1" : "0.5"}
          strokeWidth="20"
          strokeMiterlimit="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_339"
            x1="232"
            y1="11"
            x2="-32.513"
            y2="177.88"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={primaryColor} />
            <stop
              offset="1"
              stopColor={primaryColor}
              stopOpacity={isSelected ? "1" : "0"}
            />
          </linearGradient>
        </defs>
      </svg>
    ),
    r1: (
      <svg
        width="233"
        height="241"
        viewBox="0 0 233 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.00002 229.957C14.0381 230.189 37.5632 229.957 56.9313 216.581C114.374 177.036 100.297 77.1268 156.606 30.6032C170.683 18.9723 192.886 9.5513 232 10.0165"
          stroke="url(#paint0_linear_1_342)"
          strokeOpacity={isSelected ? "1" : "0.5"}
          strokeWidth="20"
          strokeMiterlimit="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_342"
            x1="1.00003"
            y1="230"
            x2="265.513"
            y2="63.1196"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={primaryColor} />
            <stop
              offset="1"
              stopColor={primaryColor}
              stopOpacity={isSelected ? "1" : "0"}
            />
          </linearGradient>
        </defs>
      </svg>
    ),
    r2: (
      <svg
        width="234"
        height="120"
        viewBox="0 0 234 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 109.709C30.3591 110.557 56.7554 109.921 71.7492 102.712C114.396 82.2518 114.217 45.3592 153.721 21.7183C176.616 8.04255 212.799 10.0568 233 10.1628"
          stroke="url(#paint0_linear_1_336)"
          strokeOpacity={isSelected ? "1" : "0.5"}
          strokeWidth="20"
          strokeMiterlimit="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_336"
            x1="11.2655"
            y1="110"
            x2="241.222"
            y2="35.3152"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={primaryColor} />
            <stop
              offset="1"
              stopColor={primaryColor}
              stopOpacity={isSelected ? "1" : "0"}
            />
          </linearGradient>
        </defs>
      </svg>
    ),
    r3: (
      <svg
        width="234"
        height="120"
        viewBox="0 0 234 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M233 109.709C203.641 110.557 177.245 109.921 162.251 102.712C119.604 82.2518 119.783 45.3592 80.2786 21.7183C57.3839 8.04255 21.2012 10.0568 1.00001 10.1628"
          stroke="url(#paint0_linear_1_338)"
          strokeOpacity={isSelected ? "1" : "0.5"}
          strokeWidth="20"
          strokeMiterlimit="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_338"
            x1="1"
            y1="10"
            x2="242.118"
            y2="90.8808"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={primaryColor} />
            <stop
              offset="1"
              stopColor={primaryColor}
              stopOpacity={isSelected ? "1" : "0"}
            />
          </linearGradient>
        </defs>
      </svg>
    ),
    r4: (
      <svg
        width="233"
        height="241"
        viewBox="0 0 233 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.999995 11.0432C14.038 10.8106 37.5632 11.0432 56.9313 24.4188C114.374 63.9638 100.297 163.873 156.606 210.397C170.683 222.028 192.886 231.449 232 230.983"
          stroke="url(#paint0_linear_1_340)"
          strokeOpacity={isSelected ? "1" : "0.5"}
          strokeWidth="20"
          strokeMiterlimit="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_340"
            x1="1"
            y1="11"
            x2="265.513"
            y2="177.88"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={primaryColor} />
            <stop
              offset="1"
              stopColor={primaryColor}
              stopOpacity={isSelected ? "1" : "0"}
            />
          </linearGradient>
        </defs>
      </svg>
    ),
    centerL: (
      <svg
        width="231"
        height="20"
        viewBox="0 0 231 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M231 10H0"
          stroke="url(#paint0_linear_1583_67004)"
          strokeOpacity={isSelected ? "1" : "0.5"}
          strokeWidth="20"
          strokeMiterlimit="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1583_67004"
            x1="233.05"
            y1="9.9996"
            x2="-5.46746"
            y2="9.99979"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={primaryColor} />
            <stop
              offset="1"
              stopColor={primaryColor}
              stopOpacity={isSelected ? "1" : "0"}
            />
          </linearGradient>
        </defs>
      </svg>
    ),
    centerR: (
      <svg
        width="231"
        height="20"
        viewBox="0 0 231 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-5.55003e-06 10H231"
          stroke="url(#paint0_linear_1_344)"
          strokeOpacity={isSelected ? "1" : "0.5"}
          strokeWidth="20"
          strokeMiterlimit="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_344"
            x1="-2.0503"
            y1="9.9996"
            x2="236.467"
            y2="9.99979"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={primaryColor} />
            <stop
              offset="1"
              stopColor={primaryColor}
              stopOpacity={isSelected ? "1" : "0"}
            />
          </linearGradient>
        </defs>
      </svg>
    ),
  }[type];
};

export default Arm;
