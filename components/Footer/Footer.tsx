import { ContentContainer } from "../Container/ContentContaeiner"
import { useNav } from "../../hooks/useNav"
import { Nav } from "../Nav/Nav"
import { useTranslation } from "react-i18next"
import styles from "../../styles/footer.module.scss"

export const Footer = () => {
    const navdata = useNav({ hidden: false })
    const { t } = useTranslation()
    return (
        <footer className={styles.footer} >
            <ContentContainer>
                <div className={styles.address}>
                    <svg className={styles.another_logo} width="340" height="47" viewBox="0 0 340 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_113_257" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="166" height="47">
                            <path d="M149.517 7.65137H142.528L126.208 45.9072H134.096L145.792 17.7618L150.416 28.9653H147.696L144.704 35.7967H153.408L157.551 45.9072H165.376L149.517 7.65137Z" fill="black" />
                            <path d="M0 45.907V0H7.072L22.304 19.9477L36.992 0H44.064V45.907H36.992V12.0233L22.304 30.8779L7.072 12.0233V45.907H0Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M91.3926 7.65137H110.705L111.813 7.77789C118 8.48423 122.673 13.7205 122.673 19.9479L122.55 21.2211C122.126 25.617 119.21 29.3761 115.057 30.8781L124.849 45.9072H116.689L107.985 32.2444H98.4646V45.9072H91.3926V7.65137ZM98.4648 25.1395V14.4826H109.345H110.403C113.166 14.4826 115.448 16.6419 115.601 19.4012C115.753 22.304 113.591 24.8114 110.697 25.0882L110.161 25.1395H98.4648Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M85.0455 34.9762C82.2393 42.0418 75.664 47.0002 67.9999 47.0002C60.3358 47.0002 53.7605 42.0418 50.9543 34.9762H58.5312C60.6825 38.2817 64.2404 40.4418 68.2653 40.4418C72.2902 40.4418 75.848 38.2817 77.9993 34.9762H85.0455ZM86.4327 28.9646C86.4745 28.4242 86.4959 27.8777 86.4959 27.3258C86.4959 16.4599 78.215 7.65137 67.9999 7.65137C57.7848 7.65137 49.5039 16.4599 49.5039 27.3258C49.5039 27.8777 49.5253 28.4242 49.5672 28.9646H56.4414C56.3975 28.5158 56.375 28.0601 56.375 27.5988C56.375 20.5058 61.6985 14.7557 68.2653 14.7557C74.8321 14.7557 80.1556 20.5058 80.1556 27.5988C80.1556 28.0601 80.133 28.5158 80.0891 28.9646H86.4327Z" fill="black" />
                        </mask>
                        <g mask="url(#mask0_113_257)">
                            <rect x="-2.71973" y="-13.6621" width="170.816" height="73.7791" fill="url(#paint0_linear_113_257)" />
                        </g>
                        <mask id="mask1_113_257" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="170" y="0" width="170" height="47">
                            <path d="M170.815 45.907V0H177.887L193.119 19.9477L207.807 0H214.879V45.907H207.807V12.0233L193.119 30.8779L177.887 12.0233V45.907H170.815Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M262.207 7.65137H281.519L282.627 7.77789C288.815 8.48423 293.487 13.7205 293.487 19.9479L293.364 21.2211C292.941 25.617 290.024 29.3761 285.871 30.8781L295.663 45.9072H287.503L278.799 32.2444H269.279V45.9072H262.207V7.65137ZM269.279 25.1395V14.4826H280.159H281.217C283.981 14.4826 286.263 16.6419 286.415 19.4012C286.567 22.304 284.406 24.8114 281.512 25.0882L280.975 25.1395H269.279Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M255.861 34.9762C253.055 42.0418 246.479 47.0002 238.815 47.0002C231.151 47.0002 224.576 42.0418 221.77 34.9762H229.347C231.498 38.2817 235.056 40.4418 239.081 40.4418C243.106 40.4418 246.663 38.2817 248.815 34.9762H255.861ZM257.248 28.9646C257.29 28.4242 257.311 27.8777 257.311 27.3258C257.311 16.4599 249.03 7.65137 238.815 7.65137C228.6 7.65137 220.319 16.4599 220.319 27.3258C220.319 27.8777 220.341 28.4242 220.383 28.9646H227.257C227.213 28.5158 227.19 28.0601 227.19 27.5988C227.19 20.5058 232.514 14.7557 239.081 14.7557C245.648 14.7557 250.971 20.5058 250.971 27.5988C250.971 28.0601 250.948 28.5158 250.905 28.9646H257.248Z" fill="black" />
                            <path d="M313.343 7.65137H320.332L329.168 28.9653H336.191L339.999 35.7967H332L336.191 45.9072H328.366L324.223 35.7967H315.519L318.511 28.9653H321.231L316.607 17.7618L304.911 45.9072H297.023L313.343 7.65137Z" fill="black" />
                        </mask>
                        <g mask="url(#mask1_113_257)">
                            <rect x="170.815" y="-13.6621" width="169.184" height="73.7791" fill="url(#paint1_linear_113_257)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_113_257" x1="-2.71973" y1="23.5007" x2="168.096" y2="23.5007" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#42424F" />
                                <stop offset="1" stopColor="#5C021E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_113_257" x1="170.815" y1="23.5007" x2="339.999" y2="23.5007" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#D2C9AF" />
                                <stop offset="1" stopColor="#42424F" />
                            </linearGradient>
                        </defs>
                    </svg>
                    {/* <svg width="340" height="31" viewBox="0 0 340 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.93848 1.19141H0.711914V21H7.93848V10.5908C8.47559 10.0374 9.0778 9.54102 9.74512 9.10156C10.4287 8.66211 11.153 8.28776 11.918 7.97852C12.6992 7.66927 13.5049 7.43327 14.335 7.27051C15.1813 7.09147 16.0195 7.00195 16.8496 7.00195C18.2005 7.00195 19.4375 7.22982 20.5605 7.68555C21.6999 8.125 22.6683 8.77604 23.4658 9.63867C24.2796 10.485 24.9062 11.5348 25.3457 12.7881C25.8014 14.0251 26.0293 15.4329 26.0293 17.0117V21H33.2314V10.542C33.7034 9.93978 34.2568 9.41895 34.8916 8.97949C35.5264 8.52376 36.2018 8.14941 36.918 7.85645C37.6504 7.56348 38.3991 7.35189 39.1641 7.22168C39.929 7.0752 40.6777 7.00195 41.4102 7.00195C42.7448 7.00195 43.9655 7.22982 45.0723 7.68555C46.1953 8.125 47.1556 8.77604 47.9531 9.63867C48.7669 10.485 49.3936 11.5348 49.833 12.7881C50.2887 14.0251 50.5166 15.4329 50.5166 17.0117V30H57.7188V15.8398C57.7188 13.3496 57.3444 11.1605 56.5957 9.27246C55.8633 7.36816 54.8135 5.78125 53.4463 4.51172C52.0954 3.24219 50.4596 2.29004 48.5391 1.65527C46.6185 1.00423 44.4782 0.678711 42.1182 0.678711C40.9951 0.678711 39.9046 0.760091 38.8467 0.922852C37.7887 1.06934 36.7471 1.32161 35.7217 1.67969C34.6963 2.02148 33.6709 2.47721 32.6455 3.04688C31.6201 3.60026 30.5785 4.28385 29.5205 5.09766C28.1533 3.61654 26.5094 2.50977 24.5889 1.77734C22.6683 1.04492 20.5605 0.678711 18.2656 0.678711C16.6217 0.678711 14.9372 0.898438 13.2119 1.33789C11.5029 1.76107 9.74512 2.52604 7.93848 3.63281V1.19141ZM66.3369 9.78516C65.5068 11.5918 65.0918 13.5286 65.0918 15.5957C65.0918 17.6628 65.5068 19.5996 66.3369 21.4062C67.1833 23.2129 68.3796 24.7917 69.9258 26.1426C71.4883 27.4935 73.3682 28.5596 75.5654 29.3408C77.779 30.1221 80.2611 30.5127 83.0117 30.5127C85.7624 30.5127 88.2363 30.1221 90.4336 29.3408C92.6471 28.5596 94.527 27.4935 96.0732 26.1426C97.6357 24.7917 98.832 23.2129 99.6621 21.4062C100.508 19.5996 100.932 17.6628 100.932 15.5957C100.932 13.5286 100.508 11.5918 99.6621 9.78516C98.832 7.97852 97.6357 6.39974 96.0732 5.04883C94.527 3.69792 92.6471 2.63184 90.4336 1.85059C88.2363 1.06934 85.7624 0.678711 83.0117 0.678711C80.2611 0.678711 77.779 1.06934 75.5654 1.85059C73.3682 2.63184 71.4883 3.69792 69.9258 5.04883C68.3796 6.39974 67.1833 7.97852 66.3369 9.78516ZM73.3682 18.8916C72.9124 17.8499 72.6846 16.7513 72.6846 15.5957C72.6846 14.4401 72.9124 13.3415 73.3682 12.2998C73.8402 11.2581 74.5156 10.3467 75.3945 9.56543C76.2897 8.7679 77.3721 8.14128 78.6416 7.68555C79.9274 7.21354 81.3841 6.97754 83.0117 6.97754C84.6393 6.97754 86.0879 7.21354 87.3574 7.68555C88.6432 8.14128 89.7256 8.7679 90.6045 9.56543C91.4997 10.3467 92.1751 11.2581 92.6309 12.2998C93.1029 13.3415 93.3389 14.4401 93.3389 15.5957C93.3389 16.7513 93.1029 17.8499 92.6309 18.8916C92.1751 19.917 91.4997 20.8285 90.6045 21.626C89.7256 22.4072 88.6432 23.0339 87.3574 23.5059C86.0879 23.9616 84.6393 24.1895 83.0117 24.1895C81.3841 24.1895 79.9274 23.9616 78.6416 23.5059C77.3721 23.0339 76.2897 22.4072 75.3945 21.626C74.5156 20.8285 73.8402 19.917 73.3682 18.8916ZM115.458 1.19141H108.231V30H115.458V12.8613C116.776 11.1035 118.485 9.74447 120.585 8.78418C122.701 7.80762 125.15 7.18099 127.934 6.9043L125.81 0.288086C124.052 0.743815 122.286 1.40299 120.512 2.26562C118.738 3.12826 117.053 4.15365 115.458 5.3418V1.19141ZM132.865 17.1338C132.263 18.2731 131.962 19.5345 131.962 20.918C131.962 22.2852 132.247 23.5547 132.816 24.7266C133.402 25.8822 134.265 26.8913 135.404 27.7539C136.544 28.6165 137.96 29.292 139.652 29.7803C141.361 30.2686 143.339 30.5127 145.585 30.5127C146.92 30.5127 148.181 30.4232 149.369 30.2441C150.574 30.0814 151.697 29.8535 152.738 29.5605C153.78 29.2676 154.74 28.9258 155.619 28.5352C156.514 28.1445 157.336 27.7295 158.085 27.29V30H165.312V17.4512C165.312 11.7708 164.001 7.55534 161.381 4.80469C158.76 2.05404 154.757 0.678711 149.369 0.678711C148.148 0.678711 146.887 0.743815 145.585 0.874023C144.283 1.00423 142.981 1.19141 141.679 1.43555C140.377 1.66341 139.099 1.9401 137.846 2.26562C136.609 2.59115 135.445 2.94922 134.354 3.33984L136.552 9.27246C137.431 8.86556 138.375 8.51562 139.384 8.22266C140.409 7.92969 141.443 7.68555 142.484 7.49023C143.526 7.29492 144.535 7.14844 145.512 7.05078C146.488 6.95312 147.383 6.9043 148.197 6.9043C149.695 6.9043 151.029 7.05892 152.201 7.36816C153.389 7.67741 154.398 8.11686 155.229 8.68652C156.075 9.23991 156.734 9.90723 157.206 10.6885C157.678 11.4535 157.955 12.2917 158.036 13.2031C155.953 12.666 153.926 12.2673 151.957 12.0068C150.004 11.7464 148.14 11.6162 146.366 11.6162C143.974 11.6162 141.874 11.8441 140.067 12.2998C138.277 12.7393 136.78 13.374 135.575 14.2041C134.371 15.0179 133.467 15.9945 132.865 17.1338ZM139.945 22.041C139.701 21.6016 139.579 21.1458 139.579 20.6738C139.579 20.2344 139.693 19.8112 139.921 19.4043C140.149 18.9974 140.539 18.6475 141.093 18.3545C141.646 18.0452 142.37 17.8011 143.266 17.6221C144.161 17.443 145.284 17.3535 146.635 17.3535C147.286 17.3535 148.043 17.3779 148.905 17.4268C149.784 17.4756 150.712 17.5651 151.688 17.6953C152.681 17.8092 153.715 17.972 154.789 18.1836C155.88 18.3952 156.978 18.6556 158.085 18.9648V20.2344C157.532 20.7552 156.84 21.2598 156.01 21.748C155.18 22.2363 154.252 22.6676 153.227 23.042C152.201 23.4163 151.094 23.7174 149.906 23.9453C148.718 24.1732 147.489 24.2871 146.22 24.2871C145.032 24.2871 144.014 24.1895 143.168 23.9941C142.338 23.7826 141.654 23.514 141.117 23.1885C140.58 22.8467 140.189 22.4642 139.945 22.041Z" fill="url(#paint0_linear_98_28)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M182.227 1.19141H175V21H182.227V10.5908C182.764 10.0374 183.366 9.54102 184.033 9.10156C184.717 8.66211 185.441 8.28776 186.206 7.97852C186.987 7.66927 187.793 7.43327 188.623 7.27051C189.469 7.09147 190.308 7.00195 191.138 7.00195C192.489 7.00195 193.726 7.22982 194.849 7.68555C195.988 8.125 196.956 8.77604 197.754 9.63867C198.568 10.485 199.194 11.5348 199.634 12.7881C200.09 14.0251 200.317 15.4329 200.317 17.0117V21H207.52V10.542C207.992 9.93978 208.545 9.41895 209.18 8.97949C209.814 8.52376 210.49 8.14941 211.206 7.85645C211.938 7.56348 212.687 7.35189 213.452 7.22168C214.217 7.0752 214.966 7.00195 215.698 7.00195C217.033 7.00195 218.254 7.22982 219.36 7.68555C220.483 8.125 221.444 8.77604 222.241 9.63867C223.055 10.485 223.682 11.5348 224.121 12.7881C224.577 14.0251 224.805 15.4329 224.805 17.0117V30H232.007V15.8398C232.007 13.3496 231.632 11.1605 230.884 9.27246C230.151 7.36816 229.102 5.78125 227.734 4.51172C226.383 3.24219 224.748 2.29004 222.827 1.65527C220.907 1.00423 218.766 0.678711 216.406 0.678711C215.283 0.678711 214.193 0.760091 213.135 0.922852C212.077 1.06934 211.035 1.32161 210.01 1.67969C208.984 2.02148 207.959 2.47721 206.934 3.04688C205.908 3.60026 204.867 4.28385 203.809 5.09766C202.441 3.61654 200.798 2.50977 198.877 1.77734C196.956 1.04492 194.849 0.678711 192.554 0.678711C190.91 0.678711 189.225 0.898438 187.5 1.33789C185.791 1.76107 184.033 2.52604 182.227 3.63281V1.19141ZM240.625 9.78516C239.795 11.5918 239.38 13.5286 239.38 15.5957C239.38 17.6628 239.795 19.5996 240.625 21.4062C241.471 23.2129 242.668 24.7917 244.214 26.1426C245.776 27.4935 247.656 28.5596 249.854 29.3408C252.067 30.1221 254.549 30.5127 257.3 30.5127C260.05 30.5127 262.524 30.1221 264.722 29.3408C266.935 28.5596 268.815 27.4935 270.361 26.1426C271.924 24.7917 273.12 23.2129 273.95 21.4062C274.797 19.5996 275.22 17.6628 275.22 15.5957C275.22 13.5286 274.797 11.5918 273.95 9.78516C273.12 7.97852 271.924 6.39974 270.361 5.04883C268.815 3.69792 266.935 2.63184 264.722 1.85059C262.524 1.06934 260.05 0.678711 257.3 0.678711C254.549 0.678711 252.067 1.06934 249.854 1.85059C247.656 2.63184 245.776 3.69792 244.214 5.04883C242.668 6.39974 241.471 7.97852 240.625 9.78516ZM247.656 18.8916C247.201 17.8499 246.973 16.7513 246.973 15.5957C246.973 14.4401 247.201 13.3415 247.656 12.2998C248.128 11.2581 248.804 10.3467 249.683 9.56543C250.578 8.7679 251.66 8.14128 252.93 7.68555C254.215 7.21354 255.672 6.97754 257.3 6.97754C258.927 6.97754 260.376 7.21354 261.646 7.68555C262.931 8.14128 264.014 8.7679 264.893 9.56543C265.788 10.3467 266.463 11.2581 266.919 12.2998C267.391 13.3415 267.627 14.4401 267.627 15.5957C267.627 16.7513 267.391 17.8499 266.919 18.8916C266.463 19.917 265.788 20.8285 264.893 21.626C264.014 22.4072 262.931 23.0339 261.646 23.5059C260.376 23.9616 258.927 24.1895 257.3 24.1895C255.672 24.1895 254.215 23.9616 252.93 23.5059C251.66 23.0339 250.578 22.4072 249.683 21.626C248.804 20.8285 248.128 19.917 247.656 18.8916ZM289.746 1.19141H282.52V30H289.746V12.8613C291.064 11.1035 292.773 9.74447 294.873 8.78418C296.989 7.80762 299.438 7.18099 302.222 6.9043L300.098 0.288086C298.34 0.743815 296.574 1.40299 294.8 2.26562C293.026 3.12826 291.341 4.15365 289.746 5.3418V1.19141ZM307.153 17.1338C306.551 18.2731 306.25 19.5345 306.25 20.918C306.25 22.2852 306.535 23.5547 307.104 24.7266C307.69 25.8822 308.553 26.8913 309.692 27.7539C310.832 28.6165 312.248 29.292 313.94 29.7803C315.649 30.2686 317.627 30.5127 319.873 30.5127C321.208 30.5127 322.469 30.4232 323.657 30.2441C324.862 30.0814 325.985 29.8535 327.026 29.5605C328.068 29.2676 329.028 28.9258 329.907 28.5352C330.802 28.1445 331.624 27.7295 332.373 27.29V30H339.6V17.4512C339.6 11.7708 338.289 7.55534 335.669 4.80469C333.049 2.05404 329.045 0.678711 323.657 0.678711C322.437 0.678711 321.175 0.743815 319.873 0.874023C318.571 1.00423 317.269 1.19141 315.967 1.43555C314.665 1.66341 313.387 1.9401 312.134 2.26562C310.897 2.59115 309.733 2.94922 308.643 3.33984L310.84 9.27246C311.719 8.86556 312.663 8.51562 313.672 8.22266C314.697 7.92969 315.731 7.68555 316.772 7.49023C317.814 7.29492 318.823 7.14844 319.8 7.05078C320.776 6.95312 321.672 6.9043 322.485 6.9043C323.983 6.9043 325.317 7.05892 326.489 7.36816C327.677 7.67741 328.687 8.11686 329.517 8.68652C330.363 9.23991 331.022 9.90723 331.494 10.6885C331.966 11.4535 332.243 12.2917 332.324 13.2031C330.241 12.666 328.215 12.2673 326.245 12.0068C324.292 11.7464 322.428 11.6162 320.654 11.6162C318.262 11.6162 316.162 11.8441 314.355 12.2998C312.565 12.7393 311.068 13.374 309.863 14.2041C308.659 15.0179 307.756 15.9945 307.153 17.1338ZM314.233 22.041C313.989 21.6016 313.867 21.1458 313.867 20.6738C313.867 20.2344 313.981 19.8112 314.209 19.4043C314.437 18.9974 314.827 18.6475 315.381 18.3545C315.934 18.0452 316.659 17.8011 317.554 17.6221C318.449 17.443 319.572 17.3535 320.923 17.3535C321.574 17.3535 322.331 17.3779 323.193 17.4268C324.072 17.4756 325 17.5651 325.977 17.6953C326.969 17.8092 328.003 17.972 329.077 18.1836C330.168 18.3952 331.266 18.6556 332.373 18.9648V20.2344C331.82 20.7552 331.128 21.2598 330.298 21.748C329.468 22.2363 328.54 22.6676 327.515 23.042C326.489 23.4163 325.382 23.7174 324.194 23.9453C323.006 24.1732 321.777 24.2871 320.508 24.2871C319.32 24.2871 318.302 24.1895 317.456 23.9941C316.626 23.7826 315.942 23.514 315.405 23.1885C314.868 22.8467 314.478 22.4642 314.233 22.041Z" fill="url(#paint1_linear_98_28)" />
                        <defs>
                            <linearGradient id="paint0_linear_98_28" x1="-1.5" y1="15" x2="168.5" y2="15" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#42424F" />
                                <stop offset="1" stopColor="#5C0520" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_98_28" x1="171.5" y1="15" x2="342" y2="15" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#D5CBB1" />
                                <stop offset="1" stopColor="#42424F" />
                            </linearGradient>
                        </defs>
                    </svg> */}
                    <div className={styles.adress_box}>
                        <div className={styles.adress_container}>
                            <p>{t("footer.adress.pl.country")}</p>
                            <p>{t("footer.adress.pl.street")}<br />{t("footer.adress.pl.city")}</p>
                        </div>
                        <div className={styles.adress_container}>
                            <p>{t("footer.adress.bel.country")}</p>
                            <p>{t("footer.adress.bel.street")}<br />{t("footer.adress.bel.city")}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.btn_bottom_container}>
                    <Nav preKey="footer" data={navdata} />
                    <p>Copyright © 2023 MoraMora. All rights reserved</p>
                </div>
            </ContentContainer>
        </footer>
    )
}