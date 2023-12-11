
import Countdown from 'react-countdown';

const CountdownComponent = () => {
  // Define la fecha y hora de finalización de la cuenta regresiva
  const endDate = new Date('2023-12-31T00:00:00');

  // Renderiza el componente Countdown
  return (
    <Countdown date={endDate} onComplete={() => console.log('Countdown complete')}>
      {/* Renderiza lo que quieras mostrar durante la cuenta regresiva */}
      <div>
        
        <span>Días</span>
        <span>Horas</span>
        <span>Minutos</span>
        <span>Segundos</span>
      </div>
    </Countdown>
  );
};

export default CountdownComponent;
