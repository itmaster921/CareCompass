/**
 * @providesModule @pdf
 */

import { Colors, Images } from '@theme';

// header
// ------
export const header = `
  <div class='header'>
    <div class='header-title'>
      <h1>Care Compass Study</h1>
    </div>
    <div class='header-logo'><img src=${Images.base64_dtt_logo} alt='' /></div>
  </div>
  <p class='header-description'>This Study is for people living with dementia. It aims to help people work out what is right for them, when thinking about if they were really sick or at the end of their life. As you would have discussed with your aged care team, this does not mean that you are about to die. Instead it is designed to help your family and carers make decisions if you cannot.</p>
`;

// details
// -------
export const details = `
  <div class='details'>
    <div class='details-name'>
      <p>Your name:</p><span></span>
    </div>
    <div class='details-date'>
      <p>Date:</p><span></span>
    </div>
  </div>
`;

// footer
// ------
export const footer = `
  <div class='footer'>
    <div class='logo-pca'>
      <img src=${Images.base64_pca_logo} alt='' width='225' height='85' />
    </div>
  </div>
`;

// disclaimer
// ----------
export const disclaimer = `
  <div class='disclaimer'>
    <p>This resource should not be considered legal advice and is not an Advanced Care Plan.  People should always consult healthcare professionals for advice about their specific circumstances, including the legislative requirements in their State or Territory.</p>
  </div>
`;

// styles
// ------
export const style = `
  html, body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .header-description p {
    font-size: 0.875rem;
    color: ${Colors.Navy};
    margin-bottom: 1rem;
  }
  .header-title {
    margin-right: 1rem;
  }
  .header-title h1 {
    font-size: 2rem;
    color: ${Colors.Navy};
    margin-bottom: 0.125rem;
  }
  .header-logo img {
    width: 120px;
    height: 90px;
    display: block;
    margin: 0;
  }
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  .details-name, .details-date {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .details-name {
    width: 50%;
  }
  .details-date {
    width: 20%;
  }
  .details-name p, .details-date p {
    margin: 0;
    color: ${Colors.Navy};
  }
  .details-name span, .details-date span {
    display: block;
    flex-grow: 1;
    border-bottom: solid 1px ${Colors.Navy};
  }
  .activityTitle {
    color: ${Colors.red};
    margin-bottom: 8px;
  }
  .activityPrecomment {
    margin-bottom: 16px;
  }
  .question {
    color: ${Colors.Navy};
    margin-bottom: 8px;
  }
  .cardGameTitle {
    margin-bottom: 8px;
    color: ${Colors.Red};
  }
  .cardGameDescription {
    margin-bottom: 16px;
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 1rem;
    padding-top: 1rem;
    border-top: solid 1px ${Colors.Navy};
  }
  .footer .logo-rfds img {
    margin-right: 2rem;
  }
  .disclaimer {
    display: block;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: solid 1px ${Colors.Navy};
  }
  .disclaimer p {
    font-size: 0.875rem;
    font-style: italic;
    margin-bottom: 0;
  }
`;
