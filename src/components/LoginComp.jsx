import React from 'react'
import '../stylesheets/Login.css'

const LoginComp = () => {
    return (
        <section>
            <svg width="137" height="142" viewBox="0 0 137 142" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_9_118)">
        <path d="M134 65.3253C134 100.821 104.258 129.651 67.5 129.651C30.7419 129.651 1 100.821 1 65.3253C1 29.83 30.7419 1 67.5 1C104.258 1 134 29.83 134 65.3253Z" fill="#FFFDFF" stroke="black" stroke-width="2"/>
        </g>
        <g filter="url(#filter1_d_9_118)">
        <path d="M41.3333 97C41.3333 97 36 97 36 91.6667C36 86.3333 41.3333 70.3333 68 70.3333C94.6667 70.3333 100 86.3333 100 91.6667C100 97 94.6667 97 94.6667 97H41.3333ZM68 65C72.2435 65 76.3131 63.3143 79.3137 60.3137C82.3143 57.3131 84 53.2435 84 49C84 44.7565 82.3143 40.6869 79.3137 37.6863C76.3131 34.6857 72.2435 33 68 33C63.7565 33 59.6869 34.6857 56.6863 37.6863C53.6857 40.6869 52 44.7565 52 49C52 53.2435 53.6857 57.3131 56.6863 60.3137C59.6869 63.3143 63.7565 65 68 65Z" fill="#D1F470"/>
        <path d="M94.6657 96H94.665L94.6637 96H41.3363L41.3351 96H41.3343L41.3342 96L41.3068 95.9993C41.2795 95.9983 41.2349 95.9964 41.1754 95.9921C41.0562 95.9836 40.8793 95.9661 40.6644 95.9303C40.2299 95.8579 39.6658 95.7149 39.1139 95.4389C38.5658 95.1649 38.0482 94.7696 37.6654 94.1953C37.2867 93.6273 37 92.825 37 91.6667C37 89.2568 38.2339 84.1803 42.7071 79.7071C47.151 75.2632 54.8776 71.3333 68 71.3333C81.1224 71.3333 88.849 75.2632 93.2929 79.7071C97.7661 84.1803 99 89.2568 99 91.6667C99 92.825 98.7133 93.6273 98.3346 94.1953C97.9518 94.7696 97.4342 95.1649 96.8861 95.4389C96.3342 95.7149 95.7701 95.8579 95.3356 95.9303C95.1207 95.9661 94.9438 95.9836 94.8246 95.9921C94.7651 95.9964 94.7205 95.9983 94.6932 95.9993L94.6658 96L94.6657 96ZM78.6066 59.6066C75.7936 62.4196 71.9782 64 68 64C64.0218 64 60.2064 62.4196 57.3934 59.6066C54.5804 56.7936 53 52.9782 53 49C53 45.0218 54.5804 41.2064 57.3934 38.3934C60.2064 35.5804 64.0218 34 68 34C71.9782 34 75.7936 35.5804 78.6066 38.3934C81.4197 41.2064 83 45.0218 83 49C83 52.9782 81.4197 56.7936 78.6066 59.6066Z" stroke="black" stroke-width="2"/>
        </g>
        <defs>
        <filter id="filter0_d_9_118" x="0" y="0" width="137" height="142" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="8"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_118"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_118" result="shape"/>
        </filter>
        <filter id="filter1_d_9_118" x="36" y="33" width="67" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="3" dy="3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_118"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_118" result="shape"/>
        </filter>
        </defs>
            </svg>
            <input className='loginInput' placeholder='Usuario' type="text" />
            <input className='loginInput' placeholder='Contraseña' type="text" />
            <button type='submit'>LogIn</button>
        </section>
    )
}

export default LoginComp;