// filepath: /Users/igorgoncalves/Documents/JURRASICDEV/my-react-app/src/components/PasswordChecker.jsx
import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';
import '../styles/PasswordChecker.css';

function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handlePasswordChange = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
    const result = zxcvbn(passwordInput);
    setStrength(result.score);
    setFeedback(result.feedback.suggestions.join(' '));
  };

  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];

  return (
    <div className="password-strength-checker">
      <h1>Password Strength Checker</h1>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      <div className="strength-indicator">
        <p>Password Strength: {strengthLabels[strength]}</p>
        <p>{feedback}</p>
      </div>
    </div>
  );
}

export default PasswordChecker;