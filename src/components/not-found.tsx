import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="center-container">
      <div className="error-container">
        <h1 className="error-title">Ошибка 404 – Страница не найдена</h1>
        <p className="error-message">
          Кажется, вы потерялись! Запрашиваемая страница не найдена.
        </p>
        <p className="error-message">
          Вернитесь на
          <Link to="/" className="return-link">
            <span>главную страницу</span>
          </Link>
        </p>
      </div>
    </div>

  );
}

export default NotFound;
