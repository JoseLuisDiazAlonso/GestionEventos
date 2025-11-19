/* eslint-disable prettier/prettier */
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    navigate('/dashboard');
  };
};
