

const EventComponent = () => {
  const handleClick = (event) => {
    console.log('Click event:', event);
  };

  const handleChange = (event) => {
    console.log('Change event:', event);
  };

  const handleMouseOver = (event) => {
    console.log('MouseOver event:', event);
  };

  const handleMouseOut = (event) => {
    console.log('MouseOut event:', event);
  };

  const handleFocus = (event) => {
    console.log('Focus event:', event);
  };

  const handleBlur = (event) => {
    console.log('Blur event:', event);
  };

  const handleKeyDown = (event) => {
    console.log('KeyDown event:', event);
  };

  const handleKeyUp = (event) => {
    console.log('KeyUp event:', event);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    console.log('ContextMenu event:', event);
  };

  const handleDoubleClick = (event) => {
    console.log('DoubleClick event:', event);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <input type="text" onChange={handleChange} />
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Hover over me
      </div>
      <input onFocus={handleFocus} onBlur={handleBlur} />
      <textarea onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
      <button onContextMenu={handleContextMenu}>Right-click me</button>
      <button onDoubleClick={handleDoubleClick}>Double click me</button>
    </div>
  );
};
// чуток коряво из за того что я смотрел события из инета и не везде понял как изменать их, сейчас работает хотя бы без ошибок :/
export default EventComponent;