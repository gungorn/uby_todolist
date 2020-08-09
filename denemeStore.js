import { decorate, action, observable } from 'mobx';


class denemeStore {
    inputValue = '';

    setInputValue = d => this.inputValue = d;
}

decorate(
    denemeStore,
    {
        inputValue: observable,
        setInputValue: action,
    }
);

export default new denemeStore();