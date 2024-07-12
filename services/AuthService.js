class AuthService {
  constructor() {
    this.apiUrl = 'https://example.com/api'; // Replace with your actual API URL
  }

  // Helper function to handle API requests
  async request(endpoint, method, data) {
    const response = await fetch(`${this.apiUrl}${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }

  // Login method
  async login(username, password) {
    const data = { username, password };
    const response = await this.request('/login', 'POST', data);
    this.saveToken(response.token);
    return response;
  }

  // Signup method
  async signup(username, password, role) {
    const data = { username, password, role };
    const response = await this.request('/signup', 'POST', data);
    this.saveToken(response.token);
    return response;
  }

  // Logout method
  logout() {
    this.removeToken();
  }

  // Save token to localStorage
  saveToken(token) {
    localStorage.setItem('authToken', token);
  }

  // Remove token from localStorage
  removeToken() {
    localStorage.removeItem('authToken');
  }

  // Get token from localStorage
  getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.getToken();
  }
}

export default new AuthService();
