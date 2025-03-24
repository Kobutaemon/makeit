import './SectionTitle.css'

function SectionTitle(props: { title: string }) {
  return (
    <div className='section-title'>
      <h1>
        <span>&lt; </span>
        {props.title}
        <span> /&gt;</span>
      </h1>
    </div>

  )
}

export default SectionTitle