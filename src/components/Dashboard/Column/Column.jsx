import css from './Column.module.css';
import sprite from '../../../icons/sprite.svg';

export default function Column(column) {
  return (
    <div className={css.container__column}>
      <p className={css.title__column}>{column.title}</p>
      <div className={css.buttons__wrapp}>
        <button className={css.button__column} type="button" title="pencil">
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-edit`} className={css.svgIcon} />
          </svg>
        </button>
        <button className={css.button__column} type="button" title="trash">
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-trash`} className={css.svgIcon} />
          </svg>
        </button>
      </div>
    </div>
  );
}
