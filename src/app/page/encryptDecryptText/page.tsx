"use client"
import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import encryptStore from "@/app/lib/store/encrypt-store";
import CryptoJS from "crypto-js";
import LabelTextarea from "@/app/UI/LabelTextarea/LabelTextarea";
import LabelForm from "@/app/UI/LabelForm/LabelForm";


function Encryption() {
    useEffect(() => {

        if (encryptStore.text.length !== 0 && encryptStore.key.length !== 0) {
            encryptStore.setOutput(CryptoJS.Rabbit.encrypt(encryptStore.text, encryptStore.key))
        } else {
            encryptStore.setOutput('')
        }
    }, [encryptStore.text, encryptStore.key])
    return (
        <>
            <div className='flex'>
                <LabelForm label={'Текст'} value={encryptStore.text}
                           onChange={(event) => encryptStore.setText(event.target.value)}/>
                <LabelForm label={'Ключ'} value={encryptStore.key}
                           onChange={(event) => encryptStore.setKey(event.target.value)}/>

            </div>

            <LabelTextarea label={"Сообщение"} defaultValue={encryptStore.output} placeholder={'Зашифрованное сообщение'}/>
        </>
    );
}


export default observer(Encryption);
