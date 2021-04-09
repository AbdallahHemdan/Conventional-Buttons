const trophyIcon = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trophy" class="svg-inline--fa fa-trophy fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></svg>`;
const searchIcon = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>`;
const exclamationIcon = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>`;
const bugIcon = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" class="svg-inline--fa fa-bug fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"></path></svg>`;
const questionIcon = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question" class="svg-inline--fa fa-question fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"></path></svg>`;
const commentIcon = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>`;
const homeIcon = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>`;

const semanticLabels = {
  praise: {
    text: 'praise',
    icon: trophyIcon,
  },
  'nitpick-non-blocking': {
    text: 'nitpick (non-blocking)',
    icon: searchIcon,
  },
  'nitpick-blocking': {
    text: 'nitpick (blocking)',
    icon: searchIcon,
  },
  'suggestion-non-blocking': {
    text: 'suggestion (non-blocking)',
    icon: exclamationIcon,
  },
  'suggestion-blocking': {
    text: 'suggestion (blocking)',
    icon: exclamationIcon,
  },
  'issue-non-blocking': {
    text: 'issue (non-blocking)',
    icon: bugIcon,
  },
  'issue-blocking': {
    text: 'issue (blocking)',
    icon: bugIcon,
  },
  'question-non-blocking': {
    text: 'question (non-blocking)',
    icon: questionIcon,
  },
  'question-blocking': {
    text: 'question (blocking)',
    icon: questionIcon,
  },
  thought: {
    text: 'thought',
    icon: commentIcon,
  },
  'chore-non-blocking': {
    text: 'chore (non-blocking)',
    icon: homeIcon,
  },
  'chore-blocking': {
    text: 'chore (blocking)',
    icon: homeIcon,
  },
};

const semanticCommentStructure = `**%text:** <subject>`;

const fillTextAreaValue = (textarea, value, emptySubject = true) => {
  textarea.value = value;
  textarea.focus();

  const length = textarea.value.length;

  if (emptySubject) {
    textarea.setSelectionRange(length - 9, length);
  }
};

const semanticButtonClickHandler = (e, { textarea, label }) => {
  e.preventDefault();
  const semanticComment = semanticCommentStructure.replace('%text', semanticLabels[label].text);
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

const buttonGenerator = (textarea, parent, label) => {
  const button = document.createElement('button');
  button.classList.add('has-tooltip');

  button.setAttribute('title', semanticLabels[label].text);
  button.innerHTML = semanticLabels[label].icon;

  button.addEventListener('click', e => semanticButtonClickHandler(e, { textarea, label }));
  parent.appendChild(button);
};

const buttonPairGenerator = (textarea, parent, label) => {
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttonContainer');
  buttonGenerator(textarea, buttonContainer, label);

  parent.appendChild(buttonContainer);
};

const addSemanticButton = element => {
  const allParents = document.querySelectorAll(
    '.comment-form-head.tabnav.d-flex.flex-justify-between.mb-2.p-0.tabnav--responsive.flex-column.border-bottom-0.mb-0.mb-lg-2.flex-items-stretch.border-lg-bottom.color-border-primary.flex-lg-items-center.flex-lg-row',
  );

  const parent = allParents[allParents.length - 1];
  const container = document.createElement('div');
  container.id = 'conventionalCommentButtonContainer';
  container.className = 'conventionalCommentButtonContainer';

  Object.keys(semanticLabels).forEach(label => {
    console.log('label: ', label);
    buttonPairGenerator(element, container, label);
  });
  parent.classList.remove('clearfix');
  parent.classList.add('has-conventional-comments-buttons');
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
