class Header {
  constructor() {
    this.headerElement = this.createHeader();
  }

  createHeader() {
    const header = document.createElement('header');
    header.style.backgroundColor = '#8BC34A';
    header.style.color = 'white';
    header.style.padding = '1em 0';
    header.style.textAlign = 'center';
    
    const title = document.createElement('h1');
    title.textContent = 'StudyFlow LMS';

    header.appendChild(title);
    return header;
  }

  render(parentElement) {
    parentElement.appendChild(this.headerElement);
  }
}

// Export the Header component
export default Header;
