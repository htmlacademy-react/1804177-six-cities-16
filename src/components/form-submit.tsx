import {Fragment, useState} from 'react';

function FormSubmit(): JSX.Element {
  const [formDate, setFormDate] = useState({
    rating: '',
    review: '',
  });

  const NUMBER_STARTS = [1, 2, 3, 4, 5];

  const handleFieldChange = (evt: { target: { name: string; value: string } }): void => {
    const {name, value} = evt.target;
    setFormDate({...formDate, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {NUMBER_STARTS.map((num) => (
          <Fragment key={num}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              id="5-stars"
              type="radio"
              onChange={handleFieldChange}
              value={num}
            />
            <label
              htmlFor="5-stars"
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </Fragment>
        )
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
        value={formDate.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>
          and describe your stay with
          at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormSubmit;
