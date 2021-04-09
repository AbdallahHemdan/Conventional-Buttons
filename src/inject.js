/**
 * ^ List of the semantic icons used in conventional comments
 * ~ Special icons for instabug & conventional comments
 */
const praiseIcon = `<svg width="512pt" height="512pt" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m497 36.953h-65.703c0.23828-7.2773 0.37109-14.598 0.37109-21.953 0-8.2852-6.7188-15-15-15h-321.34c-8.2812 0-15 6.7148-15 15 0 7.3555 0.13281 14.676 0.37109 21.953h-65.703c-8.2852 0-15 6.7148-15 15 0 67.211 17.566 130.62 49.461 178.55 31.527 47.387 73.523 74.566 118.89 77.211 10.285 11.191 21.156 20.316 32.48 27.277v66.668h-25.164c-30.422 0-55.168 24.75-55.168 55.168v25.164h-1.0664c-8.2852 0-15 6.7188-15 15 0 8.2852 6.7148 15 15 15h273.13c8.2852 0 15-6.7148 15-15 0-8.2812-6.7148-15-15-15h-1.0664v-25.164c0-30.418-24.746-55.168-55.168-55.168h-25.164v-66.668c11.324-6.957 22.199-16.086 32.484-27.277 45.363-2.6445 87.359-29.824 118.89-77.211 31.895-47.934 49.457-111.34 49.457-178.55 0-8.2852-6.7148-15-15-15zm-422.56 176.94c-26.309-39.535-41.766-91.246-44.121-146.94h52.062c5.4102 68.461 21.48 131.74 46.598 181.97 4 8 8.1836 15.559 12.523 22.676-24.949-9.4219-48.039-29.117-67.062-57.711zm287.06 242.94v25.168h-211v-25.168c0-13.875 11.289-25.168 25.168-25.168h160.66c13.879 0 25.168 11.293 25.168 25.168zm-80.332-55.168h-50.336v-53.633c8.2461 2.1719 16.648 3.3008 25.168 3.3008s16.922-1.1289 25.168-3.3008zm9.2891-89.32c-0.67578 0.27734-1.3242 0.61328-1.9453 0.98438-10.602 5.2734-21.496 8.0039-32.512 8.0039-11.012 0-21.902-2.7305-32.5-7.9961-0.62891-0.37891-1.2812-0.71484-1.9648-1-11.762-6.2188-23.141-15.609-33.902-27.949-0.56641-0.80859-1.2031-1.5547-1.9102-2.2344-10.684-12.684-20.734-28.285-29.914-46.645-27.566-55.129-43.488-127.62-45.301-205.51h290.98c-1.8164 77.891-17.738 150.38-45.301 205.51-9.1797 18.359-19.23 33.961-29.91 46.645-0.71094 0.67969-1.3555 1.4297-1.918 2.2383-10.762 12.344-22.145 21.73-33.906 27.953zm147.11-98.453c-19.023 28.594-42.113 48.289-67.062 57.711 4.3398-7.1172 8.5234-14.676 12.523-22.676 25.117-50.23 41.184-113.51 46.598-181.97h52.062c-2.3555 55.691-17.812 107.4-44.121 146.94z"/></svg>`;
const nitpickIcon = `<svg enable-background="new 0 0 512.005 512.005" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m505.75 475.59-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.32 0-111.74-90.923-202.67-202.67-202.67s-202.67 90.922-202.67 202.67 90.923 202.67 202.67 202.67c48.213 0 92.48-16.981 127.32-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-1e-3 -30.165zm-303.08-112.92c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z"/></svg>`;
const suggestionIcon = `<svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m255.98 59.99c-8.284 0-15 6.716-15 15s6.716 15 15 15c49.634 0 90.015 40.374 90.015 90 0 8.284 6.716 15 15 15s15-6.716 15-15c0-66.168-53.838-120-120.02-120z"/><path d="m217.34 4.03c-67.77 14.161-122.72 68.585-137.18 136.78-12.209 57.582 2.836 115.39 41.277 158.61 18.791 21.123 29.567 49.006 29.567 76.577v30c0 19.96 13.067 36.917 31.093 42.79 5.928 35.025 36.328 63.209 73.907 63.209 37.569 0 67.977-28.175 73.907-63.209 18.026-5.873 31.093-22.83 31.093-42.791v-30c0-27.625 10.812-55.173 30.442-77.569 28.734-32.78 44.558-74.84 44.558-118.43 0-113.56-103.95-199.93-218.66-175.96zm38.665 477.96c-19.282 0-36.188-13.268-42.431-31.1h84.861c-6.242 17.832-23.148 31.1-42.43 31.1zm75-76c0 8.271-6.729 15-15 15h-120c-8.271 0-15-6.729-15-15v-15h150v15zm37.882-127.34c-20.92 23.867-33.791 52.647-37.057 82.343h-151.65c-3.262-29.712-16.1-58.775-36.328-81.516-32.038-36.016-44.557-84.291-34.346-132.44 11.919-56.214 57.719-101.88 113.97-113.63 96.024-20.067 182.53 52.045 182.53 146.59 0 36.312-13.182 71.349-37.118 98.657z"/><path d="m45 179.99h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m51.213 104.99-21.213-21.213c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l21.213 21.213c5.857 5.858 15.355 5.859 21.213 0 5.858-5.858 5.858-15.355 0-21.213z"/><path d="m51.213 263.78c-5.858-5.858-15.356-5.858-21.213 0l-21.213 21.213c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.859 21.213 0l21.213-21.213c5.858-5.858 5.858-15.355 0-21.213z"/><path d="m497 179.99h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m503.21 83.777c-5.857-5.858-15.355-5.858-21.213 0l-21.213 21.213c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l21.213-21.213c5.858-5.858 5.858-15.355 0-21.213z"/><path d="m503.21 284.99-21.213-21.213c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l21.213 21.213c5.857 5.857 15.355 5.858 21.213 0s5.858-15.355 0-21.213z"/></svg>`;
const issueIcon = `<svg width="512" height="512" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.25 24h-2.5c-3.722 0-6.75-3.028-6.75-6.75v-5.5c0-3.722 3.028-6.75 6.75-6.75h2.5c3.722 0 6.75 3.028 6.75 6.75v5.5c0 3.722-3.028 6.75-6.75 6.75zm-2.5-17.5c-2.895 0-5.25 2.355-5.25 5.25v5.5c0 2.895 2.355 5.25 5.25 5.25h2.5c2.895 0 5.25-2.355 5.25-5.25v-5.5c0-2.895-2.355-5.25-5.25-5.25z"/><path d="m15.97 7.15c-.118 0-.238-.028-.35-.087-.366-.194-.506-.647-.313-1.014.125-.235.193-.519.193-.799 0-.965-.785-1.75-1.75-1.75h-3.5c-.47 0-.911.181-1.24.51s-.51.77-.51 1.24c0 .28.068.564.193.799.193.366.054.82-.313 1.014-.366.194-.819.053-1.013-.313-.24-.453-.367-.972-.367-1.5 0-.871.337-1.688.95-2.3s1.429-.95 2.3-.95h3.5c1.792 0 3.25 1.458 3.25 3.25 0 .528-.127 1.047-.367 1.5-.134.255-.394.4-.663.4z"/><path d="m10.273 3.25c-.414 0-.75-.336-.75-.75v-1.659c0-.414.336-.75.75-.75s.75.336.75.75v1.659c0 .414-.336.75-.75.75z"/><path d="m13.773 3.25c-.414 0-.75-.336-.75-.75v-1.659c0-.414.336-.75.75-.75s.75.336.75.75v1.659c0 .414-.336.75-.75.75z"/><path d="m12 19c-.414 0-.75-.336-.75-.75v-7.5c0-.414.336-.75.75-.75s.75.336.75.75v7.5c0 .414-.336.75-.75.75z"/><path d="m23.25 15.25h-3.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.75c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m4.5 15.25h-3.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.75c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m1.75 23c-.229 0-.455-.104-.603-.303-.247-.333-.178-.802.155-1.049l3.23-2.4c.332-.246.802-.178 1.049.155s.178.802-.155 1.049l-3.23 2.4c-.133.1-.29.148-.446.148z"/><path d="m19.021 9.9c-.229 0-.455-.104-.603-.303-.247-.333-.178-.802.155-1.049l3.23-2.4c.332-.246.802-.178 1.049.155s.178.802-.155 1.049l-3.23 2.4c-.134.1-.291.148-.446.148z"/><path d="m22.25 23c-.156 0-.313-.048-.447-.148l-3.23-2.4c-.333-.247-.402-.717-.155-1.049.248-.333.718-.4 1.049-.155l3.23 2.4c.333.247.402.717.155 1.049-.147.199-.373.303-.602.303z"/><path d="m4.979 9.9c-.156 0-.313-.048-.447-.148l-3.23-2.4c-.332-.247-.401-.717-.154-1.049.247-.333.718-.4 1.049-.155l3.23 2.4c.333.247.402.717.155 1.049-.147.198-.374.303-.603.303z"/></svg>`;
const questionIcon = `<svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.49 0-256 114.5-256 256 0 141.49 114.5 256 256 256 141.49 0 256-114.5 256-256 0-141.49-114.5-256-256-256zm0 477.87c-122.34 0-221.87-99.529-221.87-221.87s99.53-221.87 221.87-221.87 221.87 99.53 221.87 221.87-99.53 221.87-221.87 221.87z"/><path d="m249.51 311.95c-12.122 0-21.935 10.101-21.935 22.224 0 11.833 9.524 22.224 21.935 22.224s22.224-10.391 22.224-22.224c0-12.123-10.102-22.224-22.224-22.224z"/><path d="m253.26 143.68c-38.964 0-56.86 23.091-56.86 38.676 0 11.257 9.526 16.452 17.318 16.452 15.586 0 9.237-22.224 38.677-22.224 14.432 0 25.977 6.349 25.977 19.627 0 15.585-16.163 24.534-25.688 32.614-8.371 7.216-19.339 19.05-19.339 43.873 0 15.007 4.041 19.338 15.874 19.338 14.144 0 17.03-6.35 17.03-11.834 0-15.007 0.288-23.667 16.162-36.078 7.794-6.061 32.327-25.688 32.327-52.819s-24.533-47.625-61.478-47.625z"/></svg>`;
const thoughtIcon = `<svg width="512" height="512" enable-background="new 0 0 516.657 516.657" viewBox="0 0 516.66 516.66" xmlns="http://www.w3.org/2000/svg"><path d="m487.404 134.943c-15.433-17.093-35.591-28.433-57.82-32.747-1.316-18.283-8.667-35.487-21.202-49.247-14.773-16.219-34.978-25.713-56.893-26.734-12.913-.609-25.528 1.78-37.119 6.945-18.304-19.896-43.535-31.77-70.994-33.05-23.558-1.094-46.984 5.988-65.946 19.955-14.661 10.8-26.212 25.345-33.44 41.872-5.676-1.104-11.439-1.797-17.244-2.067-65.413-3.073-121.055 47.663-124.102 113.045-2.195 47.086 23.782 90.834 65.415 111.684 3.283 21.936 16.314 40.779 34.581 51.921-6.026 10.335-9.496 22.335-9.496 35.137 0 38.599 31.402 70 70 70 34.515 0 63.256-25.116 68.955-58.028.484.008.969.034 1.453.034 26.318-.002 51.089-11.993 67.49-32.025 12.71 8.537 27.546 13.48 43.141 14.207 20.277.945 40.235-5.432 56.186-17.958 12.872-10.109 22.491-23.686 27.768-38.969 47.64-8.597 83.961-49.271 86.262-98.604 1.298-27.885-8.288-54.652-26.995-75.371zm-324.261 276.714c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40zm321.286-202.739c-1.764 37.846-31.531 68.563-69.239 71.452-6.679.512-12.21 5.39-13.551 11.953-2.577 12.611-9.609 23.965-19.802 31.97-10.291 8.081-23.174 12.177-36.26 11.585-14.075-.656-27.196-6.64-36.946-16.85-3.354-3.512-8.201-5.18-13.006-4.484-4.806.698-8.976 3.68-11.191 8.002-10.204 19.906-31.213 32.08-53.528 31.056-.047-.002-.093-.007-.139-.009-7.987-29.869-35.272-51.936-67.624-51.936-14.568 0-28.108 4.478-39.324 12.123-15.443-6.575-26.302-21.777-26.565-39.435-.09-6.026-3.778-11.414-9.364-13.678-34.814-14.11-57.028-48.814-55.278-86.356 2.278-48.856 43.897-86.743 92.735-84.475 8.021.375 15.931 1.821 23.509 4.299 3.904 1.276 8.161.896 11.777-1.052s6.275-5.294 7.356-9.257c4.304-15.775 13.976-29.841 27.234-39.607 13.634-10.041 29.794-14.917 46.756-14.143 22.685 1.059 43.229 12.316 56.365 30.887 4.684 6.624 13.786 8.322 20.542 3.835 9.275-6.156 20.073-9.119 31.207-8.617 13.91.648 26.734 6.675 36.111 16.97 9.377 10.294 14.184 23.623 13.535 37.531-.043.925-.125 1.947-.25 3.125-.433 4.085.827 8.168 3.487 11.298s6.487 5.031 10.588 5.262c40.987 2.301 72.777 37.539 70.865 78.551z"/><path d="m52.143 416.66c-27.57 0-50 22.43-50 50s22.43 50 50 50 50-22.43 50-50-22.43-50-50-50zm0 70c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20z"/></svg>`;
const choreIcon = `<svg enable-background="new 0 0 512.001 512.001" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m441.66 104.52-23.609-23.609c-19.527-19.538-51.316-19.527-70.832 0l-7.869 7.869-23.614-23.614c-6.521-6.521-17.087-6.521-23.609 0l-44.575 44.575c-21.699-9.182-45.244-14.01-69.55-14.01-47.625 0-92.343 18.494-125.92 52.076-69.435 69.435-69.435 182.42 0 251.85 33.582 33.582 78.299 52.076 125.92 52.076s92.348-18.494 125.93-52.076 52.076-78.299 52.076-125.92c0-24.306-4.828-47.851-14.01-69.551l44.575-44.575c6.521-6.516 6.521-17.092 0-23.609l-23.614-23.614 7.869-7.869c6.506-6.506 17.097-6.516 23.614 0l23.609 23.609c3.261 3.261 7.533 4.892 11.804 4.892s8.544-1.631 11.804-4.892c6.522-6.515 6.522-17.092 1e-3 -23.607zm-161.34 271.53c-27.277 27.272-63.614 42.293-102.32 42.293s-75.038-15.022-102.32-42.293c-56.414-56.418-56.414-148.22 0-204.64 27.277-27.272 63.608-42.293 102.32-42.293 22.581 0 44.351 5.121 63.991 14.796 0.474 0.305 0.957 0.599 1.465 0.856 11.984 6.082 22.928 13.665 32.612 22.57 0.13 0.12 0.259 0.242 0.388 0.362 1.31 1.213 2.6 2.448 3.863 3.71 1.262 1.263 2.495 2.553 3.71 3.863 0.12 0.129 0.242 0.259 0.362 0.39 8.905 9.683 16.489 20.628 22.57 32.612 0.257 0.509 0.551 0.991 0.856 1.465 9.675 19.64 14.796 41.411 14.796 63.991 2e-3 38.706-15.02 75.037-42.292 102.31zm45.008-202.42c-5.468-8.023-11.62-15.652-18.444-22.8-0.973-1.021-1.958-2.031-2.956-3.029-0.998-0.997-2.008-1.982-3.029-2.956-7.148-6.823-14.777-12.976-22.8-18.444l25.828-25.828 47.229 47.229-25.828 25.828z"/><path d="m507.11 167.23-11.129-11.13c-6.511-6.521-17.087-6.521-23.609 0-6.521 6.516-6.521 17.087 0 23.609l11.13 11.13c3.261 3.261 7.533 4.892 11.804 4.892s8.544-1.631 11.804-4.892c6.522-6.516 6.522-17.087 0-23.609z"/><path d="m440.33 156.1c-6.521-6.522-17.097-6.522-23.608 0l-11.13 11.13c-6.521 6.521-6.521 17.092 0 23.609 3.261 3.261 7.533 4.892 11.804 4.892s8.544-1.631 11.804-4.892l11.13-11.13c6.521-6.522 6.521-17.092 0-23.609z"/><path d="m507.11 89.319c-3.261-3.261-7.533-4.892-11.805-4.892s-8.544 1.631-11.804 4.892l-11.13 11.13c-6.521 6.521-6.521 17.092 0 23.609 6.521 6.521 17.097 6.521 23.609 0l11.13-11.13c6.521-6.521 6.521-17.092 0-23.609z"/><path d="m256.76 328.71c-6.522-6.522-17.087-6.522-23.609 0-14.733 14.733-34.294 22.847-55.066 22.847s-40.331-8.114-55.066-22.847c-6.521-6.521-17.087-6.521-23.609 0-6.521 6.516-6.521 17.092 0 23.609 21.038 21.043 48.978 32.63 78.674 32.63s57.636-11.587 78.674-32.63c6.523-6.517 6.523-17.093 2e-3 -23.609z"/></svg>`;

const instabugIcon = `<svg viewBox="0 0 235.68 150.04" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="84.2" x2="3.54" y1="62.93" y2="209.31" gradientUnits="userSpaceOnUse"><stop stop-color="#00287a" stop-opacity="0" offset="0"/><stop stop-color="#00287a" offset="1"/></linearGradient><linearGradient id="h" x1="193.71" x2="25.51" y1="60.89" y2="252.05" xlink:href="#a"/><linearGradient id="g" x1="134.83" x2="29.03" y1="33.61" y2="224.17" xlink:href="#a"/><linearGradient id="f" x1="35.85" x2="118.19" y1="93.83" y2="93.83" gradientUnits="userSpaceOnUse"><stop stop-color="#19a3ff" stop-opacity="0" offset="0"/><stop stop-color="#0e5fc1" offset="1"/></linearGradient><linearGradient id="e" x1="68.23" x2="172.05" y1="87.57" y2="77.41" gradientUnits="userSpaceOnUse"><stop stop-color="#002061" stop-opacity="0" offset="0"/><stop stop-color="#00143d" offset="1"/></linearGradient><linearGradient id="d" x1="94.87" x2="-18.63" y1="-35.29" y2="170.7" xlink:href="#a"/><linearGradient id="c" x1="121.09" x2="15.29" y1="-26.69" y2="163.87" xlink:href="#a"/><linearGradient id="b" x1="163.02" x2="104.31" y1="-.95" y2="124.96" xlink:href="#a"/></defs><title>Instabug-Logo-H_color</title><g data-name="Layer 2"><g data-name="Layer 1"><polygon points="44.27 150.04 115.11 60.3 84.63 60.3 13.75 150.04" fill="#64b5f9"/><polygon points="44.26 150.04 91.98 89.74 61.37 89.74 13.65 150.04" fill="url(#a)" opacity=".2"/><path d="M145.93,60.3,75.1,150h70.61a39.48,39.48,0,0,0,31-15l59-74.73Z" fill="#00287a"/><path d="M145.93,60.3,75.1,150h70.61a39.48,39.48,0,0,0,31-15l59-74.73Z" fill="url(#h)"/><polygon points="75.1 150.04 145.93 60.3 115.09 60.3 44.26 150.04" fill="#0098ff"/><polygon points="75.1 150.04 145.93 60.3 115.09 60.3 44.26 150.04" fill="url(#g)" opacity=".35"/><polygon points="61.37 89.74 54.92 97.91 116.26 97.91 122.69 89.74" fill="url(#f)" opacity=".8"/><path d="M174.35,60.3,163,74.73a39.46,39.46,0,0,1-31,15h-9.29l-6.43,8.17h16.59a45.63,45.63,0,0,0,36-17.45L184.78,60.3Z" fill="url(#e)" opacity=".8"/><polygon points="30.53 89.74 101.36 0 70.88 0 0 89.74" fill="#64b5f9"/><polygon points="30.53 89.74 101.36 0 70.87 0 0.04 89.74" fill="url(#d)" opacity=".2"/><polygon points="61.37 89.74 132.2 0 101.36 0 30.53 89.74" fill="#0098ff"/><polygon points="61.37 89.74 132.2 0 101.36 0 30.53 89.74" fill="url(#c)" opacity=".35"/><path d="M163,74.73,221.94,0H132.2L61.37,89.74H132A39.46,39.46,0,0,0,163,74.73Z" fill="#0e5fc1"/><path d="M163,74.73,221.94,0H132.2L61.37,89.74H132A39.46,39.46,0,0,0,163,74.73Z" fill="url(#b)" opacity=".5"/></g></g></svg>`;
const conventionalIcon = `<svg width="512pt" height="512pt" viewBox="0 -45 512 511" xmlns="http://www.w3.org/2000/svg"><path d="m407 0.5h-302c-57.898 0-105 47.102-105 105v162.17c0 46.199 30.332 86.438 74.285 99.316l50.711 50.715c2.8164 2.8125 6.6289 4.3945 10.609 4.3945 3.9766 0 7.793-1.582 10.605-4.3945l46.52-46.523h214.27c57.898 0 105-47.102 105-105v-160.68c0-57.898-47.102-105-105-105zm75 265.68c0 41.355-33.645 75-75 75h-220.48c-3.9766 0-7.793 1.582-10.605 4.3945l-40.309 40.309-42.93-42.93c-1.9258-1.9258-4.3398-3.293-6.9844-3.9492-32.789-8.1602-55.691-37.492-55.691-71.332v-162.17c0-41.355 33.645-75 75-75h302c41.355 0 75 33.645 75 75z"/><path d="m351.24 144.33h-190.48c-8.2852 0-15 6.7188-15 15 0 8.2852 6.7148 15 15 15h190.48c8.2852 0 15-6.7148 15-15 0-8.2812-6.7148-15-15-15z"/><path d="m351.24 197.35h-190.48c-8.2852 0-15 6.7148-15 15 0 8.2852 6.7148 15 15 15h190.48c8.2852 0 15-6.7148 15-15 0-8.2852-6.7148-15-15-15z"/></svg>`;

/**
 * & List of all the conventional item/labels and its associated items
 */
const semanticLabels = {
  praise: {
    text: 'Praise',
    title: '👏 Praise',
    icon: praiseIcon,
    blocking: false,
  },
  nitpick: {
    text: 'Nitpick',
    title: '🤓 Nitpick',
    icon: nitpickIcon,
    blocking: true,
  },
  suggestion: {
    text: 'Suggestion',
    title: '💡 Suggestion',
    icon: suggestionIcon,
    blocking: true,
  },
  issue: {
    text: 'Issue',
    title: '🐞 Issue',
    icon: issueIcon,
    blocking: true,
  },
  question: {
    text: 'Question',
    title: '❔ Question',
    icon: questionIcon,
    blocking: true,
  },
  thought: {
    text: 'Thought',
    title: '💭 Thought',
    icon: thoughtIcon,
    blocking: false,
  },
  chore: {
    text: 'Chore',
    title: '💣 Chore',
    icon: choreIcon,
    blocking: true,
  },
};

const mainContainer =
  '.form-control.input-contrast.comment-form-textarea.js-comment-field.js-paste-markdown.js-task-list-field.js-quick-submit.js-size-to-fit.js-session-resumable.js-saved-reply-shortcut-comment-field';
const semanticCommentStructure = `**%text%decoration:** <subject>`;

const fillTextAreaValue = (textarea, value, emptySubject = true) => {
  textarea.value = value;
  textarea.focus();

  const length = textarea.value.length;

  if (emptySubject) {
    textarea.setSelectionRange(length - 9, length);
  }
};

const semanticButtonClickHandler = (e, { textarea, label, blocking }) => {
  e.preventDefault();
  const decoration = blocking ? '' : ' (non-blocking)';
  const semanticComment = semanticCommentStructure
    .replace('%text', semanticLabels[label].text)
    .replace('%decoration', decoration);
  const cleanedValue = textarea.value.replace(/\*\*\w+(\s\(non-blocking\))?:\*\*\s?/, '');

  if (cleanedValue && cleanedValue !== '<subject>') {
    fillTextAreaValue(
      textarea,
      semanticComment.replace(':** <subject>', `:** ${cleanedValue}`),
      false,
    );
  } else {
    fillTextAreaValue(textarea, semanticComment);
  }
};

const buttonGenerator = (textarea, parent, label, blocking) => {
  const button = document.createElement('button');
  button.classList.add('has-tooltip');
  button.setAttribute('title', semanticLabels[label].title);
  button.innerHTML = semanticLabels[label].icon;

  if (blocking) {
    button.classList.add('blocking');
    button.setAttribute('title', `${semanticLabels[label].title} (blocking)`);
  }

  button.addEventListener('click', e =>
    semanticButtonClickHandler(e, { textarea, label, blocking }),
  );

  parent.appendChild(button);
};

const buttonPairGenerator = (textarea, parent, label) => {
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttonContainer');
  buttonGenerator(textarea, buttonContainer, label, false);

  if (semanticLabels[label].blocking) {
    buttonContainer.classList.add('hasBlockingButton');
    buttonGenerator(textarea, buttonContainer, label, true);
  }

  parent.appendChild(buttonContainer);
};

const addSemanticButton = element => {
  const allParents = document.querySelectorAll(
    '.js-previewable-comment-form.previewable-comment-form.write-selected',
  );

  const parent = allParents[allParents.length - 1];

  const container = document.createElement('div');
  container.className = 'conventional-main-container';

  const buttonsContainer = document.createElement('div');
  buttonsContainer.id = 'conventionalCommentButtonContainer';
  buttonsContainer.className = 'conventionalCommentButtonContainer';

  const title = document.createElement('div');
  title.className = 'conventional-title';

  const conventionalImg = document.createElement('div');
  conventionalImg.innerHTML = conventionalIcon;
  conventionalImg.className = 'conventional-title-img';

  const conventionalTitle = document.createElement('h3');
  conventionalTitle.innerText = 'Conventional Comments';
  conventionalTitle.className = 'conventional-title-text';

  title.appendChild(conventionalTitle);

  Object.keys(semanticLabels).forEach(label => {
    buttonPairGenerator(element, buttonsContainer, label);
  });

  parent.classList.remove('clearfix');
  parent.classList.add('has-conventional-comments-buttons');

  container.prepend(buttonsContainer);
  container.prepend(title);

  parent.prepend(container);
};

setTimeout(function () {
  document.querySelectorAll(mainContainer).forEach(function (note, index, list) {
    if (index === list.length - 1) {
      note.dataset.semanticButtonInitialized = 'true';
      addSemanticButton(note);
    }
  });
}, 1000);
