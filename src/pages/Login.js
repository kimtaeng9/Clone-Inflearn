import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 시도:', { email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Inflearn 로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-bold hover:bg-green-700 transition duration-200"
          >
            로그인
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/forgot-password" className="text-sm text-green-600 hover:underline">비밀번호 찾기</a> | 
          <a href="/signup" className="text-sm text-green-600 hover:underline ml-2">회원가입</a>
        </div>
        <div className="mt-6 space-y-2">
          <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-md font-bold hover:bg-gray-200 transition duration-200 flex items-center justify-center">
            <img src="/images/google.png" alt="Google Logo" className="w-8 h-8 inline mr-2" />
            구글로 로그인
          </button>
          <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-md font-bold hover:bg-gray-200 transition duration-200 flex items-center justify-center">
            <img src="/images/github.png" alt="Github Logo" className="w-8 h-8 inline mr-2" />
            Github로 로그인
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
