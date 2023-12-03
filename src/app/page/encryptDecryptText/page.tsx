"use client"
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import encryptStore from "@/app/lib/store/encrypt-store";
import CryptoJS from "crypto-js";
import LabelTextarea from "@/app/UI/LabelTextarea/LabelTextarea";
import LabelForm from "@/app/UI/LabelForm/LabelForm";


function EncryptDecryptText() {
    const [state, setState] = useState(true)
    useEffect(() => {

        if (encryptStore.text.length !== 0 && encryptStore.key.length !== 0) {
            state ?
                encryptStore.setOutput(CryptoJS.Rabbit.encrypt(encryptStore.text, encryptStore.key))
                :
                encryptStore.setOutput(CryptoJS.Rabbit.decrypt(encryptStore.text, encryptStore.key))
        } else {
            encryptStore.setOutput('')
        }
    }, [encryptStore.text, encryptStore.key])
    return (
        <>
            <div role="tablist" className="tabs tabs-boxed mb-8">
                <a onClick={() => setState(true)} role="tab" className={`tab ${state && "tab-active"}`}>
                    <svg style={{marginRight:'10px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                    </svg>
                    Зашифровать</a>
                <a onClick={() => setState(false)} role="tab" className={`tab ${!state && "tab-active"}`}>
                    <svg style={{marginRight:'10px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                    </svg>
                    Расшифровать</a>
            </div>

            {
                state ?
                    <>
                        <div className='flex'>
                            <LabelForm label={'Текст'} value={encryptStore.text}
                                       onChange={(event) => encryptStore.setText(event.target.value)}/>
                            <LabelForm label={'Ключ'} value={encryptStore.key}
                                       onChange={(event) => encryptStore.setKey(event.target.value)}/>

                        </div>

                        <LabelTextarea label={"Сообщение"} defaultValue={encryptStore.output}
                                       placeholder={'Зашифрованное сообщение'}/>
                    </>
                    :
                    <>
                        <div className='flex'>
                            <LabelForm label={'Текст'} value={encryptStore.text}
                                       onChange={(event) => encryptStore.setText(event.target.value)}/>
                            <LabelForm label={'Ключ'} value={encryptStore.key}
                                       onChange={(event) => encryptStore.setKey(event.target.value)}/>

                        </div>

                        <LabelTextarea label={"Сообщение"} defaultValue={encryptStore.output}
                                       placeholder={'Расшифрованное сообщение'}/>
                    </>
            }
        </>
    )
        ;
}


export default observer(EncryptDecryptText);
