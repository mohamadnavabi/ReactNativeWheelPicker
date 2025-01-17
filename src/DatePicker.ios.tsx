import React, { useState } from "react";
import { View } from "react-native";
import { DatePickerIOS } from '@react-native-picker/picker';

interface Props {
  initDate: Date;
  onDateSelected?: Function;
  disabled?: boolean;
}

const DatePicker: React.FC<Props> = props => {
  const { initDate, onDateSelected, disabled } = props;
  const [date, setDate] = useState(initDate || new Date())
  return (
    <View pointerEvents={disabled ? "none" : "auto"}>
      <DatePickerIOS
        date={date}
        onDateChange={(date) => {
          if (onDateSelected) onDateSelected(date)
          setDate(date)
        }}
        mode={'date'}
        {...props}
      />
    </View>
  );
};

export default DatePicker;
