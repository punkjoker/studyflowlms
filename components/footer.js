class Footer {
  constructor() {
    this.footerElement = this.createFooter();
  }

  createFooter() {
    const footer = document.createElement('footer');
    footer.style.backgroundColor = '#333';
    footer.style.color = 'white';
    footer.style.textAlign = 'center';
    footer.style.padding = '1em 0';
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.width = '100%';

    const text = document.createElement('p');
    text.textContent = '© 2024 StudyFlow LMS. All rights reserved.';

    footer.appendChild(text);
    return footer;
  }

  render(parentElement) {
    parentElement.appendChild(this.footerElement);
  }
}

// Export the Footer component
export default Footer;
