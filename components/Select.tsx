import ReactSelect, { Props } from 'react-select'

export default function Select(props: Props) {
  return (
    <ReactSelect
      className="custom-react-select-container"
      classNamePrefix="custom-react-select"
      {...props}
    />
  )
}
