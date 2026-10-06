# kshivam07 API Documentation

## Authentication Endpoints

### 1. User Registration
`POST /api/auth/register`
- **Description**: Creates a new user account.
- **Auth Required**: No
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "user@example.com",
    "password": "strongpassword123"
  }
  ```
- **Success Response (200)**:
  ```json
  {
    "success": true,
    "data": {
      "user": {
        "id": "cuid...",
        "name": "John Doe",
        "email": "user@example.com"
      }
    }
  }
  ```
- **Error Response (400 - USER_EXISTS)**:
  ```json
  {
    "success": false,
    "error": {
      "code": "USER_EXISTS",
      "message": "User with this email already exists."
    }
  }
  ```

### 2. Forgot Password
`POST /api/auth/forgot-password`
- **Description**: Generates a password reset token and sends an email.
- **Auth Required**: No
- **Request Body**:
  ```json
  {
    "email": "user@example.com"
  }
  ```
- **Success Response (200)**:
  ```json
  {
    "success": true
  }
  ```

### 3. Reset Password
`POST /api/auth/reset-password`
- **Description**: Resets a user's password using a valid reset token.
- **Auth Required**: No
- **Request Body**:
  ```json
  {
    "token": "hex_string...",
    "password": "newstrongpassword123"
  }
  ```
- **Success Response (200)**:
  ```json
  {
    "success": true
  }
  ```

## User Profile Endpoints

### 4. Update Profile
`PUT /api/profile`
- **Description**: Updates the authenticated user's profile information.
- **Auth Required**: Yes
- **Request Body**:
  ```json
  {
    "name": "Jane Doe"
  }
  ```
- **Success Response (200)**:
  ```json
  {
    "success": true,
    "data": {
      "user": {
        "id": "cuid...",
        "name": "Jane Doe",
        "email": "user@example.com"
      }
    }
  }
  ```
- **Error Response (401 - UNAUTHORIZED)**:
  ```json
  {
    "success": false,
    "error": {
      "code": "UNAUTHORIZED",
      "message": "Not authenticated"
    }
  }
  ```
