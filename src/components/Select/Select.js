

const Select = ( {set, options} ) => {

  const handleSelect = (e) => {
    set(e.target.value)
  }

  return (
    <div>
      <select onChange={handleSelect}>
        {
          options.map ((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)
        }
      </select>
    </div>
  )
}

export default Select