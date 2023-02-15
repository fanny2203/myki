//Globals
import { useSelector } from "react-redux";

export default function TutorialModel ({ setup, setSetup }) {

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const Collapse = () => (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 8H7.41L9.71 5.71C9.80324 5.61676 9.8772 5.50607 9.92766 5.38425C9.97812 5.26243 10.0041 5.13186 10.0041 5C10.0041 4.86814 9.97812 4.73757 9.92766 4.61575C9.8772 4.49393 9.80324 4.38324 9.71 4.29C9.61676 4.19676 9.50607 4.1228 9.38425 4.07234C9.26243 4.02188 9.13186 3.99591 9 3.99591C8.86814 3.99591 8.73757 4.02188 8.61575 4.07234C8.49393 4.1228 8.38324 4.19676 8.29 4.29L4.29 8.29C4.19896 8.3851 4.12759 8.49725 4.08 8.62C3.97998 8.86346 3.97998 9.13654 4.08 9.38C4.12759 9.50275 4.19896 9.6149 4.29 9.71L8.29 13.71C8.38296 13.8037 8.49356 13.8781 8.61542 13.9289C8.73728 13.9797 8.86799 14.0058 9 14.0058C9.13201 14.0058 9.26272 13.9797 9.38458 13.9289C9.50644 13.8781 9.61704 13.8037 9.71 13.71C9.80373 13.617 9.87812 13.5064 9.92889 13.3846C9.97966 13.2627 10.0058 13.132 10.0058 13C10.0058 12.868 9.97966 12.7373 9.92889 12.6154C9.87812 12.4936 9.80373 12.383 9.71 12.29L7.41 10H19C19.2652 10 19.5196 9.89464 19.7071 9.70711C19.8946 9.51957 20 9.26522 20 9C20 8.73478 19.8946 8.48043 19.7071 8.29289C19.5196 8.10536 19.2652 8 19 8ZM1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18C1.26522 18 1.51957 17.8946 1.70711 17.7071C1.89464 17.5196 2 17.2652 2 17V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0Z"/>
    </svg>  
  )

  return <div className={`${setup ? 'block' : 'hidden' } ' w-full flex flex-col items-center justify-start gap-4 pt-5 overflow-y-visible '`}>
    <div className="flex items-start justify-start gap-4 w-full">
      <button onClick={() => setSetup(false)} className="rounded-sm p-2 rotate-180 text-white bg-color-primary"  style={{ background: primaryColor }}>
        <Collapse />
      </button>
      <p className="font-medium text-2xl font-eigrantch-mono ml-4">
        Setup Guide
      </p>
    </div>

    <svg width="529" height="331" viewBox="0 0 529 331" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1662_31695)">
      <rect x="4" y="4" width="521" height="323" rx="5" fill="#FDFEFE"/>
      </g>
      <defs>
      <filter id="filter0_d_1662_31695" x="0" y="0" width="529" height="331" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1662_31695"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1662_31695" result="shape"/>
      </filter>
      </defs>
    </svg>

    <div className="w-full px-10">
      <p className="text-lg font-normal pb-4">
        What is a database?
      </p>
      <div className=" overflow-y-auto whitespace-pre-wrap flex-col gap-4">
        Accumsan parturient vestibulum eget netus maecenas proin a rhoncus porttitor primis ullamcorper taciti condimentum ultrices potenti ullamcorper neque dignissim. Facilisis id mi ultrices suspendisse potenti gravida pulvinar laoreet hendrerit suscipit placerat nascetur id ullamcorper a parturient fermentum adipiscing fermentum parturient mattis purus ac eget inceptos id. A praesent ante volutpat purus a ullamcorper platea interdum mi natoque eu aptent vehicula gravida aptent justo parturient felis parturient tempus consectetur mi parturient himenaeos scelerisque ac congue vehicula. Magna magnis urna faucibus in quis est id adipiscing condimentum ornare aliquet scelerisque tempor proin pulvinar parturient cum ornare quisque ullamcorper. Nisi massa aliquam vestibulum condimentum hendrerit sapien odio adipiscing consectetur cum commodo scelerisque dignissim enim.
      </div>
    </div>
  </div>
}