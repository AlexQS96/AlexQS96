import Head from "next/head"
import Image from "next/image";
import { useContext, useState, useRef } from "react"
import emailjs from '@emailjs/browser';
import { PorfolioContext } from "../context/AppContext"
import { useForm } from 'react-hook-form';
import { WarningLogo } from "../components/PageIcons";

export default function Contact() {

  const sendBtn = useRef()

  const {pageLanguage} = useContext(PorfolioContext)

  const [messageStatus, setMessageStatus] = useState({
    type: 0,
    msg: pageLanguage.formSent
  })

  const pkey = process.env.NEXT_PUBLIC_EMAILJS_KEY
  const pservice = "service_y1iqs27"
  const ptemplate = "template_06w1ftd"

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    sendBtn.current.setAttribute("disabled", "true");

    emailjs.send(pservice, ptemplate, data, pkey)
      .then((result) => {
          if (result.status === 200) {
            setMessageStatus({
              type : 1,
              msg: pageLanguage.formMsgSent
            })

            setTimeout(() => {
              reset({
                cmsg : ''
              })

              setMessageStatus({
                type: 0,
                msg: pageLanguage.formSent
              })

              sendBtn.current.removeAttribute("disabled");
              
            }, 4000);
          }
      }, (error) => {
        setMessageStatus({
          type : 2,
          msg: pageLanguage.formMsgError
        })

        setTimeout(() => {

          setMessageStatus({
            type: 0,
            msg: pageLanguage.formSent
          })

          sendBtn.current.removeAttribute("disabled");
        }, 4000);
      });
  };

  return (
    <>
      <Head>
        <title>{pageLanguage.contactTitle}</title>
      </Head>
      <div className="contact">

        <section>
          <section data-type-email>
            <h4>EMAIL</h4>
            <a href="mailto:alexander.mamani.dev@gmail.com">alexander.mamani.dev@gmail.com</a>  
          </section>

          <form onSubmit={handleSubmit(onSubmit)}>
              <h4>{pageLanguage.ctaForm}</h4>
              <label>{pageLanguage.formName}</label>
              <input
                className={errors.cname ? 'inputNeeded' : undefined}
                type='text'
                name='cname'
                {...register("cname", {required: true, minLength: 1})}
              />
              {errors.cname && <p role="alert"><WarningLogo/> {pageLanguage.formNameValidate}</p>}

              <label>{pageLanguage.formEmail}</label>
              <input
                className={errors.cmail ? 'inputNeeded' : undefined}
                type='text' 
                name='cmail'
                {...register("cmail", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
              />
              {errors.cmail && <p role="alert"><WarningLogo/> {pageLanguage.formEmailValidate}</p>}

              <label>{pageLanguage.formMsg}</label>
              <textarea
                className={errors.cmsg ? 'inputNeeded' : undefined}
                name='cmsg'
                {...register("cmsg", {required: true, minLength: 1})}
              />
              {errors.cmsg && <p role="alert"><WarningLogo/> {pageLanguage.formMsgValidate}</p>}

              <button
                ref={sendBtn}
                type='submit'
                className={"button_1 "+[messageStatus.type === 1? ' msgSent' : messageStatus.type === 2 ? 'msgError' : undefined]}
              >{messageStatus.type === 1 || messageStatus.type === 2 ? messageStatus.msg : pageLanguage.formSent}</button>
          </form>
        </section>

        <section>
        <Image style={{width: 'auto', height: 'auto'}} src='/img/decoration/laptop.png' alt='laptop' width={600} height={300} priority={true} quality={100}/>
        </section>
        
      </div>
    </>
  )
}
