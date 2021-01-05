import React from 'react';
const Sidebar = (props) => {
  return (
    <div className="px-1">
      <div className="flex flex-shrink">
        <nav
          id="sidebarMenu"
          className="border-none shadow-xl rounded-3xl"
        >
          <div>
            <ul className="flex flex-col ">
              <li className="py-12 px-12">
                <a href="/" className="">
                <svg  xmlns="http://www.w3.org/2000/svg" width="34" height="48" viewBox="0 0 94 168">
                    <g id="Group_2" data-name="Group 2" transform="translate(-372 -432)">
                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="47" cy="47" r="47" transform="translate(372 432)" fill="#774cfd"/>
                        <circle id="Ellipse_2" data-name="Ellipse 2" cx="47" cy="47" r="47" transform="translate(372 506)" fill="#3da1ff"/>
                    </g>
                </svg>
                </a>
                </li>
            </ul>
           </div>
           <div>
           <ul className="flex flex-col ">
              <li className="py-5 px-10 shadow-none">
                <a href="/" className=" ">
                    <svg className="fill-current text-black bg-none hover:text-purple-700 hover:shadow-md" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 153 131">
                      <g id="Group_1" data-name="Group 1" transform="translate(-208 -817)">
                      <rect id="Rectangle_1" data-name="Rectangle 1" width="153" height="131" rx="16" transform="translate(208 817)" fill="#fff"/>
                        <g id="dashboard" transform="translate(236 835)">
                       <path id="Path_1" data-name="Path 1" d="M38.123,29.97H7.212C3.235,29.97,0,27.029,0,23.413V6.556C0,2.941,3.235,0,7.212,0H38.123c3.978,0,7.213,2.941,7.213,6.556V23.413C45.336,27.029,42.1,29.97,38.123,29.97ZM7.212,5.619a.987.987,0,0,0-1.03.936V23.413a.987.987,0,0,0,1.03.937H38.123a.988.988,0,0,0,1.031-.937V6.556a.988.988,0,0,0-1.031-.936Zm0,0"/>
                    <path id="Path_2" data-name="Path 2" d="M38.123,265.779H7.212c-3.977,0-7.212-2.941-7.212-6.556V219.888c0-3.616,3.235-6.556,7.212-6.556H38.123c3.978,0,7.213,2.941,7.213,6.556v39.335C45.336,262.838,42.1,265.779,38.123,265.779ZM7.212,218.951a.987.987,0,0,0-1.03.937v39.335a.987.987,0,0,0,1.03.936H38.123a.988.988,0,0,0,1.031-.936V219.888a.988.988,0,0,0-1.031-.937Zm0,0" transform="translate(0 -175.871)"/>
                       <path id="Path_3" data-name="Path 3" d="M315.456,371.3H284.545c-3.978,0-7.213-2.941-7.213-6.556V347.888c0-3.616,3.235-6.556,7.213-6.556h30.911c3.977,0,7.212,2.941,7.212,6.556v16.858C322.668,368.361,319.433,371.3,315.456,371.3Zm-30.911-24.35a.988.988,0,0,0-1.031.937v16.858a.988.988,0,0,0,1.031.936h30.911a.987.987,0,0,0,1.03-.936V347.888a.987.987,0,0,0-1.03-.937Zm0,0" transform="translate(-223.753 -281.394)"/>
                    <path id="Path_4" data-name="Path 4" d="M315.456,52.447H284.545c-3.978,0-7.213-2.941-7.213-6.556V6.556c0-3.615,3.235-6.556,7.213-6.556h30.911c3.977,0,7.212,2.941,7.212,6.556V45.89C322.668,49.506,319.433,52.447,315.456,52.447ZM284.545,5.619a.988.988,0,0,0-1.031.936V45.89a.988.988,0,0,0,1.031.937h30.911a.987.987,0,0,0,1.03-.937V6.556a.987.987,0,0,0-1.03-.936Zm0,0" transform="translate(-223.753)"/>
                         </g>
                        </g>
                    </svg>
                   <p>Dashboard</p>
                </a>
              </li>
            </ul>
            <ul className="flex flex-col ">
              <li className="py-5 px-10 shadow-none">
                <a href="/" className=" ">
                <svg className="fill-current text-black bg-none hover:text-purple-700 hover:shadow-md" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 153 131">
  <g id="Group_10" data-name="Group 10" transform="translate(-464 -1292)">
    <rect id="Rectangle_3" data-name="Rectangle 3" width="153" height="131" rx="16" transform="translate(464 1292)" fill="#fff"/>
    <g id="bar-chart" transform="translate(491 1313)">
      <g id="Group_4" data-name="Group 4">
        <g id="Group_3" data-name="Group 3">
          <rect id="Rectangle_2" data-name="Rectangle 2" width="98.92" height="2.997" transform="translate(0 86.913)"/>
          <path id="Path_5" data-name="Path 5" d="M25.68,317.97h16.8a1.6,1.6,0,0,0,1.68-1.5V289.5a1.6,1.6,0,0,0-1.68-1.5H25.68A1.6,1.6,0,0,0,24,289.5v26.973A1.6,1.6,0,0,0,25.68,317.97ZM27.36,291H40.8v23.976H27.36Z" transform="translate(-18.959 -234.054)"/>
          <path id="Path_6" data-name="Path 6" d="M249.68,239.952h16.8a1.6,1.6,0,0,0,1.68-1.5V193.5a1.6,1.6,0,0,0-1.68-1.5h-16.8a1.6,1.6,0,0,0-1.68,1.5v44.955A1.6,1.6,0,0,0,249.68,239.952ZM251.36,195H264.8v41.958H251.36Z" transform="translate(-197.135 -156.036)"/>
          <path id="Path_7" data-name="Path 7" d="M137.68,161.934h16.8a1.6,1.6,0,0,0,1.68-1.5V97.5a1.6,1.6,0,0,0-1.68-1.5h-16.8A1.6,1.6,0,0,0,136,97.5v62.937A1.6,1.6,0,0,0,137.68,161.934ZM139.36,99H152.8v59.94H139.36Z" transform="translate(-108.107 -78.018)"/>
          <path id="Path_8" data-name="Path 8" d="M361.68,83.916h16.8a1.6,1.6,0,0,0,1.68-1.5V1.5a1.6,1.6,0,0,0-1.68-1.5h-16.8A1.6,1.6,0,0,0,360,1.5V82.417A1.6,1.6,0,0,0,361.68,83.916ZM363.36,3H376.8V80.919H363.36Z" transform="translate(-286.283)"/>
        </g>
      </g>
    </g>
  </g>
</svg>

                   <p>Statistic</p>
                </a>
              </li>
            </ul>
            <ul className="flex flex-col ">
              <li className="py-5 px-10 shadow-none">
                <a href="/" className=" ">
                <svg className="fill-current text-black bg-none hover:text-purple-700 hover:shadow-md" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 153 131">
  <g id="Group_9" data-name="Group 9" transform="translate(-427 -1455)">
    <rect id="Rectangle_4" data-name="Rectangle 4" width="153" height="131" rx="16" transform="translate(427 1455)" fill="#fff"/>
    <g id="statistical" transform="translate(853.585 1460.433) rotate(90)">
      <g id="Group_6" data-name="Group 6" transform="translate(15 304.307)">
        <g id="Group_5" data-name="Group 5">
          <path id="Path_9" data-name="Path 9" d="M29.98,239.3H4.02C1.8,239.3,0,241.84,0,244.967v73.145c0,3.127,1.8,5.663,4.02,5.663H29.98c2.22,0,4.02-2.535,4.02-5.663V244.967C34,241.84,32.2,239.3,29.98,239.3Z" transform="translate(0 -239.304)" fill="#fff" stroke="#000" stroke-width="6"/>
        </g>
      </g>
      <g id="Group_8" data-name="Group 8" transform="translate(70.347 304.774)">
        <g id="Group_7" data-name="Group 7">
          <path id="Path_10" data-name="Path 10" d="M215.373,23.658h-25.96c-2.22,0-4.02,1.359-4.02,3.035v78.4c0,1.676,1.8,3.035,4.02,3.035h25.96c2.22,0,4.02-1.359,4.02-3.035v-78.4C219.393,25.017,217.593,23.658,215.373,23.658Z" transform="translate(-185.393 -23.658)" fill="#fff" stroke="#000" stroke-width="6"/>
        </g>
      </g>
    </g>
  </g>
</svg>
                   <p>Export</p>
                </a>
              </li>
            </ul>
            <ul className="flex flex-col ">
              <li className="pt-80 pb-4 px-10 shadow-none">
                <a href="/" className=" ">
                <svg className="fill-current text-black bg-none hover:text-purple-700 hover:shadow-md" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 143 126">
  <g id="Group_15" data-name="Group 15" transform="translate(-464 -1637)">
    <rect id="Rectangle_5" data-name="Rectangle 5" width="143" height="126" rx="16" transform="translate(464 1637)" fill="#fff"/>
    <g id="logout" transform="translate(488 1648.15)">
      <g id="Group_12" data-name="Group 12" transform="translate(10 21.85)">
        <g id="Group_11" data-name="Group 11" transform="translate(0 0)">
          <path id="Path_11" data-name="Path 11" d="M36.756,56.133H9.189a2.83,2.83,0,0,1-3.063-2.513V8.389A2.83,2.83,0,0,1,9.189,5.876H36.756a2.826,2.826,0,0,0,3.063-2.513A2.827,2.827,0,0,0,36.756.85H9.189C4.123.85,0,4.232,0,8.389V53.62c0,4.156,4.123,7.539,9.189,7.539H36.756a2.826,2.826,0,0,0,3.063-2.513A2.826,2.826,0,0,0,36.756,56.133Z" transform="translate(0 -0.85)"/>
        </g>
      </g>
      <g id="Group_14" data-name="Group 14" transform="translate(30 32.371)">
        <g id="Group_13" data-name="Group 13">
          <path id="Path_12" data-name="Path 12" d="M224.4,125.181,203.479,107.99a3.945,3.945,0,0,0-4.865.029,2.538,2.538,0,0,0,.034,4.052L213.6,124.356H173.54a2.913,2.913,0,1,0,0,5.731H213.6l-14.949,12.286a2.54,2.54,0,0,0-.034,4.052,3.944,3.944,0,0,0,4.865.029L224.4,129.261a2.542,2.542,0,0,0,0-4.08Z" transform="translate(-170.1 -107.165)"/>
        </g>
      </g>
    </g>
  </g>
</svg>
                   <p>Logout</p>
                </a>
              </li>
            </ul>
           </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;