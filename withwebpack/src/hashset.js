import Hashmap from "./script.js";

export default class Hashset extends Hashmap{
    constructor(load_factor, capacity){
        super();
        this.load_factor = load_factor;
        this.capacity = capacity;
        this.buckets = [];

    }

    set(key){
        let hashcode = super.hashKey(key);
        let pair = {};
        pair.hashcode = hashcode;
        pair.key = key;
        this.buckets.push(pair);
        return (this.buckets);
    }

    values(){
        return ("Hash set only contains Keys");
    }

    entries(){
        let buckets = this.buckets;
        let entry_a = [];
        for(let bucket of buckets){
            let key = bucket.key;
            let entry_b = [];
            entry_b.push(key);
            entry_a.push(entry_b);
        }
        return entry_a;
    }         
}