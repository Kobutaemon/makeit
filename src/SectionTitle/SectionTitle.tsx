import './SectionTitle.css'

function SectionTitle(props: { text: string }) {
  return (
    <div>
      <h1>
        <span>&lt; </span>
        {props.text}
        <span> /&gt;</span>
      </h1>
    </div>
  )
}

export default SectionTitle