import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

const BmInput = (props) => {
  return html`
    <div class="input-control">
      <input ...${props} />
    </div>
  `;
};

export default BmInput;
