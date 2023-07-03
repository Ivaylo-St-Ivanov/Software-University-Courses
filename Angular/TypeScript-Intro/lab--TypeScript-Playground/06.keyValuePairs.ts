class KeyValuePairs<T, U> {
    private key: T; 
    private value: U;

    setKeyValue(key: T, value: U): void {
        this.key = key;
        this.value = value;
    }

    display(): void {
        console.log(`key = ${this.key}, value = ${this.value}`);
    }
}

let kvp = new KeyValuePairs<number, string>();
kvp.setKeyValue(1, 'Steve');
kvp.display();