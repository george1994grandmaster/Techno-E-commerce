import  { FC } from "react";
import FormOptional from "../components/forms/formOptional";

const Contact: FC = () => {
  return (
    <>
      <div className="py-10" style={{backgroundColor: "rgb(242, 242, 242)"}}>
        <div className="container">
          <FormOptional formType={"contactForm"}/>
        </div>
      </div>
    </>
  )
}

export default Contact;