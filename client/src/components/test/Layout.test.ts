import { expect, test } from 'vitest';
import Header from '../Header.tsx';

test('comprobar renderizado de rutas', () => {
  // Simula diferentes ubicaciones
  const locations = [
    { pathname: '/' },
    { pathname: '/dashboard' },
    { pathname: '/otra-ruta' }
  ];
  // Función para determinar el valor de headerDisplay basado en la ubicación
  function determineHeaderDisplay(pathname: string): string {
    if (pathname === '/') {
      return 'hidden';
    } else if (pathname === '/dashboard') {
      return 'block';
    } else {
      return 'valor-predeterminado';
    }
  }

  // Verifica el comportamiento del componente Header para cada ubicación
  locations.forEach(location => {
    const headerDisplay = determineHeaderDisplay(location.pathname);
    const header = Header({ headerDisplay });

    // Verifica que el componente Header se renderice correctamente
    expect(header).toMatchSnapshot();
  });
});

