import React from "react";
import * as A from "antd";
import Proptypes from "prop-types";
const BaseSelectCom = ({
  options,
  setValue,
  value,
  label,
  specifyLabel,
  specifyValue,
  styles,
}) => {
  const option = React.useMemo(() => {
    if (specifyLabel && specifyValue) {
      return options.map((d) => ({
        label: d[specifyLabel],
        value: d[specifyValue],
      }));
    }
    return options;
  }, [options, specifyLabel, specifyValue]);
  const onSelected = (val) => {
    setValue(val);
  };
  return (
    <div>
      {label && <span>{label}：</span>}
      <A.Select style={styles} value={value} onChange={onSelected}>
        {option.map((d) => {
          return (
            <A.Select.Option key={d.value} value={d.value}>
              {d.label}
            </A.Select.Option>
          );
        })}
      </A.Select>
    </div>
  );
};

export default BaseSelectCom;

BaseSelectCom.propTypes = {
  options: Proptypes.array.isRequired,
  setValue: Proptypes.func.isRequired,
  value: Proptypes.string.isRequired,
  label: Proptypes.string,
  specifyLabel: Proptypes.string,
  specifyValue: Proptypes.string,
  styles: Proptypes.object,
};

BaseSelectCom.defaultProps = {
  options: [{ label: "Test", value: 1 }],
  specifyValue: "id",
  specifyLabel: "name",
};
