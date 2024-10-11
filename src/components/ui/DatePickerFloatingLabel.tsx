import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';  // Fichier CSS pour les styles personnalisés

// Définition de l'interface pour les props
interface DatePickerFloatingLabelProps {
    id:string;
    label: string; // Label doit être une chaîne de caractères
    initialDate?: Date | null; // Date initiale, optionnelle
    onDateChange?: (date: Date | null) => void; // Callback pour la date sélectionnée
  }
  
  const DatePickerFloatingLabel: React.FC<DatePickerFloatingLabelProps> = ({ id, label, initialDate, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate || null);
  const [isFocused, setIsFocused] = useState(false);

 // Met à jour la date locale et la renvoie via onDateChange
 const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date); // Appelle la fonction de changement avec la nouvelle date
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!selectedDate) setIsFocused(false);
  };

  return (
    <div className="form-floating mb-3 position-relative">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        className="form-control date-picker-input" // Utilisation de 'form-control' sans sm pour correspondre aux autres inputs
        id={id}
        onFocus={handleFocus}
        onBlur={handleBlur}
        wrapperClassName="date-picker-wrapper"
      />
      <label
        htmlFor={id}
        className={`floating-label ${isFocused || selectedDate ? 'filled' : ''}`}
      >
        {label}
      </label>
    </div>
  );
};

export default DatePickerFloatingLabel;
