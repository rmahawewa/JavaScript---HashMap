export default class Hashmap{

    constructor(load_factor, capacity){
        this.load_factor = load_factor;
        this.capacity = capacity;
        this.buckets = [];

    }

    hashKey(key){
        let hashcode = 0;
        const prime_number = 31;
        for(let i = 0; i < key.length; i++){
            hashcode = prime_number + hashcode + key.charCodeAt(i);
            hashcode = hashcode % 16;
        }
        return hashcode;
    }

    set(key, value){
        let set_values = [];
        let hashcode = this.hashKey(key);  
        let buckets = this.buckets;
        let numb = 0;
        if(buckets.length > 0){
            console.log(buckets.length);
            for(let bucket of buckets){
                if(bucket.hashcode == hashcode){
                    if((bucket.key == key && bucket.value == value)){
                        let bucket_size = bucket.set_values.length;
                        let buckets_size = buckets.length;
                        let load_factor_a = bucket_size/buckets_size;
                        let capacity_a = bucket_size;

                        if(load_factor_a < this.load_factor && load_factor_a < 1 && load_factor_a > 0.75){
                            let busket = {};
                            busket.hashcode = hashcode;
                            busket.key = key;
                            set_values.push(value);
                            busket.set_values = set_values;
                            this.buckets.push(busket);
                            numb = 1;
                            return {hashcode, value, numb};
                        }else{
                            let buckets = this.buckets;
                            numb = 2;
                            return {hashcode, value, numb};
                        }
                    }else{                            
                        let busket = {};
                        busket.hashcode = hashcode;
                        busket.key = key;
                        set_values.push(value);
                        busket.set_values = set_values;
                        this.buckets.push(busket);
                        numb = 3;
                        return {hashcode, key, value, numb};
                    }
                }else{
                        let busket = {};
                        busket.hashcode = hashcode;
                        busket.key = key;
                        let set_values = [];
                        set_values.push(value);
                        busket.set_values = set_values;
                        this.buckets.push(busket);
                        numb = 4;
                        return {hashcode, key, value, numb};
                }
            }
        }else{
                        let busket = {};
                        busket.hashcode = hashcode;
                        busket.key = key;
                        let set_values = [];
                        set_values.push(value);
                        busket.set_values = set_values;
                        this.buckets.push(busket);
                        numb = 5;
                        return {hashcode, key, value, numb};
        }
        numb = 6;          
        return {hashcode, key, set_values, numb};                
    }

    get(key){
        let index = key;
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
            return;
        }

        let hashcode = this.hashKey(key);
        // let values = this.set(key,null).set_values[0];
        let values = this.set(key,null);
        return values;
    }

    has(key){
        let index = key;
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
            return;
        }

        let hashcode = this.hashKey(key);
        // let values = this.set(key,null).set_values;
        let values = this.set(key,null);
        if(values.length >= 1){
            return true;
        }else{
            return false;
        }
    }

    remove(key){
        let hashcode = this.hashKey(key);
        let buckets = this.buckets;
        let count = 0;
        let state = false;
        for (let bucket of buckets){
            if(bucket.hashcode == hashcode){
                state = true;
                break;
            }
            count = count + 1;
        }
        if(state){
            buckets.splice(count, 1);
        }
        this.buckets = buckets;
        return state;
    }

    length(){
        let buckets = this.buckets;
        return buckets.length;
    }

    clear(){
        this.buckets = [];
    }

    keys(){
        let buckets = this.buckets;
        let keys = [];
        for(let bucket of buckets){
            if(!keys.includes(bucket.key)){
                keys.push(bucket.key);
            }
        }
        return keys;
    }

    values(){
        let buckets = this.buckets;
        let values = [];
        for(let bucket of buckets){
            values = values.concat(bucket.set_values);
        }
        return values;
    }

    entries(){
        let buckets = this.buckets;
        let entry_a = [];
        for(let bucket of buckets){
            let key = bucket.key;
            let values = bucket.set_values;
            let entry_b = [];
            for(let value of values){
                let enrty_c = [key,value];
                entry_b.push(enrty_c);
            }
            entry_a.push(entry_b);
        }
        return entry_a;
    }            
}