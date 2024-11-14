function CommonInput({ label,name,id,value,type,placeholder,onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={id}
        type={type || 'text'}
        value={value}
        placeholder={placeholder || 'Enter value here'}
        onChange={onChange}
      />
    </div>
  );
}
export default CommonInput;
