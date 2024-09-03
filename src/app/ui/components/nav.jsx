import DownIcon from "../icons/downicon"

export default function Nav() {

  return (
    <nav>
      <a href="#main" className={"pestana-holder"}>
        <div className="message-button">
          <p style={{fontWeight: 'bold'}}>Scroll down or click here to see more 
            <br /> 
            about <strong>me</strong> and my <strong>projects</strong>.
          </p>
        </div>
        <DownIcon></DownIcon>
      </a>
    </nav>

  )
}