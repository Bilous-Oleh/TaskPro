import React, { useState } from 'react';
import css from './IconPicker.module.css';
import iconDefs from '../../../icons/sprite.svg';

const IconPicker = ({ onSelectedIconChange }) => {
  const icons = [
    { id: 1, name: 'icon-board-icon-1' },
    { id: 2, name: 'icon-board-icon-2' },
    { id: 3, name: 'icon-board-icon-3' },
    { id: 4, name: 'icon-board-icon-4' },
    { id: 5, name: 'icon-board-icon-5' },
    { id: 6, name: 'icon-board-icon-6' },
    { id: 7, name: 'icon-board-icon-7' },
    { id: 8, name: 'icon-board-icon-8' },
  ];

  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIcon = icon => {
    setSelectedIcon(icon);
    onSelectedIconChange(icon);
  };

  return (
    <div className={css.iconsPickerBlock}>
      <span className={css.iconsTitle}>Icons</span>
      <div className={css.iconsField}>
        {icons.map(icon => (
          <button
            type="button"
            key={icon.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              stroke: selectedIcon === icon.name ? '#161616' : '#16161680',
            }}
            onClick={() => handleIcon(icon.name)}
          >
            <svg width="18" height="18">
              <use xlinkHref={`${iconDefs}#${icon.name}`} />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IconPicker;