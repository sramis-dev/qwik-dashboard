import { component$ } from "@builder.io/qwik";

interface LogoProps {
  style?: string;
}

export const Logo = component$<LogoProps>(({ style = "h-12 w-12" }) => {
  return (
    <div class="lusitana flex flex-row items-center gap-1 leading-none text-white">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="500.000000pt"
        height="500.000000pt"
        viewBox="0 0 500.000000 500.000000"
        preserveAspectRatio="xMidYMid meet"
        class={style}
      >
        <g
          transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
          fill="#ffffff"
          stroke="none"
        >
          <path
            d="M3628 4243 c-44 -52 -26 -90 83 -175 104 -81 281 -264 343 -355 26
-37 63 -92 83 -121 21 -30 46 -55 60 -58 37 -10 70 10 78 46 9 43 -17 84 -203
325 -43 55 -220 222 -321 303 -69 55 -98 63 -123 35z"
          />
          <path
            d="M2220 4080 c-145 -30 -196 -48 -318 -109 -283 -142 -504 -372 -647
-675 -91 -191 -125 -352 -125 -590 1 -287 60 -502 205 -742 133 -219 361 -428
600 -547 212 -106 536 -152 795 -112 l95 14 170 -168 c220 -218 203 -211 506
-211 229 0 268 6 283 45 3 9 6 130 6 269 0 295 14 252 -142 419 -54 58 -98
109 -98 114 0 5 9 18 20 28 37 34 153 219 203 324 58 123 91 246 114 426 19
149 10 300 -27 480 -81 387 -363 746 -730 931 -189 95 -374 134 -625 133 -125
0 -172 -5 -285 -29z m460 -215 c127 -15 252 -54 357 -109 36 -19 71 -32 77
-29 6 3 8 3 4 -2 -11 -12 74 -50 104 -46 15 2 25 7 22 12 -7 13 -44 11 -44 -2
0 -5 -5 -7 -10 -4 -6 4 -7 11 -4 17 5 8 1 9 -11 4 -16 -6 -16 -4 -4 10 8 9 12
27 11 39 -4 31 22 38 45 12 18 -21 18 -21 -1 -7 -18 14 -18 14 -6 -7 11 -18
17 -20 29 -10 12 10 13 8 7 -13 -5 -18 -5 -21 3 -10 8 12 16 9 48 -17 21 -17
37 -37 35 -43 -1 -6 2 -9 8 -5 13 8 103 -82 95 -95 -4 -6 -1 -9 5 -8 7 2 27
-19 46 -47 19 -27 42 -59 53 -70 10 -11 31 -44 45 -72 28 -56 28 -73 1 -25
-15 25 -16 25 -11 4 4 -23 4 -23 -15 -6 -10 9 -19 13 -19 8 0 -5 -5 -2 -10 6
-8 12 -10 11 -10 -7 0 -13 -4 -23 -10 -23 -17 0 -12 -20 35 -135 77 -190 89
-253 90 -460 0 -204 -14 -276 -84 -435 -39 -91 -127 -234 -162 -266 -20 -18
-21 -18 -57 26 -20 25 -71 81 -114 126 -43 44 -78 86 -78 92 0 6 14 33 30 59
89 140 124 395 81 578 -30 123 -86 234 -165 327 -109 127 -210 191 -383 240
-170 48 -407 20 -577 -70 -101 -53 -237 -190 -298 -301 -121 -217 -124 -521
-9 -748 47 -93 73 -128 149 -207 109 -113 257 -190 430 -225 71 -15 165 -14
180 1 8 8 12 61 12 171 l0 159 29 29 c23 22 39 29 70 29 45 0 47 -2 206 -175
55 -60 234 -252 398 -428 l297 -318 0 -76 c0 -110 -4 -113 -146 -113 -62 0
-124 4 -139 10 -14 5 -113 99 -221 208 l-195 199 -78 -23 c-164 -47 -417 -51
-581 -9 -95 25 -213 79 -307 141 -113 73 -123 82 -230 196 -148 158 -263 380
-304 588 -19 95 -16 328 5 423 37 167 131 381 217 492 105 136 266 272 404
342 82 42 223 85 320 98 133 17 197 17 335 0z m35 -670 c53 -22 87 -46 148
-104 84 -80 122 -142 152 -246 34 -117 7 -316 -55 -395 l-19 -25 -63 69 c-71
79 -104 96 -185 96 l-58 0 -178 -181 -177 -181 -44 26 c-58 34 -150 136 -187
208 -104 204 -68 445 90 606 72 73 124 108 211 139 57 21 78 23 180 20 98 -3
125 -8 185 -32z"
          />
          <path d="M3494 3350 c0 -13 4 -16 10 -10 7 7 7 13 0 20 -6 6 -10 3 -10 -10z" />
          <path
            d="M2386 3031 c-82 -29 -110 -92 -54 -122 17 -9 30 -7 67 12 36 19 62
24 116 24 78 -1 115 -16 167 -68 38 -38 53 -65 68 -124 17 -67 73 -82 99 -27
23 52 -31 177 -104 242 -87 76 -243 104 -359 63z"
          />
          <path
            d="M2175 2815 c-33 -32 -31 -60 5 -96 23 -23 35 -29 52 -24 61 18 83 91
39 127 -32 25 -67 23 -96 -7z"
          />
          <path
            d="M956 4021 c-26 -29 -18 -82 16 -100 25 -14 29 -14 55 5 34 25 40 57
19 90 -20 30 -65 32 -90 5z"
          />
          <path
            d="M3522 3968 c-13 -13 -16 -57 -4 -74 4 -7 29 -30 56 -52 88 -73 238
-256 304 -370 125 -218 177 -380 195 -611 20 -269 -14 -501 -103 -706 -45
-101 -49 -136 -20 -165 30 -30 93 -27 118 4 55 71 157 356 181 506 13 76 13
266 1 295 -7 18 -8 18 -15 -7 -4 -16 -11 -28 -16 -28 -5 0 -9 12 -10 28 -1 24
-3 22 -14 -13 l-12 -40 -7 85 c-27 324 -127 594 -315 848 -69 92 -288 312
-311 312 -9 0 -21 -5 -28 -12z"
          />
          <path
            d="M857 2182 c-26 -28 -21 -69 9 -88 55 -37 117 25 80 80 -20 31 -65 35
-89 8z"
          />
          <path
            d="M1023 1950 c-26 -11 -43 -39 -43 -73 0 -56 175 -309 304 -439 183
-183 390 -313 631 -394 106 -36 282 -74 344 -74 47 0 81 33 81 78 0 41 -28 69
-77 77 -242 42 -382 89 -555 187 -120 67 -196 124 -300 223 -75 72 -202 238
-255 332 -48 87 -76 105 -130 83z"
          />
          <path
            d="M4133 1783 c-8 -3 -13 -24 -13 -53 l0 -49 -52 -3 c-51 -3 -53 -4 -53
-33 0 -29 2 -30 52 -33 l52 -3 3 -47 c3 -45 4 -47 33 -47 29 0 30 2 33 48 l3
47 48 0 c95 0 97 62 2 68 l-51 3 0 48 c0 55 -17 71 -57 54z"
          />
          <path
            d="M924 1444 c-13 -19 -15 -32 -8 -50 11 -28 249 -271 274 -279 46 -15
95 39 73 79 -5 9 -66 75 -136 146 -106 109 -132 130 -157 130 -21 0 -35 -8
-46 -26z"
          />
          <path
            d="M3906 1287 c-42 -31 -25 -61 105 -192 68 -69 131 -125 141 -125 24 0
48 28 48 56 0 18 -33 58 -123 149 -68 69 -130 125 -138 125 -8 0 -23 -6 -33
-13z"
          />
          <path
            d="M2571 1106 l-54 -54 53 -56 c29 -31 58 -56 65 -56 7 0 36 25 65 56
l53 56 -54 54 c-29 30 -58 54 -64 54 -6 0 -35 -24 -64 -54z"
          />
          <path
            d="M3872 998 c-32 -32 -14 -61 120 -195 131 -131 158 -149 186 -121 32
32 14 61 -118 196 -131 133 -158 150 -188 120z"
          />
          <path
            d="M1705 937 c-40 -34 -27 -71 38 -104 259 -131 669 -191 1009 -147 136
17 158 28 158 79 0 54 -17 60 -123 44 -55 -8 -169 -14 -287 -14 -260 1 -373
23 -664 129 -55 20 -101 36 -102 36 -2 0 -15 -10 -29 -23z"
          />
          <path
            d="M3372 844 c-43 -30 -30 -57 97 -186 115 -118 121 -122 148 -113 22 8
29 17 31 44 3 31 -5 42 -115 152 -66 66 -123 119 -129 119 -5 0 -20 -7 -32
-16z"
          />
          <path
            d="M3668 799 c-10 -6 -18 -22 -18 -37 0 -21 21 -48 93 -120 91 -91 119
-106 145 -80 7 7 12 24 12 39 0 22 -21 48 -92 118 -92 91 -107 100 -140 80z"
          />
        </g>
      </svg>
      <p class="text-[1.5rem] font-bold">LRD-Qwik</p>
    </div>
  );
});
