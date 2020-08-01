import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  numColumns,
  placeholder,
  width,
  PickerItemComponent,
  ...otherProps
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <React.Fragment>
      <AppPicker
        items={items}
        numColumns={numColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}

export default AppFormPicker;
