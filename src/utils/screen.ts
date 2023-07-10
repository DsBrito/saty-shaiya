import { useEffect, useState } from 'react';

export function useWindowSize() {
  // Criamos um estado para armazenar a altura e largura da tela
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  // Esta função é chamada sempre que o tamanho da janela é alterado
  function handleResize() {
    // Atualizamos o estado com as novas dimensões da janela
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  // Usamos o hook useEffect para adicionar um ouvinte de evento de redimensionamento da janela
  useEffect(() => {
    // Chamamos a função handleResize para definir o tamanho da janela no primeiro carregamento
    if (typeof window !== 'undefined') {
      handleResize();
    }

    window.addEventListener('resize', handleResize);

    // Removendo o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Observe que passamos um array vazio como segundo argumento para garantir que o ouvinte seja adicionado apenas uma vez

  // Retornamos o tamanho da janela como objeto
  return windowSize;
}