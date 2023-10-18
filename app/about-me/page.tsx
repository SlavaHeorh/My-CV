'use client'

import React, {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import {IForms} from "@/interfaces/react-hook-form";


export default function AboutMe() {

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [tName, setTName] = useState("")
    const [eName, setEName] = useState("")

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IForms>()
    const onSubmit: SubmitHandler<IForms> = (data: IForms) => {
        setFName(data.firstName)
        setLName(data.lastName)
        setEName(data.email)
        setTName(data.aboutCompany)
    }

    return (
        <section className="left-side-cv">
            <form
                className="react-hook-form"
                onSubmit={handleSubmit(onSubmit)}>
                <input

                    className="react-hook-form__input"
                    placeholder="Firstname"
                    {...register("firstName", { required: true })} />
                {errors.firstName && <span>This field is required</span>}
                <input

                    className="react-hook-form__input"
                    placeholder="Lastname"
                    {...register("lastName", { required: true })} />
                {errors.lastName && <span>This field is required</span>}
                <input
                    type="email"

                    className="react-hook-form__input"
                    placeholder="E-mail"
                    {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
                <textarea
                    className="react-hook-form__textarea"
                    placeholder="About your Company"
                    {...register("aboutCompany", { required: true})}/>
                {errors.aboutCompany && <span>This field is required</span>}
                <button
                    className="react-hook-form__button"
                    type="submit">
                    Send
                </button>
            </form>
            <div className="form-data">
                <div className="form-data__wrapper">
                    <p className="form-data__text">Your Firstname:</p>
                    <p className="form-data__data">{fName}</p>
                </div>
                <div className="form-data__wrapper">
                    <p className="form-data__text">Your Lastname:</p>
                    <p className="form-data__data">{lName}</p>
                </div>
                <div className="form-data__wrapper">
                    <p className="form-data__text">Your E-mail:</p>
                    <p className="form-data__data">{eName}</p>
                </div>
                <div className="form-data__wrapper">
                    <p className="form-data__text">About Company:</p>
                    <p className="form-data__data">{tName}</p>
                </div>
            </div>
        </section>
    )
}