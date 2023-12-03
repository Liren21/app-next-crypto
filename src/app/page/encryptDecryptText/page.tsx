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
            encryptStore.setOutput(CryptoJS.Rabbit.encrypt(encryptStore.text, encryptStore.key))
        } else {
            encryptStore.setOutput('')
        }
    }, [encryptStore.text, encryptStore.key])
    return (
        <>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">{!state?"Зашифровать":"Расшифровать"}</div>
                <ul tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => setState(true)}><a>Зашифровать</a></li>
                    <li onClick={() => setState(false)}><a>Расшифровать</a></li>
                </ul>
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
