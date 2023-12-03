import {makeAutoObservable} from 'mobx'


interface ISearchStateStore {
    encryptionValue:string
    decryption:string
    outputValue:string
}

class EncryptionStateStore implements ISearchStateStore {
    encryptionValue =''
    decryption =''
    outputValue =''

    constructor() {
        makeAutoObservable(this)
    }

    setEncryptionValue(val: string) {
        this.encryptionValue = val
    }
    setDecryption(val: string) {
        this.decryption = val
    }
    setOutputValue(val: any) {
        this.outputValue = val
    }

}

export default new EncryptionStateStore()
