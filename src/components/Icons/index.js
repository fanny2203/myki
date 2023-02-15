const Icons = ({ icon = "user", color = "black" }) => {
  const allIcons = {
    user: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0005 0C8.06102 0.00368503 6.16442 0.571311 4.54177 1.63374C2.91911 2.69617 1.64043 4.20754 0.861478 5.98377C0.0825237 7.76 -0.163087 9.72442 0.154563 11.6378C0.472214 13.5511 1.33941 15.3308 2.65054 16.76C3.58696 17.775 4.72348 18.5851 5.98847 19.1392C7.25347 19.6933 8.61952 19.9793 10.0005 19.9793C11.3816 19.9793 12.7476 19.6933 14.0126 19.1392C15.2776 18.5851 16.4141 17.775 17.3505 16.76C18.6617 15.3308 19.5289 13.5511 19.8465 11.6378C20.1642 9.72442 19.9186 7.76 19.1396 5.98377C18.3606 4.20754 17.082 2.69617 15.4593 1.63374C13.8367 0.571311 11.9401 0.00368503 10.0005 0ZM10.0005 18C7.929 17.9969 5.93945 17.1903 4.45054 15.75C4.90258 14.6495 5.67157 13.7083 6.65979 13.0459C7.64801 12.3835 8.81085 12.0298 10.0005 12.0298C11.1902 12.0298 12.3531 12.3835 13.3413 13.0459C14.3295 13.7083 15.0985 14.6495 15.5505 15.75C14.0616 17.1903 12.0721 17.9969 10.0005 18ZM8.00054 8C8.00054 7.60444 8.11784 7.21776 8.3376 6.88886C8.55736 6.55996 8.86972 6.30362 9.23517 6.15224C9.60062 6.00087 10.0028 5.96126 10.3907 6.03843C10.7787 6.1156 11.135 6.30608 11.4148 6.58579C11.6945 6.86549 11.8849 7.22186 11.9621 7.60982C12.0393 7.99778 11.9997 8.39991 11.8483 8.76537C11.6969 9.13082 11.4406 9.44318 11.1117 9.66294C10.7828 9.8827 10.3961 10 10.0005 10C9.4701 10 8.9614 9.78929 8.58632 9.41421C8.21125 9.03914 8.00054 8.53043 8.00054 8ZM16.9105 14C16.0171 12.4718 14.6419 11.283 13.0005 10.62C13.5097 10.0427 13.8415 9.33066 13.956 8.56944C14.0705 7.80822 13.963 7.03011 13.6463 6.3285C13.3296 5.62688 12.8171 5.03156 12.1704 4.61397C11.5238 4.19637 10.7703 3.97425 10.0005 3.97425C9.23075 3.97425 8.47731 4.19637 7.83063 4.61397C7.18395 5.03156 6.67151 5.62688 6.35479 6.3285C6.03807 7.03011 5.93052 7.80822 6.04507 8.56944C6.15961 9.33066 6.49137 10.0427 7.00054 10.62C5.35914 11.283 3.98401 12.4718 3.09054 14C2.37848 12.7871 2.00226 11.4065 2.00054 10C2.00054 7.87827 2.84339 5.84344 4.34368 4.34315C5.84397 2.84285 7.87881 2 10.0005 2C12.1223 2 14.1571 2.84285 15.6574 4.34315C17.1577 5.84344 18.0005 7.87827 18.0005 10C17.9988 11.4065 17.6226 12.7871 16.9105 14Z"
          fill={color}
        />
      </svg>
    ),
    email: (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z"
          fill={color}
        />
      </svg>
    ),
    calendar: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 12C10.1978 12 10.3911 11.9414 10.5556 11.8315C10.72 11.7216 10.8482 11.5654 10.9239 11.3827C10.9996 11.2 11.0194 10.9989 10.9808 10.8049C10.9422 10.6109 10.847 10.4327 10.7071 10.2929C10.5673 10.153 10.3891 10.0578 10.1951 10.0192C10.0011 9.98063 9.80004 10.0004 9.61732 10.0761C9.43459 10.1518 9.27841 10.28 9.16853 10.4444C9.05865 10.6089 9 10.8022 9 11C9 11.2652 9.10536 11.5196 9.29289 11.7071C9.48043 11.8946 9.73478 12 10 12ZM15 12C15.1978 12 15.3911 11.9414 15.5556 11.8315C15.72 11.7216 15.8482 11.5654 15.9239 11.3827C15.9996 11.2 16.0194 10.9989 15.9808 10.8049C15.9422 10.6109 15.847 10.4327 15.7071 10.2929C15.5673 10.153 15.3891 10.0578 15.1951 10.0192C15.0011 9.98063 14.8 10.0004 14.6173 10.0761C14.4346 10.1518 14.2784 10.28 14.1685 10.4444C14.0586 10.6089 14 10.8022 14 11C14 11.2652 14.1054 11.5196 14.2929 11.7071C14.4804 11.8946 14.7348 12 15 12ZM10 16C10.1978 16 10.3911 15.9414 10.5556 15.8315C10.72 15.7216 10.8482 15.5654 10.9239 15.3827C10.9996 15.2 11.0194 14.9989 10.9808 14.8049C10.9422 14.6109 10.847 14.4327 10.7071 14.2929C10.5673 14.153 10.3891 14.0578 10.1951 14.0192C10.0011 13.9806 9.80004 14.0004 9.61732 14.0761C9.43459 14.1518 9.27841 14.28 9.16853 14.4444C9.05865 14.6089 9 14.8022 9 15C9 15.2652 9.10536 15.5196 9.29289 15.7071C9.48043 15.8946 9.73478 16 10 16ZM15 16C15.1978 16 15.3911 15.9414 15.5556 15.8315C15.72 15.7216 15.8482 15.5654 15.9239 15.3827C15.9996 15.2 16.0194 14.9989 15.9808 14.8049C15.9422 14.6109 15.847 14.4327 15.7071 14.2929C15.5673 14.153 15.3891 14.0578 15.1951 14.0192C15.0011 13.9806 14.8 14.0004 14.6173 14.0761C14.4346 14.1518 14.2784 14.28 14.1685 14.4444C14.0586 14.6089 14 14.8022 14 15C14 15.2652 14.1054 15.5196 14.2929 15.7071C14.4804 15.8946 14.7348 16 15 16ZM5 12C5.19778 12 5.39112 11.9414 5.55557 11.8315C5.72002 11.7216 5.84819 11.5654 5.92388 11.3827C5.99957 11.2 6.01937 10.9989 5.98079 10.8049C5.9422 10.6109 5.84696 10.4327 5.70711 10.2929C5.56725 10.153 5.38907 10.0578 5.19509 10.0192C5.00111 9.98063 4.80004 10.0004 4.61732 10.0761C4.43459 10.1518 4.27841 10.28 4.16853 10.4444C4.05865 10.6089 4 10.8022 4 11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12ZM17 2H16V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0C14.7348 0 14.4804 0.105357 14.2929 0.292893C14.1054 0.48043 14 0.734784 14 1V2H6V1C6 0.734784 5.89464 0.48043 5.70711 0.292893C5.51957 0.105357 5.26522 0 5 0C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V8H18V17ZM18 6H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V6ZM5 16C5.19778 16 5.39112 15.9414 5.55557 15.8315C5.72002 15.7216 5.84819 15.5654 5.92388 15.3827C5.99957 15.2 6.01937 14.9989 5.98079 14.8049C5.9422 14.6109 5.84696 14.4327 5.70711 14.2929C5.56725 14.153 5.38907 14.0578 5.19509 14.0192C5.00111 13.9806 4.80004 14.0004 4.61732 14.0761C4.43459 14.1518 4.27841 14.28 4.16853 14.4444C4.05865 14.6089 4 14.8022 4 15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16Z"
          fill={color}
        />
      </svg>
    ),
    portfolio: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 4.5H14V3.5C14 2.70435 13.6839 1.94129 13.1213 1.37868C12.5587 0.816071 11.7956 0.5 11 0.5H9C8.20435 0.5 7.44129 0.816071 6.87868 1.37868C6.31607 1.94129 6 2.70435 6 3.5V4.5H3C2.20435 4.5 1.44129 4.81607 0.87868 5.37868C0.316071 5.94129 0 6.70435 0 7.5V16.5C0 17.2956 0.316071 18.0587 0.87868 18.6213C1.44129 19.1839 2.20435 19.5 3 19.5H17C17.7956 19.5 18.5587 19.1839 19.1213 18.6213C19.6839 18.0587 20 17.2956 20 16.5V7.5C20 6.70435 19.6839 5.94129 19.1213 5.37868C18.5587 4.81607 17.7956 4.5 17 4.5ZM8 3.5C8 3.23478 8.10536 2.98043 8.29289 2.79289C8.48043 2.60536 8.73478 2.5 9 2.5H11C11.2652 2.5 11.5196 2.60536 11.7071 2.79289C11.8946 2.98043 12 3.23478 12 3.5V4.5H8V3.5ZM18 16.5C18 16.7652 17.8946 17.0196 17.7071 17.2071C17.5196 17.3946 17.2652 17.5 17 17.5H3C2.73478 17.5 2.48043 17.3946 2.29289 17.2071C2.10536 17.0196 2 16.7652 2 16.5V11C4.54626 12.0101 7.26069 12.5293 10 12.53C12.7392 12.5283 15.4535 12.0092 18 11V16.5ZM18 8.81C15.4784 9.91778 12.7542 10.4898 10 10.4898C7.24579 10.4898 4.5216 9.91778 2 8.81V7.5C2 7.23478 2.10536 6.98043 2.29289 6.79289C2.48043 6.60536 2.73478 6.5 3 6.5H17C17.2652 6.5 17.5196 6.60536 17.7071 6.79289C17.8946 6.98043 18 7.23478 18 7.5V8.81Z"
          fill={color}
        />
      </svg>
    ),
    phone: (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4406 11C18.2206 11 17.9906 10.93 17.7706 10.88C17.3251 10.7818 16.8873 10.6515 16.4606 10.49C15.9967 10.3212 15.4867 10.33 15.0289 10.5146C14.5711 10.6992 14.1977 11.0466 13.9806 11.49L13.7606 11.94C12.7866 11.3982 11.8916 10.7252 11.1006 9.93999C10.3154 9.14901 9.64241 8.25399 9.10059 7.27999L9.52059 6.99999C9.96395 6.78291 10.3114 6.40952 10.496 5.95168C10.6806 5.49384 10.6894 4.9839 10.5206 4.51999C10.3618 4.09241 10.2315 3.65479 10.1306 3.20999C10.0806 2.98999 10.0406 2.75999 10.0106 2.52999C9.88915 1.82561 9.52021 1.18773 8.97021 0.731229C8.42021 0.274727 7.72529 0.029599 7.01059 0.0399902H4.01059C3.57962 0.0359436 3.15284 0.124804 2.7593 0.300521C2.36576 0.476238 2.0147 0.734686 1.73002 1.05827C1.44534 1.38186 1.23372 1.76298 1.10958 2.1757C0.985431 2.58842 0.951668 3.02305 1.01059 3.44999C1.54333 7.63937 3.45662 11.5319 6.44824 14.5126C9.43987 17.4934 13.3393 19.3925 17.5306 19.91H17.9106C18.648 19.9111 19.36 19.6405 19.9106 19.15C20.227 18.867 20.4797 18.5202 20.6521 18.1323C20.8244 17.7444 20.9126 17.3244 20.9106 16.9V13.9C20.8983 13.2054 20.6454 12.5365 20.1949 12.0077C19.7445 11.4788 19.1244 11.1226 18.4406 11ZM18.9406 17C18.9404 17.142 18.91 17.2823 18.8514 17.4116C18.7927 17.5409 18.7073 17.6563 18.6006 17.75C18.4892 17.847 18.3586 17.9194 18.2173 17.9625C18.076 18.0056 17.9272 18.0183 17.7806 18C14.0355 17.5198 10.5568 15.8065 7.89331 13.1303C5.22978 10.4541 3.533 6.96733 3.07059 3.21999C3.05467 3.07351 3.06862 2.92532 3.11159 2.78438C3.15456 2.64344 3.22566 2.51268 3.32059 2.39999C3.4143 2.29332 3.52965 2.20783 3.65897 2.14921C3.78829 2.09058 3.9286 2.06017 4.07059 2.05999H7.07059C7.30314 2.05482 7.53021 2.13087 7.71273 2.27506C7.89525 2.41925 8.0218 2.62256 8.07059 2.84999C8.11059 3.12332 8.16059 3.39332 8.22059 3.65999C8.33611 4.18713 8.48985 4.70517 8.68059 5.20999L7.28059 5.85999C7.16089 5.91491 7.05321 5.99294 6.96375 6.08959C6.87428 6.18623 6.80479 6.2996 6.75926 6.42318C6.71373 6.54677 6.69306 6.67812 6.69844 6.80971C6.70381 6.9413 6.73513 7.07054 6.79059 7.18999C8.22979 10.2727 10.7078 12.7508 13.7906 14.19C14.0341 14.29 14.3071 14.29 14.5506 14.19C14.6753 14.1454 14.7899 14.0764 14.8878 13.9872C14.9856 13.8979 15.0648 13.7901 15.1206 13.67L15.7406 12.27C16.2576 12.4549 16.7852 12.6085 17.3206 12.73C17.5873 12.79 17.8573 12.84 18.1306 12.88C18.358 12.9288 18.5613 13.0553 18.7055 13.2378C18.8497 13.4204 18.9258 13.6474 18.9206 13.88L18.9406 17Z"
          fill={color}
        />
      </svg>
    ),
    security: (
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.63 1.64994C15.5138 1.55596 15.3781 1.48922 15.2327 1.45461C15.0873 1.41999 14.9361 1.4184 14.79 1.44994C13.7214 1.67389 12.6183 1.67674 11.5486 1.45833C10.4789 1.23991 9.46525 0.804856 8.57001 0.179942C8.40261 0.0638149 8.20374 0.00158691 8.00001 0.00158691C7.79627 0.00158691 7.5974 0.0638149 7.43001 0.179942C6.53476 0.804856 5.52108 1.23991 4.45137 1.45833C3.38166 1.67674 2.27857 1.67389 1.21001 1.44994C1.06394 1.4184 0.912671 1.41999 0.767306 1.45461C0.621942 1.48922 0.486181 1.55596 0.370006 1.64994C0.253985 1.74406 0.160527 1.86298 0.0964981 1.99796C0.0324695 2.13294 -0.00050219 2.28055 5.78149e-06 2.42994V9.87994C-0.000883255 11.3137 0.340779 12.7269 0.996541 14.0019C1.6523 15.2769 2.60319 16.3768 3.77001 17.2099L7.42001 19.8099C7.58937 19.9305 7.7921 19.9953 8.00001 19.9953C8.20791 19.9953 8.41064 19.9305 8.58001 19.8099L12.23 17.2099C13.3968 16.3768 14.3477 15.2769 15.0035 14.0019C15.6592 12.7269 16.0009 11.3137 16 9.87994V2.42994C16.0005 2.28055 15.9675 2.13294 15.9035 1.99796C15.8395 1.86298 15.746 1.74406 15.63 1.64994ZM14 9.87994C14.0008 10.9947 13.7353 12.0935 13.2257 13.085C12.716 14.0764 11.977 14.9318 11.07 15.5799L8.00001 17.7699L4.93001 15.5799C4.02304 14.9318 3.28399 14.0764 2.77435 13.085C2.26472 12.0935 1.99924 10.9947 2.00001 9.87994V3.57994C4.09643 3.75938 6.19605 3.27297 8.00001 2.18994C9.80397 3.27297 11.9036 3.75938 14 3.57994V9.87994Z"
          fill={color}
        />
      </svg>
    ),
    rigthArrow: (
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.8297 5.28995L2.5897 1.04995C2.49674 0.95622 2.38613 0.881826 2.26428 0.831057C2.14242 0.780288 2.01171 0.75415 1.8797 0.75415C1.74769 0.75415 1.61698 0.780288 1.49512 0.831057C1.37326 0.881826 1.26266 0.95622 1.1697 1.04995C0.983448 1.23731 0.878906 1.49076 0.878906 1.75495C0.878906 2.01913 0.983448 2.27259 1.1697 2.45995L4.7097 5.99995L1.1697 9.53995C0.983448 9.72731 0.878906 9.98076 0.878906 10.2449C0.878906 10.5091 0.983448 10.7626 1.1697 10.9499C1.26314 11.0426 1.37395 11.116 1.49579 11.1657C1.61763 11.2155 1.74809 11.2407 1.8797 11.2399C2.01131 11.2407 2.14177 11.2155 2.26361 11.1657C2.38544 11.116 2.49626 11.0426 2.5897 10.9499L6.8297 6.70995C6.92343 6.61699 6.99782 6.50638 7.04859 6.38453C7.09936 6.26267 7.1255 6.13196 7.1255 5.99995C7.1255 5.86794 7.09936 5.73723 7.04859 5.61537C6.99782 5.49351 6.92343 5.38291 6.8297 5.28995Z"
          fill={color}
        />
      </svg>
    ),
    key: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 6C9.46957 6 8.96086 6.21071 8.58579 6.58579C8.21072 6.96086 8 7.46957 8 8C8.00211 8.34903 8.09552 8.69143 8.27095 8.99317C8.44639 9.29491 8.69773 9.54549 9 9.72V13C9 13.2652 9.10536 13.5196 9.2929 13.7071C9.48043 13.8946 9.73479 14 10 14C10.2652 14 10.5196 13.8946 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13V9.72C11.3023 9.54549 11.5536 9.29491 11.7291 8.99317C11.9045 8.69143 11.9979 8.34903 12 8C12 7.46957 11.7893 6.96086 11.4142 6.58579C11.0391 6.21071 10.5304 6 10 6ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z"
          fill={color}
        />
      </svg>
    ),
    look: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99984 15.55L6.22984 17.27C5.76571 17.7341 5.13621 17.9948 4.47984 17.9948C3.82346 17.9948 3.19397 17.7341 2.72984 17.27C2.26571 16.8058 2.00496 16.1763 2.00496 15.52C2.00496 14.8636 2.26571 14.2341 2.72984 13.77L7.26984 9.21997C7.71545 8.77291 8.31586 8.51425 8.94685 8.4975C9.57784 8.48075 10.1911 8.70719 10.6598 9.12997L10.7798 9.22997C10.9695 9.41562 11.2251 9.51834 11.4904 9.51553C11.7558 9.51272 12.0092 9.4046 12.1948 9.21497C12.3805 9.02534 12.4832 8.76973 12.4804 8.50437C12.4776 8.239 12.3695 7.98562 12.1798 7.79997C12.1234 7.727 12.0633 7.65691 11.9998 7.58997C11.1462 6.84729 10.0422 6.45682 8.9114 6.49767C7.78064 6.53852 6.70767 7.00763 5.90984 7.80997L1.30984 12.36C0.528193 13.2108 0.105457 14.3306 0.129911 15.4857C0.154365 16.6408 0.624118 17.7418 1.44107 18.5587C2.25802 19.3757 3.359 19.8454 4.51408 19.8699C5.66917 19.8944 6.78904 19.4716 7.63984 18.69L9.36984 17C9.54065 16.8136 9.63455 16.5695 9.63265 16.3167C9.63074 16.0639 9.53316 15.8212 9.35955 15.6375C9.18594 15.4537 8.94917 15.3426 8.6969 15.3263C8.44463 15.3101 8.19557 15.39 7.99984 15.55ZM18.6898 1.30997C17.8486 0.47398 16.7108 0.00476074 15.5248 0.00476074C14.3389 0.00476074 13.2011 0.47398 12.3598 1.30997L10.6298 2.99997C10.459 3.18632 10.3651 3.43045 10.367 3.68324C10.3689 3.93603 10.4665 4.17871 10.6401 4.36246C10.8137 4.54621 11.0505 4.65739 11.3028 4.67362C11.555 4.68986 11.8041 4.60995 11.9998 4.44997L13.7298 2.72997C14.194 2.26584 14.8235 2.0051 15.4798 2.0051C16.1362 2.0051 16.7657 2.26584 17.2298 2.72997C17.694 3.1941 17.9547 3.8236 17.9547 4.47997C17.9547 5.13635 17.694 5.76584 17.2298 6.22997L12.6898 10.78C12.2442 11.227 11.6438 11.4857 11.0128 11.5024C10.3818 11.5192 9.76854 11.2928 9.29984 10.87L9.17984 10.77C8.99021 10.5843 8.73459 10.4816 8.46923 10.4844C8.20387 10.4872 7.95049 10.5953 7.76484 10.785C7.57919 10.9746 7.47647 11.2302 7.47928 11.4956C7.48209 11.7609 7.59021 12.0143 7.77984 12.2C7.85247 12.2743 7.92926 12.3444 8.00984 12.41C8.86451 13.1504 9.96806 13.5394 11.0981 13.4986C12.2282 13.4578 13.3008 12.9902 14.0998 12.19L18.6498 7.63997C19.4912 6.80405 19.9676 5.6692 19.9751 4.48322C19.9826 3.29724 19.5205 2.15646 18.6898 1.30997Z"
          fill={color}
        />
      </svg>
    ),
    cloudIcon: (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.2899 10.1897L8.99994 13.4797L7.70994 12.1897C7.61698 12.0959 7.50638 12.0215 7.38452 11.9708C7.26266 11.92 7.13195 11.8939 6.99994 11.8939C6.86793 11.8939 6.73722 11.92 6.61537 11.9708C6.49351 12.0215 6.38291 12.0959 6.28994 12.1897C6.10369 12.377 5.99915 12.6305 5.99915 12.8947C5.99915 13.1588 6.10369 13.4123 6.28994 13.5997L8.28994 15.5997C8.38291 15.6934 8.49351 15.7678 8.61537 15.8185C8.73722 15.8693 8.86793 15.8954 8.99994 15.8954C9.13195 15.8954 9.26266 15.8693 9.38452 15.8185C9.50638 15.7678 9.61698 15.6934 9.70994 15.5997L13.7099 11.5997C13.8962 11.4123 14.0007 11.1588 14.0007 10.8947C14.0007 10.6305 13.8962 10.377 13.7099 10.1897C13.617 10.0959 13.5064 10.0215 13.3845 9.97076C13.2627 9.91999 13.132 9.89385 12.9999 9.89385C12.8679 9.89385 12.7372 9.91999 12.6154 9.97076C12.4935 10.0215 12.3829 10.0959 12.2899 10.1897ZM16.4199 4.31965C15.8083 2.91546 14.7529 1.75065 13.4157 1.00381C12.0785 0.256969 10.5332 -0.0306765 9.01682 0.184976C7.50044 0.400629 6.09664 1.10768 5.02066 2.19771C3.94468 3.28775 3.2559 4.7006 3.05994 6.21965C2.22593 6.42658 1.48073 6.89659 0.934681 7.56007C0.388628 8.22356 0.0707524 9.04525 0.028121 9.90349C-0.0145103 10.7617 0.220369 11.6109 0.697981 12.3252C1.17559 13.0395 1.87055 13.5811 2.67994 13.8697C2.80767 13.9367 2.94839 13.9753 3.09245 13.9828C3.2365 13.9903 3.38048 13.9666 3.51449 13.9132C3.64851 13.8599 3.7694 13.7781 3.86886 13.6737C3.96833 13.5692 4.04401 13.4444 4.09072 13.308C4.13743 13.1715 4.15406 13.0265 4.13946 12.883C4.12487 12.7395 4.07941 12.6008 4.00619 12.4766C3.93297 12.3523 3.83373 12.2453 3.71527 12.163C3.59682 12.0807 3.46196 12.0249 3.31994 11.9997C2.93017 11.8588 2.5938 11.6003 2.35734 11.2599C2.12087 10.9195 1.99598 10.5141 1.99994 10.0997C1.99994 9.56922 2.21066 9.06051 2.58573 8.68544C2.9608 8.31037 3.46951 8.09965 3.99994 8.09965C4.26516 8.09965 4.51951 7.9943 4.70705 7.80676C4.89458 7.61922 4.99994 7.36487 4.99994 7.09965C5.00484 5.91778 5.42823 4.77585 6.19501 3.87647C6.96179 2.97708 8.02238 2.37839 9.1886 2.18662C10.3548 1.99485 11.5513 2.22239 12.5657 2.82888C13.5801 3.43536 14.3468 4.38158 14.7299 5.49965C14.7886 5.66963 14.892 5.82064 15.0293 5.93679C15.1666 6.05294 15.3326 6.12993 15.5099 6.15965C16.176 6.28552 16.7798 6.63326 17.223 7.14619C17.6661 7.65912 17.9225 8.30701 17.9503 8.98429C17.9782 9.66158 17.7758 10.3283 17.3762 10.8759C16.9767 11.4234 16.4034 11.8196 15.7499 11.9997C15.4847 12.0328 15.2435 12.17 15.0794 12.3809C14.9154 12.5919 14.8418 12.8594 14.8749 13.1247C14.9081 13.3899 15.0452 13.6311 15.2562 13.7951C15.4672 13.9592 15.7347 14.0328 15.9999 13.9997H16.2499C17.3023 13.7216 18.2352 13.1076 18.9069 12.2511C19.5787 11.3946 19.9525 10.3423 19.9718 9.25392C19.991 8.16558 19.6546 7.1007 19.0135 6.22097C18.3725 5.34125 17.4618 4.69475 16.4199 4.37965V4.31965Z" />
      </svg>
    ),
  };

  return allIcons[icon];
};

export default Icons;