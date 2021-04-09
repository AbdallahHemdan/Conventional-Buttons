const trophyIcon = `<svg enable-background="new 0 0 512.004 512.004" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m358.4 268c148.83-28.416 153.57-217.82 153.6-219.78 0.064-4.288-1.6-8.416-4.608-11.456s-7.104-4.768-11.392-4.768h-112v-16c0-8.832-7.168-16-16-16h-224c-8.832 0-16 7.168-16 16v16h-112c-4.288 0-8.384 1.728-11.392 4.768s-4.672 7.168-4.608 11.456c0.032 1.952 4.736 191.39 153.6 219.78 13.92 18.688 32.544 33.568 54.4 42.464v56.544c0 32.928-19.776 62.016-50.56 74.144l-19.52 8c-5.984 2.496-9.92 8.352-9.92 14.848v32c0 8.832 7.168 16 16 16h224c8.832 0 16-7.168 16-16v-32c0-6.496-3.936-12.352-9.952-14.816l-19.712-8.064c-30.592-12.096-50.336-41.152-50.336-74.08v-56.544c21.888-8.928 40.512-23.808 54.4-42.496zm25.6-76v-128h94.816c-4.096 38.432-22.336 133.92-101.02 165.38 3.648-11.904 6.208-24.288 6.208-37.376zm-350.94-128h94.944v128c0 13.12 2.56 25.536 6.24 37.472-79.744-31.392-97.376-126.82-101.18-165.47z"/></svg>`;
const searchIcon = `<svg width="136pt" height="136pt" version="1.1" viewBox="-1 0 136 136.22" xmlns="http://www.w3.org/2000/svg"><path d="m93.148 80.832c16.352-23.09 10.883-55.062-12.207-71.41s-55.062-10.883-71.41 12.211c-16.348 23.09-10.883 55.059 12.211 71.406 16.48 11.668 38.27 12.566 55.652 2.3008l37.77 37.543c4.0781 4.293 10.863 4.4648 15.156 0.38672 4.293-4.0742 4.4648-10.859 0.39063-15.152-0.12891-0.13672-0.25391-0.26172-0.39063-0.39063zm-41.84 3.5c-18.246 0.003907-33.039-14.777-33.051-33.023-0.003906-18.246 14.777-33.039 33.027-33.047 18.223-0.007813 33.008 14.75 33.043 32.973 0.03125 18.25-14.742 33.066-32.996 33.098h-0.023437z"/></svg>`;
const exclamationIcon = `<svg width="512" height="512" enable-background="new 0 0 511.98 511.98" viewBox="0 0 511.98 511.98" xmlns="http://www.w3.org/2000/svg"><path d="m139.7 317.38c13.119 11.113 21.818 26.169 24.961 42.604h76.327v-106.9c-25.849-6.678-45-30.195-45-58.102h30c0 16.542 13.458 30 30 30s30-13.458 30-30h30c0 27.906-19.151 51.424-45 58.102v106.9h76.344c3.177-16.431 11.959-31.562 25.202-42.823 40.326-34.29 63.454-84.289 63.454-137.18 0-161.35-196.78-240.59-308.84-125.47-73.136 75.138-66.884 195.57 12.556 262.86z"/><path d="m255.99 511.98c33.084 0 60-26.916 60-60h-120c0 33.084 26.916 60 60 60z"/><path d="m165.99 389.98h180v32h-180z"/></svg>`;
const bugIcon = `<svg enable-background="new 0 0 456.828 456.828" version="1.1" viewBox="0 0 456.83 456.83" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m451.38 247.54c-3.606-3.617-7.898-5.427-12.847-5.427h-63.953v-83.939l49.396-49.394c3.614-3.615 5.428-7.898 5.428-12.85 0-4.947-1.813-9.229-5.428-12.847-3.614-3.616-7.898-5.424-12.847-5.424s-9.233 1.809-12.847 5.424l-49.396 49.394h-240.97l-49.394-49.394c-3.617-3.616-7.898-5.424-12.847-5.424-4.952 0-9.233 1.809-12.85 5.424-3.617 3.617-5.424 7.9-5.424 12.847 0 4.952 1.807 9.235 5.424 12.85l49.394 49.394v83.939h-63.953c-4.949 0-9.231 1.81-12.847 5.427-3.617 3.614-5.426 7.902-5.426 12.847 0 4.949 1.809 9.237 5.426 12.848 3.616 3.617 7.898 5.431 12.847 5.431h63.953c0 30.447 5.522 56.53 16.56 78.224l-57.67 64.809c-3.237 3.81-4.712 8.234-4.425 13.275 0.284 5.037 2.235 9.273 5.852 12.703 3.617 3.045 7.707 4.571 12.275 4.571 5.33 0 9.897-1.991 13.706-5.995l52.246-59.102 4.285 4.004c2.664 2.479 6.801 5.564 12.419 9.274 5.617 3.71 11.897 7.423 18.842 11.143 6.95 3.71 15.23 6.852 24.84 9.418 9.614 2.573 19.273 3.86 28.98 3.86v-255.82h36.547v255.82c9.134 0 18.363-1.239 27.688-3.717 9.328-2.471 17.135-5.232 23.418-8.278 6.275-3.049 12.47-6.519 18.555-10.42 6.092-3.901 10.089-6.612 11.991-8.138 1.909-1.526 3.333-2.762 4.284-3.71l56.534 56.243c3.433 3.617 7.707 5.424 12.847 5.424 5.141 0 9.422-1.807 12.854-5.424 3.607-3.617 5.421-7.902 5.421-12.851s-1.813-9.232-5.421-12.847l-59.388-59.669c12.755-22.651 19.13-50.251 19.13-82.796h63.953c4.949 0 9.236-1.81 12.847-5.427 3.614-3.614 5.432-7.898 5.432-12.847 0-4.948-1.817-9.235-5.445-12.853z"/><path d="m293.08 31.27c-17.795-17.795-39.352-26.696-64.667-26.696-25.319 0-46.87 8.901-64.668 26.696-17.795 17.797-26.691 39.353-26.691 64.667h182.72c0-25.31-8.895-46.87-26.69-64.667z"/></svg>`;
const questionIcon = `<svg enable-background="new 0 0 973.1 973.1" version="1.1" viewBox="0 0 973.1 973.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m502.29 788.2h-47c-33.1 0-60 26.9-60 60v64.9c0 33.1 26.9 60 60 60h47c33.101 0 60-26.9 60-60v-64.9c0-33.199-26.899-60-60-60z"/><path d="m170.89 285.8 86.7 10.8c27.5 3.4 53.6-12.4 63.5-38.3 12.5-32.7 29.9-58.5 52.2-77.3 31.601-26.6 70.9-40 117.9-40 48.7 0 87.5 12.8 116.3 38.3 28.8 25.6 43.1 56.2 43.1 92.1 0 25.8-8.1 49.4-24.3 70.8-10.5 13.6-42.8 42.2-96.7 85.9-54 43.7-89.899 83.099-107.9 118.1-18.4 35.801-24.8 75.5-26.4 115.3-1.399 34.1 25.8 62.5 60 62.5h49c31.2 0 57-23.9 59.8-54.9 2-22.299 5.7-39.199 11.301-50.699 9.399-19.701 33.699-45.701 72.699-78.1 75.499-62.501 124.7-111.9 147.8-148.3 23-36.3 34.6-74.8 34.6-115.5 0-73.5-31.3-138-94-193.4-62.6-55.4-147-83.1-253-83.1-100.8 0-182.1 27.3-244.1 82-52.8 46.6-84.9 101.8-96.2 165.5-3.501 18.6 9.199 36 27.699 38.3z"/></svg>`;
const commentIcon = `<svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m421.661 106.643c.149-1.408.27-2.825.337-4.258 1.833-39.34-28.55-72.718-67.862-74.552-1.127-.052-2.251-.079-3.368-.079-14.463 0-27.996 4.361-39.305 11.873-16.085-22.757-42.108-38.125-72.087-39.523-1.484-.07-2.963-.104-4.433-.104-42.719-.001-79.302 28.916-90.209 68.921-9.222-3.019-18.996-4.864-29.16-5.338-1.742-.081-3.487-.122-5.213-.122-58.441-.005-107.121 46-109.871 105.029-2.234 47.959 26.528 90.175 68.601 107.24.258 17.364 7.682 33.141 19.546 44.338 14.425-11.304 32.563-18.068 52.261-18.068 42.945 0 78.525 32.066 84.143 73.525.367.022.731.054 1.099.071 1.213.057 2.422.085 3.624.085 29.468 0 55.354-16.827 68.105-41.721 12.662 13.269 30.232 21.888 49.991 22.81 1.17.055 2.341.082 3.5.082 35.371 0 65.411-25.097 72.349-59.073 47.485-3.64 85.909-42.217 88.184-91.044 2.449-52.537-37.875-97.151-90.232-100.092z"/><ellipse cx="34.975" cy="477" rx="34.975" ry="35"/><ellipse cx="140.9" cy="387" rx="54.96" ry="55"/></svg>`;
const homeIcon = `<svg enable-background="new 0 0 340.087 340.087" version="1.1" viewBox="0 0 340.09 340.09" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m281.56 103.83c8.263-10.46 32.738-44.904 21.222-73.163-7.152-17.534-25.539-27.766-54.656-30.42-21.497-2.03-43.258 8.923-64.359 19.438-35.17 17.521-58.036 26.763-78.846 7.332-5.38-5.026-13.817-4.738-18.846 0.642-5.018 5.375-4.741 13.811 0.639 18.831 35.836 33.483 76.375 13.277 108.95-2.948 18.585-9.265 36.119-18.111 50.044-16.748 10.358 0.937 28.313 3.999 32.372 13.919 4.756 11.596-6.797 32.282-15.528 44.1l-13.212-13.211c-5.206-5.206-13.643-5.206-18.854 0l-18.555 18.567c-15.36-6.191-31.466-9.332-48.033-9.332-71.475 0-129.62 58.151-129.62 129.63s58.15 129.63 129.62 129.63 129.62-58.151 129.62-129.63c0-19.636-4.54-39.062-13.198-56.745l16.135-16.135c5.218-5.206 5.218-13.643 0-18.855l-14.898-14.898z"/></svg>`;
const instabugIcon = `<svg viewBox="0 0 235.68 150.04" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="84.2" x2="3.54" y1="62.93" y2="209.31" gradientUnits="userSpaceOnUse"><stop stop-color="#00287a" stop-opacity="0" offset="0"/><stop stop-color="#00287a" offset="1"/></linearGradient><linearGradient id="h" x1="193.71" x2="25.51" y1="60.89" y2="252.05" xlink:href="#a"/><linearGradient id="g" x1="134.83" x2="29.03" y1="33.61" y2="224.17" xlink:href="#a"/><linearGradient id="f" x1="35.85" x2="118.19" y1="93.83" y2="93.83" gradientUnits="userSpaceOnUse"><stop stop-color="#19a3ff" stop-opacity="0" offset="0"/><stop stop-color="#0e5fc1" offset="1"/></linearGradient><linearGradient id="e" x1="68.23" x2="172.05" y1="87.57" y2="77.41" gradientUnits="userSpaceOnUse"><stop stop-color="#002061" stop-opacity="0" offset="0"/><stop stop-color="#00143d" offset="1"/></linearGradient><linearGradient id="d" x1="94.87" x2="-18.63" y1="-35.29" y2="170.7" xlink:href="#a"/><linearGradient id="c" x1="121.09" x2="15.29" y1="-26.69" y2="163.87" xlink:href="#a"/><linearGradient id="b" x1="163.02" x2="104.31" y1="-.95" y2="124.96" xlink:href="#a"/></defs><title>Instabug-Logo-H_color</title><g data-name="Layer 2"><g data-name="Layer 1"><polygon points="44.27 150.04 115.11 60.3 84.63 60.3 13.75 150.04" fill="#64b5f9"/><polygon points="44.26 150.04 91.98 89.74 61.37 89.74 13.65 150.04" fill="url(#a)" opacity=".2"/><path d="M145.93,60.3,75.1,150h70.61a39.48,39.48,0,0,0,31-15l59-74.73Z" fill="#00287a"/><path d="M145.93,60.3,75.1,150h70.61a39.48,39.48,0,0,0,31-15l59-74.73Z" fill="url(#h)"/><polygon points="75.1 150.04 145.93 60.3 115.09 60.3 44.26 150.04" fill="#0098ff"/><polygon points="75.1 150.04 145.93 60.3 115.09 60.3 44.26 150.04" fill="url(#g)" opacity=".35"/><polygon points="61.37 89.74 54.92 97.91 116.26 97.91 122.69 89.74" fill="url(#f)" opacity=".8"/><path d="M174.35,60.3,163,74.73a39.46,39.46,0,0,1-31,15h-9.29l-6.43,8.17h16.59a45.63,45.63,0,0,0,36-17.45L184.78,60.3Z" fill="url(#e)" opacity=".8"/><polygon points="30.53 89.74 101.36 0 70.88 0 0 89.74" fill="#64b5f9"/><polygon points="30.53 89.74 101.36 0 70.87 0 0.04 89.74" fill="url(#d)" opacity=".2"/><polygon points="61.37 89.74 132.2 0 101.36 0 30.53 89.74" fill="#0098ff"/><polygon points="61.37 89.74 132.2 0 101.36 0 30.53 89.74" fill="url(#c)" opacity=".35"/><path d="M163,74.73,221.94,0H132.2L61.37,89.74H132A39.46,39.46,0,0,0,163,74.73Z" fill="#0e5fc1"/><path d="M163,74.73,221.94,0H132.2L61.37,89.74H132A39.46,39.46,0,0,0,163,74.73Z" fill="url(#b)" opacity=".5"/></g></g></svg>`;
const conventionalIcon = `<svg width="512pt" height="512pt" viewBox="0 -45 512 511" xmlns="http://www.w3.org/2000/svg"><path d="m407 0.5h-302c-57.898 0-105 47.102-105 105v162.17c0 46.199 30.332 86.438 74.285 99.316l50.711 50.715c2.8164 2.8125 6.6289 4.3945 10.609 4.3945 3.9766 0 7.793-1.582 10.605-4.3945l46.52-46.523h214.27c57.898 0 105-47.102 105-105v-160.68c0-57.898-47.102-105-105-105zm75 265.68c0 41.355-33.645 75-75 75h-220.48c-3.9766 0-7.793 1.582-10.605 4.3945l-40.309 40.309-42.93-42.93c-1.9258-1.9258-4.3398-3.293-6.9844-3.9492-32.789-8.1602-55.691-37.492-55.691-71.332v-162.17c0-41.355 33.645-75 75-75h302c41.355 0 75 33.645 75 75z"/><path d="m351.24 144.33h-190.48c-8.2852 0-15 6.7188-15 15 0 8.2852 6.7148 15 15 15h190.48c8.2852 0 15-6.7148 15-15 0-8.2812-6.7148-15-15-15z"/><path d="m351.24 197.35h-190.48c-8.2852 0-15 6.7148-15 15 0 8.2852 6.7148 15 15 15h190.48c8.2852 0 15-6.7148 15-15 0-8.2852-6.7148-15-15-15z"/></svg>`;

const semanticLabels = {
  praise: {
    text: 'Praise',
    title: '👏 Praise',
    icon: trophyIcon,
    blocking: false,
  },
  nitpick: {
    text: 'Nitpick',
    title: '🤓 Nitpick',
    icon: searchIcon,
    blocking: true,
  },
  suggestion: {
    text: 'Suggestion',
    title: '💡 Suggestion',
    icon: exclamationIcon,
    blocking: true,
  },
  issue: {
    text: 'Issue',
    title: '🐞 Issue',
    icon: bugIcon,
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
    icon: commentIcon,
    blocking: false,
  },
  chore: {
    text: 'Chore',
    title: '💣 Chore',
    icon: homeIcon,
    blocking: true,
  },
};

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
  document
    .querySelectorAll(
      '.form-control.input-contrast.comment-form-textarea.js-comment-field.js-paste-markdown.js-task-list-field.js-quick-submit.js-size-to-fit.js-session-resumable.js-saved-reply-shortcut-comment-field',
    )
    .forEach(function (note, index, list) {
      if (index === list.length - 1) {
        note.dataset.semanticButtonInitialized = 'true';
        addSemanticButton(note);
      }
    });
}, 1000);
