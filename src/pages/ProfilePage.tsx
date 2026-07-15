import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ENV } from '../api/environment';
import { MyPurchasesPage } from './MyPurchasesPage';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const response = await fetch(`${ENV.VITE_API_URL}/v1/auth/me`);

        // Si la respuesta es 200 OK
        if (response.status === 200) {
          setLoading(false);
        } else {
          // Si responde cualquier otra cosa (401, 403, 500, etc.)
          navigate('/login');
        }
      } catch (error) {
        console.error("Error en la autenticación:", error);
        navigate('/login');
      }
    };

    checkAccess();
  }, [navigate]);

  // Mientras se valida el token/acceso, mostramos una pantalla de carga
  if (loading) {
    return <p>Cargando perfil...</p>;
  }

  // Si todo salió bien (status 200), renderiza el contenido normal
  return (
    <MyPurchasesPage />
  );
};