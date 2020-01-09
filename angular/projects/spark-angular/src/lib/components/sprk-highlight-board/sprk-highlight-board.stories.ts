import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkHighlightBoardModule } from './sprk-highlight-board.module';
import { SprkHighlightBoardComponent } from './sprk-highlight-board.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Highlight Board',
  component: SprkHighlightBoardComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('highlight-board')}
##### Accessibility
- If the Buttons are being used to navigate
to a new page, they should be \`<a>\` elements.
If they are being used to trigger an event or action,
then they should be \`<button>\` elements with \`aria-role=button\`.
`,
    docs: { iframeHeight: 600 },
  },
};

const modules = {
  imports: [
    SprkHighlightBoardModule,
    RouterModule.forRoot([{
      path: 'iframe.html',
      component: SprkHighlightBoardComponent,
    }]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-highlight-board
      heading="Hello, Welcome To Spark Design System"
      ctaText="Designers"
      ctaHref="https://sparkdesignsystem.com/"
      ctaText2="Developers"
      ctaHref2="https://sparkdesignsystem.com/"
      imgSrc="https://spark-assets.netlify.com/desktop.jpg"
      imgAlt="placeholder"
      idString="highlightboard-1"
    >
    </sprk-highlight-board>
  `,
});

defaultStory.story = {
  name: 'Default'
};

export const noImage = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-highlight-board
      heading="Highlight Board Heading Example"
      ctaText="Learn More"
      ctaText2="Learn More"
      type="noImage"
      idString="highlightboard-3"
    >
    </sprk-highlight-board>
  `,
});

noImage.story = {
  parameters: {
    docs: { iframeHeight: 300 },
  }
};

export const stacked = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-highlight-board
      heading="Highlight Board Heading Example"
      ctaText="Learn More"
      type="stacked"
      imgSrc="https://spark-assets.netlify.com/desktop.jpg"
      imgAlt="placeholder"
      idString="highlightboard-4"
    >
    </sprk-highlight-board>
  `,
});

stacked.story = {
  parameters: {
    docs: { iframeHeight: 800 },
  }
}
